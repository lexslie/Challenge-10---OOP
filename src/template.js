const generateTeam = team => {
    
    // Generating manager card
    const generateManager = manager => {
        <div class="card employee-card"> 
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title">${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getID()}</li>
                    <li class="list-group-item">Email: <a>${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getofficeNumber()}</li>
                </ul>
            </div>
        </div>;
    };

    // Generating engineer card
    const generateEngineer = engineer => {
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title">${engineer.getRole()}</h3> 
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getID()}</li>
                    <li class="list-group-item">Email: <a>${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub Username: ${engineer.getGithub()}</li>
                </ul>
            </div>
        </div>;
    };

    // Generating intern card
    const generateIntern = intern => {
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title">${intern.getRole()}</h3> 
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getID()}</li>
                    <li class="list-group-item">Email: <a>${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>;
    };

}