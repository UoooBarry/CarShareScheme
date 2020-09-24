<template>
  <div>
    <a class="chatbox">
      <font-awesome-icon icon="comment-dots" id="chat-icon" @click="openForm" />
    </a>

    <div class="chat-popup" id="myForm">
      <div class="form-container">
        <div class="chat-tile row">
          <div class="col-auto">
            <h1>Chat</h1>
          </div>
          <div class="col" id="close-icon">
            <font-awesome-icon icon="times-circle" @click="closeForm" />
          </div>
        </div>
        <hr class="my-3" />
        <div class="chatarea-cover">
          <div id="chatarea"></div>
        </div>

        <input id="chatinput" type="text" placeholder="Say something..." autocomplete="off" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.chatbox {
  display: block;
  cursor: pointer;
  opacity: 0.8;
  position: fixed;
  bottom: 23px;
  left: 28px;
  font-size: 30px;
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.15);
  padding: 5px;
}

/* The popup chat - hidden by default */
.chat-popup {
  display: none;
  position: fixed;
  bottom: 0;
  left: 15px;
  border: 3px solid #f1f1f1;
  z-index: 9;
}

/* Add styles to the form container */
.form-container {
  width: 300px;
  padding: 10px;
  background-color: white;
}
.chatarea-cover {
  max-height: 200px;
  overflow-y: scroll;
}
#chatarea {
  padding-right: 10px;
  width: 300px;
  height: 200px;
  display: table-cell;
  vertical-align: bottom;
}
/* Full-width textarea */
.form-container input {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
  resize: none;
}

/* When the textarea gets focus, do something */
.form-container input:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for the submit/send button */
.form-container .btn {
  background-color: #4caf50;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
  opacity: 0.8;
}

#close-icon {
  text-align: right;
  font-size: 24px;
  cursor: pointer;
}
/* Add a red background color to the cancel button */
.form-container .cancel {
  background-color: red;
}

/* Add some hover effects to buttons */
.form-container .btn:hover,
.open-button:hover {
  opacity: 1;
}
</style>

<script>
export default {
  methods: {
    openForm() {
      document.getElementById("myForm").style.display = "block";
    },

    closeForm() {
      document.getElementById("myForm").style.display = "none";
    }
  }
};
</script>