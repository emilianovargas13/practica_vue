<template>
  <div id="app">
    <!-- Sidebar -->
    <b-sidebar no-header-close no-close-on-backdrop visible id="sidebar-1" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>

    <!-- Main content -->
    <div id="content">
      <!-- Navbar -->
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <!-- Other content -->
      <div class="main-content">
        <b-button>Button</b-button>
        <b-button :disabled="true" variant="danger">Button</b-button>
        <b-button variant="success">Button</b-button>
        <b-button variant="outline-primary">Button</b-button> <br>
        <div class="mb-4">
          <b-avatar></b-avatar>
          <b-avatar variant="primary" text="BV"></b-avatar>
          <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
          <b-avatar variant="success" icon="people-fill"></b-avatar>
        </div>
        <b-list-group style="max-width: 300px;">
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar class="mr-3"></b-avatar>
            <span class="mr-auto">J. Circlehead</span>
            <b-badge>5</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar variant="primary" text="BV" class="mr-3"></b-avatar>
            <span class="mr-auto">BootstrapVue</span>
            <b-badge>12</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3"></b-avatar>
            <span class="mr-auto">Super Kitty</span>
            <b-badge>9</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar variant="success" icon="people-fill" class="mr-3"></b-avatar>
            <span class="mr-auto">ACME group</span>
            <b-badge>7</b-badge>
          </b-list-group-item>
        </b-list-group>
        <div class="mb-2">
          <b-avatar icon="people-fill"></b-avatar>
          <b-avatar icon="star-fill"></b-avatar>
          <b-avatar icon="music-note"></b-avatar>
          <b-avatar icon="star-fill" size="4em"></b-avatar>
        </div>

      </div>


    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1200px) {
  #content {
    padding-left: 320px;
  }
}

/* justify main-content */
.main-content {
  padding: 15px;
  text-align: center;
}
</style>
