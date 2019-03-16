<template>
  <div id="app">
    <div id="nav">


      <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">
            <img src="./assets/icon.png" width="30" height="30" class="d-inline-block align-top"
              alt="">
            <router-link to="/">ADM Painel</router-link>
          </a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/list">Listar</router-link>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/cadastrar">Cadastrar</router-link>
              </a>
            </li>

          </ul>

        </div>
      </nav>

    </div>
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 0px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  #app {
    background-color: rgb(179, 211, 187);
  }

</style>
