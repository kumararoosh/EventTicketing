window.onload = function() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    var firstNameElem = document.getElementById('firstName')
    var lastNameElem = document.getElementById('lastName')
    var checkedInElem = document.getElementById('checkedIn')
    // firstNameElem.innerText = "First Name: " + params.firstName
    // lastNameElem.innerText = "Last Name: " + params.lastName

    // const url = "http://localhost:3000/users?id=" + params.id
    const url = "https://870uucrev1.execute-api.us-west-2.amazonaws.com/users/" + params.id
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    // console.log(xmlHttp.responseText);

    parsed = JSON.parse(xmlHttp.responseText)
    data = parsed.Item
    // console.log(data)
    
    firstNameElem.innerText = "First Name: " + data.firstName
    lastNameElem.innerText = "Last Name: " + data.lastName

    if (data.checkedIn == "1") {
        checkedInElem.style.color = 'red'
        checkedInElem.innerText = "PERSON ALREADY CHECKED IN"

    } else {
        checkedInElem.style.color = 'green'
        checkedInElem.innerText = 'Checked In'
    }
}

function handleClick() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());    
    const url = "https://870uucrev1.execute-api.us-west-2.amazonaws.com/checkin/" + params.id
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "PUT", url, false ); // false for synchronous request
    xmlHttp.send( null );
}