import { has } from 'lodash';
import { firebaseApp } from '../config/firebase';
const db = firebaseApp.firestore();

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

  db.collection('/codes').get().then(snapshot => {
    snapshot.forEach(doc => {
      const data = doc.data();
      !data.is_code_used && codes.push(data.code);
    });
  }).catch(err => {
    console.log('Error getting codes data: ', err);
  });

  return codes;
};

export const searchCode = (code) => new Promise((resolve, reject) => {
  db.collection('/codes')
    .where('code', '==', code)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().is_code_used) {
          resolve({ response: false, message: 'Code already used.' });
        } else resolve({ id: doc.id, data: doc.data() });
      });
      resolve({ response: false, message: 'Code not found.' });
    })
    .catch(err => {
      console.log('Error: ', err);

      reject(err);
    });
});

export const searchSchoolCode = (code) => new Promise((resolve, reject) => {
  db.collection('/schools')
    .where('code', '==', code)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().is_code_used) {
          resolve({ response: false, message: 'Code already used.' });
        } else resolve({ id: doc.id, response: true, message: 'success', data: doc.data() });
      });
      resolve({ response: false, message: 'Code not found.' });
    })
    .catch(err => {
      console.log('Error: ', err);

      reject(err);
    });
});

export const updateCodeUsed = (key, code) => new Promise((resolve, reject) => {
  db.collection('/codes')
    .doc(key)
    .update({ is_code_used: true })
    .then(() => {
      resolve(true);
    })
    .catch(err => {
      reject(err);
    });
});

export const addCode = item => {
  const code = getCode();

  const codeData = {
    customer_id: item.customer_id,
    code,
    is_code_used: false
  };

  db.collection('/codes')
    .add(codeData)
    .catch(err => {
      console.log('Error adding Code: ', err);
      return false;
    });

  return code;
};

export const fetchAllowedUserAndCode = (key) => new Promise((resolve, reject) => {
  // fetch allowed user and code
  db.collection('/schools')
    .doc(key)
    .get()
    .then(snapshot => {
      resolve({
        response: true,
        code: snapshot.data().code,
        allowedUser: snapshot.data().allowed_users
      });
    })
    .catch(err => {
      console.log('Error whil fetching allowed users: ', err);
      reject({ response: false });
    });
});

export const checkTimesCodeAlreadyUsed = (code) => new Promise((resolve, reject) => {
  let timeCodeAlreadyUsed = 0;
  db.collection('/schoolsUsers')
    .where('code', '==', code)
    .get()
    .then(snapshot => {
      snapshot.forEach(() => {
        timeCodeAlreadyUsed = timeCodeAlreadyUsed + 1;
      });
      resolve({ response: true, timeCodeAlreadyUsed });
    })
    .catch(err => {
      console.log('Error whil fetching no. of times code already used: ', err);
      reject({ response: false });
    });
});

export const setCodeUsed = (key) => new Promise((resolve, reject) => {
  db.collection('/schools')
    .doc(key)
    .update({ is_code_used: true })
    .then(() => {
      resolve({ response: true, message: 'scuccessfully updated is_code_used' });
    })
    .catch(err => {
      reject({ response: false, message: err });
    });
});

export const addSchoolUser = (code, schoolName) => new Promise((resolve, reject) => {
  db.collection('/schoolsUsers')
    .add({ code, school_name: schoolName })
    .then((res) => {
      resolve({
        response: true,
        message: 'Login Success',
        schoolUserKey: res.id
      });
    })
    .catch(err => {
      console.log('Error while adding school user: ', err);
      reject({ response: false, message: 'Error while adding school user' });
    });
});
