# Test API with Postman

# Ajouter une blague

- ## Request:

- Method: POST
- Route: http://localhost:3000/api/jokes

- ### Body:

```json
{
  "question": "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ?",
  "answer": "Parce que sinon ils tombent encore dans le bateau."
}
```

- ### Response:

```json
{
  "id": 11,
  "question": "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ?",
  "answer": "Parce que sinon ils tombent encore dans le bateau.",
  "updatedAt": "2024-06-09T16:34:41.926Z",
  "createdAt": "2024-06-09T16:34:41.926Z"
}
```

# Supprimer une blague grace à l'ID

- ## Request:

- Method: DELETE
- Route: http://localhost:3000/api/jokes/11

- ### Response:

```
204 No Content
```

# Modifier une blague grace à l'ID

- ## Request:

- Method: PUT
- Route: http://localhost:3000/api/jokes/3

- ### Body:

```json
{
  "question": "Quel est l'animal le plus heureux ?",
  "answer": "La Vache, parce que sa femme est chouette."
}
```

- ### Previous:

```json
{
  "question": "Quel est l'animal le plus heureux ?",
  "answer": "Le Hibou, parce que sa femme est chouette."
}
```

- ### Response:

```json
{
  "id": 3,
  "question": "Quel est l'animal le plus heureux ?",
  "answer": "La Vache, parce que sa femme est chouette.",
  "createdAt": "2024-06-09T15:33:42.987Z",
  "updatedAt": "2024-06-09T16:55:24.258Z"
}
```

# Récupérer toutes les blagues

- ## Request:

- Method: GET
- Route: http://localhost:3000/api/jokes

- ### Response:

```json
[
  {
    "id": 1,
    "question": "Quelle est la femelle du hamster ?",
    "answer": "L’Amsterdam",
    "createdAt": "2024-06-09T15:33:42.987Z",
    "updatedAt": "2024-06-09T15:33:42.987Z"
  },
  {
    "id": 2,
    "question": "Que dit un oignon quand il se cogne ?",
    "answer": "Aïe",
    "createdAt": "2024-06-09T15:33:42.987Z",
    "updatedAt": "2024-06-09T15:33:42.987Z"
  },
  {
    "id": 3,
    "question": "Quel est l'animal le plus heureux ?",
    "answer": "La Vache, parce que sa femme est chouette.",
    "createdAt": "2024-06-09T15:33:42.987Z",
    "updatedAt": "2024-06-09T16:55:24.258Z"
  },
  {
    "id": 4,
    "question": "Pourquoi le football c'est rigolo ?",
    "answer": "Parce que Thierry en rit",
    "createdAt": "2024-06-09T15:33:42.987Z",
    "updatedAt": "2024-06-09T15:33:42.987Z"
  },
  {
    "id": 5,
    "question": "Quel est le sport le plus fruité ?",
    "answer": "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.",
    "createdAt": "2024-06-09T15:33:42.987Z",
    "updatedAt": "2024-06-09T15:33:42.987Z"
  },
  {
    "id": 6,
    "question": "Que se fait un Schtroumpf quand il tombe ?",
    "answer": "Un Bleu",
    "createdAt": "2024-06-09T15:33:42.987Z",
    "updatedAt": "2024-06-09T15:33:42.987Z"
  },
  {
    "id": 7,
    "question": "Quel est le comble pour un marin ?",
    "answer": "Avoir le nez qui coule",
    "createdAt": "2024-06-09T15:33:42.987Z",
    "updatedAt": "2024-06-09T15:33:42.987Z"
  },
  {
    "id": 8,
    "question": "Qu'est ce que les enfants usent le plus à l'école ?",
    "answer": "Le professeur",
    "createdAt": "2024-06-09T15:33:42.987Z",
    "updatedAt": "2024-06-09T15:33:42.987Z"
  },
  {
    "id": 9,
    "question": "Quel est le sport le plus silencieux ?",
    "answer": "Le para-chuuuut",
    "createdAt": "2024-06-09T15:33:42.987Z",
    "updatedAt": "2024-06-09T15:33:42.987Z"
  },
  {
    "id": 10,
    "question": "Quel est le comble pour un joueur de bowling ?",
    "answer": "C’est de perdre la boule",
    "createdAt": "2024-06-09T15:33:42.987Z",
    "updatedAt": "2024-06-09T15:33:42.987Z"
  },
  {
    "id": 12,
    "question": "Pourquoi les plongeurs plongent-dadazdils toujours en arrière et jamais en avant ?",
    "answer": "Parce que sinon ils tombent encore dans le bateau.",
    "createdAt": "2024-06-09T16:26:52.669Z",
    "updatedAt": "2024-06-09T16:26:52.669Z"
  },
  {
    "id": 13,
    "question": "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ?",
    "answer": "Parce que sinon ils tombent encore dans le bateau.",
    "createdAt": "2024-06-09T16:34:41.926Z",
    "updatedAt": "2024-06-09T16:34:41.926Z"
  }
]
```

# Récupérer une blague grace à l'ID

- ## Request:

- Method: GET
- Route: http://localhost:3000/api/jokes/1

- ### Response:

```json
{
  "id": 1,
  "question": "Quelle est la femelle du hamster ?",
  "answer": "L’Amsterdam",
  "createdAt": "2024-06-09T15:33:42.987Z",
  "updatedAt": "2024-06-09T15:33:42.987Z"
}
```

# Récupérer une blague aléatoire

- # Request:

- Method: GET
- Route: http://localhost:3000/api/jokes/random

- ### Response:

```json
{
  "id": 4,
  "question": "Pourquoi le football c'est rigolo ?",
  "answer": "Parce que Thierry en rit",
  "createdAt": "2024-06-09T15:33:42.987Z",
  "updatedAt": "2024-06-09T15:33:42.987Z"
}
```
