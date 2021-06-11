//Goal is to get the url, and remove the ending digits
let currURL = '' + window.location.href;
console.log(currURL);
let tempURL;

//Reverse for loop to pop off ending digits
for (let i = currURL.length - 1; i >= 0; i--) {
  //Stop once we hit the first "/"
  if (currURL[i] === '/') {
    tempURL = currURL;
    break;
  }
  //Popping off numbers from the end of the url
  currURL = currURL.substring(0, currURL.length - 1);
}

let currComicID = parseInt(document.querySelector('.prev').value);

//Button controls
//Previous
document.querySelectorAll('.prev').forEach((item) => {
  item.addEventListener('click', (event) => {
    if (currComicID > 1) {
      let temp = (currComicID - 1).toString();
      location.replace(tempURL + temp);
    }
  });
});

//Next
//2474 is the latest comic release up to 6/10/2021
document.querySelectorAll('.next').forEach((item) => {
  item.addEventListener('click', (event) => {
    if (currComicID < 2474) {
      let temp = (currComicID + 1).toString();
      location.replace(tempURL + temp);
    }
  });
});

//Random
document.querySelectorAll('.rand').forEach((item) => {
  item.addEventListener('click', (event) => {
    let randomComicID = Math.floor(Math.random() * 2474).toString();
    location.replace(tempURL + randomComicID);
  });
});
