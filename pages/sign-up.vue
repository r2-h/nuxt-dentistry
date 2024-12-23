<script setup lang="ts">
definePageMeta({
  layout: "without-footer",
})

const form = reactive({
  username: "",
  password: "",
  isAdmin: false,
})

const createUser = async () => {
  const { data, status } = await useFetch("/api/sign-up", {
    method: "POST",
    body: { ...form },
  })
}
</script>

<template>
  <AuthContainer
    google-btn-text="Sign up with Google"
    main-image-src="/img/sign-up.jpg"
    submit-btn-text="Sign up"
    title="Create an account"
    text-question="Have account?"
    text-answer="Sign In"
  >
    <pre>
		{{ form }} 
	</pre
    >
    <form @submit.prevent="createUser" class="flex flex-col gap-4">
      <input v-model="form.username" type="text" placeholder="username" />
      <input v-model="form.password" type="password" placeholder="password" />
      <input v-model="form.isAdmin" type="checkbox" />
      <button>Create user</button>
    </form>
  </AuthContainer>
</template>
