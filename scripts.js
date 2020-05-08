// Write your JavaScript code here.
// Remember to pay attention to page loading!
//const input = require('readline-sync');
let takeoffButton = null;
let landingButton = null;
let missionAbortButton = null;
let upButton = null;
let rightButton = null;
let downButton = null;
let leftButton = null;


function init() {

    takeoffButton = document.getElementById('takeoff');
    landingButton = document.getElementById('landing');
    missionAbortButton = document.getElementById('missionAbort');

    takeoffButton.addEventListener("click", function(event) {
        let confirmation = confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmation) {
            document.getElementById('flightStatus').innerHTML = 'Shuttle in flight.';
            document.getElementById('shuttleBackground').style.backgroundColor = 'blue';
            document.getElementById('spaceShuttleHeight').innerHTML = '10,000';
        }
        event.stopPropagation();
    });

    landingButton.addEventListener('click', function(event) {
        alert('The shuttle is landing. Landing gear engaged.');
        document.getElementById('flightStatus').innerHTML = 'The shuttle has landed.';
        document.getElementById('shuttleBackground').style.backgroundColor = 'green';
        document.getElementById('spaceShuttleHeight').innerHTML = '0';
        event.stopPropagation();
    });

    missionAbortButton.addEventListener('click', function(event) {
        let confirmation = confirm("Confirm that you want to abort the mission.");
        if (confirmation) {
            document.getElementById('flightStatus').innerHTML = 'Mission aborted.';
            document.getElementById('shuttleBackground').style.backgroundColor = 'green';
            document.getElementById('spaceShuttleHeight').innerHTML = '0';
        }
        event.stopPropagation();
    });

}


window.onload = init;
