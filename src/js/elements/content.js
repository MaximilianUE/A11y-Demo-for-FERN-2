
let buttonToggle = document.querySelector('.article__sidebar--toggle');

buttonToggle.addEventListener ('click', (e) => toggleArticleSidebar(e.target) );

function toggleArticleSidebar() {
  document.querySelector('article').classList.toggle('showSidebar-mobile');
}