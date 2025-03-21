<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
    <NuxtLink to="/">Voltar</NuxtLink>
  </div>
</template>

<script setup>
useHead({
  title: 'My Anime List - Usuários'
})

const {data: users, error} = useFetch("/api/users/user");

if (error.value)
  console.error("Erro ao buscar usuários:", error.value)
</script>