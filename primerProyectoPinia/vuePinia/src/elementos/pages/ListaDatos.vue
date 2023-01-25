<script setup>
import { useDatosForm } from "@/stores/DatosForm";
import { ref } from "vue";

const datos = useDatosForm();
</script>

<template>
  <div>
    <ul>
      <li v-for="(item, idx) in datos.cogerArray" :key="idx">
        {{ item.nombre }} - {{ item.apellido }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
