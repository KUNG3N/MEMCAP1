import './style.css'

const menuopn = document.getElementById('menuopn');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const grayfilter = document.querySelector('.grayfilter');
const list = document.querySelector('.list');

menuopn.addEventListener("click", openmenu);

function openmenu() {
  menu.classList.toggle('open');  
  menuopn.style.zIndex = '11';
  grayfilter.classList.toggle('show');
  body.classList.toggle('scroll');

  if (menuopn.classList.contains('rotateO')) {
    menuopn.classList.remove('rotateO');
    menuopn.classList.add('rotateC');
    menu.classList.remove('open');
    list.classList.add('hidden');
  } else {
    menuopn.classList.remove('rotateC');
    menuopn.classList.add('rotateO');
    menu.classList.add('open');
    list.classList.remove('hidden');

  }
}

