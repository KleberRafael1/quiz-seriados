const perguntas = [
  {
    pergunta: "Qual é o nome da família que protagoniza a série 'Stranger Things'?",
    respostas: [
      "Wheeler",
      "Byers",
      "Hawkins",
    ],
    correta: 1
  },
  {
    pergunta: "Em 'Game of Thrones', quem é conhecido como 'O Rei da Noite'?",
    respostas: [
      "Jaime Lannister",
      "Jon Snow",
      "Night King",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome da série em que um grupo de amigos enfrenta situações surreais e perigosas, como o Mundo Invertido?",
    respostas: [
      "Friends",
      "The Big Bang Theory",
      "Stranger Things",
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o protagonista da série 'Breaking Bad', um professor de química que se torna um chefão do tráfico de metanfetamina?",
    respostas: [
      "Walter White",
      "Jesse Pinkman",
      "Saul Goodman",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome da série sobre um grupo de sobreviventes que enfrenta zumbis em um apocalipse?",
    respostas: [
      "Fear the Walking Dead",
      "The Walking Dead",
      "Z Nation",
    ],
    correta: 1
  },
  {
    pergunta: "Em 'Stranger Things', qual é o nome da garota com habilidades psicocinéticas?",
    respostas: [
      "Eleven",
      "Max",
      "Nancy",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome da série onde o personagem principal é um advogado que se envolve em casos complexos?",
    respostas: [
      "Suits",
      "Better Call Saul",
      "How to Get Away with Murder",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome da série onde o enredo gira em torno de um grupo de mulheres que cometem crimes?",
    respostas: [
      "Pretty Little Liars",
      "Good Girls",
      "Big Little Lies",
    ],
    correta: 1
  },
  {
    pergunta: "Quem é o protagonista de 'The Mandalorian', uma série ambientada no universo de Star Wars?",
    respostas: [
      "Luke Skywalker",
      "Darth Vader",
      "Mando (The Mandalorian)",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome da série de animação adulta sobre uma família disfuncional da cidade de Springfield?",
    respostas: [
      "American Dad",
      "Family Guy",
      "The Simpsons",
    ],
    correta: 2
  },
];


// Seleciona os elementos do HTML onde as perguntas do quiz serão inseridas
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// Loop ou laço de repetição do array 'perguntas'
for(const item of perguntas){
  // Clona o conteudo do template para criar um novo item do quiz
  const quizItem = template.content.cloneNode(true)

  // Define o texto da pergunta no novo item do quiz
  quizItem.querySelector('h3').textContent = item.pergunta

  // Itera sobre cada resposta da pergunta atual e as adiciona ao novo item do quiz
  for (let resposta of item.respostas) {

    // Clona o template do elemento 'dt' que contem uma resposta
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    // Define o texto da resposta clonada
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-'+perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if (estaCorreta){
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size+ ' de ' + totalDePerguntas
    }

    // Adiciona a resposta clonada ao novo item do quiz
    quizItem.querySelector('dl').appendChild(dt)
  }

  // Remove o primeiro elemento 'dt' que é usado como modelo/template
  quizItem.querySelector('dl dt').remove()
  
  //Adiciona o novo item do quiz a pagina HTML
  quiz.appendChild(quizItem)  
}