<template>
  <span>
    <button
      class="button is-primary"
      @click="openModal()"
    >
      Trocar foto
    </button>
    <div class="modal" :class="{'is-active': modalActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Perfil</p>
          <button class="delete" @click="closeModal()" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <img
              class="image is-128x128"
              :src="value"
            />
          </div>
          <div class="field">
            <div class="control">
              <input
                type="file"
                accept="image/*"
                class="button"
                @change="onFileChange"
              >
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button
            class="button is-success"
            @click="save()"
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
    image: {
      type: String,
    },
  },

  data() {
    return {
      modalActive: false,
      data: {},
      value: '',
    };
  },

  mounted() {
    this.value = this.image;
  },

  methods: {
    openModal() {
      this.modalActive = true;
    },

    closeModal() {
      this.modalActive = false;
      this.data = {};
      this.value = '';
    },

    save() {
      this.$emit('save', this.data);
      this.closeModal();
    },

    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }

      const data = new FormData();
      data.append('avatar', files[0]);
      this.data = data;
      this.createImage(files[0]);
    },

    createImage(file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.value = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    removeImage() {
      this.image = '';
    },
  },
};
</script>

<style></style>
