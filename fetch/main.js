const myRequest = new Request('https://jsonplaceholder.typicode.com/users');

fetch(myRequest)
  .then(response => response.json())
  .then(data => console.log(data));
