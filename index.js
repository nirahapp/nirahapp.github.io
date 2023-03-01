async function sendEmailAddressAPI(emailAddress) {
  const url = 'https://landing-page-email-address-input-fmdaixa45q-el.a.run.app/add-email-address';
  //const url = 'http://localhost:8080/add-email-address';
  const response = await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'emailAddress=' + emailAddress,
  });
  return response.json();
}

async function handleSubmit() {
  emailAddressInput = document.getElementById('emailAddress');
  sendEmailAddressAPI(emailAddressInput.value).then((data) => {
    console.log(data);
  });
}
