/*
    @Author Yongqian Huang 1/10/2020
*/

<template>
  <div class="review-section">
    <div v-for="comment in comments" v-bind:key="comment.id">
      <div>
        <CommentRow :comment="comment" />
      </div>
    </div>
    <div class="page-footer" :if="comments">
      <jw-pagination
        :items="comments"
        :pageSize="4"
        @changePage="onChangePage"
        :labels="customLabels"
      ></jw-pagination>
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