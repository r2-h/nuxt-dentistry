<template>
  <div class="bg-black min-h-screen flex flex-col">
    <!-- sidebar -->
    <div
      class="bg-zinc-900 w-[516px] grow flex flex-col justify-center px-[70px]"
    >
      <Logo />
      <h1 class="text-white font-bold text-lg mt-4 mb-2">
        Sign up for a free account
      </h1>
      <p class="text-[#F4F4F5] text-sm">
        Already registered?  <span class="font-bold text-[#FFAC00] underline"
          >Log in</span
        > to your account
      </p>
      <div class="mt-8 mb-7">
        <label for="" class="text-zinc-300 text-sm mb-0.5 block"
          >Email Address
        </label>
        <input
          type="email"
          class="w-full block bg-[#27272A] border-[#3F3F46] border h-[35px] rounded text-white placeholder:text-[#66666B] px-2.5 text-sm"
          placeholder="you@example.com"
        />
      </div>
      <div class="mb-8">
        <label for="" class="text-zinc-300 text-sm mb-0.5 block"
          >Email Address
        </label>
        <input
          type="password"
          class="w-full block bg-[#27272A] border-[#3F3F46] border h-[35px] rounded text-white placeholder:text-[#66666B] px-2.5 text-sm"
          placeholder="******************"
        />
      </div>
      <button
        class="bg-[#FFAC00] w-full rounded-full h-10 font-bold flex items-center justify-center gap-2.5"
      >
        Sign Up
        <RightArrow />
      </button>
    </div>
    <!--  -->
    <!-- note introduction -->

    <!--  -->
  </div>
</template>
