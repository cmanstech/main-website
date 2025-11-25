<script setup>
    defineProps({
    label: {
        type: String,
        required: true
    }
    });
</script>


<template>
  <div
    class="group flex items-center justify-between cursor-pointer select-none py-3"
  >
    <!-- projectName -->
    <span class="text-(--primary-darkbrown) text-xl font-display-en">
      {{ label }}
    </span>

    <!-- arrow-->
    <span
      class="opacity-0 transform scale-75 translate-x-2
             group-hover:opacity-100 group-hover:scale-100
             group-hover:translate-x-0 transition-all duration-300
            ">
      <div
        class="w-12 h-12 rounded-full border border-(--primary-darkbrown)
               flex items-center justify-center"
      >
        <!-- arrow icon -->
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M7 17L17 7M17 7H9M17 7v8" />
        </svg>
      </div>
    </span>
  </div>
</template>

