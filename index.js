




// Text to be displayed with typing effect
const textToType = "Software Developer and Web Developer";

// Get the container element where text will be displayed
const typingContainer = document.getElementById("typing-container");

// Function to simulate typing effect
function typeText(text, container) {
  let index = 0;
  const typingSpeed = 50; // Adjust the typing speed as needed (lower is faster)

  function type() {
    if (index < text.length) {
      container.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, typingSpeed);
    }
  }

  type(1);
}

// Call the function to initiate the typing effect
typeText(textToType, typingContainer);

//************************************************************************************* */