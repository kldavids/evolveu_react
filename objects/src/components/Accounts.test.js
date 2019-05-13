import Accounts from './Accounts';

test('check accounts controller  - add, remove, edit ', () => {
  const accountsTest = new Accounts();
  expect(accountsTest.accountList.length).toBe(0);

  console.log("test add account");
  accountsTest.addAccount("KD Checking", 300);
  expect(accountsTest.accountList.length).toBe(1);
  expect(accountsTest.accountList[0].accId).toBe(1);
  expect(accountsTest.accountList[0].accName).toBe("KD Checking");
  expect(accountsTest.accountList[0].accBalance).toBe(300);

  console.log("test another account");
  accountsTest.addAccount("KD Saving", 100);
  expect(accountsTest.accountList.length).toBe(2);
  expect(accountsTest.accountList[1].accId).toBe(2);
  expect(accountsTest.accountList[1].accName).toBe("KD Saving");
  expect(accountsTest.accountList[1].accBalance).toBe(100);

  console.log("test total Balance");
  expect(accountsTest.totalAccounts()).toBe(400);

  console.log("test remove account");
  accountsTest.removeAccount(2);
  expect(accountsTest.accountList.length).toBe(1);

  console.log("test account with min balance");

  console.log("test account with max balance");

})
