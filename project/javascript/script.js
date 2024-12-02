const positions = [
  [650, 154], [803, 154], [962, 154], [1124, 154], [1270, 154],
  [395, 279], [649, 279], [801, 279], [965, 279], [1127, 279],
  [1269, 279], [1536, 279],
  [520, 340], [1408, 340],
  [396, 406], [522, 406], [650, 406], [798, 406], [964, 406],
  [1130, 406], [1274, 406], [1409, 406], [1540, 406],
  [520, 478], [1410, 478],
  [389, 538], [648, 538], [798, 538], [966, 538], [1135, 538],
  [1278, 538], [1536, 538],
  [650, 665], [806, 665], [969, 665], [1138, 665], [1281, 665]
];

// Membuat 37 node dengan posisi yang sudah ditentukan
const nodes = [];
for (let i = 0; i < 37; i++) {
  const node = document.createElement('div');
  node.classList.add('node');
  const [x, y] = positions[i];
  node.style.left = `${x}px`;
  node.style.top = `${y}px`;
  node.textContent = i + 1;
  document.body.appendChild(node);

  nodes.push(node);
}

// Fungsionalitas drag and drop
let isDragging = false;
let currentNode = null;
let offsetX, offsetY;

nodes.forEach(node => {
  node.addEventListener('mousedown', (e) => {
      isDragging = true;
      currentNode = node;
      offsetX = e.clientX - node.offsetLeft;
      offsetY = e.clientY - node.offsetTop;
      node.style.zIndex = 10; // Membuat node berada di atas lainnya saat di-drag
  });
});

document.addEventListener('mousemove', (e) => {
  if (isDragging && currentNode) {
      currentNode.style.left = `${e.clientX - offsetX}px`;
      currentNode.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener('mouseup', (e) => {
  if (isDragging && currentNode) {
      isDragging = false;
      currentNode.style.zIndex = ''; // Mengembalikan zIndex
      const posX = e.clientX - offsetX;
      const posY = e.clientY - offsetY;

      // Menampilkan posisi X dan Y pada output
      document.getElementById('output').textContent = `Posisi Node ${currentNode.textContent}: X = ${posX.toFixed(2)}, Y = ${posY.toFixed(2)}`;
  }
});