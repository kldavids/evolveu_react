import City from './City';

class Community {
  constructor () {
    this.cityList = [];
    this.counter = 1;
  }

  addCity (cityName, cityLat, cityLong, cityPop) {
    const tempCity = new City (this.counter, cityName, cityLat, cityLong, cityPop)
    this.cityList.push(tempCity);
    this.counter++;
  }

  removeCity (removeId) {
    const tempList = this.cityList.filter(item => {
      return item.cityId !== removeId;
    })
    this.cityList = tempList;
  }

  whichSphere (index) {
    // console.log(this.cityList[0].cityLat);
    if (this.cityList[index].cityLat > 0) {
      return "Northern Hemisphere";
    } else if (this.cityList[index].cityLat < 0) {
      return "Southern Hemisphere";
    } else if (this.cityList[index].cityLat === 0) {
      return "You are at the Equator";
    }
  }
  
  getMostNorthern () {
    if(this.cityList.length > 0) {
      let mostNorth = this.cityList[0].cityLat;
      this.cityList.forEach(item => {
        if(item.cityLat > mostNorth){
          mostNorth = item.cityLat;
        };
      });
      console.log("mostNorth", mostNorth);
      return mostNorth;
    }
  }

  getMostSouthern () {
    if(this.cityList.length > 0) {
      let mostSouth = this.cityList[0].cityLat;
      this.cityList.forEach(item => {
        if(item.cityLat < mostSouth){
          mostSouth = item.cityLat;
        };
      });
      console.log("mostSouth", mostSouth);
      return mostSouth;
    } 
  }

  getPopulation () {
    let totalPopulation = this.cityList.reduce((acc, curr) => {
      return acc += curr.cityPop
    }, 0);
    return totalPopulation;
  }

}

export default Community;