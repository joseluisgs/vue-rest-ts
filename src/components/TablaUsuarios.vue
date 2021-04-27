<template>
  <div id="tabla-usuarios">
    <div v-if="!usuarios.length" class="notification is-danger is-light">
      No existen usuarios
    </div>
    <table class="table is-hoverable is-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>{{ usuario.name }}</td>
          <td>{{ usuario.username }}</td>
          <td>{{ usuario.email }}</td>
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

  // Mis propiedades
  props: {
    usuarios: Array as () => IUser[],
  },
});

</script>
