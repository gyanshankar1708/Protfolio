let elem = document.getElementById("display");
let arr = ["Frontend Developer...", "Web Designer", "Java Programmer..."];

let arrIndex = 0;
let charIndex = 0;
let isDeleting = false;

let interval = setInterval(() => {
  let currentLine = arr[arrIndex];

  if (!isDeleting) {
    elem.innerHTML += currentLine.charAt(charIndex);
    charIndex++;

    if (charIndex === currentLine.length) {
      isDeleting = true;
    }
  } else {
    elem.innerHTML = elem.innerHTML.substring(0, elem.innerHTML.length - 1);

    if (elem.innerHTML === " ") {
      isDeleting = false;
      charIndex = 0;
      arrIndex = (arrIndex + 1) % arr.length;
    }
  }
}, 100);

let nav = document.getElementById("scroll");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
});

let btn = document.getElementById("submit");
btn.addEventListener("click",()=>{
  alert("Message sent");
})
