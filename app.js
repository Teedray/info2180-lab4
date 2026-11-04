const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search");
const resultDiv = document.getElementById("result");
const searchButton = document.getElementById("search-button");

searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const query = searchInput.value.trim();
    const params = new URLSearchParams({ query: query });

    searchButton.disabled = true;
    resultDiv.textContent = "Searching...";

    try {
        const response = await fetch("superheroes.php?" + params.toString());

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const result = await response.text();
        resultDiv.innerHTML = result;
    } catch (error) {
        console.error(error);
        resultDiv.textContent = "Unable to load superheroes. Please try again.";
    } finally {
        searchButton.disabled = false;
    }
});