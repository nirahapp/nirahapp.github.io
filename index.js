async function sendEmailAddressAPI(emailAddress) {
  const data = {
    'emailAddress': emailAddress
  };
  const response = await fetch('https://landing-page-email-address-input-fmdaixa45q-el.a.run.app', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function handleSubmit() {
  sendEmailAddressAPI("pungiman97@gmail.com").then((data) => {
    console.log(data);
  });
}
