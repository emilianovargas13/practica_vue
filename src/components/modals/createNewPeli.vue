<template>
      <b-card>
        <b-card-header>
          <h3 class="text-center">Peliculas</h3>
        </b-card-header>
        <b-card-body>
          <b-modal v-model="showModal" title="Agregar Pelicula">
            <createNewPeli @onReset="onReset" @onSubmit="onSubmit" :genres="genresToSend" />
          </b-modal>
          <b-table striped hover :items="movies" :fields="fields" />
        </b-card-body>
      </b-card>
  </template>
  
  <script>
  export default {
    props: ['movies'],
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales según sea necesario */
  </style>
  