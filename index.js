let joke = document.getElementById("joke-area");
joke.value = "Joke will be generated here";
async function generateJoke(){
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    joke.value = `${data.setup}
    ${data.punchline}`;
}