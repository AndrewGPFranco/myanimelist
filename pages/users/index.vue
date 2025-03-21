<template>
  <div>
    <h1>Users</h1>
    <p v-if="!users.length">Nenhum usuário cadastrado</p>
    <ul v-else>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
    <router-link to="/">Voltar</router-link>
  </div>
</template>

<script setup>
const {data: users, error} = useFetch("/api/users/user");

if (error.value)
  console.error("Erro ao buscar usuários:", error.value)
</script>