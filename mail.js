// Your web app's Firebase configuration
import { firebaseConfig } from "./env.js";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

const db = firestore.collection("fomData");

// template form value of inputs
const getElementValue = (id) => {
  return document.getElementById(id).value;
};

const submitForm = (e) => {
  // Prevent default Form submission behavior
  e.preventDefault(e);

  // individual values from From's inputs
  const firstName = getElementValue('first-name');
  const lastName = getElementValue('last-name');
  const email = getElementValue('email');
  const msgContent = getElementValue('msgContent');

  saveMessage(firstName, lastName, email, msgContent);

  // enable alert
  document.querySelector('.alert').style.display = 'block';

  // remove alert
  setTimeout(() => {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // reset form
  document.getElementById("contactForm").reset();
}

document.getElementById("contactForm").addEventListener("submit", submitForm);

// Save Form data to Firebase
const saveMessage = (firstName, lastName, email, msgContent) => {
  
  db.doc().set({
    firstName: firstName,
    lastName: lastName,
    email: email,
    msgContent: msgContent,
  });
};