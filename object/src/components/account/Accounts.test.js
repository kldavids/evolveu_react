import Accounts from './Accounts';

test('check accounts controller  - add, remove, edit ', () => {
  const accountsTest = new Accounts();
  expect(accountsTest.accountList.length).toBe(0);

  console.log("test addAccount method");
  accountsTest.addAccount("KD Checking", 300);
  expect(accountsTest.accountList.length).toBe(1);
  expect(accountsTest.accountList[0].accId).toBe(1);
  expect(accountsTest.accountList[0].accName).toBe("KD Checking");
  expect(accountsTest.accountList[0].accBalance).toBe(300);

  console.log("test more accounts");
  accountsTest.addAccount("KD Saving", 100);
  expect(accountsTest.accountList.length).toBe(2);
  expect(accountsTest.accountList[1].accId).toBe(2);
  expect(accountsTest.accountList[1].accName).toBe("KD Saving");
  expect(accountsTest.accountList[1].accBalance).toBe(100);

  accountsTest.addAccount("RD Saving", 50);
  expect(accountsTest.accountList.length).toBe(3);
  expect(accountsTest.accountList[2].accId).toBe(3);
  expect(accountsTest.accountList[2].accName).toBe("RD Saving");
  expect(accountsTest.accountList[2].accBalance).toBe(50);

  console.log("test total Balance");
  expect(accountsTest.totalAccounts()).toBe(450);

  console.log("test remove account");
  accountsTest.removeAccount(2);
  expect(accountsTest.accountList.length).toBe(2);
  console.log(accountsTest.accountList);

  console.log("test account with max balance");
  expect(accountsTest.maxAccount()).toBe(300);

  console.log("remove another account");
  accountsTest.removeAccount(1);
  expect(accountsTest.accountList.length).toBe(1);
  console.log(accountsTest.accountList);

  console.log("test account with min balance");
  expect(accountsTest.minAccount()).toBe(50);

})
