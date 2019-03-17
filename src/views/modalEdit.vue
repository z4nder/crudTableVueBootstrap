<template>
  <div class="modalEdit">
    <h1>{{ msg }}</h1>
    <Cadastrar/>
  </div>
</template>

<script>

export default {
  name: 'ModalEdit',
  props: {
    msg: String,
  },
};
</script>
