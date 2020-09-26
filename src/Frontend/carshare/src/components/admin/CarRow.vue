/*************************************
 * @AUTHOR YONGQIAN HUANG 10/09/2020 *
                 Yongqian Huang Make authorize mixin global 24/09/020                *
 *************************************/
<template>

    <tr>
      <td>
        <input type="text" class="form-control" :value="car.name" :id="'name.' + car.id" />
      </td>
      <td>
        <input type="text" class="form-control" :value="car.brand" :id="'brand.' + car.id" />
      </td>
      <td>
        <input type="text" class="form-control" :value="car.model" :id="'model.' + car.id" />
      </td>
      <td>
        <input type="text" class="form-control" :value="car.addons" :id="'addons.' + car.id" />
      </td>
      <td>
        <input type="number" class="form-control" :value="car.seats" :id="'seats.' + car.id" />
      </td>
      <td>
        <input type="number" class="form-control" :value="car.luggages" :id="'luggages.' + car.id" />
      </td>
      <td>
        <input type="number" class="form-control" :value="car.doors" :id="'doors.' + car.id" />
      </td>
      <td>
        <input type="number" class="form-control" :value="car.price" :id="'price.' + car.id" />
      </td>
      <td>
        <input
          type="checkbox"
          class="form-control"
          :checked="car.available"
          :id="'available.' + car.id"
        />
      </td>
      <td>
        <div>{{ car.createdAt | formatDate }}</div>
      </td>
      <td>
        <div>{{ car.updatedAt | formatDate }}</div>
      </td>
      <td>
        <div>{{ car.viewed }}</div>
      </td>
      <td>
        <button class="btn btn-primary" @click="patch">Patch</button>
      </td>
      <td>
        <button class="btn btn-primary" @click="showModal">Image</button>
        <uploadCarImage v-show="isModalVisible" v-bind:carid="car.id" @close="closeModal" />
      </td>
      <td>
        <a @click='deleteCar' style="cursor: pointer">
          <font-awesome-icon icon="trash-alt" />
        </a>
      </td>
  
    </tr>
    
</template>

<script>
import uploadCarImage from "./UploadCarImage";
export default {
  props: ["car"],
  components: {
    uploadCarImage
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    patch() {
      const submitData = {
        name: this.getInputValue("name"),
        brand: this.getInputValue("brand"),
        model: this.getInputValue("model"),
        addons: this.getInputValue("addons"),
        seats: this.getInputValue("seats"),
        luggages: this.getInputValue("luggages"),
        doors: this.getInputValue("doors"),
        price: this.getInputValue("price"),
        available: this.getInputChecked("available")
      };

      this.$axios
        .patch(`${this.$carshare}/cars/${this.car.id}`, submitData, {
          headers: this.header
        })
        .then(res => {
          if (res.data.message == "fail") {
            res.data.errors.forEach(error => {
              this.flashMessage.error({
                title: "Update detail",
                message: error
              });
            });
            return;
          }

          this.flashMessage.success({
            title: "Update success!",
            message: "Update successfully!"
          });
        })
        .catch(err => console.log(err));
    },
    getInputValue(field) {
      return document.getElementById(`${field}.${this.car.id}`).value;
    },
    getInputChecked(field) {
      return document.getElementById(`${field}.${this.car.id}`).checked;
    },
    deleteCar(){
       if(confirm("Do you really want to delete the car?")){
          this.$axios.delete(`${this.$carshare}/cars/${this.car.id}`, {headers: this.header})
            .then(res => {
                if (res.data.message == "fail") {
                  this.flashMessage.error({
                    title: "Error!",
                    message: "Unexcpted error!"
                  });
                  return;
                }

                this.flashMessage.success({
                  title: "Remove success!",
                  message: "Remove successfully!"
                });
                this.$router.go();
            })
            .catch(err => console.log(err));
       }
    }
  }
};
</script>

<style scoped>
.item {
  display: inline-block;
  margin: 10px;
  width: 125px;
}
</style>