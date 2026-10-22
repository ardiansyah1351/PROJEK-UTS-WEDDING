const namaTamu = new URLSearchParams(location.search).get("to");
if (namaTamu) document.getElementById("nama-tamu").textContent = namaTamu;


document.getElementById("btn-buka").addEventListener("click", () => {
  document.body.classList.remove("terkunci");
  document.getElementById("mempelai").scrollIntoView({ behavior: "smooth" });
});


const target = new Date(document.getElementById("hitung").dataset.tanggal).getTime();
function hitung() {
  const selisih = Math.max(0, target - Date.now());
  const detik = Math.floor(selisih / 1000);
  document.getElementById("h-hari").textContent = Math.floor(detik / 864000);
  document.getElementById("h-jam").textContent = Math.floor((detik % 86400) / 3600);
  document.getElementById("h-menit").textContent = Math.floor((detik % 3600) / 60);
  document.getElementById("h-detik").textContent = detik % 60;
}
hitung();
setInterval(hitung, 1000);

document.getElementById("form-rsvp").addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const hadir = document.getElementById("hadir").value;
  const pesan = document.getElementById("pesan").value.trim();

  const item = document.createElement("div");
  item.className = "ucapan-item";
  const judul = document.createElement("small");
  judul.textContent = nama + " · " + hadir;
  const isi = document.createElement("p");
  isi.className = "mb-0";
  isi.textContent = pesan;
  item.append(judul, isi);

  document.getElementById("daftar-ucapan").prepend(item);
  e.target.reset();
});
