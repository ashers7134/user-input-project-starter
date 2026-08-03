const title = document.getElementById('title_input');
const noun = document.getElementById('noun');
const verb = document.getElementById('verb');
const adjective = document.getElementById('adjective');
const storyElement = document.getElementById('story_result');
const header = document.getElementById('main_title');
const submit = document.getElementById('submit_button');
const container = document.querySelector('.form_container');



title.addEventListener('input', function(){
    header.innerHTML = title.value;
})

noun.addEventListener('change',function(){
    storyElement.innerHTML = "I saw a " + adjective.value + " " + noun.value + " " + verb.value + "ing on the street.";
})

submit.addEventListener('click', function(e){
    e.preventDefault();
    if(noun.value == "" || verb.value == "" || adjective.value == "" || title.value == "")
    {
        alert("Fill in all fields");
    }
    else {
    container.style.display = "none";
    storyElement.innerHTML = "I saw a " + adjective.value + " " + noun.value + " " + verb.value + "ing on the street.";
    }
})

