const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

// Adjust for your container size
const dpr = window.devicePixelRatio || 1;
canvas.width = canvas.clientWidth * dpr;
canvas.height = canvas.clientHeight * dpr;
ctx.scale(dpr, dpr);

// Star representation
let starSpeed = 0.1;
function Star() {
  this.x = Math.random() * (canvas.width / dpr);
  this.y = Math.random() * (canvas.height / dpr);
  this.size = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3 pixels
  switch (this.size) {
    case 1:
      this.speed = starSpeed + 0.1; // Fastest speed stars
      break;
    case 2:
      this.speed = starSpeed + 0.05; // Medium speed stars
      break;
    case 3:
      this.speed = starSpeed; // Slowest speed stars
      break;
    default:
      this.speed = 1; // A default in case something unexpected happens
  }
}

let stars = [];
const numStars = 100; // Adjust for density

// Initialize stars
for (let i = 0; i < numStars; i++) {
  stars.push(new Star()); // Create the star
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  stars.forEach((star) => {
    ctx.fillRect(star.x, star.y, star.size, star.size); // Draw square
    star.y -= star.speed;

    // Reset stars that go off-screen
    if (star.y < -10) {
      star.y = canvas.height / dpr + Math.random() * 50;
      star.x = Math.random() * (canvas.width / dpr);
    }
  });

  requestAnimationFrame(animate);
}

animate();
