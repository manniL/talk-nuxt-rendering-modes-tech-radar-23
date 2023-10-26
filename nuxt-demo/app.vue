<script setup lang="ts">
// @ts-ignore
import ms from 'ms'

const generatedAt = useState('generatedAt', () => new Date())
const { data } = await useFetch('/api/data')
const timeAgo = ref<number>()

onMounted(() => {
  timeAgo.value = ms(Date.now() - new Date(data.value.date).getTime(), { long: true })
})
</script>

<template>
  <div>

    <Head>
      <Title>Rendering modes in Nuxt</Title>
    </Head>
    <main class="container">
      <h1>Hey Utrecht!</h1>
      <h2>Page: {{ $route.path }}</h2>
      <ul>
        <li>
          Data fetched: <strong>{{ timeAgo ? `${timeAgo} ago` : '...' }}</strong>
        </li>
        <li>
          Regenerated at {{ generatedAt }}
        </li>
      </ul>
    </main>
  </div>
</template>