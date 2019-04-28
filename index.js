// Add your code here



  function submitData(personName, personEmail){
    return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: personName,
      email: personEmail
    })
  })
  .then(function(response){
    return response.json();
  })
  .then(function(object){
     return document.body.innerHTML = object.id
  })
  .catch(function(message){
    alert('Unauthorized Access')
    return document.body.innerHTML = message
  })
}
