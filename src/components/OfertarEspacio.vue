<template>
  <div>
    <template>
      <div>
        <b-container>
          <b-breadcrumb :items="items"></b-breadcrumb>
        </b-container>
      </div>
    </template>
  </div>
</template>
  
<script>

export default {
  name: 'OfertarEspacio',

  data() {
    return {
      items: [
        {
          text: "Lands Page",
          to: { name: "LandsPage" },
        },
        {
          text: "Oferta tu espacio",
          active: true,
        },
      ],
    }
  }
}
</script>
  
                                                           