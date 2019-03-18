<template>
  <div class="listar">
    <div class="container">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-6">
              <h2><b>Painel</b></h2>
            </div>
            <div class="col-sm-6">
              <div class="search-box">
                <div class="input-group">
                  <input v-model="inputName" type="text" id="search" class="form-control" placeholder="Proucurar por nome">
                  <div id="imgBtn" @click="searchByName()">
                    <img src="../assets/search.png" width="30" height="30" class="d-inline-block align-top">
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <table class="table table-responsive">
          <thead>
            <tr>
              <th>Foto</th>
              <th style="width: 25%;">Nome</th>
              <th style="width: 30%;">Data de Nascimento</th>
              <th style="width: 30%;">Telefone</th>
              <th style="width: 5%;">Editar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="clients of clients" :key="clients._id">
              <td>Foto</td>
              <td>{{ clients.name }}</td>
              <td>{{ clients.dataNasc }}</td>
              <td>{{ clients.number }}</td>
              <td>
                <div>
                  <b-button type="button" class="btn btn-warning" v-b-modal.modal1>Editar</b-button>

                  <!-- Modal Component -->
                  <b-modal id="modal1" title="BootstrapVue">
                    <ModalEdit msg="Modal Msg" />
                  </b-modal>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="overflow-auto">
          <div class="mt-3 text-right">
            <b-pagination v-model="currentPage" :total-rows="rows"
              :per-page="perPage" align="right" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ModalEdit from './modalEdit';
  import Crud from '../services/crud.js'
  export default {
    components: {
      ModalEdit,
    },
    data() {
      return {
        inputName: '',
        rows: 40,
        currentPage: 1,
        perPage: 10,
        clients: [],
      }
    },
    mounted() {
      this.list()

    },
    methods: {
      async list() {
        try {
          const response = await Crud.list()
          this.rows = response.data.pages * 10
          this.clients = response.data.docs; //Pegas os clients que estão em docs
        } catch (error) {
          alert(error.response.data.message)
          console.log(error.response.data)
        }

      },
      async searchByName() {
        try {
          const response = await Crud.listByName(1, this.inputName)
          this.rows = response.data.pages * 10
          this.clients = response.data.docs; //Pegas os clients que estão em docs

        } catch (error) {
          alert(error.response.data.message)
          console.log(error.response.data)
        }
      }
    },
    watch: {
      currentPage: async function (val) {
        const response = await Crud.list(val)
        this.clients = response.data.docs;
        return response;
      },
       inputName: async function (val) {
        if(val === "") {
          this.list()
        }else{
          this.searchByName(val)
        }
      },
    }
  }

</script>



<style>
  .listar {
    margin: 10px;
    padding: 10px
  }

  .container {
    background-color: rgba(65, 160, 57, 0.836);
  }

  .table-wrapper {
    padding-top: 20px;
    padding-bottom: 2px;
  }

  #imgBtn {
    padding: 10px;
  }

   #imgBtn:active {
    background-color:#42b983;
    transition: cubic-bezier(0.25, 0.46, 0.45, 0.94)
   }
</style>
