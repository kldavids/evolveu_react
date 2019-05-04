import Account from './Account';

test('should create an account with text as accountId', () => {
  let x = new Account('A', 'savings', 100);
  expect(x).toEqual({accountId: 'A', accountName: 'savings', accountBalance: 100})
})

test('should create an account with number as accountId', () => {
  let x = new Account(1, 'savings', 100);
  expect(x).toEqual({accountId: 1, accountName: 'savings', accountBalance: 100})
})

test('should verify that a deposit increases the accountBalance', () => {
  let x = new Account(1, 'savings', 100);
  x.depositAmt(20);
  expect(x).toEqual({accountId: 1, accountName: 'savings', accountBalance: 120})
})

test('should verify that a withdrawal decreases the accountBalance', () => {
  let x = new Account(1, 'savings', 100);
  x.withdrawAmt(50);
  expect(x).toEqual({accountId: 1, accountName: 'savings', accountBalance: 50})
})

