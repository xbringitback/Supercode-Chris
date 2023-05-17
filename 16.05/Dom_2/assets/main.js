const allButtons = document.querySelectorAll("button");
const ul = document.body.firstElementChild;
const output = document.querySelector("output");

allButtons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    if(index === 0) {
      const liFirstEl = ul.firstElementChild.innerHTML;
      output.innerHTML = liFirstEl;
    } else if (index === 1){
      const liLastEl = ul.lastElementChild.innerHTML;
      output.innerHTML = liLastEl;
    } else if (index === 2){
      const nextElSib = ul.firstElementChild.nextElementSibling.innerHTML;
      output.innerHTML = nextElSib;
    }else {
      const previousElSib = ul.lastElementChild.previousElementSibling.innerHTML;
      output.innerHTML = previousElSib;
    }
  })
})