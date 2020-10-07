/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 25/09/2020                *
              Yongqian Huang updated at: 03/10/2020 rewrite filter   *
              Yongqian Huang updated at: 06/10/2020 imporve filter   *
 ***********************************************************************/
<template>
  <div class="wrapper">
    <h3>{{ $t('filter') }}:</h3>
    <ul>
      <li>
        <input type="checkbox" id="list-item-1" />
        <label for="list-item-1" class="first filter-label">
          {{ $t('make') }}
          <font-awesome-icon icon="plus" class="plus" />
        </label>
        <ul>
          <li>
            <input
              type="checkbox"
              class="form-check-input"
              v-on:change="$emit('filter-brand','Audi', $event.target.checked)"
              id="brand-audi"
              name="brand"
            />
            <label for="brand-audi" class="filter-check-label">Audi</label>
          </li>
          <li>
            <input
              type="checkbox"
              class="form-check-input"
              v-on:change="$emit('filter-brand','BMW', $event.target.checked)"
              id="brand-bmw"
              name="brand"
            />
            <label for="brand-bmw" class="filter-check-label">Bmw</label>
          </li>
          <li>
            <input
              type="checkbox"
              class="form-check-input"
              v-on:change="$emit('filter-brand','Ferrari', $event.target.checked)"
              id="brand-ferrari"
              name="brand"
            />
            <label for="brand-ferrari" class="filter-check-label">Ferrari</label>
          </li>
          <li>
            <input
              type="checkbox"
              class="form-check-input"
              v-on:change="$emit('filter-brand','ford', $event.target.checked)"
              id="brand-ford"
              name="brand"
            />
            <label for="brand-ford" class="filter-check-label">Ford</label>
          </li>
          <li>
            <input
              type="checkbox"
              class="form-check-input"
              v-on:change="$emit('filter-brand','kia', $event.target.checked)"
              id="brand-kia"
              name="brand"
            />
            <label for="brand-kia" class="filter-check-label">Kia</label>
          </li>
          <li>
            <input
              type="checkbox"
              class="form-check-input"
              v-on:change="$emit('filter-brand','holden', $event.target.checked)"
              id="brand-holden"
              name="brand"
            />
            <label for="brand-holden" class="filter-check-label">Holden</label>
          </li>
          <li>
            <input
              type="checkbox"
              class="form-check-input"
              v-on:change="$emit('filter-brand','nissan', $event.target.checked)"
              id="brand-nissan"
              name="brand"
            />
            <label for="brand-nissan" class="filter-check-label">Nissan</label>
          </li>
          <li>
            <input
              type="checkbox"
              class="form-check-input"
              v-on:change="$emit('filter-brand','lamborghini', $event.target.checked)"
              id="brand-lamborghini"
              name="brand"
            />
            <label for="brand-lamborghini" class="filter-check-label">Lamborghini</label>
          </li>
          <li>
            <input
              type="checkbox"
              class="form-check-input"
              v-on:change="$emit('filter-brand','isuzu', $event.target.checked)"
              id="brand-isuzu"
              name="brand"
            />
            <label for="brand-isuzu" class="filter-check-label">ISUZU</label>
          </li>
          <li>
            <input
              type="checkbox"
              class="form-check-input"
              v-on:change="$emit('filter-brand','range rover', $event.target.checked)"
              id="brand-range"
              name="brand"
            />
            <label for="brand-range" class="filter-check-label">Range Rover</label>
          </li>
          <li>
            <input
              type="checkbox"
              class="form-check-input"
              v-on:change="$emit('filter-brand','toyota', $event.target.checked)"
              id="brand-toyota"
              name="brand"
            />
            <label for="brand-toyota" class="filter-check-label">Toyota</label>
          </li>
        </ul>
      </li>
      <li>
        <input type="checkbox" id="list-item-2" />
        <label for="list-item-2" class="filter-label">
          {{ $t('seat') }}
          <font-awesome-icon icon="plus" class="plus" />
        </label>
        <ul>
          <li>
            <input
              type="checkbox"
              class="form-check-input"
              v-on:change="$emit('filter-seat',7, $event.target.checked)"
              id="seat-7"
              name="seat"
            />
            <label for="seat-7" class="filter-check-label">7</label>
          </li>
          <li>
            <input
              type="checkbox"
              class="form-check-input"
              v-on:change="$emit('filter-seat',5, $event.target.checked)"
              id="seat-5"
              name="seat"
            />
            <label for="seat-5" class="filter-check-label">5</label>
          </li>
          <li>
            <input
              type="checkbox"
              class="form-check-input"
              v-on:change="$emit('filter-seat',4, $event.target.checked)"
              id="seat-4"
              name="seat"
            />
            <label for="seat-4" class="filter-check-label">4</label>
          </li>
          <li>
            <input
              type="checkbox"
              class="form-check-input"
              v-on:change="$emit('filter-seat',2, $event.target.checked)"
              id="seat-2"
              name="seat"
            />
            <label for="seat-2" class="filter-check-label">2</label>
          </li>
        </ul>
      </li>

      <li>
        <input type="checkbox" id="list-item-3" />
        <label for="list-item-3" class="last filter-label">
          {{ $t('gear') }}
          <font-awesome-icon icon="plus" class="plus" />
        </label>
        <ul>
          <li>
            <input
              type="checkbox"
              class="form-check-input"
              v-on:change="$emit('filter-gear','automatic', $event.target.checked)"
              id="gear-automatic"
              name="gear"
            />
            <label for="gear-automatic" class="filter-check-label">Automatic</label>
          </li>
          <li>
            <input
              type="checkbox"
              class="form-check-input"
              v-on:change="$emit('filter-gear','manual', $event.target.checked)"
              id="gear-manual"
              name="gear"
            />
            <label for="gear-manual" class="filter-check-label">Manual</label>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>



<style scoped>
li ul li [type="checkbox"] {
  display: inline-block;
  cursor: pointer;
  transform: scale(1.5);

}
li ul li{
  padding: 10px 0 10px 30px;
  text-align: left;
}
.filter-check-label {
  display: inline-block;
  margin-left: 10px;
}
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
}

label.filter-label {
  padding: 10px;
  border-top: 1px solid #a9a0a0;
  margin-bottom: 0;
  text-align: left;
}

.filter-label:hover {
  background: #a9a0a0;
}

.filter-label.last {
  border-bottom: 1px solid #a9a0a0;
}

input[type="checkbox"] {
 display: none;
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
  border-bottom: 1px solid #fff;
}
</style>