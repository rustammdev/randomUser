const form = document.getElementById("form");
const formButton = document.getElementById("form__button");
const user = document.getElementById("user");
const deleteBtn = document.getElementById("delete__btn");
const clearBtn = document.getElementById("clear__button");

getDate(API)
  .then((e) => {
    console.log(e.results[0]);
  })
  .catch((e) => {
    console.log(e);
  });


console.log();

Array