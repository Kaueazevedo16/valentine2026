import { useState } from 'react'

const chapterOneOptions = [
  'O Sorriso',
  'O Nariz',
  'O Olho',
  'Algo que não pode ser dito',
]
const chapterOneAnswer = 'Algo que não pode ser dito'

const chapterTwoOptions = [
  'Te dei o sol te dei o mar',
  'Se esse sorriso for pra mim, eu sou o cara que tem mais sorte no mundo',
  'Meteoro da paixão',
  'Quando você acordar, e se perguntar, como foi, como é?',
]
const chapterTwoAnswer =
  'Se esse sorriso for pra mim, eu sou o cara que tem mais sorte no mundo'

export default function LockedStoryQuiz() {
  const [chapterOneSelected, setChapterOneSelected] = useState('')
  const [chapterTwoSelected, setChapterTwoSelected] = useState('')
  const [chapterOneFeedback, setChapterOneFeedback] = useState('')
  const [chapterTwoFeedback, setChapterTwoFeedback] = useState('')
  const [isChapterOneUnlocked, setIsChapterOneUnlocked] = useState(false)
  const [isChapterTwoUnlocked, setIsChapterTwoUnlocked] = useState(false)

  function handleChapterOneAnswer(option) {
    setChapterOneSelected(option)

    if (option === chapterOneAnswer) {
      setIsChapterOneUnlocked(true)
      setChapterOneFeedback('Texto liberado.')
      return
    }

    setChapterOneFeedback('Só vou deixar tentar denovo porque é dia dos namorados')
  }

  function handleChapterTwoAnswer(option) {
    setChapterTwoSelected(option)

    if (option === chapterTwoAnswer) {
      setIsChapterTwoUnlocked(true)
      setChapterTwoFeedback('Capitulo II liberado.')
      return
    }

    setChapterTwoFeedback('Só vou deixar tentar denovo porque é dia dos namorados')
  }

  return (
    <main className="screen story-screen">
      <section className="document-card story-panel">
        <span className="kindle-label">Plano A</span>
        <h1 className="story-title">Capitulo I</h1>

        <div className="story-text">
          <div
            className={isChapterOneUnlocked ? 'story-copy' : 'story-copy locked'}
          >
            <p>
              Era uma vez, em um reino muito distante, mais conhecido como Rio de
              Janeiro, onde duas pessoas, que seguiam seus próprios caminhos,
              tiveram um encontro inesperado que mudaria o rumo de suas vidas para
              sempre.
            </p>
          </div>

          {!isChapterOneUnlocked && (
            <div className="quiz-block inline-quiz">
              <p className="question-text">O que eu mais gosto em você?</p>
              <div className="answer-grid">
                {chapterOneOptions.map((option) => (
                  <button
                    key={option}
                    className={
                      chapterOneSelected === option ? 'answer selected' : 'answer'
                    }
                    type="button"
                    onClick={() => handleChapterOneAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div
            className={isChapterOneUnlocked ? 'story-copy' : 'story-copy locked'}
          >
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
        </div>

        {chapterOneFeedback && (
          <p
            className={
              isChapterOneUnlocked ? 'feedback success-text' : 'feedback error'
            }
          >
            {chapterOneFeedback}
          </p>
        )}

        {isChapterOneUnlocked && (
          <section className="chapter-section">
            <span className="kindle-label">Próxima página</span>
            <h1 className="story-title">Capitulo II</h1>

            <div className="story-text">
              <div
                className={
                  isChapterTwoUnlocked ? 'story-copy' : 'story-copy locked'
                }
              >
                <p>
                  Existem algumas histórias que a gente acha que é um conto de
                  fadas por si só, mas as vezes é só a vida real. E foi assim
                  que ele se retratou quando saiu com ela pela primeira vez.
                </p>
              </div>

              {!isChapterTwoUnlocked && (
                <div className="quiz-block inline-quiz">
                  <p className="question-text">
                    "Esse sorrisão de orelha a orelha, vai me faltando ar..."
                  </p>
                  <div className="answer-grid">
                    {chapterTwoOptions.map((option) => (
                      <button
                        key={option}
                        className={
                          chapterTwoSelected === option
                            ? 'answer selected'
                            : 'answer'
                        }
                        type="button"
                        onClick={() => handleChapterTwoAnswer(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div
                className={
                  isChapterTwoUnlocked ? 'story-copy' : 'story-copy locked'
                }
              >
                <p>
                  E o tal sapo finalmente tinha encontrado sua princesa?
                </p>
                <p>
                  Já ela, se iludiu um pouco mais, devido ao cavalheirismo do
                  malandro. Ai vem a pergunta, qual lado se perdeu mais?
                </p>
                <p>
                  Ou melhor, seria essa a pergunta se nada tivesse acontecido
                  como aconteceu. De vallum garden a campo de marte. De
                  copacabana a campos do jordão. E por ai vai....
                </p>
              </div>
            </div>

            {chapterTwoFeedback && (
              <p
                className={
                  isChapterTwoUnlocked
                    ? 'feedback success-text'
                    : 'feedback error'
                }
              >
                {chapterTwoFeedback}
              </p>
            )}
          </section>
        )}
      </section>
    </main>
  )
}
