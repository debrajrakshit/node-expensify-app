import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };






// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);

//   }).catch((err) => {
//     console.log('error: ', err);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// }, (err) => {
//     console.log('error: ', err);
// });


// database.ref('expenses').push({
//     description: 'Car Wash',
//     note: '',
//     amount: 90,
//     createdAt: '16872'
// });

// database.ref('notes/-LrsNosjZBsPFJkvbPnY').remove();

// database.ref('notes').push({
//     title: 'Coourse Topics',
//     body: 'React Native'
// });

// const notes = [{
//     id: 12,
//     title: 'First note',
//     body: 'this is my note'
// }, {
//     id: 1768,
//     title: 'Second note',
//     body: 'Note object'
// }];

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// }, (err) => {
//     console.log('Error fetching data', err);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (err) => {
//     console.log('Error with data fetching', err);
// });

// setTimeout(() => {
//     database.ref('age').set(28);
// }, 3500);

// // turn off subscription - show updates
// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 3500);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 6500);

// database.ref().once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((err) => {
//     console.log('error: ', err);
// });

// set is a Promise
// database.ref().set({
//     name: 'Debraj Rakshit',
//     age: 37,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Kolkata',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('error:', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('Data is updated');
// }).catch((err) => {
//     console.log('error: ', err);
// });

// database.ref('isSingle').remove()
// .then(() => {
//     console.log('Data is removed');
// }).catch((err) => {
//     console.log('error: ', err);
// });