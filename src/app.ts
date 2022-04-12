const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(e: Event) {
  e.preventDefault();
  const enteredAddress = addressInput.value;
}

form?.addEventListener('submit', searchAddressHandler);
