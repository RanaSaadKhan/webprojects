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
      setTimeout(typeText, 10); // Calls typeText again after a delay of 50ms
    }
  }

  typeText(); // Initiates the typing effect
}
// Navbar disappearance on scroll
// Navbar disappearance on scroll
window.onscroll = function() {
  const navbar = document.querySelector('nav');
  const scrollPosition = window.scrollY;

  // Adjust navbar opacity and background color on scroll
  if (scrollPosition > 100) {
    navbar.classList.add('scrolled');  // Add class for scrolled effect
  } else {
    navbar.classList.remove('scrolled');
  }

  // Background change on scroll for about section
  const aboutSection = document.getElementById('about');
  const scrollY = window.scrollY;

  // Apply the background image change gradually (adjust opacity with scroll)
  const opacity = Math.min(scrollY / window.innerHeight, 1);
  aboutSection.style.background = `rgba(0, 0, 0, ${opacity}) url('stars-galaxy.gif') repeat center center fixed`;
  aboutSection.style.backgroundSize = 'auto';  // Keep the image repeating
};

// Adding smooth opacity change to navbar on scroll
document.addEventListener('scroll', function() {
  let navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
    navbar.style.opacity = '0.6';  // Slightly transparent navbar
  } else {
    navbar.style.opacity = '1';  // Fully visible navbar
  }
});

