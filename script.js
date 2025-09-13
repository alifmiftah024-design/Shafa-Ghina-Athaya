const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");

// Mainkan lagu ulang tahun di piano setelah klik pertama (di layar 1)
document.addEventListener(
  "click",
  () => {
    if (document.getElementById("screen1").classList.contains("active")) {
      if (song1.paused) song1.play().catch(() => {});
    }
  },
  { once: true }
);

function goToScreen2() {
  // pindah layar
  document.getElementById("screen1").classList.remove("active");
  document.getElementById("screen2").classList.add("active");

  // stop lagu 1
  if (!song1.paused) {
    song1.pause();
    song1.currentTime = 0;
  }

  // mulai lagu 2
  song2.currentTime = 0;
  song2.play().catch(() => {});

  // scroll ke atas biar rapih
  window.scrollTo({ top: 0, behavior: "smooth" });
}
