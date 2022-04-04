window.onload = function() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    var firstNameElem = document.getElementById('firstName')
    var lastNameElem = document.getElementById('lastName')
    firstNameElem.innerText = "First Name: " + params.firstName
    lastNameElem.innerText = "Last Name: " + params.lastName
    
}