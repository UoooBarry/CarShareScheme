<template>
    <div id="tooltipContent">
      This car is {{carmodel}}
    </div>
</template>

<script>

export default {
  name: "CarTooltip",
  props: ["car"],
  methods: {},
  created() {
      console.log(this.car)
  }
};
</script>

<style scoped>
#tooltipContent {
  min-width: 200px;
  min-height: 400px;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  color: black;
}
</style>