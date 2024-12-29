<script setup lang="ts">
import Teeth from "./Teeth.vue"
</script>

<template>
  <div class="absolute">
    <div class="solar-system">
      <div class="icon-orbit" />
      <div class="icon">
        <Teeth class="turn size-[2rem] *:w-3.5 xl:size-[2.5rem]" />
      </div>

      <Teeth
        class="icon second size-[1.5rem] *:w-3 xl:size-[2rem] xl:*:w-3.5"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
* {
  box-sizing: border-box;
  --n: 26; /* control the number of dashes */
  --d: 8deg; /* control the distance between dashes */
  --t: 1px; /* control the thickness of border*/
  --c: linear-gradient(180deg, #1376f893, white);
  --size: 18rem;
  --half-size: calc(var(--size) / 2);

  @media (min-width: theme("screens.xl")) {
    --size: 29rem;
  }
}
.solar-system {
  width: var(--size);
  height: var(--size);
  position: relative;
  aspect-ratio: 1;
}

.icon-orbit {
  z-index: -10;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - var(--half-size));
  left: calc(50% - var(--half-size));
}

.icon {
  position: absolute;
  top: calc(50% - 11px);
  left: calc(50% - var(--half-size) - 10px);
  transform-origin: calc(var(--half-size) + 10px) 8px;
  animation: 20s icon infinite linear;
}

.second {
  animation: 20s second infinite linear;
}
.turn {
  animation: 10s turn infinite linear;
}

.solar-system::after {
  z-index: -10;
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  padding: var(--t);
  background: var(--c);
  mask:
    linear-gradient(#0000 0 0) content-box,
    repeating-conic-gradient(
      from calc(var(--d) / 2),
      #000 0 calc(360deg / var(--n) - var(--d)),
      #0000 0 calc(360deg / var(--n))
    );
  mask-composite: intersect;
}

@keyframes icon {
  from {
    transform: rotate(0);
    opacity: 0.5;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 0.1;
  }
  to {
    opacity: 0.5;
    transform: rotate(360deg);
  }
}
@keyframes second {
  from {
    transform: rotate(130deg);
    opacity: 0.8;
  }
  40% {
    opacity: 0.1;
  }
  90% {
    opacity: 1;
  }
  to {
    opacity: 0.8;
    transform: rotate(490deg);
  }
}
</style>
