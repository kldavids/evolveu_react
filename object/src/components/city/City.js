class City {
  constructor(cityId, cityName, cityLat, cityLong, cityPop){
    this.cityId = cityId;
    this.cityName = cityName;
    this.cityLat = cityLat;
    this.cityLong = cityLong;
    this.cityPop = cityPop;
  }

  showCity() {
    return ("The city of " + this.cityName + " with Latitude of " + 
    this.cityLat + " and Longitude of " + this.cityLong + 
    " has a population of " + this.cityPop + ".") 
  }

  movedInPop(inPopAmt) {
    this.cityPop += inPopAmt;
    return this.cityPop;
  }

  movedOutPop(outPopAmt) {
    this.cityPop -= outPopAmt;
    return this.cityPop;
  }

  howBig() {
    if (this.cityPop > 100000) return "City";
    if (this.cityPop > 20000)  return "Large Town";
    if (this.cityPop > 1000) return "Town";
    if (this.cityPop > 100) return "Village";
    if (this.cityPop > 0) return "Hamlet";
    return "Unknown city population error";
  }
}

export default City;