var signedIn = false

window.onload = function() {
    
    var details = document.getElementById('details')
    details.style.visibility = 'hidden'

    if (getCookie("password") != "") {

        // Send the cookie to get validated
        gatherData()
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

function hide() {
    var details = document.getElementById('details')
    details.style.visibility = 'hidden'
}

function submitPassword() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    const url = "https://870uucrev1.execute-api.us-west-2.amazonaws.com/users/" + username + "/" + password
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );

    parsed = JSON.parse(xmlHttp.responseText)
    data = parsed.Item

    if (data == undefined) {
        alert("Wrong password")
        
    } else {
        var details = document.getElementById('details')
        details.style.visibility = 'visible'
        var login = document.getElementById('signon')
        login.style.visibility = 'hidden'
        gatherData()
    }
}


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function gatherData() {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    var firstNameElem = document.getElementById('firstName')
    var lastNameElem = document.getElementById('lastName')
    var checkedInElem = document.getElementById('checkedIn')

    const url = "https://870uucrev1.execute-api.us-west-2.amazonaws.com/users/" + params.id
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );

    parsed = JSON.parse(xmlHttp.responseText)
    data = parsed.Item
    
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