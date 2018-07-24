
let buttonToggle = document.querySelectorAll('.article__sidebar--toggle');

buttonToggle.forEach(btn => {
  btn.addEventListener ('click', (e) => toggleArticleSidebar(e.target) );
});

function toggleArticleSidebar(btn) {
  document.querySelector('article').classList.toggle('showSidebar-mobile');
}