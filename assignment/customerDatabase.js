const banks = [
  {
    name: "MAYBANK",
    accountNumber: 90981238,
    acountType: "Saving",
    balance: 10000,
  },
  {
    name: "OCBC",
    accountNumber: 13579246,
    acountType: "SavingPlus",
    balance: 5080,
  },
];
console.log(banks[0].accountNumber);

const XXX = ["XtradeHolding", "D9098213", "SavingPLus", "$30000"];

for (let YZ of XXX) {
  console.log("for loop is printing:", YZ);
}

const customerData = {
  name: "MAYBANK",
  accountNumber: 90981238,
  acountType: "Saving",
  balance: 10000,
};

function getCustomerInfo(customerData, key = "balance") {
  return customerData[key];
}
console.log(getCustomerInfo(customerData));

const banksName = [
  {
    name: "MAYBANK",
    accountNumber: 90981238,
    acountType: "Saving",
    balance: 10000,
  },
  {
    name: "OCBC",
    accountNumber: 13579246,
    acountType: "SavingPlus",
    balance: 5080,
  },
];
console.log(banksName);

const customers = [
  {
    name: "John Doe",
    accountNumber: "1234567890",
    accountType: "Savings",
    balance: 5000,
  },
  {
    name: "Jane Smith",
    accountNumber: "0987654321",
    accountType: "Checking",
    balance: 7000,
  },
  {
    name: "Alice Johnson",
    accountNumber: "1357924680",
    accountType: "Savings",
    balance: 3000,
  },
];

for (let i = 0; i < customers.length; i++) {
  let customer = customers[i];
  console.log(`Customer Name: ${customer.name}, Balance: ${customer.balance}`);
}

let accountNumberToFind = "0987654321";
let foundCustomer = customers.find(
  (customer) => customer.accountNumber === accountNumberToFind
);
console.log("Customer found by account number:", foundCustomer);

let minBalance = 4000;
let customersWithHighBalance = customers.filter(
  (customer) => customer.balance > minBalance
);
console.log(
  "Customers with balance over",
  minBalance + ":",
  customersWithHighBalance
);

customers.sort((a, b) => b.balance - a.balance);

console.log("Customers sorted by balance in desceding order:");
console.log(customers);

let customerNameAndBalance = customers.map(
  (customer) => `${customer.name}: ${customer.balance}`
);
console.log("Customer name and balances:");
console.log(customerNameAndBalance);
