let sugar = fetch("Access-Control-Allow-Origin: https://sugarmate.io/api/v1/bhdqxg/latest.json");

if (sugar.ok) {
  let json = sugar.json();
  alert(json["value"])
} else {
  alert("HTTP-Error: " + sugar.status);
}
