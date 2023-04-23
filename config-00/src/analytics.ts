let logged;

function sendAnalitycs(data: string) {
  console.log("data", data);
  logged = true;
  console.log("logged", logged);
}

sendAnalitycs("The Data");
