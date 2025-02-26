<template>
  <div
    class="mx-auto flex h-full min-h-screen max-w-max flex-col px-5 lg:px-10"
  >
    <Header />
    <main class="flex grow flex-col">
      <slot />
    </main>
  </div>
</template>
