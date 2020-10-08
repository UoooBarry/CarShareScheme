/*
    @Author Yongqian Huang 1/10/2020
     Bach Dao updated 2/10/2020
*/

<template>
  <div class="review-section">
    <div class="page-footer" v-if="comments.length">
      <div v-for="comment in pageOfItems" v-bind:key="comment.id">
        <div>
          <CommentRow :comment="comment" />
        </div>
      </div>
      <jw-pagination
        :items="comments"
        :pageSize="4"
        @changePage="onChangePage"
        :labels="customLabels"
      ></jw-pagination>
    </div>
    <div class="page-footer" v-else>
      <h1>Be first to rent this car and leave review</h1>
    </div>
  </div>
</template>

<script>
import CommentRow from "./CommentRow";
const customLabels = {
  first: "First",
  last: "Last",
  previous: "<",
  next: ">"
};
export default {
  name: "CommentList",
  props: ["comments"],
  components: {
    CommentRow
  },
  data() {
    return {
      pageOfItems: [],
      customLabels
    };
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
.review-section {
  margin-left: 50px;
  width: 100%;
}
@media only screen and (max-width: 414px) {
  .review-section {
    margin-left: 0px;
  }
}
</style>