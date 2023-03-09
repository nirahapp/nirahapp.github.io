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
  const email = emailRaw.trim().toLowerCase();
  if (email.length <= 0) {
    return false;
  } else if (!email.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    return false;
  }
  // TODO: add other checks
  return true;
}

function verifyAndSetEmail() {
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
    document.getElementById('email-submit-button').className = 'leading-6 rounded-lg p-2 bg-green-700 hover:outline hover:outline-gray-500';
  } else {
    emailAddressInput.disabled = true;
    document.getElementById('email-submit-button').className = 'leading-6 rounded-lg p-2 bg-gray-200 hover:outline-none';
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

setInterval(verifyAndSetEmail, 100);