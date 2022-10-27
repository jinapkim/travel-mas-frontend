//const data = require('./experiences-sample-data.json')
//let searchResults = data.experiences;

let searchResults = {};

getAllExperiences();
//getExperiencesByKeyword('museum');
//getExperiencesByUser(2);


async function getAllExperiences() {
    let experiencesUrl = 'http://127.0.0.1:5000/experiences';
    await fetch(experiencesUrl)
    .then(response => response.json())
    .then(data => saveData(data))
    .catch(error => console.error(error));
}


async function getExperiencesByKeyword(keyword) {
    let experiencesUrl = 'http://127.0.0.1:5000/experiences?keyword=' + keyword;
    await fetch(experiencesUrl)
    .then(response => response.json())
    .then(data => saveData(data))
    .catch(error => console.error(error));
}


async function getExperiencesByUser(user_id) {
    let experiencesUrl = 'http://127.0.0.1:5000/users/' + user_id + '/experiences';
    await fetch(experiencesUrl)
    .then(response => response.json())
    .then(data => saveData(data))
    .catch(error => console.error(error));
}


function saveData(data) {
    searchResults = data.experiences;
    return searchResults
}

export { searchResults };
