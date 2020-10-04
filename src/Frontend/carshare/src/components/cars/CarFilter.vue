/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 25/09/2020                *
              Yongqian Huang updated at: 03/10/2020 rewrite filter   *
 ***********************************************************************/
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
            <div>
              <button type="submit" class="carFilterItem" v-on:click="$emit('filter-brand','Audi')">Audi</button>
            </div>
          </li>
          <li>
            <div>
              <button type="submit" class="carFilterItem" v-on:click="$emit('filter-brand','BMW')">BMW</button>
            </div>
          </li>
          <li>
            <div>
              <button type="submit" class="carFilterItem" v-on:click="$emit('filter-brand','Ferrari')">Ferrari</button>
            </div>
          </li>
          <li>
            <div>
              <button type="submit" class="carFilterItem" v-on:click="$emit('filter-brand','Ford')">Ford</button>
            </div>
          </li>
          <li>
            <div>
              <button type="submit" class="carFilterItem" v-on:click="$emit('filter-brand','kia')">KIA</button>
            </div>
          </li>
          <li>
            <div>
              <button type="submit" class="carFilterItem" v-on:click="$emit('filter-brand','holden')">Holden</button>
            </div>
          </li>
          <li>
            <div>
              <button type="submit" class="carFilterItem" v-on:click="$emit('filter-brand','nissan')">Nissan</button>
            </div>
          </li>
          <li>
            <form>
              <button
                type="submit"
                class="carFilterItem"
                v-on:click="$emit('filter-brand','lamborghini')"
              >Lamborghini</button>
            </form>
          </li>
          <li>
            <div>
              <button type="submit" class="carFilterItem" v-on:click="$emit('filter-brand','isuzu')">ISUZU</button>
            </div>
          </li>
          <li>
            <div>
              <button
                type="submit"
                class="carFilterItem"
                v-on:click="filterWord('range rover')"
              >Range Rover</button>
            </div>
          </li>
          <li>
            <div>
              <button type="submit" class="carFilterItem" v-on:click="$emit('filter-brand','toyota')">Toyota</button>
            </div>
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
            <div>
              <button type="button" class="carFilterItem" v-on:click="$emit('filter-seat', 7)">7</button>
            </div>
          </li>
          <li>
            <div>
              <button type="button" class="carFilterItem" v-on:click="$emit('filter-seat', 5)">5</button>
            </div>
          </li>
          <li>
            <div>
              <button type="button" class="carFilterItem" v-on:click="$emit('filter-seat', 4)">4</button>
            </div>
          </li>
          <li>
            <div>
              <button type="button" class="carFilterItem" v-on:click="$emit('filter-seat', 2)">2</button>
            </div>
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
            <div>
              <button
                type="button"
                class="carFilterItem"
                v-on:click="$emit('filter-gear','automatic')"
              >Automatic</button>
            </div>
          </li>
          <li>
            <div>
              <button type="button" class="carFilterItem" v-on:click="$emit('filter-gear','manual')">Manual</button>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <button type="button" class="carFilterItem" v-on:click="$router.go()">Clear filter</button>
  </div>
</template>



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