// variabel untuk menyimpan air 
// dengan nilai awal nol (0) - sesuai ketentuan guru
let air = 0;

function siramTanaman() {
  // Tambah air +1 tiap klik
  air = air + 1;
  
  // update angka penyiraman
  document.getElementById('teks-porsi').innerText = air;
  
  if (air >= 20) {
    // 20+ siraman = BERBUNGA
    document.getElementById('foto-tanaman').innerText = "🌸";
    document.getElementById('status-tanaman').innerText = "TANAMAN BERBUNGA";
    
  } else if (air >= 10) {
    // 10-19 siraman = TUNAS
    document.getElementById('foto-tanaman').innerText = "🌱";
    document.getElementById('status-tanaman').innerText = "TUNAS";
    
  } else {
    // 0-9 siraman = BENIH
    document.getElementById('foto-tanaman').innerText = "🌰";
    document.getElementById('status-tanaman').innerText = "BENIH";
  }
}

// biar bisa dipanggil pakai nama lama juga (kalau di HTML masih beriMakan)
function beriMakan() {
  siramTanaman();
}