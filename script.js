//random jokes
document.getElementById('randomJokeButton').addEventListener('click', async () => {
    const response = await fetch('/api/jokes/random');
    const joke = await response.json();
    document.getElementById('randomJokeResult').innerText = `${joke.question}\n\n${joke.answer}`;
  });

