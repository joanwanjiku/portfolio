// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDoMduTLqwXwTDjO1oVDR_6yclqBIyUkc8",
    authDomain: "contacts-42941.firebaseapp.com",
    databaseURL: "https://contacts-42941.firebaseio.com",
    projectId: "contacts-42941",
    storageBucket: "contacts-42941.appspot.com",
    messagingSenderId: "117601355600",
    appId: "1:117601355600:web:1a14d350870083ce420e55",
    measurementId: "G-K7C74CQKFB"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// reference message collection
let messagesRef = firebase.database().ref('messages')

const formValues = (id) => {
    return document.getElementById(id).value
}
let submitForm = (e) => {
    e.preventDefault();
    let name = formValues('name');
    let email = formValues('email');
    let message = formValues('message')

    saveMessage(name, email, message)

    document.querySelector('.alert').style.display = 'block'
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none'
    }, 3000)
}

document.getElementById('contactForm').addEventListener('submit', submitForm);


// save message to firebase

let saveMessage = (name, email, message) => {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email:email,
        message:message
    })
}