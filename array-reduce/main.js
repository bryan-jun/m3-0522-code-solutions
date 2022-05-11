const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const initialValue = 0;
const sum = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sum);

const product = numbers.reduce(
  (previousValue, currentValue) => previousValue * currentValue
);

console.log(product);

const initialBalance = 0;

const balance = account.reduce(
  (previousValue, currentValue) => {
    if (currentValue.type === 'deposit') {
      previousValue += currentValue.amount;
      return previousValue;

    } else {
      previousValue -= currentValue.amount;
      return previousValue;
    }
  }, initialBalance);

console.log(balance);

const compArray = {};

const composite = traits.reduce(
  (previousValue, currentValue) => Object.assign(previousValue, currentValue), compArray
);

console.log(composite);
