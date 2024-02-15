<template>
    <b-container fluid>
  
      <b-row>
        <b-button class="mt-3" size="lg" @click="openModal">Registrar película</b-button>
        <createNewPeli :movies="movies" />
  
        <b-modal id="modal-1" title="Registro de películas" v-model="showModal">
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="input-group-1" label="Nombre de película:" label-for="input-1" description="Registra el nombre latinoamericano.">
              <b-form-input id="input-1" v-model="form.name" type="text" placeholder="Ingresa el nombre de la película." required></b-form-input>
            </b-form-group>
  
            <b-form-input id="input-2" v-model="form.year" type="number" required placeholder="Ingresa el año de la película"></b-form-input>
  
            <b-form-group id="input-group-4" label="Género" label-for="input-3">
              <b-form-select v-model="form.genre" :options="genres" required>
                <template v-slot:first>
                  <option :value="0">Selecciona un género</option>
                </template>
              </b-form-select>
              <div v-if="genres.length === 0">Loading genres...</div>
            </b-form-group>
            <b-button type="submit" variant="primary">Registrar</b-button>
            
          </b-form>
        </b-modal>
      </b-row>
     
    </b-container>
  </template>
    
  <script>
  import axios from 'axios';
  import createNewPeli from './modals/createNewPeli.vue';
  export default {
    components: { createNewPeli },
    data() {
      return {
        form: {
          name: '',
          genre: '',
          year: '',
        },
        genres: [],
        genresToSend: [],
        movies: [], 
        showModal: false,
      };
    },
    mounted() {
      this.fetchGenres();
      this.fetchMovies();
      this.form.genre = 0;
    },
    methods: {
      openModal() {
        this.showModal = true;
      },
      onSubmit(evt) {
        evt.preventDefault();
        this.registerMovie();
      },
      onReset(evt) {
        this.form.name = '';
        this.form.genre = '';
        this.form.year = '';
        this.showModal = false;
      },
      async fetchGenres() {
        try {
          const response = await axios.get('http://localhost:8080/api/movies/genres');
          this.genres = response.data.map(genre => ({ text: genre.name, value: genre.id }));
          this.genresToSend = response.data;
        } catch (error) {
          console.error('Error al obtener los géneros:', error);
        }
      },
      async fetchMovies() {
        try {
          const response = await axios.get('http://localhost:8080/api/movies/movies');
          this.movies = response.data;
          this.movies.forEach(movie => {
            movie.genre = movie.genre.name;
          });
        } catch (error) {
          console.error('Error al obtener las películas:', error);
        }
      },
      async registerMovie() {
        try {
            if (this.form.name && this.form.genre && this.form.year) {
  
            this.form.genre = this.genresToSend.find(genre => genre.id === this.form.genre);
  
            // Enviar los datos al servidor
            await axios.post('http://localhost:8080/api/movies/movies', {
              name: this.form.name,
              genre: this.form.genre,
              year: this.form.year,
            });
  
            alert('¡Película registrada con éxito!');
            this.onReset(); // Limpiar el formulario después de registrar la película
            this.fetchMovies(); // Recargar las películas después de registrar una nueva
          };
        } catch (error) {
          console.error('Error al registrar la película:', error);
        }
      },
  
    }
  };
  </script>
  