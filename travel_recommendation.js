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
                for (country in resultsFinder) {
                    console.log('country.cities');
                    console.log(country.cities);
                    console.log('resultsFinder');
                    console.log(resultsFinder);
                    console.log();
                    for (city in resultsFinder) {
                        console.log('city');
                        console.log(city.cities);
                        searchResults.innerHTML += `<li class="searchResultsContent">`;
                        searchResults.innerHTML += `<img src="${country.imageUrl}" class="searchResultsImages">`;
                        searchResults.innerHTML += `<p><h1>${country.name}</h1></p>`;
                        searchResults.innerHTML += `<p>${country.description}</p>`;
                        searchResults.innerHTML += `<button class="bookNowBtn">Visit</button>`;
                        searchResults.innerHTML += `</li>`;
                    }
                }
                searchResults.classList.remove("invisible");
            } else if (input == "temple" || input == "temples") {
                resultsFinder = data.temples;
            } else if (input == "beach" || input == "beaches") {
                resultsFinder = data.beaches;
            }

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