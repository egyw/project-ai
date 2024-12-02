const positions = [
                          [650, 154], [803, 154], [962, 154], [1124, 154], [1270, 154],
  [395, 279],             [650, 279], [803, 279], [962, 279], [1124, 279], [1270, 279],              [1540, 279],
              [520, 340],                                                               [1408, 340],
  [395, 406], [520, 406], [650, 406], [803, 406], [962, 406], [1124, 406], [1270, 406], [1408, 406], [1540, 406],
              [520, 478],                                                               [1408, 478],
  [395, 538],             [650, 538], [803, 538], [962, 538], [1124, 538], [1270, 538],              [1540, 538],
                          [650, 665], [803, 665], [962, 665], [1124, 665], [1270, 665]
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

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// Fungsi untuk menggambar garis antar node
function drawEdges() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Membersihkan canvas setiap kali menggambar

  // Tentukan pasangan node yang ingin dihubungkan dengan garis (contoh di sini saya menghubungkan node berturut-turut)
  const edges = [
    [0, 6], [0, 1], [0, 7],   //1
    [1, 0], [1, 7], [1, 2],  //2
    [2, 1], [2, 7], [2, 8], [2, 9], [2, 3],  //3
    [3, 2], [3, 9], [3, 4],  //4
    [4, 3], [4, 9], [4, 10],  //5
    [5, 14], [5, 12],   //6
    [6, 0], [6, 16], [6, 7],   //7
    [7, 1], [7, 0], [7, 6], [7, 16], [7, 17], [7, 18], [7, 8], [7, 2], //8
    [8, 2], [8, 7], [8, 18], [8, 9],  //9
    [9, 3], [9, 2], [9, 8], [9, 18], [9, 19], [9, 20], [9, 10], [9, 4],  //10
    [10, 4], [10, 9], [10, 20],    //11
    [11, 13], [11, 22],  //12
    [12, 5], [12, 15], [12, 16],  //13
    [13, 20], [13, 21], [13, 11], //14
    [14, 5], [14, 25], [14, 15],  //15
    [15, 12], [15, 14], [15, 23], [15, 16],  //16
    [16, 6], [16, 12], [16, 15], [16, 23], [16, 26], [16, 27], [16, 27], [16, 7],  //17
    [17, 7], [17, 16], [17, 27], [17, 18],   //18
    [18, 8], [18, 7], [18, 17], [18, 27], [18, 28], [18, 29], [18, 19], [18, 9],    //19
    [19, 9], [19, 18], [19, 29], [19, 20],   //20
    [20, 10], [20, 9], [20, 19], [20, 29], [20, 30], [20, 24], [20, 21], [20, 13],  //21
    [21, 13], [21, 20], [21, 24], [21, 22],  //22
    [22, 11], [22, 21], [22, 31],  //23
    [23, 15], [23, 25], [23, 16],  //24
    [24, 21], [24, 20], [24, 31],  //25
    [25, 14], [25, 23],  //26
    [26, 16], [26, 32], [26, 27],  //27
    [27, 17], [27, 16], [27, 26], [27, 32], [27, 33], [27, 34], [27, 28], [27, 18],  //28
    [28, 18], [28, 27], [28, 34], [28, 29],  //29
    [29, 19], [29, 18], [29, 28], [29, 34], [29, 35], [29, 36], [29, 30], [29, 20],   //30
    [30, 20], [30, 29], [30, 36],  //31
    [31, 22], [31, 24], //32
    [32, 26], [32, 33], [32, 27],  //33
    [33, 27], [33, 32], [33, 34],  //34
    [34, 28], [34, 27], [34, 33], [34, 35], [34, 29], //35
    [35, 29], [35, 34], [35, 36],  //36
    [36, 30], [36, 29], [36, 35]  //37
  ];

  // Menggambar garis berdasarkan pasangan node yang ada
  edges.forEach(([startIndex, endIndex]) => {
    const [x1, y1] = positions[startIndex];
    const [x2, y2] = positions[endIndex];
    
    // Menyiapkan garis (edge) dengan warna dan ketebalan
    ctx.beginPath();
    ctx.moveTo(x1 + 25, y1 + 25); // Pusat node pertama
    ctx.lineTo(x2 + 25, y2 + 25); // Pusat node kedua
    ctx.strokeStyle = '#3498db'; // Warna garis
    ctx.lineWidth = 2; // Ketebalan garis
    ctx.stroke();
  });
}

// Memanggil fungsi untuk menggambar edges setelah semua node dimuat
drawEdges();