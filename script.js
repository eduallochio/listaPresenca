function submitForm() {
  const name = document.getElementById("name").value
  const confirmation = document.getElementById("confirmation").value
  const confirmationMessage = document.getElementById("confirmationMessage")

  if (name && confirmation) {
    confirmationMessage.innerHTML = `Obrigado, ${name}! Sua presença foi ${
      confirmation === "sim" ? "confirmada" : "cancelada"
    }.`
  } else {
    confirmationMessage.innerHTML = "Por favor, preencha todos os campos."
  }
}
