<template>
  <span>
    <button
      class="button is-info"
      @click="openModal()"
    >
      Editar perfil
    </button>
    <div class="modal" :class="{'is-active': modalActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Perfil</p>
          <button class="delete" @click="closeModal()" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Primeiro nome</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Insira aqui seu primeiro nome"
                    v-model="data.first_name"
                  >
                </div>
                <!-- <p class="help">This is a help text</p> -->
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Segundo nome</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Insira aqui seu segundo nome"
                    v-model="data.last_name"
                  >
                </div>
                <!-- <p class="help">This is a help text</p> -->
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Profissão</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Insira aqui sua área de atuação"
                v-model="data.role"
              >
            </div>
            <!-- <p class="help">This is a help text</p> -->
          </div>
          <div class="field">
            <label class="label">Biografia</label>
            <div class="control">
              <textarea
                class="textarea"
                placeholder="Uma breve descrição sua"
                v-model="data.bio"
              ></textarea>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button
            class="button is-success"
            @click="save(data)"
          >Salvar</button>
          <button class="button" @click="closeModal()">Cancelar</button>
        </footer>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },

  mounted() {
    const { first_name, last_name, role, bio } = this.user;
    this.data = { first_name, last_name, role, bio };
  },

  data() {
    return {
      modalActive: false,
      data: {},
    };
  },

  methods: {
    openModal() {
      this.modalActive = true;
    },

    closeModal() {
      this.modalActive = false;
      this.data = {};
    },

    save(data) {
      this.$emit('save', data);
      this.closeModal();
    },
  },
};
</script>

<style></style>
