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

//all jokes in the table
document.getElementById('allJokeButton').addEventListener('click', async () => {
  const response = await fetch('/api/jokes');
  const jokes = await response.json();
  let jokesHTML = '<table>';
  jokes.forEach(joke => {
    jokesHTML += `<tr class='jokesTable'>
                    <td>${joke.question}</td>
                    <td>${joke.answer}</td>
                  </tr>`;
  });
  jokesHTML += '</table>';
  document.getElementById('allJokeResult').innerHTML = jokesHTML;
});

//add a joke to the table
const form = document.getElementById('addJokeForm');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const question = document.getElementById('addJokeQuestion').value;
  const answer = document.getElementById('addJokeAnswer').value;
  const joke = { question, answer };
  const response = await fetch('/api/jokes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(joke)
  });
  if (response.ok) {
    document.getElementById('addJokeResult').textContent = 'La blague a été ajoutée avec succès !';
    form.reset();
  } else {
    document.getElementById('addJokeResult').textContent = 'Une erreur s\'est produite lors de l\'ajout de la blague.';
  }
});