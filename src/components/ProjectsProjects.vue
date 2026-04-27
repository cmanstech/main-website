
<script setup>
  const introText =
    'From integrations to full-scale platforms, every project we build combines clean architecture, robust engineering, and the craft that defines CMANS Tech.'


  import imgRenny from '/public/img/Renny_mockups.png'
  import imgHS from '/public/img/mockups-2.jpg'
</script>

<template>
  <section class="w-full bg-(--primary-eggwhite) py-14 lg:py-24">
    <div class="mx-[30px] max-w-none lg:mx-auto px-0 lg:px-4 space-y-10">

      <!-- Header -->
      <div class="grid grid-cols-12 gap-6 items-start">
        <div class="col-span-12 lg:col-span-4 flex items-start gap-6">
          <span class="text-[32px] lg:text-[40px] font-(--display-en) text-(--secondary-darkbrown)">
            Projects
          </span>
        </div>

        <div class="col-span-12 lg:col-span-8">
          <p
            class="text-(--secondary-darkbrown) font-(--display-en)
                   leading-snug text-[clamp(18px,2.4vw,24px)]"
          >
            {{ introText }}
          </p>
        </div>
      </div>

      <!-- Image split -->
      <div>
        <div
          class="w-full aspect-16/7 flex overflow-hidden border border-(--secondary-darkbrown)/10"
        >
          <!-- left: Renny -->
          <div class="w-1/2 h-full">
            <img
              :src="imgRenny"
              alt="Renny Corporation"
              class="h-full w-full object-cover object-center"
            />
          </div>

          <!-- right: Hidden Square -->
          <div class="w-1/2 h-full">
            <img
              :src="imgHS"
              alt="Hidden Square"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <!-- captions -->
        <div class="mt-4 flex text-[13px] lg:text-[14px] text-(--secondary-darkbrown)">
          <span class="w-1/2 pr-4 font-(--body-en)">
            Renny Corporation Co.,Ltd.
          </span>
          <span class="w-1/2 pr-4 font-(--body-en)">
            Hidden Square Co.,Ltd.
          </span>
        </div>
      </div>

    </div>
  </section>
</template>