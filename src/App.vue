<template>
  <Header />
  <div class="container">
     <h1 class="is-size-3">Usuarios</h1>
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import IUser from '@/interfaces/IUser';
import apiUsers from '@/services/users';

export default defineComponent({
  name: 'App',

  // Mis componentes
  components: {
    Header,
    Footer,
  },

  // Mi modelo de datos
  data: () => ({
    users: [] as IUser[],
  }),

  // Mi ciclo de vida
  /**
   * Al montarme, consultamos los usuarios
   */
  async created() {
    this.users = await apiUsers.findAll();
    console.log(this.users);
  },
});
</script>

<style lang="scss"></style>
