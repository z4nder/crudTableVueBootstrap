<template>
  <div class="cadastrar">
   <form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-3 col-form-label">Nome:</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputEmail1" placeholder="Nome">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Data de Nascimento:</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputPassword3" placeholder="Data de Nascimento">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Telefone:</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputPassword2" placeholder="Telefone">
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-12">
      <button type="submit" class="btn btn-success">Cadastrar</button>
      <button type="button" class="btn btn-danger">Cancelar</button>
    </div>
  </div>
</form>
  </div>
</template>

<style>
 .cadastrar {
   margin: 20px;
 }

 .btn {
   margin-bottom: 20px;
   margin-left: 10px;

 }

 .col-form-label {
   padding-top: 10px;
   padding-bottom: 10px;
   background-color: rgba(65, 160, 57, 0.836);
 }
</style>

