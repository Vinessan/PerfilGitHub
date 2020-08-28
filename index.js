// API DO GITHUB
// let fn = document.getElementById("fullname")
// let user = document.getElementById('name')

let reqGit = new XMLHttpRequest()

reqGit.open("GET", "https://api.github.com/users/Vinessan/repos", false)

reqGit.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const repositories = JSON.parse(this.responseText)
        for (let i = 0; i < repositories.length; i++) {
            document.getElementById("table").innerHTML += "<div class='container'><tr><td> Name: " + repositories[i].full_name + "</td> <td> Language: " +
                repositories[i].language + "</td><td>" + repositories[i].html_url + "<td><a target='_blank' href='./profile.html' onclick = 'funcao(" + JSON.stringify(repositories[i]) + ")'><img src='./imagens/info.png' width = 40px height = 40px </a></td><br>" + "<td><img src='./imagens/" + repositories[i].language + ".PNG' width ='60px' height='60px'></img></td></tr></div>"
        }
    }
}
reqGit.send()

function funcao(repositories) {
    localStorage["repositories"] = JSON.stringify(repositories)
    console.log(repositories)
}

