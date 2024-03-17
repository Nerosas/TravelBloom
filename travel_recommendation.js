const searchResults = document.getElementById("searchResults");
const btnReset = document.getElementById("btnReset");
const searchInput = document.getElementById("searchInput");
const btnSearch = document.getElementById("btnSearch");

function resetForm() {
    searchInput.value = "";
    searchResults.classList.add("invisible");
}

btnReset.addEventListener("click", resetForm);