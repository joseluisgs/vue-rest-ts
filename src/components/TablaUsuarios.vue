<template>
  <div id="tabla-usuarios">
    <div v-if="!usuarios.length" class="notification is-danger is-light">
      No existen usuarios
    </div>
    <table class="table is-hoverable is-striped" v-if="usuarios.length > 0">
      <thead>
        <tr>
          <th>Nombre</th>
          <!-- <th>Username</th> -->
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>{{ usuario.name }}</td>
          <!-- <td>{{ usuario.username }}</td> -->
          <td>{{ usuario.email }}</td>
          <td>
            <button class="button is-danger ml-2" @click="eliminarUsuario(usuario)">
              <span class="icon is-small">
                <i class="mdi mdi-account-remove"></i>
              </span>
              <span>Eliminar</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import IUser from '@/interfaces/IUser';

export default defineComponent({
  name: 'TablaUsuarios',

  // Mis propiedades. Son los datos que recibimos de un padre
  props: {
    // Por cada propiedad podemos decir su tipo y si es requeridad. Así como un valor por defecto (default)
    usuarios: {
      type: Array as () => IUser[],
      required: true,
    },
  },

  // Mis metodos
  methods: {
    /**
     * Lanza el evento de eliminar un usuario, con el usuario seleccionado
     */
    eliminarUsuario(usuario: IUser) {
    // Disparamos ele vento. Un evento es como se comunica un hijo con un padre
      this.$emit('eliminar-usuario', usuario);
    },
  },
});
</script>
