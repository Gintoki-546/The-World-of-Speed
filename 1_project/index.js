
// 🎲 Масив спорткарів
const cars = [ "Bugatti Chiron","SSC Tuatara", "Hennessey Venom F5","Koenigsegg Jesko Absolut","Rimac Nevera",
    "Ferrari SF90 Stradale","Lamborghini Aventador SVJ", "McLaren P1","Porsche 918 Spyder","Ford GT"];

// 🎯 Функція випадкового вибору
function randomCar() {
    const randomIndex = Math.floor(Math.random() * cars.length);
    const chosenCar = cars[randomIndex];

    document.getElementById("random-result").textContent ="🔥 Сьогодні твій спорткар: " + chosenCar;
}

// 📂 ВІДКРИТИ МОДАЛКУ
function openModal(title, img, speed, info) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-img").src = img;
    document.getElementById("modal-speed").textContent = speed;
    document.getElementById("modal-info").textContent = info;

    document.getElementById("carModal").style.display = "block";
}

// ❌ ЗАКРИТИ
function closeModal() {
    document.getElementById("carModal").style.display = "none";
}

// 🔲 Закриття при кліку поза вікном
window.onclick = function(event) {
    const modal = document.getElementById("carModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const btn = document.querySelector('.toggle-btn');
const paragraphs = document.querySelectorAll('.text-container p');

btn.addEventListener('click', function() {
  const isExpanded = btn.textContent === 'Менше';

  if (isExpanded) {
    // згорнути текст
    paragraphs.forEach((p, index) => {
      if (index !== 0) p.style.display = 'none';
    });
    btn.textContent = 'Детальніше';
  } else {
    // розгорнути текст
    paragraphs.forEach(p => p.style.display = 'block');
    btn.textContent = 'Менше';
  }
});
