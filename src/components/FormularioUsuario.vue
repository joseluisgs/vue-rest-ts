<template>
  <div id="formulario-usuario">
    <form @submit.prevent="enviarFormulario">
      <!-- Indicamos que es horizontal -->
      <div class="field is-horizontal">
        <!-- Nombre -->
        <div class="field-label is-normal">
          <label class="label">Nombre</label>
        </div>
        <div class="field-body">
          <div class="field">
            <input
              class="input"
              type="text"
              placeholder="Nombre Usuario"
              ref="name"
              v-model="usuario.name"
              :class="{ 'is-invalid': procesando && nameInvalido }"
              @focus="resetEstado"
              @keypress="resetEstado"
            />
          </div>
        </div>
        <!-- Email -->
        <div class="field-label is-normal ml-3">
          <label class="label">Email</label>
        </div>
        <div class="field-body">
          <div class="field">
            <input
              class="input"
              type="email"
              placeholder="correo@correo.com"
              v-model="usuario.email"
              :class="{ 'is-invalid': procesando && emailInvalido }"
              @focus="resetEstado"
            />
          </div>
        </div>
        <!-- Enviar -->
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-primary ml-2">
                <span class="icon is-small">
                  <i class="mdi mdi-account-plus"></i>
                </span>
                <span>Añadir</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="error && procesando" class="notification is-danger">
        ¡Debes rellenar todos los campos!
      </div>
      <div v-if="correcto" class="notification is-success">
        ¡El usuario ha sido agregado correctamente!
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IUser from '@/interfaces/IUser';

export default defineComponent({
  name: 'FormularioUsuario',

  // Mi modelo de datos
  data: () => ({
    procesando: false,
    correcto: false,
    error: false,
    usuario: {
      name: '',
      email: '',
      username: '',
      id: 0,
    } as IUser,
  }),

  // Mis Métodos
  methods: {
    /**
     * Enviamos el resultado del formulario a nuestro padre, con los datos
     */
    enviarFormulario() {
      this.procesando = true;
      this.resetEstado();

      // Comprobamos la presencia de errores
      if (this.nameInvalido || this.emailInvalido) {
        this.error = true;
        return;
      }

      this.$emit('crear-usuario', this.usuario);
      (this.$refs.name as HTMLInputElement).focus();
      this.error = false;
      this.correcto = true;
      this.procesando = false;

      // Restablecemos el valor de la variables
      this.limpiarUsuario();
    },

    /**
     * Reseteamos el estado
     */
    resetEstado() {
      this.correcto = false;
      this.error = false;
    },

    /**
     * Lmpiar el usuario donde almacenamos las cosas
     */
    limpiarUsuario() {
      this.usuario = {
        name: '',
        email: '',
        username: '',
        id: 0,
      };
    },
  },

  // Mis propiedades computadas
  computed: {
    /**
     * Nos indica si un nombre es válido
     */
    nameInvalido(): boolean {
      return this.usuario.name.length < 1;
    },

    /**
     * Nos indica si un nombre es invalido
     */
    emailInvalido(): boolean {
      return this.usuario.email.length < 1;
    },
  },
});
</script>

<style scoped>
</style>
