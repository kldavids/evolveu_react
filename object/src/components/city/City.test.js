import City from './City';

test('create a new city and check attributes ', () => {
  const cityTest = new City(1, "Calgary", 51, 114, 1267300);
  expect(cityTest.cityId).toBe(1);
  expect(cityTest.cityName).toBe("Calgary");
  expect(cityTest.cityLat).toBe(51);
  expect(cityTest.cityLong).toBe(114);
  expect(cityTest.cityPop).toBe(1267300);

  console.log("test show method");
  console.log(cityTest.showCity());

  console.log("test movedIn method");
  cityTest.movedInPop(200);
  expect(cityTest.cityPop).toBe(1267500);

  console.log("test movedOut method");
  cityTest.movedOutPop(40);
  expect(cityTest.cityPop).toBe(1267460);

})  
  
test('should test the howBig method', () => {
  const city1 = new City(1, "Calgary", 51.05, 114.07, 1267300);
  const city2 = new City(2, "Belize City", 17.49, 88.19, 57169);
  const city3 = new City(3, "Garrison", 47.65, 101.41, 1453);
  const city4 = new City(4, "LeRoy", 51.99, 104.83, 427);
  const city5 = new City(5, "Outlook", 48.88, 104.79, 47);

  console.log("test for a City");
  // expect(city1.howBig()).toBe("Town");
  expect(city1.howBig()).toBe("City");

  console.log("test for a Large Town");
  // expect(city2.howBig()).toBe("City");
  expect(city2.howBig()).toBe("Large Town");

  console.log("test for a Town");
  // expect(city3.howBig()).toBe("City");
  expect(city3.howBig()).toBe("Town");

  console.log("test for a Village");
  // expect(city4.howBig()).toBe("City");
  expect(city4.howBig()).toBe("Village");
  
  console.log("test for a Hamlet");
  // expect(city5.howBig()).toBe("City");
  expect(city5.howBig()).toBe("Hamlet");

})

test('object reference verification ', () => {
  const myCity = new City ()
  
})


  

