const paginas = [
[ // Página 1 - 20 frases
"Acredite no seu potencial! 🌟",
"Você é mais forte do que imagina 💪✨",
"Cada dia é uma nova chance! 🌅",
"Nunca desista dos seus sonhos 💖",
"Você nasceu para vencer ⭐",
"Coragem é seguir mesmo com medo 🌸",
"A vida recompensa quem não desiste 🌈",
"Você é capaz de tudo! 💫",
"Continue — o seu futuro agradece 🙏",
"Coisas incríveis estão por vir ✨",
"Foco, força e fé 💛",
"Seu esforço constrói seu sucesso 🧱",
"Você é luz! ✨🌺",
"A jornada é linda, continue 🌷",
"Seja gentil com você 🌼",
"O universo está ao seu favor 🌟",
"O impossível é apenas o começo 🚀",
"Você merece o melhor 💖",
"Hoje é o seu dia 🌻",
"Nunca pare de sonhar 🌙"
],


[ // Página 2 - 20 frases
"Você está evoluindo mesmo sem perceber 🌱",
"O segredo é começar 💥",
"Seja sua melhor versão 💎",
"Não pare até se orgulhar ✨",
"Grandes coisas levam tempo ⏳",
"Você está no caminho certo 🌈",
"Vibre coisas boas 🌟",
"Confie no processo 💫",
"Sua energia atrai milagres ✨",
"Respire… tudo vai dar certo 🌺",
"A sua luz incomoda quem vive na sombra 🌞",
"Continue firme, você já venceu muito 💪",
"Floresça onde Deus te plantou 🌸",
"Você é único e valioso 💖",
"Cada passo é vitória 🌻",
"Seu sorriso muda o mundo 😊",
"Seja forte como uma flor 🌷",
"Você tem um brilho especial 🌟",
"Acredite mais em você 💛",
"Sua caminhada é linda 🌼"
],


[ // Página 3 - 20 frases
"Você merece paz 🌿",
"Seu coração é lindo 💖",
"Você já venceu batalhas que nem lembra mais 🌙",
"Tudo que você procura está dentro de você ✨",
"Você é um milagre 💗",
"A vida é feita de recomeços 🌅",
"O amor sempre vence 🌸",
"Você atrai o que transmite 💎",
"Nunca se compare — você é único 🌻",
"Seja firme, doce e forte 🍃",
"A vida te reserva coisas lindas 🌈",
"Orgulhe-se de cada passo seu 👣",
"Você ilumina o mundo 🌟",
"A caminhada é longa, mas vale a pena 💫",
"Você nasceu para brilhar ✨",
"Cuide de você com carinho 💐",
"O mundo precisa do seu brilho 🌺",
"Você está crescendo em silêncio 🌱",
"Valorize sua história 💛",
"Seu coração merece descanso 🌙"
]
];


let paginaAtual = 0;
let indiceFrase = 0;


function mostrarFrase() {
document.getElementById("frase").textContent = paginas[paginaAtual][indiceFrase];
}


// Botão avançar
document.getElementById("avancar").onclick = () => {
indiceFrase++;


if (indiceFrase >= paginas[paginaAtual].length) {
indiceFrase = 0;
paginaAtual = (paginaAtual + 1) % paginas.length;
}


mostrarFrase();
};


// Botão voltar
document.getElementById("voltar").onclick = () => {
indiceFrase--;


if (indiceFrase < 0) {
paginaAtual = (paginaAtual - 1 + paginas.length) % paginas.length;
indiceFrase = paginas[paginaAtual].length - 1;
}


mostrarFrase();
};


mostrarFrase();
