let url = "Access-Control-Allow-Origin: https://sugarmate.io/api/v1/bhdqxg/latest.json"
let sugar = fetch(url);
    .then(response => response.json());
    .then(data => console.log(data));
