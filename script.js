//your JS code here. If required.
document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form submission

  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value.trim(), 10);

  // Validation
  if (!name || isNaN(age)) {
    alert("Please enter valid details.");
    return;
  }

  // Promise logic
  const checkEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4-second delay
  });

  checkEligibility
    .then((msg) => alert(msg))
    .catch((err) => alert(err));
});
