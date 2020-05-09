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
let rocket = null;


function init() {

    takeoffButton = document.getElementById('takeoff');
    landingButton = document.getElementById('landing');
    missionAbortButton = document.getElementById('missionAbort');
    upButton = document.getElementById('up');
    downButton = document.getElementById('down');
    rightButton = document.getElementById('right');
    leftButton = document.getElementById('left');
    rocket = document.getElementById('rocket');
    rocket.style.position = 'absolute';
    rocket.style.left = '0px';
    rocket.style.bottom = '0px';

    takeoffButton.addEventListener("click", function(event) {
        let confirmation = confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmation) {
            document.getElementById('flightStatus').innerHTML = 'Shuttle in flight.';
            document.getElementById('shuttleBackground').style.backgroundColor = 'blue';
            document.getElementById('spaceShuttleHeight').innerHTML = '10000';
        }

    });

    landingButton.addEventListener('click', function(event) {
        if (document.getElementById('flightStatus').innerHTML === 'Shuttle in flight.') {
            alert('The shuttle is landing. Landing gear engaged.');
            document.getElementById('flightStatus').innerHTML = 'The shuttle has landed.';
            document.getElementById('shuttleBackground').style.backgroundColor = 'green';
            document.getElementById('spaceShuttleHeight').innerHTML = '0';
            rocket.style.left = '0px';
            rocket.style.bottom = '0px';
        } else {
            alert("Already grounded.");
        }

    });

    missionAbortButton.addEventListener('click', function(event) {
        if (document.getElementById('flightStatus').innerHTML === 'Shuttle in flight.') {
            let confirmation = confirm("Confirm that you want to abort the mission.");
            if (confirmation) {
                document.getElementById('flightStatus').innerHTML = 'Mission aborted.';
                document.getElementById('shuttleBackground').style.backgroundColor = 'green';
                document.getElementById('spaceShuttleHeight').innerHTML = '0';
                rocket.style.left = '0px';
                rocket.style.bottom = '0px';
            }
        } else {
            alert("There's no mission going on right now, crazy!");
        }

    });

    rightButton.addEventListener('click', function() {
        if (document.getElementById('flightStatus').innerHTML === 'Shuttle in flight.') {
            if (parseInt(rocket.style.left) < 550) {
                let movement = parseInt(rocket.style.left) + 10 + 'px';
                rocket.style.left = movement;
            }
        } else {
            alert("Liftoff has not been initiated.");
        }
    });

    leftButton.addEventListener('click', function() {
        if (document.getElementById('flightStatus').innerHTML === 'Shuttle in flight.') {
            if (parseInt(rocket.style.left) > -20) {
                let movement = parseInt(rocket.style.left) - 10 + 'px';
                rocket.style.left = movement;
            }
        } else {
            alert("Liftoff has not been initiated.");
        }
    });

    upButton.addEventListener('click', function() {
        if (document.getElementById('flightStatus').innerHTML === 'Shuttle in flight.') {
            if (parseInt(rocket.style.bottom) < 250) {
                let movement = parseInt(rocket.style.bottom) + 10 + 'px';
                rocket.style.bottom = movement;
                let height = parseInt(document.getElementById('spaceShuttleHeight').innerHTML) + 10000;
                document.getElementById('spaceShuttleHeight').innerHTML = height.toString();
            }
        } else {
            alert("Liftoff has not been initiated.");
        }
    });

    downButton.addEventListener('click', function() {
        if (document.getElementById('flightStatus').innerHTML === 'Shuttle in flight.') {
            if (parseInt(rocket.style.bottom) > 0) {
                let movement = parseInt(rocket.style.bottom) - 10 + 'px';
                rocket.style.bottom = movement;
                let height = parseInt(document.getElementById('spaceShuttleHeight').innerHTML) - 10000;
                document.getElementById('spaceShuttleHeight').innerHTML = height.toString();
            }
        } else {
            alert("Liftoff has not been initiated.");
        }
    });

    rocket.addEventListener('click', function() {
        rocket.style.left = '0px';
        rocket.style.bottom = '0px';
        document.getElementById('spaceShuttleHeight').innerHTML = '10000';
    });
}


window.onload = init;
