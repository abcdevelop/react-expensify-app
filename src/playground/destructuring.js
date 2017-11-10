//
// Object destructuring
//

// const person = {
//     //name: 'Bruno',
//     age: 50,
//     location: {
//         city: 'Paris',
//         temp: 20
//     }
// };
//
//
// //console.log(`${person.name} is ${person.age}.`);
//
// // const name=person.name;
// // const age=person.age;
// const {name:firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);
//
// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} degrees in ${city}`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);

//
// Array destructuring
//

//
// const address=['11234 S Juniper Street','Paris','Ile de France','75000'];
// //const address=[];
//
// // console.log(`You are in ${address[1]} ${address[2]}.`);
//
// //const [street,city,state,zip]=address;
// //const [,city,state]=address;
// const [,city='Brest',state='Finistere']=address;
// console.log(`You are in ${city} ${state}.`);


const items=['Coffee (hot)','€2.00','€2.50','€2.75'];

const [itemName,,mediumPrice]=items;
console.log(`A medium ${itemName} costs  ${mediumPrice}.`);