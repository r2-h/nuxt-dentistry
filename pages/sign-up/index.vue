<script setup lang="ts">
import { reactive, ref, toRaw } from "vue"
import Container from "~/components/auth/Container.vue"
import Lock from "~/components/icons/Lock.vue"
import User from "~/components/icons/User.vue"
import Button from "~/components/ui/Button.vue"
import Checkbox from "~/components/ui/Checkbox.vue"
import {
  ConfirmSchema,
  getErrors,
  getFieldError,
  type FormFieldErrors,
  type FormFields,
  type FormTouchedFields,
} from "./_components/schema"

definePageMeta({
  layout: "without-footer",
})

const formSubmitted = ref(false)
const formErrors = reactive<FormFieldErrors>({})
const touchedFields = reactive<FormTouchedFields>({})
const formState = reactive({
  username: "",
  password: "",
  confirmPassword: "",
  isAdmin: false,
})

const onSubmit = async () => {
  formSubmitted.value = true
  const { error, data } = ConfirmSchema.safeParse(formState)

  if (error) {
    Object.entries(getErrors(error)).forEach(([key, value]) => {
      formErrors[key as FormFields] = value
    })
    console.log(toRaw(formErrors))
  }
  console.log(toRaw(data))
  const {
    data: response,
    status,
    error: responseError,
  } = await useFetch("/api/sign-up", {
    method: "POST",
    body: { ...data },
  })
}

const onBlur = (property: FormFields) => {
  const message = getFieldError(property, formState[property])
  formErrors[property] = message
  touchedFields[property] = true
}

const isInvalid = (property: FormFields) => {
  if (formSubmitted.value || touchedFields[property]) {
    return !!formErrors[property]
  }
  return undefined // Do not add aria-invalid attribute if not touched
}
</script>

<template>
  <Container
    google-btn-text="Sign up with Google"
    main-image-src="/img/sign-up.jpg"
    submit-btn-text="Sign up"
    title="Create an account"
    text-question="Have account?"
    text-answer="Sign In"
  >
    <form @submit.prevent="onSubmit" novalidate class="flex flex-col">
      <div>
        <div class="relative">
          <User
            :class="`absolute left-5 top-1/2 -translate-y-1/2 ${formState.username ? 'hidden' : 'block'}`"
          />
          <input
            type="text"
            placeholder="Type your name"
            name="username"
            v-model="formState.username"
            @blur="onBlur('username')"
            :aria-invalid="isInvalid('username')"
            required
            :class="`h-[3.75rem] w-full rounded-md border border-gray-borderInput px-5 lg:rounded-lg2 ${formErrors.username && 'border-red-500'} ${formState.username ? 'pl-5' : 'pl-12'}`"
          />
        </div>
        <small v-if="formErrors.username" class="text-red-500">
          {{ formErrors.username }}
        </small>
      </div>
      <div class="my-6">
        <div class="relative">
          <Lock
            :class="`absolute left-5 top-1/2 -translate-y-1/2 ${formState.password ? 'hidden' : 'block'}`"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            v-model="formState.password"
            @blur="onBlur('password')"
            :aria-invalid="isInvalid('password')"
            required
            :class="`h-[3.75rem] w-full rounded-md border border-gray-borderInput pr-5 lg:rounded-lg2 ${formErrors.password && 'border-red-500'} ${formState.password ? 'pl-5' : 'pl-12'}`"
          />
        </div>
        <small v-if="formErrors.password" class="text-red-500"
          >{{ formErrors.password }}
        </small>
      </div>

      <div>
        <div class="relative">
          <Lock
            :class="`absolute left-5 top-1/2 -translate-y-1/2 ${formState.confirmPassword ? 'hidden' : 'block'} `"
          />
          <input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            v-model="formState.confirmPassword"
            @blur="onBlur('confirmPassword')"
            :aria-invalid="isInvalid('confirmPassword')"
            required
            :class="`h-[3.75rem] w-full rounded-md border border-gray-borderInput px-5 lg:rounded-lg2 ${formErrors.confirmPassword && 'border-red-500'} ${formState.confirmPassword ? 'pl-5' : 'pl-12'}`"
          />
        </div>
        <small v-if="formErrors.confirmPassword" class="text-red-500">
          {{ formErrors.confirmPassword }}
        </small>
      </div>
      <Checkbox label="I agree with Terms and Privacy" class="my-7" />
      <Button class="mb-5.5 h-[3.75rem] w-full"> Sign up </Button>
    </form>
  </Container>
</template>
