<template>
  <div
    class="-bottom-30 absolute -top-5 flex aspect-square w-full max-w-[23rem] items-center justify-center xl:-right-5 xl:top-0 xl:max-w-[30rem]"
  >
    <div class="box -z-10 aspect-square h-full" />
    <div class="absolute aspect-square w-full max-w-[18.7rem] xl:max-w-[25rem]">
      <div class="box-small -z-10 aspect-square h-full" />
    </div>
  </div>
</template>

<style scoped>
.box {
  --n: 20; /* control the number of dashes */
  --d: 8deg; /* control the distance between dashes */
  --t: 3px; /* control the thickness of border*/

  --c: linear-gradient(
    180deg,
    #1376f893,
    white
  ); /* control the coloration (can be a gradient) */
  position: relative;
  /* set width and height */
}
.box::after {
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

.box-small {
  --n: 28;
  --d: 6deg;
  --t: 1px;

  --c: linear-gradient(180deg, #1376f893, white);
  position: relative;
}
.box-small::after {
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
</style>
