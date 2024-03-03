const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

// Adjust for your container size
const dpr = window.devicePixelRatio || 1;
canvas.width = canvas.clientWidth * dpr;
canvas.height = canvas.clientHeight * dpr;
ctx.scale(dpr, dpr);

// Star representation
function Star() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.width;
  this.size = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3 pixels
  switch (this.size) {
    case 1:
      this.speed = 0.2; // Fastest speed stars
      break;
    case 2:
      this.speed = 0.15; // Medium speed stars
      break;
    case 3:
      this.speed = 0.1; // Slowest speed stars
      break;
    default:
      this.speed = 1; // A default in case something unexpected happens
  }
}

let stars = [];
const numStars = 1000; // Adjust for density

// Initialize stars
for (let i = 0; i < numStars; i++) {
  stars.push(new Star()); // Create the star
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  stars.forEach((star) => {
    ctx.fillRect(star.x, star.y, star.size, star.size);
    star.y -= star.speed;

    // Reset stars that go off-screen
    if (star.y < -10) {
      star.y = canvas.height + Math.random() * 50;
      star.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animate);
}

animate();
