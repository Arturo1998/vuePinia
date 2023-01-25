import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useDatosForm = defineStore("datos", () => {
  const nombre = ref("");
  const apellido = ref("");
  const contador = ref(0);
  const arrayDatos = ref([]);

  const escribirDatos = (first, last) => {
    nombre.value = first;
    apellido.value = last;
    contador.value++;
    arrayDatos.value.push({nombre: first, apellido: last});
    console.log(arrayDatos)
  };

  const cogerNombre = computed(() => nombre.value);
  const cogerApellido = computed(() => apellido.value);
  const cogerContador = computed(() => contador.value);
  const cogerArray = computed(() => arrayDatos.value);

  return {
    escribirDatos,
    cogerNombre,
    cogerApellido,
    cogerContador,
    cogerArray,
  };
});

/* //El estado
  const permiso = ref(true);
  //Los getters
  const estaPermitido = computed(() => permiso.value);
  //Las acciones
  const cambioPermiso = (valor) => {
    if (permiso.value == valor) {
      alert("El permiso ya se encuentra en este estado");
    } else {
      permiso.value = valor;
      alert("Permiso modificado");

    }*/
