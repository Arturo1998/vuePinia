<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.fullPath);
console.log(route.params.nombre);
console.log(route.query.apellido1);
</script>

<template>
  <div>
    <h1>Usuario: {{ route.name }}</h1>
  </div>
</template>

<style scoped></style>
