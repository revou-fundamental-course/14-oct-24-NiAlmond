//=> NavBar-Header <=\\
window.addEventListener("scroll", function(){
const header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 0);
});


function replaceName() {
    let username = prompt("Siapakah nama anda?", "");
    document.getElementById("username").innerHTML = username
}

replaceName();


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("messageForm");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const dob = document.getElementById("dob").value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const message = document.getElementById("message").value;
  
      // Display the form data
      const currentTime = document.getElementById("currentTime");
      currentTime.textContent = new Date().toString();
      document.getElementById("outputName").textContent = name;
      document.getElementById("outputDob").textContent = dob;
      document.getElementById("outputGender").textContent = gender;
      document.getElementById("outputMessage").textContent = message;
    });
  });