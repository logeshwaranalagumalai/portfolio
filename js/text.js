let p = document.querySelector(".home h4"),
  text = "Full Stack Developer";
  
let index = 0;

function Typing() {
  index += 1;
  p.textContent = text.slice(0, index);
  if (index >= 24) {
    index = 0;
  }
}

setInterval(() => Typing(), 300);

function on(){
  alert('I will contact you soon');
}