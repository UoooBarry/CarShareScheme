<template>
  <div class="wrapper">
    <h3>Filter:</h3>
    <ul>
      <li>
        <input type="checkbox" id="list-item-1" />
        <label for="list-item-1" class="first">
          Make
          <font-awesome-icon icon="plus" class="plus" />
        </label>
        <ul>
          <li>Audi</li>
          <li>BMW</li>
          <li>Ferrari</li>
          <li>Ford</li>
          <li>KIA</li>
          <li>Holden</li>
          <li>Nissan</li>
          <li>Lamborghini</li>
          <li>ISUZU</li>
          <li>Range Rover</li>
          <li>Toyota</li>
        </ul>
      </li>
      <li>
        <input type="checkbox" id="list-item-2" />
        <label for="list-item-2">
          Door
          <font-awesome-icon icon="plus" class="plus" />
        </label>
        <ul>
          <li>Open Sans</li>
          <li>Roboto</li>
          <li>Lato</li>
          <li>Stabo</li>
          <li>Oswald</li>
        </ul>
      </li>
      <li>
        <input type="checkbox" id="list-item-3" />
        <label for="list-item-3" >
          Seat
          <font-awesome-icon icon="plus" class="plus" />
        </label>
        <ul>
          <li>Inconsolata</li>
          <li>Source Code Pro</li>
          <li>Droid Sans Mono</li>
          <li>Ubuntu Mono</li>
          <li>Cousine</li>
        </ul>
      </li>

      <li>
        <input type="checkbox" id="list-item-4" />
        <label for="list-item-4" class="last">
          Gear
          <font-awesome-icon icon="plus" class="plus" />
        </label>
        <ul>
          <li>Inconsolata</li>
          <li>Source Code Pro</li>
          <li>Droid Sans Mono</li>
          <li>Ubuntu Mono</li>
          <li>Cousine</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
h3 {
  text-align: left;
}
.wrapper {
  margin: 2% auto;
  width: 80%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.plus {
  float: right;
}
label {
  display: block;
  cursor: pointer;
  padding: 10px;
  border-top: 1px solid #a9a0a0;
  margin-bottom: 0;
  text-align: left;
}

label:hover {
  background: #a9a0a0;
}

label.last {
  border-bottom: 1px solid #a9a0a0;
}

ul ul li {
  padding: 10px;
}

input[type="checkbox"] {
  position: absolute;
  left: -9999px;
}

input[type="checkbox"] ~ ul {
  height: 0;
  transform: scaleY(0);
}

input[type="checkbox"]:checked ~ ul {
  height: 100%;
  transform-origin: top;
  transition: transform 0.2s ease-out;
  transform: scaleY(1);
}

input[type="checkbox"]:checked + label {
  background: #a9a0a0;
  border-bottom: 1px solid #fff;
}
</style>