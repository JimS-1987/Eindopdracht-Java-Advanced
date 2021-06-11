

fetch("https://swapi.dev/api/people/1/") // doe request
    .then(response => response.json())
         .then(data => console.log(data))
    .catch(err => {
        console.log(err)
    });