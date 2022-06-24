function animtionForm() {
  const arrows = document.querySelectorAll(".fa-angle-down");

  arrows.forEach((arrow) => {
    // cheack the informtion
    arrow.addEventListener("click", () => {
      // if the corrant box is okay we can jump to the othe box mena input
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling; // !! nextSibling only get /n choose Element one this time
      //   check for validation
      // look this input it's mean the value of you text that you input than , that thing go to cheack in uservalidation.
      if (input.type === "text" && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "email" && validateEmail(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "password" && validatePassword(input)) {
        nextSlide(parent, nextForm);
      } else {
        parent.style.animation = "shake 0.5s";
      }
      // get animation to do it more then one time
      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      });
    });
  });
}

// check for input if empty or not and also more than 6 cher
function validateUser(user) {
  if (user.value.length < 6) {
    console.log("Not enough characteers");
    error("#bf202ff2");
  } else {
    error("#20bfa9");
    // we need this true for validation up function
    return true;
  }
}

// check for input if valid or not

function validateEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validation.test(email.value)) {
    error("#20bfa9");
    return true;
  } else {
    error("#bf202ff2");
  }
}
// check for input if valid or not and also more than 6 cher

function validatePassword(password) {
  const validation = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (validation.test(password.value)) {
    error("#20bfa9");
    return true;
  } else {
    error("#bf202ff2");
    if (password.value == "") {
    } else {
      console.log("something here");
    }
  }
}

function nextSlide(parent, nextForm) {
  parent.classList.add("innactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
}

// chnage color of background
function error(color) {
  document.body.style.backgroundColor = color;
}

animtionForm();
