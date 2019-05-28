class City {
	constructor(cityID, name, lat, long, pop) {
		this.cityID = cityID;
		this.name = name;
		this.lat = lat;
		this.long = long;
		this.pop = pop;
	}

	show() {
		return (this.cityID + this.name + this.lat + this.long + this.pop);
	}

	movedIn(inPop) {
		this.pop += inPop;
		return this.pop;
	}

	movedOut(outPop) {
		this.pop -= outPop;
		return this.pop;
	}

	howBig() {
		if (this.pop > 100000) {
			return "City";
		}
		else if (this.pop > 20000) {
			return "Large Town";
		}
		else if (this.pop > 1000) {
			return "Town";
		}
		else if (this.pop > 100) {
			return "Village";
		} else if (this.pop > 1) {
			return "Hamlet";
		} else {
			return "error";
		}
	}
}

export default City;

import City from "./City"

class Community {
	constructor() {
		this.cityList = [];
		this.counter = 0;
	}

	createCity(name, lat, long, pop) {
		const newCity = new City(this.counter, name, lat, long, pop);
		this.cityList.push(newCity);
		this.counter ++;
	}

	deleteCity(delID) {
		this.cityList.splice(this.cityList.findIndex(item => item.cityID === delID), 1);
	}

	whichSphere(lat) {
		if (lat === 0) {
			return "equator";
		} else if (lat > 0) {
			return "northern";
		} else if (lat < 0) {
			return "southern";
		} else {
			return "error: enter latitude";
		}
	}

	getMostNorthern() {
		if (this.cityList.length > 0) {
			let maxLat = this.cityList[0].lat;
			let maxLatName = this.cityList[0].name;
			this.cityList.forEach(item => {
				if (item.lat > maxLat) {
					maxLat = item.lat;
					maxLatName = item.name;
				}
			})
			return maxLatName;
		}
	}

	getMostSouthern() {
		if (this.cityList.length > 0) {
			let minLat = this.cityList[0].lat;
			let minLatName = this.cityList[0].name;
			this.cityList.forEach(item => {
				if (item.lat < minLat) {
					minLat = item.lat;
					minLatName = item.name;
				}
			})
			return minLatName;
		}
	}

	getPopulation() {
		return (this.cityList.reduce((accumulator, item) => {
			return accumulator + item.pop
		}, 0));
	}
}

export default Community;

