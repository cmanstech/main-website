<script setup>
defineProps({
    title: { type: String, default: '' },
    huh: { type: String, default: '' },
    meta: { type: String, default: ''},
    haha: { type: String, default: ''}
})
</script>

<template>
    <article class="rounded-2xl border border-amber-200 bg-white/80 backdrop-blur p-4 md:p-5 shadow-sm hover:shadow-md transition">
        <div class="aspect-4/3 w-full bg-gray-300/80 rounded-xl">

            <h3 class="mt-3 font-(--body-en)">
                {{ title }}
            </h3>

            <p class="mt-1 text-sm text-black">
                {{ huh }}
            </p>
            <div v-if="meta" class="mt-2 text-xs text-black">
                {{ haha }}
            </div>
        </div>
    </article>
</template>