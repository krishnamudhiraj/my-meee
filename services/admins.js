import { has } from 'lodash';
import { firebaseApp } from '../config/firebase';
import 'firebase/auth';

export const authCheck = auth =>
	new Promise((resolve, reject) => {
		console.log('search email', auth.email);

		firebaseApp
			.auth()
			.signInWithEmailAndPassword(auth.email, auth.password)
			.then(data => {
				resolve({ response: true, message: 'Authorised Email' });
			})
			.catch(error => {
				resolve({
					response: false,
					message: 'Wrong Password or This Email ID is not Authorised to generate codes',
				});
			});
	});
