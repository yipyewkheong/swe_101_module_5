const bankSelector = document.getElementById("bankSelector");
const valueToAdd = document.getElementById("revenue");
const button = document.getElementById("revenueBtn");
button.addEventListener("click", () => {
  const selectedRow = document.getElementById(bankSelector.value);
  const newValue = +selectedRow.children[2].innerText + +valueToAdd.value;
  selectedRow.children[2].innerText = newValue;
});
