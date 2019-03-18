<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="formGroup" label="Nome:" label-for="exampleInput1" description="">
        <b-form-input id="inputs" type="text" v-model="form.name" required placeholder="Nome" />
      </b-form-group>

      <b-form-group id="formGroup" label="Data de Nascimento:" label-for="exampleInput2">
        <b-form-input id="inputs" type="text" v-model="form.dataNasc" required placeholder="Enter com sua data de nascimento" />
      </b-form-group>

      <b-form-group id="formGroup" label="Telefone:" label-for="exampleInput2">
        <b-form-input id="inputs" type="text" v-model="form.number" required placeholder="Telefone dd( ) numero" />
      </b-form-group>
      <b-button type="submit" variant="primary">Alterar</b-button>
    </b-form>
  </div>
</template>

<script>
  import ClientEvent from '../components/clientsEvent.js'
  export default {
    name: 'ModalEdit',
    props: {
      msg: String,
    },
    data() {
      return {
        form: [],
        show: true,
        client: []
      }
    },
    mounted() {
      ClientEvent.$on('edit:Item', function (item) {
        this.client = item;
        console.log('Client', this.client.name)
      })
    },
    methods: {
      // Envia objeto ao cadastrar
      onSubmit(evt) {
        evt.preventDefault()
        this.form = this.client
        alert(JSON.stringify(this.form))
      },
      // Reseta os campos
      onReset(evt) {
        evt.preventDefault()
        /* Reset our form values */
        this.form.name = ''
        this.form.dataNasc = ''
        this.form.number = ''
        /* Trick to reset/clear native browser form validation state */
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
        async list() {
        try {
          this.clients = response.data.docs; //Pegas os clients que estão em docs
        } catch (error) {
          alert(error.response.data.message)
          console.log(error.response.data)
        }

      },
    }
  }

</script>
