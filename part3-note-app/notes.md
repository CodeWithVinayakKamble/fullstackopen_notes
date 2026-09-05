# Notes

## request.params.id vs request.body.id

```js
app.put('/api/notes/:id', (request, response) => {

    const id = request.params.id; // const bodyId = request.body.id
    const body = request.body;

})
```

1. request.params.id (From the URL Address Bar) 🌐

    * Where it comes from: The URL Path of the request (defined by the :id parameter in app.put('/api/notes/:id')).

        * Example: When React requests: PUT http://localhost:3001/api/notes/123

            - Express grabs "123" straight out of the URL.
            
            - request.params.id = "123".