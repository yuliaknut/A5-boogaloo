/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function () {

    // 'Fetching Planetary Data' goes below:
    fetch().then(function (response) {
        /* This block of code shows how to format the HTML once you fetch some planetary JSON!
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${}</li>
            <li>Diameter: ${}</li>
            <li>Star: ${}</li>
            <li>Distance from Earth: ${}</li>
            <li>Number of Moons: ${}</li>
        </ol>
        <img src="${}">
        */
    });


    // 'Adding Validation' and 'Updating Shuttle Requirements' go below
    // use this link if you need help with validation: https://education.launchcode.org/intro-to-professional-web-dev/chapters/forms/validation-with-javascript.html#javascript-validation


   
});