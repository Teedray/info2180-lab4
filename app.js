const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", async function () {
    try {
        const response = await fetch("superheroes.php");

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const result = await response.text();
        alert(result);
    } catch (error) {
        console.error(error);
        alert("Unable to load superheroes. Please try again.");
    }
});