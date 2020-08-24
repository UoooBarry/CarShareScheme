<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      Filter:
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-dark">
              <input type="radio" name="sort" checked value="default" /> Default (By name)
            </label>

            <label class="btn btn-outline-dark">
              <input type="radio" name="sort" autocomplete="off" /> By Price (High to Low)
            </label>

            <label class="btn btn-outline-dark">
              <input type="radio" name="sort" autocomplete="off" /> By Price (Low to High)
            </label>

            <label class="btn btn-outline-dark">
              <input type="radio" name="sort" autocomplete="off" /> By Newest
            </label>

            <label class="btn btn-outline-dark">
              <input type="radio" name="sort" autocomplete="off" /> By Brand
            </label>

            <label class="btn btn-outline-dark">
              <input type="radio" name="sort" autocomplete="off" /> By Model
            </label>

            <label class="btn btn-outline-dark">
              <input type="radio" name="sort" autocomplete="off" /> By popular
            </label>
          </div>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "CarFilterHeader",
  components: {},
  methods: {}
};
</script>


<style scoped>
.navbar {
  width: 95%;
  border-top: 1px solid #a9a0a0;
  border-bottom: 1px solid #a9a0a0;
  margin-bottom: 20px;
}
.btn-outline-success {
  color: black;
  border-color: #a9a0a0;
}
.btn-outline-success:hover {
  color: #fff;
  background-color: #a9a0a0;
  border-color: #a9a0a0;
}
.nav-item {
  margin-left: 20px;
}
.btn-outline-dark {
  border: none;
  margin: 10px;
}
.btn {
  border-radius: 0;
}
.btn-outline-dark:not(:disabled):not(.disabled).active,
.btn-outline-dark:not(:disabled):not(.disabled):active,
.show > .btn-outline-dark.dropdown-toggle {
  color: #fff;
  background-color: #a9a0a0;
  border-color: #a9a0a0;
}
.btn-outline-dark:hover {
  color: #fff;
  background-color: #a9a0a0;
  border-color: #a9a0a0;
}
</style>