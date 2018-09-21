import { has } from 'lodash';
import { firebaseApp } from '../config/firebase';
const db = firebaseApp.firestore();

export const searchEmail = auth =>
  new Promise((resolve, reject) => {
    console.log('search email', auth.email);

    db.collection('/admins')
      .where('email', '==', auth.email)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.data().password === auth.password) {
            resolve({ response: true, message: 'Authorised Email' });
          } else {
            resolve({ response: false, message: 'Wrong Password' });
          }
        });
        resolve({
          response: false,
          message: 'This Email ID is not Authorised to generate codes.'
        });
      })
      .catch(err => {
        console.log('Error: ', err);
        reject(err);
      });
  });
