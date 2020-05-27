// https://api.github.com/users/   /repos

function returnRepos() {
    let form = document.querySelector("#formInfo");
    let name = document.querySelector(".inputNome").value;

    event.preventDefault();

    startPreloader();

    axios.get("https://api.github.com/users/" + name + "/repos")
        .then(function (response) {
            console.log(response)
            showResults(response.data);
        })
        .catch(function (error) {
            alert('ERROR! Try again!');
        })
        .finally(() => endPreloader())

}

function showResults(repos) {
    document.querySelector("#results").innerHTML = '';

    document.querySelector("#results").style.display = "block";

    for (var i = 0; i < repos.length; i++) {
        document.querySelector("#results").innerHTML += `<p>${repos[i].name}</p> </br>`;
    }
}

function startPreloader (){
    document.getElementById('preloader').style.display = "block";
}

function endPreloader (){
    document.querySelector("#preloader").style.display = "none";
}