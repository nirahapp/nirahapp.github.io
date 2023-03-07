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
  return response;
}

function validateEmail(emailRaw) {
  const email = emailRaw.trim();
  if (email.length <= 0) {
    return false;
  }
  // TODO: add other checks
  return true;
}

function handleEmailSubmit() {
  let emailAddressInput = document.getElementById('email-address-input');
  const email = emailAddressInput.value;
  if (validateEmail(email) === true) {
    setEmailSubmit(true);
  } else {
    setEmailSubmit(false);
  }
}

function setEmailSubmit(clickable) {
  let emailAddressInput = document.getElementById('email-submit-button');
  if (clickable === true) {
    emailAddressInput.disabled = false;
  } else {
    emailAddressInput.disabled = true;
  }
  
}

async function handleSubmit() {
  let emailAddressInput = document.getElementById('email-address-input');
  sendEmailAddressAPI(emailAddressInput.value).then((data) => {
    emailForm = document.getElementById("email-form");
    thankYou = document.getElementById("submission-thank-you");
    emailForm.className = "hidden";
    thankYou.className = "block text-center";
    console.log(data);
  });
}
