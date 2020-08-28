var repositorio = JSON.parse(localStorage.getItem('repositories'));
console.log(localStorage.getItem('repositories'));

var nome = repositorio.owner.login

var img_user = document.createElement('img')
img_user.setAttribute('src', repositorio.owner.avatar_url)

var follow = repositorio.owner.following_url;
var descrip = repositorio.description;
var collab = repositorio.collaborators_url;
var branches = repositorio.branches_url;
var commit = repositorio.commits_url;
var languageC = repositorio.languages_url;

document.getElementById('nome').innerHTML = nome;
document.getElementById('img').appendChild(img_user);
document.getElementById('descripts').innerHTML = descrip;

// REQUISIÇÃO GIT LANGUAGE

const reqGitLan = new XMLHttpRequest();
reqGitLan.open('GET', languageC)

reqGitLan.onreadystatechange = setTimeout(function () {
    if (this.readyState == 4 && this.status == 200) {
        for (i = 0; i < this.responseText.length; i++) {
            document.getElementById('lang').innerHTML = Object.keys(JSON.parse(this.responseText));
        }
    }
}, 2000)

reqGitLan.send();

// REQUISIÇÃO GIT FOLLOWERS

const reqGitFol = new XMLHttpRequest();
reqGitFol.open('GET', follow)

reqGitFol.onreadystatechange = setTimeout(function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('followers').innerHTML = JSON.parse(this.responseText)['message']
    } else if (this.status == 404) {
        document.getElementById('followers').innerHTML = 'Não encontrado!'
    }
}, 4000)

reqGitFol.send();

// REQUISIÇÃO GIT COLABORATORS

const reqGitCol = new XMLHttpRequest();
reqGitCol.open('GET', collab)

reqGitCol.onreadystatechange = setTimeout(function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('collabs').innerHTML = JSON.parse(this.responseText)['message']
    } else if (this.status == 404) {
        document.getElementById('collabs').innerHTML = 'Não encontrado!'
    }
}, 6000)

reqGitCol.send();

// REQUISIÇÃO GIT BRANCHES

const reqGitBr = new XMLHttpRequest();
reqGitBr.open('GET', branches)

reqGitBr.onreadystatechange = setTimeout(function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('branches').innerHTML = JSON.parse(this.responseText)['message']
    } else if (this.status == 404) {
        document.getElementById('branches').innerHTML = 'Não encontrado!'
    }
}, 8000)

reqGitBr.send();

// REQUISIÇÃO GIT COMMITS

const reqGitCom = new XMLHttpRequest();
reqGitCom.open('GET', commit)

reqGitCom.onreadystatechange = setTimeout(function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('commit').innerHTML = JSON.parse(this.responseText)['message']
    } else if (this.status == 404) {
        document.getElementById('commit').innerHTML = 'Não encontrado!'
    }
}, 10000)

reqGitCom.send();