export default function useLocalStorage(name, component){

    function setLocalStorage() {
        localStorage.setItem(name, component.value);
      }
      window.addEventListener('beforeunload', setLocalStorage)


      function getLocalStorage() {
        if(localStorage.getItem(name)) {
          name.value = localStorage.getItem(name);
        }
      }
      window.addEventListener('load', getLocalStorage)
}


export function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


