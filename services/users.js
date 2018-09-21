import { firebaseApp } from '../config/firebase';
const db = firebaseApp.firestore();

export const fetchUsers = () => {
  db.collection('/users').get().then(snapshot => {
    snapshot.forEach(doc => {
      console.log('User: ', doc.id, '=>', doc.data());
      return doc.data();
    });
  })
    .catch(err => {
      console.log('Error getting user data: ', err);
    });
};

export const fetchUser = (customer_id) => new Promise((resolve, reject) => {
  db.collection('/users')
    .where('customer_id', '==', customer_id)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        resolve({ response: true, data: doc.data() });
      });
      resolve({ response: false, message: 'Customer ID not found: ', customer_id });
    })
    .catch(err => {
      console.log('Error: ', err);
      reject(err);
    });
});

export const addUser = (item) => {
  db.collection('/users').add(item).then(ref => {
  }).catch(err => {
    console.log('Error adding user: ', err);
  });
};

export const deleteUser = (item) => {
  db.collection('/users').where('email', '==', item).delete().then(ref => {
    console.log('Deleted User with Data: ', ref);
  }).catch(err => {
    console.log('Error deleting user: ', err);
  });
};
