// These are words/phrases the user could type in

const trigger = [
  ["hi", "hey", "hello", "good morning", "good afternoon", "start"],
  [
    "car",
    "what car do you have",
    "i am looking for car",
    "car suggestion",
    "cars",
  ],
  ["cheap", "cheap car", "cheap cars"],
  ["what", "why", "how", "where", "when"],
];

// These are bot responses, paired in order with the above 'trigger' phrases

const reply = [
  ["Hello, what can I help you today? Try 'Car' 'Support' 'FAQ'."],
  [
    "We have wide range of cars to choose from, from every day cars to traveling cars, or from family car to luxury cars.",
    "I can help you to find your car, Try to type in a keyword, for example 'traveling' 'family' 'luxury' 'cheap'.",
  ],
  ["How about Toyota?"],
  ["Yes?", "Can you be more specific?"],
];

// This is a small set of basically random 'catch alls' for anything that the user enters outside of the possible trigger phrases

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
];

// Same purpose as the 'alternative' but an attempt at being culturally relevant ;)

const coronavirus = ["Please stay home"];

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("chatinput");
  inputField.addEventListener("keydown", function(e) {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function output(input) {
  let product;

  //Transforms whatever the user inputs to lowercase and remove all chars except word characters, space, and digits
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

  // For example 'tell me a story' becomes 'tell me story'
  // Or 'i feel happy' -> 'happy'
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");

  // Searches for an exact match with the 'trigger' array, if there are none, it goes will check if message contains 'coronavirus,' and if not - random alternative
  if (compare(trigger, reply, text)) {
    product = compare(trigger, reply, text);
  } else if (text.match(/coronavirus/gi)) {
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  //update DOM
  addChat(input, product);
}

function compare(triggerArray, replyArray, string) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == string) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
}

function addChat(input, product) {
  const mainDiv = document.getElementById("chatarea");
  let userDiv = document.createElement("div");
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  userDiv.className = "userchat";
  userDiv.innerHTML = `You <div  class="user-response"><span>${input}</span></div> <p style="margin-top:15px">${dateTime}</p>`;
  mainDiv.appendChild(userDiv);
  let botDiv = document.createElement("div");
  botDiv.className = "botchat";
  botDiv.innerHTML = `<div class="bot-response"><span>${product}</span></div> Chatbot <p style="margin-top:15px">${dateTime}</p>`;
  mainDiv.appendChild(botDiv);
  updateScroll();

  speak(product);
}
var scrolled = false;
function updateScroll() {
  if (!scrolled) {
    var element = document.getElementById("chatarea-cover");
    element.scrollTop = element.scrollHeight;
  }
}

$("#chatarea-cover").on("scroll", function() {
  scrolled = true;
});
const synth = window.speechSynthesis;
let voices = synth.getVoices();

function speak(string) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "en-US";
  u.volume = 1; //0-1 interval
  u.rate = 1;
  u.pitch = 1; //0-2 interval
  synth.speak(u);
  debugger;
}
