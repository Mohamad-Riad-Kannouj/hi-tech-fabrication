function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const url = form.action;
  const formData = new FormData(form);

  email_form_submit(form, url, formData);
}

function email_form_submit(form, url, formData) {
  const plainFormData = Object.fromEntries(formData.entries());
  const formDataJsonString = JSON.stringify(plainFormData);

  fetch(url, {
    method: "POST",
    body: formDataJsonString,
    headers: {
      "Content-Type": "application/json",
      Accept: "text/plain"
    }
  })
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error(
          `${response.status} ${response.statusText} ${response.url}`
        );
      }
    })
    .then(data => {
      if (data.trim() == "sent") {
        form.querySelector(".sent-message").classList.add("d-block");
        form.reset();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .catch(error => {
      form.querySelector(".error-message").classList.add("d-block");
    });
}

const form = document.getElementById("form");
form.addEventListener("submit", handleFormSubmit);
