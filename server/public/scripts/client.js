console.log('JS is in');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is ready');
    loadMonsters();   
}

function loadMonsters() {
    $.ajax({
        type: "GET",
        url: '/monsters'
    })
    .then((response) => {
        for (let monster of response) {
            $('#listOfMonsters').append(`<li>${monster}</li>`);
        }
    });
}
