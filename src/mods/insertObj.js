
const scoreList = document.querySelector('.item-list')

export const insertObject = (score) => {
    score.forEach((score) => {
      scoreList.innerHTML += `<li><p class="player">${score.name} : ${score.score}</p></li>`;
    });
  };