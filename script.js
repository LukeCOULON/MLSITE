const command = document.getElementById("command");
const copyBtn = document.getElementById("copyBtn");
const copyStatus = document.getElementById("copyStatus");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(command.textContent.trim());
    copyBtn.textContent = "Copié ✓";
    copyStatus.textContent = "Commande copiée dans le presse-papiers.";
    setTimeout(() => {
      copyBtn.textContent = "Copier";
      copyStatus.textContent = "";
    }, 2200);
  } catch {
    copyStatus.textContent = "Copiez la commande manuellement.";
  }
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
document.querySelectorAll(".screen-card").forEach(card => {
  card.addEventListener("click", () => {
    lightboxImg.src = card.dataset.image;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});
document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}
