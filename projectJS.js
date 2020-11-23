//Hobbies Button

let btn = document.getElementById('btn');

let output = document.getElementById('output');

let hobby = ["Oil painting", "Watercolor painting", "Quilling", "Cross-Stitch", "Embroidery", "Coding", "Playing the gutiar", "Playing the piano", "Running", "Nature photography", "Bird watching", "Song writing", "Short story writing", "Salsa dancing", "Video editing", "Journalling"];

console.log(hobby);

btn.addEventListener('click', function() {
    var randomHobby = hobby[Math.floor(Math.random() * hobby.length)]
    output.innerText = randomHobby;
    console.log(randomHobby);
});



