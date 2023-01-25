<script setup>
import { useDatosForm } from "@/stores/DatosForm"
import { ref } from "vue";

const datos = useDatosForm();
const nombre = ref("");
const apellido = ref("");

</script>

<template>
  <div>
    <h1>Formulario</h1>
    <input type="text" placeholder="Nombre" v-model="nombre">
    <input type="text" name="" id="" placeholder="Apellido" v-model="apellido">
    <button @click="datos.escribirDatos(nombre, apellido)">Enviar</button>
  </div>
  <div>
    <h1>Ingresos añadidos: {{ datos.cogerContador }}</h1>
  </div>
</template>

<style scoped></style>
