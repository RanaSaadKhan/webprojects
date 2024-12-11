const dynamicText = document.querySelector('h1 span');
const words = ["Web Developer", "HTML Expert", "CSS Designer", "Bootstrap Enthusiast", "JavaScript Coder", "jQuery Specialist", "Bootstrap Master"];


let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {

    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
}
typeEffect();

//const introText = document.querySelector('h1 p');

window.onload = function() {
  const introText = "Hi, I'm Saad Muhammad Khan, a passionate web developer with a strong foundation in both front-end and back-end technologies. I'm excited to build creative and functional websites that bring ideas to life. My goal is to work with a dynamic team, learn from experienced professionals, and contribute to impactful projects. Let's connect and build something amazing together!"; 
  let index = 0;
  const introParagraph = document.getElementById('intro');

  function typeText() {
    if (index < introText.length) {
      introParagraph.innerHTML += introText.charAt(index); // Adds one character at a time
      index++; // Increments the index
      setTimeout(typeText, 50); // Calls typeText again after a delay of 50ms
    }
  }

  typeText(); // Initiates the typing effect
}
