/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src='${}'>
*/

window.addEventListener('load', function () {
    
    //const formIntake = document.getElementById('launchForm');
    const formSubmit = document.getElementById('formSubmit')

    formSubmit.addEventListener('click', event => {
        const pilotName = document.querySelector('input[name=pilotName]');
        const copilotName = document.querySelector('input[name=copilotName]');
        const fuelLevel = document.querySelector('input[name=fuelLevel]');
        const cargoMass = document.querySelector('input[name=cargoMass]');
        
        if (pilotName.value === '' || copilotName.value === '' || fuelLevel.value === '' || cargoMass.value === '') {
            window.alert('All fields are required.');
            event.preventDefault();
        } else if (!isNaN(Number(pilotName.value)) || !isNaN(Number(copilotName.value)) || isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoMass.value))) {
            window.alert('Please make sure to provide valid input.');
            event.preventDefault();
        }

        if (Number(fuelLevel.value) >= 10000 && Number(cargoMass.value) <= 10000) {
            document.getElementById('launchStatus').innerHTML = '<h3>Shuttle is ready for launch</h3>';
            document.getElementById('launchStatus').style.color = 'green';
            document.getElementById('faultyItems').style.visibility = 'hidden';
        } else {
            document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotName.value} is ready for launch`;
            document.getElementById('copilotStatus').innerHTML = `Copilot ${copilotName.value} is ready for launch`;
            if (Number(fuelLevel.value) <= 10000) {
                document.getElementById('fuelStatus').innerHTML = 'Fuel level too low for launch';

            }
            if (Number(cargoMass.value) >= 10000) {
                document.getElementById('cargoStatus').innerHTML = 'Cargo mass too high for launch';
            }
            document.getElementById('launchStatus').innerHTML = '<h3>Shuttle is not ready for launch</h3>';
            document.getElementById('launchStatus').style.color = 'red';
            document.getElementById('faultyItems').style.visibility = 'visible';
        }
    });
    fetch('https://handlers.education.launchcode.org/static/planets.json').then((response) => {
        response.json().then((json) => {
            let i = Math.round(Math.random() * (json.length -1));
            document.getElementById('missionTarget').innerHTML = `<h2>Mission Destination</h2>
            <ol>
                <li>Name: ${json[i].name}</li>
                <li>Diameter: ${json[i].diameter}</li>
                <li>Star: ${json[i].star}</li>
                <li>Distance from Earth: ${json[i].distance}</li>
                <li>Number of Moons: ${json[i].moons}</li>
            </ol>
            <img src='${json[i].image}'>`;
        });



        /* This block of code shows how to format the HTML once you fetch some planetary JSON!
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${}</li>
            <li>Diameter: ${}</li>
            <li>Star: ${}</li>
            <li>Distance from Earth: ${}</li>
            <li>Number of Moons: ${}</li>
        </ol>
        <img src='${}'>
        */
    });


    // 'Adding Validation' and 'Updating Shuttle Requirements' go below
    // use this link if you need help with validation: https://education.launchcode.org/intro-to-professional-web-dev/chapters/forms/validation-with-javascript.html#javascript-validation


   
});
