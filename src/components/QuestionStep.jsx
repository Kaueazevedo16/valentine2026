import { useState } from 'react'

export default function QuestionStep({ step, onNext }) {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [feedback, setFeedback] = useState('')
  const isCorrect = selectedAnswer === step.correctAnswer

  function handleSelect(option) {
    setSelectedAnswer(option)
    setFeedback(
      option === step.correctAnswer ? step.correctFeedback : step.wrongFeedback,
    )
  }

  return (
    <article className="document-card mission-card">
      <span className="file-label">Etapa {step.step}</span>
      <h1>{step.title}</h1>
      <p className="question-text">{step.question}</p>

      <div className="answer-grid">
        {step.options.map((option) => (
          <button
            key={option}
            className={selectedAnswer === option ? 'answer selected' : 'answer'}
            type="button"
            onClick={() => handleSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {feedback && (
        <p className={isCorrect ? 'feedback success-text' : 'feedback error'}>
          {feedback}
        </p>
      )}

      <button
        className="primary-button"
        type="button"
        disabled={!isCorrect}
        onClick={onNext}
      >
        Próxima etapa
      </button>
    </article>
  )
}
