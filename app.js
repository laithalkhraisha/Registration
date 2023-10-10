
 const firebaseConfig = {
     apiKey: "AIzaSyCSgR32B3-as4Je9X9ipZCGveBAX656FAU",
     authDomain: "logsystem-40aef.firebaseapp.com",
     databaseURL: "https://logsystem-40aef-default-rtdb.firebaseio.com",
     projectId: "logsystem-40aef",
     storageBucket: "logsystem-40aef.appspot.com",
     messagingSenderId: "376234389306",
     appId: "1:376234389306:web:073df0494c7ff480da2a03"
 };

 const app = firebase.initializeApp(firebaseConfig);
 const auth = firebase.auth();
 function validateUsername(username) {
         return /^\S+$/.test(username);
     }

     function validatePassword(password) {
         return /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/.test(password);
     }

     function validateEmail(email) {
         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
     }

     function validatePhone(phone) {
         
         return /^07\d{8}$/.test(phone);
     }



         
       


 document.getElementById('send').addEventListener('click', function (e) {
     e.preventDefault(); // Prevent the form from submitting (default behavior)

     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     const username = document.getElementById('username').value;
     const phone = document.getElementById('phone').value;
     if (!validateUsername(username)) {
             alert("Invalid username");
             return;
         }

         if (!validatePassword(password)) {
             alert("Invalid password. It must be at least 8 characters have atlest 1 uppercase and  special character");
             return;
         }

         if (!validateEmail(email)) {
             alert("Invalid email ");
             return;
         }

         if (!validatePhone(phone)) {
             alert("Invalid phone number. start with 07 and have 10 digits.");
             return;
         }

     firebase.auth().createUserWithEmailAndPassword(email, password)
         .then((userCredential) => {
             const user = userCredential.user;
             alert("User registered");

             
             
                 
                 

                 
         
         })
         .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             console.error(`${errorCode}: ${errorMessage}`);
             alert("user exists");
         });
        
 });
