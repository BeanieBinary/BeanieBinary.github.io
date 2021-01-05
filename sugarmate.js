fetch('https://sugarmate.io/api/v1/bhdqxg/latest.json')
    .then(response => response.json())
    .then(data => console.log(data));
