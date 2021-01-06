window.addEventListener("DOMContentLoaded", () => {
  const showBtn = document.getElementById('showBtn');
  const description = document.getElementsByClassName('content-2')[0];
  const titles = document.getElementsByClassName('content-1')[0];
  const btnText = document.getElementById('button-text');
  const container = document.getElementsByClassName('container')[0];
  const image = document.getElementById('button-image');

  
  //show/hide content 
  function showHide(){
    description.classList.toggle('hide');
    titles.classList.toggle('hide');
  }
  //change button text
  function changeBtnText(){
    if (btnText.innerHTML == 'Show description') {
      btnText.innerHTML = 'Hide description';
    } else {
      btnText.innerHTML = 'Show description';
    }
  }
  //change background color
  function changeBackground(){
    container.classList.toggle('dark');
    btnText.classList.toggle('dark');
  }
  //change rotation of image
  function rotateImage(){
    if (image.style.transform == 'rotate(0deg)') {
      image.style.transform = 'rotate(45deg)';
    } else {
      image.style.transform = 'rotate(0deg)';
    }
  }

  showBtn.addEventListener('click', showHide);
  showBtn.addEventListener('click', changeBtnText);
  showBtn.addEventListener('click', changeBackground);
  showBtn.addEventListener('click', rotateImage);
});
