<template>
  <Header />
  <div class="container">
    <div class="section">
      <div class="columns is-centered">
        <div class="column is-10">
          <h1 class="is-size-3">Usuarios</h1>
          <TablaUsuarios :usuarios="usuarios" class="mt-4"/>
        </div>
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
    try {
      this.usuarios = await apiUsers.findAll();
    } catch (err) {
      console.log(err);
    }
  },
});
</script>

<style lang="scss"></style>
