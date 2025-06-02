const form = document.getElementById("myJSForm");
let results = document.getElementById("results");
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById("myFirstName").value;
    const lastName = document.getElementById("myLastName").value;
    const email = document.getElementById("myEmail").value;

    if (firstName == "" || lastName == "" || email == "") {
        results.innerText = "Ensure all fields are set";
    } else {
        console.table([firstName, lastName, email]);
    }
});