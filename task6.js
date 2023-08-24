const laugh = document.getElementById('joke');
const getJoke = document.getElementById('getJoke');


async function createJoke() {
    const jokeAwait = await fetch('https://icanhazdadjoke.com/',
    {
        headers: {
            accept: 'application/json'
        }
    });

    const joke = await jokeAwait.json();
    
    laugh.innerHTML = joke.joke;
}
createJoke();
getJoke.addEventListener('click', createJoke);