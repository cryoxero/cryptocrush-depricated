const codebreakerEl = document.getElementById('codebreaker');
const text = "CRACK THE CODE. MASTER THE SECRETS.";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

let resolvedCount = 0;

function randomChar() {
  return letters.charAt(Math.floor(Math.random() * letters.length));
}

function updateDisplay() {
  let output = '';
  for(let i=0; i < text.length; i++) {
	if(i < resolvedCount) {
	  output += text.charAt(i);
	} else if (text.charAt(i) === ' ') {
	  output += ' ';
	} else {
	  output += randomChar();
	}
  }
  codebreakerEl.textContent = output;
}

function resolveNextChar() {
  if(resolvedCount < text.length) {
	if(text.charAt(resolvedCount) === ' ') {
	  resolvedCount++;
	  resolveNextChar();
	} else {
	  resolvedCount++;
	}
  }
}

function animationLoop() {
  updateDisplay();
  if(resolvedCount < text.length) {
	resolveNextChar();
	setTimeout(animationLoop, 43); // faster speed: ~1.2 seconds total
  } else {
	codebreakerEl.textContent = text; // ensure final text stable
  }
}

animationLoop();
