import Account from './Account';

test('create an account and check if can dep and withdraw', () => {
  const accountTest = new Account(0, "Kristina", 100);
  expect(accountTest.accId).toBe(0);
  expect(accountTest.accName).toBe("Kristina");
  expect(accountTest.accBalance).toBe(100);

  accountTest.depositAmt(20);
  expect(accountTest.accBalance).toBe (120);
  accountTest.withdrawAmt(50);
  expect(accountTest.accBalance).toBe (70);
  accountTest.depositAmt(15);
  expect(accountTest.accBalance).toBe (85);
  accountTest.withdrawAmt(40);
  expect(accountTest.accBalance).toBe (45);

  accountTest.currentBalance();
  expect(accountTest.accBalance).toBe (45);
})


