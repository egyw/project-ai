const canvas = document.getElementById("nodeCanvas");
const ctx = canvas.getContext("2d");

// Tentukan ukuran canvas
canvas.width = 800;
canvas.height = 600;

// Data posisi node (x, y)
const nodes = [
  { x: 100, y: 100 },
  { x: 200, y: 150 },
  { x: 300, y: 200 },
  { x: 400, y: 250 },
  { x: 500, y: 300 },
  { x: 600, y: 350 },
  { x: 700, y: 400 },
  { x: 150, y: 100 },
  { x: 250, y: 150 },
  { x: 350, y: 200 },
  { x: 450, y: 250 },
  { x: 550, y: 300 },
  { x: 650, y: 350 },
  { x: 750, y: 400 },
  { x: 100, y: 500 },
  { x: 200, y: 550 },
  { x: 300, y: 100 },
  { x: 400, y: 150 },
  { x: 500, y: 200 },
  { x: 600, y: 250 },
  { x: 700, y: 300 },
  { x: 150, y: 400 },
  { x: 250, y: 450 },
  { x: 350, y: 500 },
  { x: 450, y: 550 },
  { x: 550, y: 100 },
  { x: 650, y: 150 },
  { x: 750, y: 200 },
  { x: 100, y: 300 },
  { x: 200, y: 350 },
  { x: 300, y: 400 },
  { x: 400, y: 450 },
  { x: 500, y: 500 },
  { x: 600, y: 550 },
  { x: 700, y: 100 },
  { x: 400, y: 300 },
  { x: 500, y: 350 }
];

// Fungsi menggambar node
function drawNodes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Bersihkan canvas

  nodes.forEach(node => {
    ctx.beginPath();
    ctx.arc(node.x, node.y, 10, 0, Math.PI * 2); // Buat lingkaran dengan radius 10
    ctx.fillStyle = "#007BFF"; // Warna biru
    ctx.fill();
    ctx.strokeStyle = "#000"; // Warna tepi hitam
    ctx.stroke();
  });
}

// Panggil fungsi untuk menggambar node
drawNodes();
