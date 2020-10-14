<template>
  <div class="overdue-container">
    <div class="sub-header">
      <h1>Over due bills</h1>
    </div>

    <div v-if="bills.length">
      <div class="container alert alert-danger" role="alert">
        All of the overdue bills need to be paid and the car need to be returned in the same day. Each of the overdue rent will have at most 10 days to pay before polices take part in arrestment under article 24(1)(C) of Australian Consumer Law.
        All other information can be found relating to misconducts of our terms policy can be found
        <a
          href="/term"
          style="cursor: pointer; text-decoration: underline; color: black"
        >here</a>
      </div>
      <div v-for="bill in pageOfItems" v-bind:key="bill.id" class="container">
        <OverdueRow v-bind:bill="bill" />
      </div>
      <jw-pagination :items="bills" :pageSize="6" @changePage="onChangePage" :labels="customLabels"></jw-pagination>
    </div>
    <div v-else>
      <div class="container alert alert-dark" role="alert">You don't have any overdue bill in history</div>
    </div>
  </div>
</template>

<script>
const customLabels = {
  first: "First",
  last: "Last",
  previous: "<",
  next: ">"
};
import OverdueRow from "@/components/overdue/OverdueRow";
export default {
  name: "Overdue",
  components: {
    OverdueRow
  },
  data() {
    return {
      bills: [],
      pageOfItems: [],
      customLabels
    };
  },
  async created() {
    const response = await this.$axios.get(
      `${this.$carshare}/customers/overdue/all`,
      {
        headers: this.header
      }
    );
    this.bills = response.data.bills;
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    }
  }
};
</script>

<style scoped>
.overdue-container {
  min-height: 700px;
}
.sub-header {
  margin-bottom: 20px;
}
</style>>
