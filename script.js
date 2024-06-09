//random jokes
document.getElementById('randomJokeButton').addEventListener('click', async () => {
    const response = await fetch('/api/jokes/random');
    const joke = await response.json();
    document.getElementById('randomJokeResult').innerText = `${joke.question}\n\n${joke.answer}`;
  });

//spécifique jokes id
document.getElementById('specificIdJokeButton').addEventListener('click', async () => {
    const jokeId = document.getElementById('specificIdJokeInput').value;
    const response = await fetch(`/api/jokes/${jokeId}`);
    const joke = await response.json();
    document.getElementById('specificIdJokeResult').innerText = `${joke.question}\n\n${joke.answer}`;
});

