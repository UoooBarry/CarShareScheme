/*
    @Author Yongqian Huang 1/10/2020
*/
<template>
  <div class="reviews">
    <div class="row blockquote review-item">
      <div class="col-md-3 text-center">
        <img
          class="rounded-circle reviewer"
          :src=" 'https://carshare-image-pbd.s3-ap-southeast-2.amazonaws.com/Avatar/' + comment.user.id"
          alt="Avatar"
        />
        <div class="caption">
          <small>
            by
            {{comment.user.first_name}} {{comment.user.family_name}}
          </small>
        </div>
      </div>
      <div class="col-md-9">
        <div class="ratebox text-center">
          <font-awesome-icon icon="star" class="rate-star" />
          <font-awesome-icon icon="star" class="rate-star" />
          <font-awesome-icon icon="star" class="rate-star" />
          <font-awesome-icon icon="star" class="rate-star" />
          <font-awesome-icon icon="star" class="rate-star" />
        </div>
        <p class="review-text">{{comment.comment}}</p>

        <small class="review-date">{{comment.createdAt | formatDate }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentRow",
  props: ["comment"],
  mounted() {
    var i = 0;
    for (i; i < this.comment.stars; i++) {
      this.$el.getElementsByClassName("rate-star")[i].classList.add("checked");
    }
  }
};
</script>

<style scoped>
.reviews {
  padding: 15px;
  max-width: 768px;
  margin: 0 auto;
}

.review-item {
  background-color: white;
  padding: 15px;
  margin-bottom: 5px;
  box-shadow: 1px 1px 5px #343a40;
}

.review-item .review-date {
  color: #cecece;
}
.review-item .review-text {
  font-size: 16px;
  font-weight: normal;
  margin-top: 5px;
  color: #343a40;
}

.review-item .reviewer {
  width: 100px;
  height: 100px;
  border: 1px solid #cecece;
}

/****Rating Stars***/
.raterater-bg-layer {
  color: rgba(0, 0, 0, 0.25);
}
.raterater-hover-layer {
  color: rgba(255, 255, 0, 0.75);
}
.raterater-hover-layer.rated {
  /* after the user selects a rating */
  color: rgba(255, 255, 0, 1);
}
.raterater-rating-layer {
  color: rgba(255, 155, 0, 0.75);
}
.raterater-outline-layer {
  color: rgba(0, 0, 0, 0.25);
}

/* don't change these - you might break something.. */
.raterater-wrapper {
  overflow: visible;
}

.software .raterater-wrapper {
  margin-top: 4px;
}

.raterater-layer,
.raterater-layer i {
  display: block;
  position: absolute;
  overflow: visible;
  top: 0px;
  left: 0px;
}
.raterater-hover-layer {
  display: none;
}
.raterater-hover-layer i,
.raterater-rating-layer i {
  width: 0px;
  overflow: hidden;
}

.checked {
  color: orange;
}
</style>