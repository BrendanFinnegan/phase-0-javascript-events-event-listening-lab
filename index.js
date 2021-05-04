function addingEventListener() {
    const input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
}

const addAnotherEventListener = () => {
    const x = document.getElementById('main');
    x.addEventListener('click',() => {alert('Cliky click click');})
}
