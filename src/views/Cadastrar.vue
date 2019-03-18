<template>
  <div class="Cadastrar">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="formGroup"
        label="Nome:"
        label-for="exampleInput1"
        description=""
      >
        <b-form-input
          id="inputs"
          type="text"
          v-model="form.name"
          required
          placeholder="Nome e Sobrenome" />
      </b-form-group>

      <b-form-group id="formGroup" label="Data de Nascimento:" label-for="exampleInput2">
        <b-form-input
          id="inputs"
          type="text"
          v-model="form.dataNasc"
          required
          placeholder="Enter com sua data de nascimento"
          v-mask="'##/##/####'"
          :masked="masked"
            />
      </b-form-group>

      <b-form-group id="formGroup" label="Telefone:" label-for="exampleInput2">
        <b-form-input
          id="inputs"
          type="text"
          v-model="form.number"
          required
          placeholder="Telefone dd( ) numero"
          v-mask="'+55 (##) ####-####'"
          :masked="masked" />
      </b-form-group>

      <b-button type="submit" variant="primary">Cadastrar</b-button>
      <b-button type="reset" variant="danger">Cancelar</b-button>
    </b-form>
  </div>
</template>


<script>
 import Crud from '../services/crud.js'
  export default {
    data() {
      return {
        form: {
          name: '',
          dataNasc: '',
          number: '',
        },
        show: true
      }
    },
    methods: {
      // Envia objeto ao cadastrar
      async onSubmit(evt) {
        evt.preventDefault()
        //alert(JSON.stringify(this.form))
        alert('Salvo com sucesso!')
        const response = await Crud.create(this.form)
        return response;
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
      }
    }
  }
</script>

<style>

#inputs {
  width: 30%;
  text-align: center;
  display: inline-block;
}

#container {
  padding: 20px;
}

</style>
