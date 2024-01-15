<template>
    <div>
      <b-breadcrumb :items="items" class="mb-2"></b-breadcrumb>

    </div>
  </template>
  
  <script>
  export default {
    name: 'DetallesEspacio',
    data() {
      return {
        items: [
            {
                text: 'Lands Page',
                to: {
                    name: 'LandsPage'
                },
            },
            {
                text: 'Catalogo de Espacios',
                to: {
                    name: 'CatalogoEspacios'
                },
            },
            {
                text: 'Detalles del espacio',
                active: true
            }

          ]
      };
    },
   
  };
  </script>
  
  