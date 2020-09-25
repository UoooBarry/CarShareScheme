<template>
  <div class="wrapper">
    <h3>{{ $t('filter') }}:</h3>
    <ul>
      <li>
        <input type="checkbox" id="list-item-1" />
        <label for="list-item-1" class="first">
          {{ $t('make') }}
          <font-awesome-icon icon="plus" class="plus" />
        </label>
        <ul>
          <li>
            <form @submit.prevent="search">
              <input type="hidden" v-model="searchItem" />
              <button type="submit" class="carFilterItem" v-on:click="filter('audi')">Audi</button>
            </form>
          </li>
          <li>
            <form @submit.prevent="search">
              <input type="hidden" v-model="searchItem" />
              <button type="submit" class="carFilterItem" v-on:click="filter('BMW')">BMW</button>
            </form>
          </li>
          <li>
            <form @submit.prevent="search">
              <input type="hidden" v-model="searchItem" />
              <button type="submit" class="carFilterItem" v-on:click="filter('Ferrari')">Ferrari</button>
            </form>
          </li>
          <li>
            <form @submit.prevent="search">
              <input type="hidden" v-model="searchItem" />
              <button type="submit" class="carFilterItem" v-on:click="filter('Ford')">Ford</button>
            </form>
          </li>
          <li>
            <form @submit.prevent="search">
              <input type="hidden" v-model="searchItem" />
              <button type="submit" class="carFilterItem" v-on:click="filter('kia')">KIA</button>
            </form>
          </li>
          <li>
            <form @submit.prevent="search">
              <input type="hidden" v-model="searchItem" />
              <button type="submit" class="carFilterItem" v-on:click="filter('holden')">Holden</button>
            </form>
          </li>
          <li>
            <form @submit.prevent="search">
              <input type="hidden" v-model="searchItem" />
              <button type="submit" class="carFilterItem" v-on:click="filter('nissan')">Nissan</button>
            </form>
          </li>
          <li>
            <form @submit.prevent="search">
              <input type="hidden" v-model="searchItem" />
              <button
                type="submit"
                class="carFilterItem"
                v-on:click="filter('lamborghini')"
              >Lamborghini</button>
            </form>
          </li>
          <li>
            <form @submit.prevent="search">
              <input type="hidden" v-model="searchItem" />
              <button type="submit" class="carFilterItem" v-on:click="filter('isuzu')">ISUZU</button>
            </form>
          </li>
          <li>
            <form @submit.prevent="search">
              <input type="hidden" v-model="searchItem" />
              <button
                type="submit"
                class="carFilterItem"
                v-on:click="filter('range rover')"
              >Range Rover</button>
            </form>
          </li>
          <li>
            <form @submit.prevent="search">
              <input type="hidden" v-model="searchItem" />
              <button type="submit" class="carFilterItem" v-on:click="filter('toyota')">Toyota</button>
            </form>
          </li>
        </ul>
      </li>
      <li>
        <input type="checkbox" id="list-item-2" />
        <label for="list-item-2">
          {{ $t('seat') }}
          <font-awesome-icon icon="plus" class="plus" />
        </label>
        <ul>
          <li>
            <form @submit.prevent="search">
              <input type="hidden" v-model="searchItem" />
              <button type="submit" class="carFilterItem" v-on:click="filter('7')">7</button>
            </form>
          </li>
          <li>
            <form @submit.prevent="search">
              <input type="hidden" v-model="searchItem" />
              <button type="submit" class="carFilterItem" v-on:click="filter('5')">5</button>
            </form>
          </li>
          <li>
            <form @submit.prevent="search">
              <input type="hidden" v-model="searchItem" />
              <button type="submit" class="carFilterItem" v-on:click="filter('4')">4</button>
            </form>
          </li>
          <li>
            <form @submit.prevent="search">
              <input type="hidden" v-model="searchItem" />
              <button type="submit" class="carFilterItem" v-on:click="filter('2')">2</button>
            </form>
          </li>
        </ul>
      </li>

      <li>
        <input type="checkbox" id="list-item-3" />
        <label for="list-item-3" class="last">
          {{ $t('gear') }}
          <font-awesome-icon icon="plus" class="plus" />
        </label>
        <ul>
          <li>
            <form @submit.prevent="search">
              <input type="hidden" v-model="searchItem" />
              <button type="submit" class="carFilterItem" v-on:click="filter('automatic')">Automatic</button>
            </form>
          </li>
          <li>
            <form @submit.prevent="search">
              <input type="hidden" v-model="searchItem" />
              <button type="submit" class="carFilterItem" v-on:click="filter('manual')">Manual</button>
            </form>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import CarMixin from "@/mixins/carMixin";
export default {
  mixins: [CarMixin],
  data() {
    return {
      searchItem: ""
    };
  },
  methods: {
    filter(carName) {
      this.searchItem = carName;
      this.update();
    }
  }
};
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
.carFilterItem,
.carFilterItem:focus,
button:focus {
  border: none !important;
  width: 100%;
  background-color: transparent;
  outline: none !important;
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