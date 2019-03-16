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
                  <input type="text" id="search" class="form-control" placeholder="Proucurar por nome">
                  <img src="../assets/search.png" width="30" height="30" class="d-inline-block align-top">
                </div>
              </div>
            </div>
          </div>
        </div>
        <table class="table table-striped">
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
            <tr>
              <td>Foto</td>
              <td>Gustavo Alexandre</td>
              <td>22/03/1980</td>
              <td>+55(31) 988029318</td>
              <td><button type="button" class="btn btn-warning">Editar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Anterior</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Próxima</a>
    </li>
  </ul>
</nav>
      </div>
    </div>
  </div>
</template>

<style>
  .listar {
    margin: 10px;
    padding:10px
  }
  .container {
    background-color: rgba(65, 160, 57, 0.836);
  }

  .table-wrapper {
    padding-top: 20px;
    padding-bottom: 2px;
  }
</style>
