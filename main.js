function sendEmail() {
      Email.send({
        Host: "krishlala2009@gmail.com",
        Username: "sender@email_address.com",
        Password: "Enter your password",
        To: 'krishlala2009@gmail.com',
        From: "sender@email_address.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
      })
        .then(function (message) {
          alert("mail sent successfully")
        });
    }
