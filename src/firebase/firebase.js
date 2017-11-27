import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

console.log('process.env.FIREBASE_DATABASE_URL',process.env.FIREBASE_DATABASE_URL);

firebase.initializeApp(config);

const database = firebase.database();

export {firebase,database as default};

// const expensesRef = database.ref('expenses');
//
// //child_removed
// expensesRef.on('child_removed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });
//
// //child_changed
// expensesRef.on('child_changed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });
//
// //child_added
// expensesRef.on('child_added',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });

// expensesRef.push({
//     description: 'note1',
//     note: 'Sans commentaires',
//     amount: 12345,
//     createdAt: 1000
// });
// expensesRef.push({
//     description: 'note2',
//     note: '',
//     amount: 45652,
//     createdAt: 999999
// });
// expensesRef.push({
//     description: 'note3',
//     note: 'Aucun commentaires',
//     amount: 987654321,
//     createdAt: 555555
// });




// expensesRef.once('value')
//     .then((snapshot) => {
//         //console.log(snapshot.val());
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     }).catch((e) => {
//     console.log('Error fetching expenses', e);
// });


// expensesRef.on('value',(snapshot)=>{
//     //console.log(snapshot.val());
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// },(e)=>{
//     console.log('Error width data fetching')
// });


// database.ref('notes/-KzhRlOLRrTGL8z2N5dn').update({
//     body:'By food'
// })

//database.ref('notes/-KzhRlOLRrTGL8z2N5dn').remove();


// database.ref('notes').push({
//     title:'Course topics',
//     body:'React Angular Vue'
// });


// const firebaseNotes ={
//     notes:{
//
//     }
// };
//
// const notes=[{
//     id:'12',
//     title:'First note',
//     body:'This is my note'
// },{
//     id:'761ase',
//     title:'Another note',
//     body:'This is my other note'
// }];

//database.ref('notes').set(notes);

// const onValueChange= database.ref().on('value',(snapshot)=>{ //subscribe
//     const val=snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// },(e)=>{
//     console.log('Error width data fetching')
// });

// const onValueChange= database.ref().on('value',(snapshot)=>{ //subscribe
//     console.log(snapshot.val());
// },(e)=>{
//     console.log('Error width data fetching')
// });
//
// setTimeout(()=>{
//     database.ref('age').set(29);
// },3500);
//
// setTimeout(()=>{
//     database.ref().off(onValueChange); //unsubscribe
// },7000);
//
// setTimeout(()=>{
//     database.ref('age').set(30);
// },10500);


// database.ref('location/city')
//     .once('value')
//     .then((snapshot)=>{
//         const val=snapshot.val();
//         console.log(val);
//     })
//     .catch((e)=>{
//         console.log('Error fetching data',e);
//     });
//
// database.ref('location')
//     .once('value')
//     .then((snapshot)=>{
//         const val=snapshot.val();
//         console.log(val);
//     })
//     .catch((e)=>{
//         console.log('Error fetching data',e);
//     });
//
// database.ref()
//     .once('value')
//     .then((snapshot)=>{
//         const val=snapshot.val();
//         console.log(val);
//     })
//     .catch((e)=>{
//         console.log('Error fetching data',e);
//     });


// database.ref().set({
//     name: 'Bruno Panaget',
//     age: 50,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Paris',
//         country: 'France'
//     }
// }).then(() => {
//     console.log('Data saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });


//database.ref().set('This is my data;');


// database.ref('age').set(56);
// database.ref('location/city').set('Nice');


// database.ref('attributes').set({
//     height:180,
//     weight:85
// }).then(()=>{
//     console.log('Data saved');
// }).catch((e)=>{
//     console.log('This failed',e);
// });


// database.ref('isSingle')
//     .remove()
//     .then(()=>{
//         console.log('Data was removed');
//     }).catch((e)=>{
//     console.log('Did not remove data',e);
// });


// database.ref('isSingle').set(null)
//     .then(()=>{
//         console.log('Data was removed');
//     }).catch((e)=>{
//         console.log('Did not remove data',e);
//     });


// database.ref()
//     .remove()
//     .then(()=>{
//         console.log('Data was removed');
//     }).catch((e)=>{
//     console.log('Did not remove data',e);
// });

// database.ref().update({
//     name:'Mike',
//     age:29,
//     job:'Software developer',
//     isSingle:null
// })
//     .then(()=>{
//         console.log('Data was updated');
//     }).catch((e)=>{
//     console.log('Did not update data',e);
// });

// database.ref().update({
//     job:'Manager',
//     'location/city':'Boston'
// })
//     .then(()=>{
//         console.log('Data was updated');
//     }).catch((e)=>{
//     console.log('Did not update data',e);
// });
//

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatle'
// })
//     .then(() => {
//         console.log('Data was updated');
//     }).catch((e) => {
//         console.log('Did not update data', e);
//     });

//console.log('I made a request to change the data');

