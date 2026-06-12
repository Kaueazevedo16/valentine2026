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
        <span className="kindle-label">Plano A</span>
        <h1 className="story-title">Capitulo I</h1>

        <div className={isUnlocked ? 'story-text' : 'story-text locked'}>
          <p>
            Era uma vez, em um reino muito distante, mais conhecido como Rio de
            Janeiro, onde duas pessoas, que seguiam seus próprios caminhos,
            tiveram um encontro inesperado que mudaria o rumo de suas vidas para
            sempre.
          </p>
          <p>
            Ele não procurava nada, se sentia completo e feliz, e ela vivia uma
            de suas melhores fases, tanto profissionalmente quanto mentalmente.
            Mas, por ironia do destino, encontraram, um no outro, aquilo que
            jamais tiveram coragem de procurar, o Amor.
          </p>
          <p>
            E o tal do Amor veio, mesclado de confusão, e muitos encontros,
            esses, que geraram boas histórias....
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
