const name = document.querySelector('.name');

export default function saveName(){
  function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)


  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)
}


