## Test API with Postman

### Request:

- Method: POST
- Route: http://localhost:3000/api/jokes

```json
{
  "question": "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ?",
  "answer": "Parce que sinon ils tombent encore dans le bateau."
}
```

### Response:

```json
{
  "id": 11,
  "question": "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ?",
  "answer": "Parce que sinon ils tombent encore dans le bateau.",
  "updatedAt": "2024-06-09T16:34:41.926Z",
  "createdAt": "2024-06-09T16:34:41.926Z"
}
```

### Request:

- Method: DELETE
- Route: http://localhost:3000/api/jokes/11

### Response:

```
204 No Content
```
