const searchResults = document.getElementById("searchResults");
const btnReset = document.getElementById("btnReset");
const searchInput = document.getElementById("searchInput");
const btnSearch = document.getElementById("btnSearch");

function resetForm() {
    searchInput.value = "";
    searchResults.classList.add("invisible");
}

function searchDestination() {
    const input = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            if (input == "country" || input == "countries") {
                resultsFinder = data.countries;
            } else if (input == "temple" || input == "temples") {
                resultsFinder = data.temples;
            } else if (input == "beach" || input == "beaches") {
                resultsFinder = data.beaches;
            }
            console.log(resultsFinder);
        });
}

btnReset.addEventListener("click", resetForm);
btnSearch.addEventListener("click", searchDestination);