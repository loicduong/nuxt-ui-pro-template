<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Nuxt Starter Template'
const description = 'Nuxt UI Pro is a collection of premium Vue components built on top of Nuxt UI to create beautiful & responsive Nuxt applications in minutes.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://assets.hub.nuxt.com/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3VpLXByby1zdGFydGVyLm51eHQuZGV2IiwiaWF0IjoxNzM5NDYzMzk4fQ.XLzPkSW6nRbPW07QO1RkMwz_RAPA4KfeyrWrK3li9YI.jpg?theme=light',
  twitterImage: 'https://assets.hub.nuxt.com/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3VpLXByby1zdGFydGVyLm51eHQuZGV2IiwiaWF0IjoxNzM5NDYzMzk4fQ.XLzPkSW6nRbPW07QO1RkMwz_RAPA4KfeyrWrK3li9YI.jpg?theme=light',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
