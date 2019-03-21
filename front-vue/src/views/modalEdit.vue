<template>
  <div>
    <h1>{{ client.name }} OI</h1>
    <b-form @submit="onSubmit" v-if="show">
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
    data() {
      return {
        form: {
          name: '',
          dataNasc: '',
          number: '',
        },
        show: true,
        client: [],
      }
    },
    async mounted() {
      try {
        let response =  await ClientEvent.$once('edit:Item', async (item) => {
        const resp = await item
        console.log('Dentro',resp)
        return resp
        })
        this.client.push()
        console.log('Fora',response)
      } catch (e) {
        console.error(e)
      }
    },
    methods: {
      // Envia objeto ao cadastrar
      onSubmit(evt) {
        evt.preventDefault()
        console.log('Client', this.client)
        alert(JSON.stringify(this.form))
      },
    }
  }

</script>
