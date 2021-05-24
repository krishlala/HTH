var firebaseConfig = {
    apiKey: "AIzaSyA_ZUy_c48R97p-QfsNy0H0XjOs38lA48w",
    authDomain: "hth1-7ab55.firebaseapp.com",
    projectId: "hth1-7ab55",
    storageBucket: "hth1-7ab55.appspot.com",
    messagingSenderId: "1045443701794",
    appId: "1:1045443701794:web:2849c77367592006026e7b",
    measurementId: "G-73G2721SYS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function sendEmail() {
      Email.send({
        Host: "smtp.gmail.com",
        Username: document.getElementById(name).value;,
        To: 'krishlala2009@gmail.com',
        From: document.getElementById(email).value;,
        Subject: document.getElementById(subject).value;,
        Body: document.getElementById(comment).value;,
            
      })
      name = document.getElementById(name).value;
localStorage.setItem("name", name);
email = document.getElementById(email).value;
localStorage.setItem("email", email);
subject = document.getElementById(subject).value;
localStorage.setItem("subject", subject);
comment = document.getElementById(comment).value;
localStorage.setItem("comment", comment);
        .then(function (message) {
          alert("mail sent successfully")
        });
    }
