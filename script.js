function scrollToApply() {
  document.getElementById("apply").scrollIntoView({ behavior: "smooth" });
}


document.getElementById("admissionForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const course = document.getElementById("course").value;

  if (!name || !email || !course) {
    alert("Please fill in all fields!");
    return;
  }


  document.getElementById("successMessage").classList.remove("hidden");


  e.target.reset();


  setTimeout(() => {
    document.getElementById("successMessage").classList.add("hidden");
  }, 3000);
});
