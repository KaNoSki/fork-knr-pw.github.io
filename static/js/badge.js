const classMap = {
    "hanged": "haczyk_key_on",
    "empty": "haczyk_key_off"
};

function handleError(){
    const elements = document.querySelectorAll('.haczyk_right');
    elements.forEach(element => {
        element.className='haczyk_right haczyk_key_error';
    })
    console.log("fetch_error");
}

function updateButtonState(element_id, current_state){
    element_id.className='haczyk_right';
    if (classMap.hasOwnProperty(current_state)) {
        element_id.classList.add(classMap[current_state]);
    } else {
        element_id.classList.add("haczyk_key_error"); 
    }
}

function getState(){
    fetch('https://hangwatch.knr.edu.pl/hooks')
    .then(answer=>answer.json())
    .then(data => {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const state=data[key].state;
                const element=document.getElementById(key);
                updateButtonState(element,state);
            }
        }
    })
    .catch(error =>{
        handleError();
    })
}
setInterval(getState, 2500);