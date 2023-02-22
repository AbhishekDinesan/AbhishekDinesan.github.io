
const projectCards = document.querySelectorAll('.project');

// loop through project cards and add hover event listener
projectCards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.classList.add('expanded');
    console.log("Hello, world!");
  });

  card.addEventListener('mouseout', () => {
    card.classList.remove('expanded');
    console.log("Hello, world!");
  });
});


