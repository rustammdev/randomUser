// const { resourceUsage } = require("process");
// const { json } = require("stream/consumers");

// api
const API = "https://randomuser.me/api/?results=9";

// for leader
const overlay = document.getElementById("overlay");

//toggle loader
const toggleLoader = (param) => {
  if (param) {
    overlay.classList.add("hidden");
  } else {
    overlay.classList.remove("hidden");
  }
};

const getDate = (resourse) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    
    request.addEventListener("readystatechange", () => {
      toggleLoader(true);
      if (request.readyState < 4) {
        toggleLoader(false);
      }
      if (request.readyState === 4 && request.status === 200) {
        const date = JSON.parse(request.responseText);
        resolve(date);
      } else if (request.readyState === 4) {
        toggleLoader(false);
        reject("Something went wrong !");
      }
    });

    // open
    request.open("GET", resourse);
    //send
    request.send();
    toggleLoader();
  });
};
