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
let copyemail = () => {
    let email = document.getElementById('myEmail')
    email.select()
    email.setSelectionRange(0, 99999)
    document.execCommand('copy')
    let tooltip = document.getElementById('tooltip')
    let title = tooltip.getAttribute('title')
    tooltip.setAttribute('title', `Copied: ${email.value}`)
}

$(document).ready(function () {
    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });
    $('#up').click(function() {      
        $('body,html').animate({
            scrollTop : 0                       
        }, 500);
    });
    AOS.init({
        easing: 'ease',
        duration: 1000
    });

});