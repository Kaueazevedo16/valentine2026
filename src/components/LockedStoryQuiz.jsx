import { useState } from 'react'

const options = ['O Sorriso', 'O Nariz', 'O Olho', 'Algo que não pode ser dito']
const correctAnswer = 'Algo que não pode ser dito'

export default function LockedStoryQuiz() {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [feedback, setFeedback] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)

  function handleAnswer(option) {
    setSelectedAnswer(option)

    if (option === correctAnswer) {
      setIsUnlocked(true)
      setFeedback('Texto liberado.')
      return
    }

    setFeedback('Só vou deixar tentar denovo porque é dia dos namorados')
  }

  return (
    <main className="screen story-screen">
      <section className="document-card story-panel">
        <span className="stamp">Capítulo secreto</span>
        <h1 className="story-title">Capitulo I</h1>

        <div className={isUnlocked ? 'story-text' : 'story-text locked'}>
          <p>
            Este é um texto de exemplo para ocupar o lugar da história final.
            Aqui vai entrar uma mensagem especial, escrita como um pequeno conto
            de fadas, sobre uma escolha, um encontro e um Plano A que sempre fez
            sentido.
          </p>
          <p>
            Quando o texto verdadeiro chegar, esta parte pode ser trocada por
            algo mais pessoal, com detalhes da história de vocês e uma surpresa
            no final.
          </p>
        </div>

        {!isUnlocked && (
          <div className="quiz-block">
            <p className="question-text">O que eu mais gosto em você?</p>
            <div className="answer-grid">
              {options.map((option) => (
                <button
                  key={option}
                  className={selectedAnswer === option ? 'answer selected' : 'answer'}
                  type="button"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {feedback && (
          <p className={isUnlocked ? 'feedback success-text' : 'feedback error'}>
            {feedback}
          </p>
        )}
      </section>
    </main>
  )
}
