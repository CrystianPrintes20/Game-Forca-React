
var portugues_Words = {
  frutas: ['pera', 'caju', 'carambola', 'abacaxi','tomate', 'goiaba', 'laranja','tucuma','tepereba','acai'],
  escola: ['caderno', 'caneta', 'corretivo','lapis','quadro','professor', 'merenda'],
  animal: ['macaco', 'leao', 'cachorro', 'gato','porco', 'alce', 'cobra', 'rato', 'tatu'],
};

const lengthObj = Object.keys(portugues_Words).length

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function randomWord() {
  const numArray = getRandomArbitrary(0, lengthObj)
  const tema = Object.keys(portugues_Words)[numArray]
  const palavra = portugues_Words[tema][Math.floor(Math.random() * portugues_Words[tema].length)]
  
  return [palavra, tema];
}

export { randomWord };
