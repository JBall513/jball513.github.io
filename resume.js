const emailAddress = "markjiggervm@gmail.com";
const copyButton = document.querySelector("#copy-email");
const copyStatus = document.querySelector("#copy-status");

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(emailAddress);
    copyStatus.textContent = "Email copied.";
  } catch (error) {
    copyStatus.textContent = `Please copy this address: ${emailAddress}`;
  }
});
