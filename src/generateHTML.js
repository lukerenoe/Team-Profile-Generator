function generateHtml(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4">The Team </h1>
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${data.manager}</h5>
        <p class="card-text"Manager ID: ${data.managerID} 
        <br> 
        ${managerPhone}
        <br>
        ${data.managerOffice}
        </p>
        <a href="github.com/${data.managerGithub}" class="btn btn-primary">Github</a>
        <a href="${data.managerEmail}" class="btn btn-primary">Github</a>
        </div>
    </div>
    </div>
    </div>
    </body>
    </html>`;
}