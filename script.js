
let pages = [
  "✨ Página 1 — Você é capaz de grandes coisas!",
  "🔥 Página 2 — Nada pode parar alguém determinado!",
  "🌟 Página 3 — O futuro é brilhante para quem continua!"
];

let index = 0;
function nextPage(){
  index = (index + 1) % pages.length;
  document.getElementById("page").innerText = pages[index];
}
