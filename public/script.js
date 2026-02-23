window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("book-form");
  const titleInput = document.getElementById("title");
  const priceInput = document.getElementById("price");
  const genreSelect = document.getElementById("genre");
  const tableBody = document
    .getElementById("books-table")
    .querySelector("tbody");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value.trim();
    const price = priceInput.value.trim();
    const genre = genreSelect.value;

    if (!title || !price || !genre) {
      alert("Please fill in all fields before adding a book.");
      return;
    }

    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = title;

    const priceCell = document.createElement("td");
    priceCell.textContent = Number(price).toFixed(2);

    const genreCell = document.createElement("td");
    genreCell.textContent = genre;

    row.appendChild(titleCell);
    row.appendChild(priceCell);
    row.appendChild(genreCell);

    tableBody.appendChild(row);

    form.reset();
    genreSelect.value = "";
  });
});