import { has, uniq } from 'lodash';
import { firebaseApp } from '../config/firebase';
const db = firebaseApp.firestore();

export const updateUserData = (key, data) =>
  new Promise((resolve, reject) => {
    db.collection('/schoolsUsers')
      .doc(key)
      .update(data)
      .then(() => {
        resolve(true);
      })
      .catch(err => {
        reject(err);
      });
  });

export const getCode = () => {
  const codes = fetchCodes();
  let flag = true;
  let randomNumber = null;

  while (flag) {
    randomNumber = Math.floor(1000 + Math.random() * 9000);
    if (!has(codes, randomNumber)) {
      flag = false;
    }
  }

  return randomNumber;
};

export const fetchCodes = () => {
  const codes = [];

  db.collection('/schools').get().then(snapshot => {
    snapshot.forEach(doc => {
      const data = doc.data();
      codes.push(data.code);
    });
  }).catch(err => {
    console.log('Error getting codes data: ', err);
  });

  return codes;
};

export const generateSchoolCodes = (data) => new Promise((resolve, reject) => {
  const code = getCode();
  const item = {
    school_name: data.school,
    code,
    is_code_used: false,
    allowed_users: Number(data.numberOfCodes)
  };
  db.collection('/schools')
    .add(item)
    .catch(err => {
      reject({ response: false, error: err });
      console.log('Error while generating codes: ', err);
    });
  resolve({ response: true, codes: code });
});

export const fetchSchools = () => new Promise((resolve, reject) => {
  let schools = [];

  db.collection('/schools').get().then(snapshot => {
    snapshot.forEach(doc => {
      const data = doc.data();
      schools.push(data.school_name);
    });
    schools = uniq(schools);
    resolve(schools);
  }).catch(err => {
    console.log('Error getting school names: ', err);
    reject(err);
  });
});

export const fetchSchoolDataService = (schoolname) => new Promise((resolve, reject) => {
  const schoolData = [];
  db.collection('/schoolsUsers')
    .where('school_name', '==', schoolname)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const data = doc.data();
        schoolData.push(data);
      });
      resolve(schoolData);
    })
    .catch(err => {
      console.log('Error getting school data: ', err);
      reject(err);
    });
});
