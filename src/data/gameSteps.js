export const questionSteps = [
  {
    id: 'plan-choice',
    step: 1,
    title: 'Confirmação da escolha',
    question: 'Qual plano você escolheu?',
    options: ['Plano A', 'Plano B', 'Ainda estou pensando'],
    correctAnswer: 'Plano A',
    correctFeedback: 'Correto. O Plano A continua ativo.',
    wrongFeedback: 'Resposta suspeita. Mas tudo bem, tenta de novo.',
  },
  {
    id: 'complete-phrase',
    step: 3,
    title: 'Complete a frase',
    question: 'O Plano A só funciona porque...',
    options: [
      'você aceitou',
      'a senha estava certa',
      'eu queria te ver sorrir',
      'todas as anteriores',
    ],
    correctAnswer: 'todas as anteriores',
    correctFeedback: 'Exatamente. Essa era a única resposta possível.',
    wrongFeedback:
      'Quase. Mas pensa melhor: o Plano A depende de mais de uma coisa.',
  },
]
