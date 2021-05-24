function sendEmail() {
      Email.send({
        Host: "smtp.gmail.com",
        Username: document.getElementById(name).value,
        To: 'krishlala2009@gmail.com',
        From: document.getElementById(email).value",
        Subject: document.getElementById(subject).value,
        Body: document.getElementById(comment).value,
      })
        .then(function (message) {
          alert("mail sent successfully")
        });
    }
