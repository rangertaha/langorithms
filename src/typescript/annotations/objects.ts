const profile = {names: 'alex', age: 20, coords: {lat: 0, lng: 15}};

const {age, names}: {age: number; names: string} = profile;
 console.log(age, names);

 const {
     coords: {lat, lng}
 }: {coords: {lat: number; lng: number}} = profile;


 // console.log(coords);