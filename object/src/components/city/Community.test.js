import Community from './Community';
import { exportAllDeclaration } from '@babel/types';

test('check community controller ', () => {
  const communityTest = new Community ();
  expect(communityTest.cityList.length).toBe(0);

  console.log("test addCity method");
  communityTest.addCity("Calgary", 51.05, 114.07, 1267300);
  expect(communityTest.cityList.length).toBe(1);
  expect(communityTest.cityList[0].cityId).toBe(1);
  expect(communityTest.cityList[0].cityName).toBe("Calgary");
  expect(communityTest.cityList[0].cityLat).toBe(51.05);
  expect(communityTest.cityList[0].cityLong).toBe(114.07);
  expect(communityTest.cityList[0].cityPop).toBe(1267300);

  communityTest.addCity("Belize City", 17.49, 88.19, 57169);
  expect(communityTest.cityList.length).toBe(2);
  expect(communityTest.cityList[1].cityId).toBe(2);
  expect(communityTest.cityList[1].cityName).toBe("Belize City");
  expect(communityTest.cityList[1].cityLat).toBe(17.49);
  expect(communityTest.cityList[1].cityLong).toBe(88.19);
  expect(communityTest.cityList[1].cityPop).toBe(57169);

  communityTest.addCity("Garrison", 47.65, 101.41, 1453);
  expect(communityTest.cityList.length).toBe(3);
  expect(communityTest.cityList[2].cityId).toBe(3);
  expect(communityTest.cityList[2].cityName).toBe("Garrison");
  expect(communityTest.cityList[2].cityLat).toBe(47.65);
  expect(communityTest.cityList[2].cityLong).toBe(101.41);
  expect(communityTest.cityList[2].cityPop).toBe(1453);

  communityTest.addCity("LeRoy", 51.99, 104.83, 427);
  expect(communityTest.cityList.length).toBe(4);
  expect(communityTest.cityList[3].cityId).toBe(4);
  expect(communityTest.cityList[3].cityName).toBe("LeRoy");
  expect(communityTest.cityList[3].cityLat).toBe(51.99);
  expect(communityTest.cityList[3].cityLong).toBe(104.83);
  expect(communityTest.cityList[3].cityPop).toBe(427);

  communityTest.addCity("Sidney", -33.87, 151.21, 5230330);
  expect(communityTest.cityList.length).toBe(5);
  expect(communityTest.cityList[4].cityId).toBe(5);
  expect(communityTest.cityList[4].cityName).toBe("Sidney");
  expect(communityTest.cityList[4].cityLat).toBe(-33.87);
  expect(communityTest.cityList[4].cityLong).toBe(151.21);
  expect(communityTest.cityList[4].cityPop).toBe(5230330);

  console.log("test getPopulation method");
  // expect(communityTest.getPopulation()).toBe(1326349);
  expect(communityTest.getPopulation()).toBe(6556679);

  console.log("test mostNorthern city");
  expect(communityTest.getMostNorthern()).toBe(51.99);

  console.log("test mostSouthern city");
  // expect(communityTest.getMostSouthern()).toBe(17.49);
  expect(communityTest.getMostSouthern()).toBe(-33.87);

  console.log("test whichSphere method - North");
  expect(communityTest.whichSphere(0)).toBe("Northern Hemisphere");

  // console.log("test whichSphere method - South");
  // expect(communityTest.whichSphere(5)).toBe("Southern Hemisphere");

  console.log("test removeCity method");
  communityTest.removeCity(2);
  expect(communityTest.cityList.length).toBe(4);
  console.log(communityTest.cityList);

  console.log("test removeCity method");
  communityTest.removeCity(4);
  expect(communityTest.cityList.length).toBe(3);
  console.log(communityTest.cityList);

  
})
