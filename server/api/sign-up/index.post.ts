import { genSalt, hash } from "bcrypt"
import { db, UserSchema, UserSchemaInsert, UserSchemaSelect } from "~/server/db"
import { eq } from "drizzle-orm"

type CreateUser = {
  username: string
  password: string
  isAdmin?: boolean
}

export default defineEventHandler(async (event) => {
  const body: CreateUser = await readBody(event)
  const salt = await genSalt(10)
  const passwordHash = await hash(body.password, salt)

  const candidate = {
    username: body.username,
    passwordHash: passwordHash,
    isAdmin: body.isAdmin,
  }

  const findUser: UserSchemaSelect = (
    await db
      .select()
      .from(UserSchema)
      .where(eq(UserSchema.username, body.username))
      .limit(1)
      .execute()
  )[0]
  if (findUser) {
    throw createError({ statusCode: 500, message: "User already exists" })
  }

  const user = await db.insert(UserSchema).values({ ...candidate })

  const { passwordHash: _, ...rest } = user as UserSchemaInsert

  return rest
})
