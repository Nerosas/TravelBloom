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
    let searchResultsConstructor = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            if (input == "country" || input == "countries") {
                resultsFinder = data.countries;
                for (let i = 0; i < resultsFinder.length; i++) {
                    for (let j = 0; j < resultsFinder[i].cities.length; j++) {
                        searchResultsConstructor += `<li class="searchResultsContent">`;
                        searchResultsConstructor += `<img src="${resultsFinder[i].cities[j].imageUrl}" class="searchResultsImages">`;
                        searchResultsConstructor += `<p><h1>${resultsFinder[i].cities[j].name}</h1></p>`;
                        searchResultsConstructor += `<p>${resultsFinder[i].cities[j].description}</p>`;
                        searchResultsConstructor += `<button class="bookNowBtn">Visit</button>`;
                        searchResultsConstructor += `</li>`;
                    }
                }
            } else if (input == "temple" || input == "temples") {
                resultsFinder = data.temples;
            } else if (input == "beach" || input == "beaches") {
                resultsFinder = data.beaches;
            }
            searchResults.innerHTML = searchResultsConstructor;
            searchResults.classList.remove("invisible");

 /*           for (result in resultsFinder) {
                console.log(result);
                searchResults.innerHTML += `<li class="searchResultsContent">`;
                searchResults.innerHTML +=temples `<img src="${result.imageUrl}" class="searchResultsImages">`;
                searchResults.innerHTML += `<p><h1>${result.name}</h1></p>`;
                searchResults.innerHTML += `<p>${result.description}</p>`;
                searchResults.innerHTML += `<button class="bookNowBtn">Visit</button>`;
                searchResults.innerHTML += `</li>`;
            }*/
        });
}

btnReset.addEventListener("click", resetForm);
btnSearch.addEventListener("click", searchDestination);