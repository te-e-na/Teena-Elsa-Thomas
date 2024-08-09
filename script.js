document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.button');
   
    button.addEventListener('click', function() {
        const emailInput = document.getElementById('mail');
        const emailValue = emailInput.value.trim();

        if (emailValue) {
            const mailtoLink = `mailto:teenaet.csb2327@saintgits.org?subject=User%20Email&body=User%20Email:%20${encodeURIComponent(emailValue)}`;
            window.location.href = mailtoLink;
        } else {
            alert('Please enter a valid email address.');
        }
    });
});
