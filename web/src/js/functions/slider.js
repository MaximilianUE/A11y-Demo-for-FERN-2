
import Swiper from 'swiper';

new Swiper('.swiper-container',{
  "loop": true,
  "keyboard": {
    "enabled": true
  },
  "autoplay": {
    "delay": 2500,
    "disableOnInteraction": false
  },
  "centeredSlides": true,
  "pagination": {
    "el": ".swiper-pagination",
    "clickable": true
  }
});