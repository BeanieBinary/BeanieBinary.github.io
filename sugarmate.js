fetch('https://sugarmate.io/api/v1/bhdqxg/latest.json', {
  mode:'no-cors'
})
    .then(response => response.json.parse())
    .then(data => console.log(data));
