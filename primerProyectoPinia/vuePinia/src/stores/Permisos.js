import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const usePermisosStore = defineStore("permisos", () => {
  //El estado
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
    }
  };
  return {
    permiso,
    estaPermitido,
    cambioPermiso,
  };
});
