<!-- @Author Yongqian huang 08/2020 -->
<template>
     <div>
      <div class="description" :class="desClass">
        <h1> {{ title }} </h1>
        <p v-html="description">
        </p>
      </div>
    </div>
</template>

<script>
export default {
    name: "Parralax",
    props: ["title", "description", "desClass"]
}
</script>


<style scoped>
.description.main {
  left: 50%;
  top: 50%;
}
.p1,
.p2,
.p3 {
  height: 900px;
}


.car-list-btn {
  border: 1px solid black;
  border-radius: 40px;
  color: black;
  box-shadow: none;
  text-shadow: none;
  padding: 0.3rem 0.8rem;
  background: 0 0;
  transition: background-color 0.25s;
  outline: 0;
}

.description.family {
  text-align: left;
  top: 20%;
  left: 100%;
  color: black;
}

.description.purpose {
  text-align: right;
  color: black;
  top: 25%;
}

</style>