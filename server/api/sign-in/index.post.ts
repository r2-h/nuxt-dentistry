import { compare } from "bcrypt"
import { eq } from "drizzle-orm"
import { db, UserSchema, UserSchemaSelect } from "~/server/db"

type Auth = {
  username: string
  password: string
}

export default defineEventHandler(async (event) => {
  const body: Auth = await readBody(event)

  const findUser: UserSchemaSelect = (
    await db
      .select()
      .from(UserSchema)
      .where(eq(UserSchema.username, body.username))
      .limit(1)
      .execute()
  )[0]

  if (!findUser) {
    return createError({ statusCode: 500, message: "User is not found" })
  }

  const comparePassword = await compare(
    body.password,
    findUser.passwordHash ? findUser.passwordHash : body.password
  )

  if (!comparePassword) {
    throw createError({ statusCode: 500, message: "User is not found" })
  }

  const { passwordHash, ...rest } = findUser

  const session = await setUserSession(event, {
    user: {
      ...rest,
    },
    createdAt: Date.now(),
  })
  return session
})
