let sugar = await fetch("https://sugarmate.io/api/v1/bhdqxg/latest.json");

if (sugar.ok) {
  let json = await sugar.json();
} else {
  alert("HTTP-Error: " + sugar.status);
}
