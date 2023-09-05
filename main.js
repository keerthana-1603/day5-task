// for Loop method used in JSON formate
const countryObj = {
    "India": "IND",
    "China": "CHN",
    "UnitedStated": "US",
    "unitedKingdom": "UK",
    "Europe": "EUR",
    "Germany": "GER",
  };
  const objectkeys = Object.keys(countryObj);
  const objectValues = Object.values(countryObj);
  for (let i = 0; i < objectValues.length; i++) {
    console.log(`Key :${objectkeys[i]}
value:${objectValues[i]}`);
  }



// For in method used in JSON formate
const countryObj = {
    "India": "IND",
    "China": "CHN",
    "UnitedStated": "US",
    "unitedKingdom": "UK",
    "Europe": "EUR",
   "Germany": "GER",
  };
for (let values in countryObj){ 
    console.log(`Keys:${values}
value :${countryObj[values]}`
);
    
 }; 

//For of method used in JSON formate 
const countryObj = {
    "India": "IND",
    "China": "CHN",
    "UnitedStated": "US",
    "unitedKingdom": "UK",
    "Europe": "EUR",
   "Germany": "GER",
  };
let objectkeys=Object.keys(countryObj);
console.log(objectkeys);
for (let values of objectkeys){ 
    console.log(`Keys:${values}
value :${countryObj[values]}`
);
    
 }; 
 
// forEach method used in JSON formate  
const countryObj = {
    "India": "IND",
    "China": "CHN",
    "UnitedStated": "US",
    "unitedKingdom": "UK",
    "Europe": "EUR",
   "Germany": "GER",
  };

let objectkeys=Object.keys(countryObj);
let data=objectkeys.forEach(values=> {
console.log(`Keys:${values}
value :${countryObj[values]}`);

}); 
data();         




