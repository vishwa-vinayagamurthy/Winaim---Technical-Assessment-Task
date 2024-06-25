
document.getElementById("date-of-birth").addEventListener("change", function() {
  var dob = new Date(this.value);
  var today = new Date();
  var age = today.getFullYear() - dob.getFullYear();
  document.getElementById("age").value = age;
});


document.getElementById("signup-link").addEventListener("click", function() {
  document.getElementById("signup-popup").style.display = "block";
});

document.getElementById("signup-popup").addEventListener("click", function(event) {
  if (event.target === this) {
    this.style.display = "none";
  }
});
