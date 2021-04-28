<template>
  <div id="tabla-usuarios">
    <div v-if="!usuarios.length" class="notification is-danger is-light">No existen usuarios</div>
    <table class="table is-hoverable is-striped is-fullwidth" v-if="usuarios.length > 0">
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
          <!-- Si editamos mostramos el inputm si no el valor -->
          <td v-if="editando === usuario.id">
            <input type="text" class="input" v-model="usuario.name" />
          </td>
          <td v-else>
            {{ usuario.name }}
          </td>

          <td v-if="editando === usuario.id">
            <input type="email" class="input" v-model="usuario.email" />
          </td>
          <td v-else>
            {{ usuario.email }}
          </td>

          <!-- Si estamos editando enseñamos estos botones -->
          <td v-if="editando === usuario.id">
            <button class="button is-success is-outlined ml-2" @click="actualizarUsuario(usuario)">
              <span class="icon is-small">
                <i class="mdi mdi-account-convert"></i>
              </span>
              <span>Actualizar</span>
            </button>

            <button class="button is-danger is-outlined ml-2" @click="actualizarUsuario(usuario)">
              <span class="icon is-small">
                <i class="mdi mdi-close"></i>
              </span>
              <span>Cancelar</span>
            </button>
          </td>

          <!-- Si NO estamos editando enseñamos estos botones -->
          <td v-else>
            <button class="button is-info ml-2" @click="editarUsuario(usuario)">
              <span class="icon is-small">
                <i class="mdi mdi-account-edit"></i>
              </span>
              <span>Editar</span>
            </button>

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

  // Mi modelo de datos
  data: () => ({
    editando: -1,
    usuarioEditado: {} as IUser,
  }),

  // Mis metodos
  methods: {
    /**
     * Lanza el evento de eliminar un usuario, con el usuario seleccionado
     */
    eliminarUsuario(usuario: IUser) {
      // Disparamos ele vento. Un evento es como se comunica un hijo con un padre
      this.$emit('eliminar-usuario', usuario);
    },

    /**
     * Obtiene los datos a editar y los almacena en el elemento teporal
     */
    editarUsuario(usuario: IUser) {
      this.usuarioEditado = { ...usuario };
      this.editando = usuario.id;
    },

    /**
     * Actualiza el usuario, y emite el event al padre con los datos del usuario nuevo
     */
    actualizarUsuario(usuario: IUser) {
      if (!usuario.name.length || !usuario.email.length) {
        return;
      }
      this.$emit('actualizar-usuario', usuario);
      this.editando = -1;
    },

    /**
     * Cancela la edición/actualización del usuario
     */
    cancelarEdicion(usuario: IUser) {
      Object.assign(usuario, this.usuarioEditado);
      this.editando = -1;
    },
  },
});
</script>
