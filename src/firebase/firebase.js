import * as firebase from 'firebase';

const config={
    apiKey: "AIzaSyC4J5DIVG7nUXTYMuxf0qwboMMnprfqI9A",
    authDomain: "expensify-36223.firebaseapp.com",
    databaseURL: "https://expensify-36223.firebaseio.com",
    projectId: "expensify-36223",
    storageBucket: "expensify-36223.appspot.com",
    messagingSenderId: "12555706818"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name:'Bruno Panaget',
    age:50,
    isSingle:false,
    location:{
        city:'Paris',
        country:'France'
    }
});


//database.ref().set('This is my data;');


database.ref('age').set(56);
database.ref('location/city').set('Nice');


database.ref('attributes').set({
    height:180,
    weight:85
});
