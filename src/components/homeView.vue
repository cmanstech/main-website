<script setup>
defineProps({
    kicker: { type: String, default: '' },
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    primaryText: { type: String, default: 'Get Started' },
    secondaryText: { type: String, default: 'View Projects' },
})
</script>

<template>
    <section class="relative">
        <div class="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <p v-if="kicker" class="text-xs uppercase tracking-widest text-black">
                {{ kicker }}
            </p>
            <h1 class="mt-3 text-4xl md:text-6xl font-(--display-en) leading-[1.1]">
                {{ title }}
            </h1>
            <p class="mt-4 md:text-lg text-black max-w-3xl">
                {{ subtitle }}
            </p>
            <div class="mt-8 flex gap-3">
                <button class="px-5 py-2.5 rounded-xl bg-black text-primary-eggwhite hover:bg-gray-800 transition">
                    {{ primaryText }}
                </button>
                <button class="px-5 py-2.5 rounded-xl border border-gray-500 hover:bg-gray-50 transition">
                    {{ secondaryText }}
                </button>
            </div>
        </div>
    </section>
</template>