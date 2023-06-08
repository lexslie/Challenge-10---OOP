const generateTeam = team => {
    
    // Generating manager card
    const generateManager = manager => {
        `
        <div class="card employee-card"> 
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title">${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a>${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getofficeNumber()}</li>
                </ul>
            </div>
        </div>;
        `;
    };

    // Generating engineer card
    const generateEngineer = engineer => {
        `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title">${engineer.getRole()}</h3> 
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a>${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub Username: ${engineer.getGithub()}</li>
                </ul>
            </div>
        </div>;
        `;
    };

    // Generating intern card
    const generateIntern = intern => {
        `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title">${intern.getRole()}</h3> 
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a>${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>;
        `;
    };

    // Creating the team using declared variables
    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");
}

// Function to generate completed html page
module.exports = team => {

    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profiles</title>
        <link rel="stylesheet" href="style.css" />
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="header">
                    <h1>Team Profiles</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                ${generateTeam(team)}
            </div>
        </div>
    </body>
</html>`;
};