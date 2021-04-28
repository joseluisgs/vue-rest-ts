<template>
  <Header />
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-7">
        <h1 class="is-size-3">Usuarios</h1>
        <!-- A un componente (hijo) le pasamos datos a través de propiedades
          Recibimos datos del hijo a traves de los eventos -->
        <TablaUsuarios :usuarios="usuarios" @eliminar-usuario="remove" class="mt-4" />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import TablaUsuarios from '@/components/TablaUsuarios.vue';
import IUser from '@/interfaces/IUser';
import apiUsers from '@/services/users';

export default defineComponent({
  name: 'App',

  // Mis componentes
  components: {
    Header,
    Footer,
    TablaUsuarios,
  },

  // Mi modelo de datos
  data: () => ({
    usuarios: [] as IUser[],
  }),

  // Mi ciclo de vida
  /**
   * Al crerame, consultamos los usuarios
   */
  async created() {
    await this.findAll();
  },

  // Mis métodos
  methods: {
    /**
     * Obtiene toda la lista de usuarios
     */
    async findAll() {
      try {
        this.usuarios = await apiUsers.findAll();
      } catch (err) {
        console.log(err);
      }
    },
    /**
     * Borramos un usuario en la api y en nuestro modelo de datos
     */
    async remove(user: IUser) {
      try {
        await apiUsers.remove(user);
        this.usuarios = this.usuarios.filter((u) => u.id !== user.id);
      } catch (err) {
        console.log(err);
      }
    },

    /**
     * Actualiza un usuario a través de la Api Rest, y en nuestro modelo de datos
     */
    async update(user: IUser) {
      try {
        const usuarioActualizado = await apiUsers.update(user);
        this.usuarios = this.usuarios.map((u) => (u.id === user.id ? usuarioActualizado : u));
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>

<style lang="scss"></style>
