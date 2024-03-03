const classMap = {
    "hanged": "haczyk_key_on",
    "empty": "haczyk_key_off"
};

function handleError(){
    const elements = document.querySelectorAll('.haczyk_right');
    elements.forEach(element => {
        element.className='haczyk_right haczyk_key_error';
    })
}

function getState(){
    fetch('http://127.0.0.1:5000/hooks')
    .then(odpowiedz=>odpowiedz.json())
    .then(data => {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const stan = data[key].state;
                const element=document.getElementById(key);
                element.className='haczyk_right';
                if (classMap.hasOwnProperty(stan)) {
                    element.classList.add(classMap[stan]);
                } else {
                    element.classList.add("haczyk_key_error"); 
                }
            }
        }
    })
    .catch(error =>{
        handleError();
    })
}
setInterval(getState, 2500);