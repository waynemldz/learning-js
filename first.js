let statuses = {
  OPEN: Symbol('Open'),
  IN_PROGRESS: Symbol('In progress'),
  COMPETED: Symbol('Completed'),
  HOLD: Symbol('On hold'),
  CANCELED: Symbol('Canceled')
}

let status = Symbol('status');

let task = {
  status: statuses.OPEN,
  description: 'Learn ES6 Symbol'
};

console.log(task);

delete statuses.HOLD;

console.log(statuses)

statuses.HOLD = Symbol('On hold');
console.log(statuses)

statuses["like birds"] = true;

console.log(statuses)