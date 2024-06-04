// Fungsi untuk menampilkan atau menyembunyikan tombol berdasarkan posisi scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var toTopBtn = document.getElementById("toTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}

// Fungsi untuk kembali ke atas
function scrollToTop() {
  document.body.scrollTop = 0; // Untuk Safari
  document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
}

// Function to create card HTML
function createCard(data) {
  const card = document.createElement("div");
  card.className = "card rounded-4 mb-3";
  card.style.maxWidth = "auto";

  card.innerHTML = `
    <div class="row g-0">
      <div class="col-xl-2 col-md-3 ms-md-4 my-4 d-flex justify-content-center">
        <img src="${data.image}" class="img-fluid rounded-2" alt="${data.title}" width="200" />
      </div>
      <div class="col-md-8 d-flex align-items-center mx-right">
        <div class="card-body">
          <h5 class="card-title poppins-semibold">${data.title}</h5>
          <p class="card-text poppins-light">${data.description}</p>
          <a href="${data.link}" class="card-link poppins-medium bottom-0"><i class="bi bi-box-arrow-up-right me-2"></i>Go to</a>
        </div>
      </div>
    </div>
  `;

  return card;
}

// Function to append cards to container
function appendCardsToContainer(container, dataArray) {
  dataArray.forEach((item) => {
    const card = createCard(item);
    container.appendChild(card);
  });
}

// Load data from JSON file
async function loadDataFromJSONFile(file) {
  try {
    const response = await fetch(file);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

// Main function to load data and create cards
async function main() {
  const dataFile = "dataArtikel.json";
  const cardsContainer = document.getElementById("cardsContainer");
  const data = await loadDataFromJSONFile(dataFile);
  if (data) {
    appendCardsToContainer(cardsContainer, data);
  }
}

// Call main function to start the process
main();
