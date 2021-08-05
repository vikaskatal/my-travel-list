const centerLatLng = {
    lat: 23,
    lng: 77,
};

const mapZoom = 5;

const filterObject = {
    state: 'Karnataka', // 'Karnataka' or 'ALL'
    visited: 'ALL', // true or false or 'ALL'
};
  
// Transformed LocationList array from main Location list variable
const LocationList = Locations.reduce((accumulator, currentValue) => {
 	const stateList = currentValue.list;

 	stateList.map(listItem=> {
 		const newEle = listItem;
 		newEle.state = currentValue.state;

 		if (currentValue.ut) {
			newEle.ut = true;
 		} else {
 			newEle.ut = false;
 		}
 		return newEle
 	})


	let list = [...accumulator, ...stateList];
	return list

}, [])

// Array of All States+ Uts
const StateList = Locations.map((ele) => ele.state);

// console.log('StateList', StateList)
// console.log('LocationList', LocationList)

// Refs: https://www.fabhotels.com/blog/places-to-visit-in-south-india/
// https://www.fabhotels.com/blog/places-to-visit-in-north-india/
// https://www.fabhotels.com/blog/places-to-visit-in-northeast-india/
// https://www.mistay.in/travel-blog/10-places-in-india-to-travel-to-spend-some-time-with-nature/
