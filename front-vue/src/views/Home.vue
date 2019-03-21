<template>
  <div class="home">
    <HelloWorld msg="Bem vindo ao ADM Painel"/>
    <h5>Desenvolvido por: Gustavo Alexandre</h5>
    <h5>gusttavo212</h5>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
