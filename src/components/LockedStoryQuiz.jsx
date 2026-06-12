import { useEffect, useState } from 'react'

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

const chapterThreeOptions = [
  'Japonês',
  'Pizza',
  'Bolo',
  'Você eu não sei, mas eu...',
]
const chapterThreeAnswer = 'Japonês'

const galleryModules = import.meta.glob('../assets/images/gallery/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const photoPageImages = Object.entries(galleryModules)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([path, src]) => ({ id: path, src }))

const finalMessage =
  'Assim como foi quando eu conheci você, nunca existiu plano B.\n\nTe amo.'

export default function LockedStoryQuiz() {
  const [currentChapter, setCurrentChapter] = useState(1)
  const [chapterOneSelected, setChapterOneSelected] = useState('')
  const [chapterTwoSelected, setChapterTwoSelected] = useState('')
  const [chapterThreeSelected, setChapterThreeSelected] = useState('')
  const [chapterOneFeedback, setChapterOneFeedback] = useState('')
  const [chapterTwoFeedback, setChapterTwoFeedback] = useState('')
  const [chapterThreeFeedback, setChapterThreeFeedback] = useState('')
  const [isChapterOneUnlocked, setIsChapterOneUnlocked] = useState(false)
  const [isChapterTwoUnlocked, setIsChapterTwoUnlocked] = useState(false)
  const [isChapterThreeUnlocked, setIsChapterThreeUnlocked] = useState(false)
  const [photoPageIndex, setPhotoPageIndex] = useState(0)
  const [finalMessageLength, setFinalMessageLength] = useState(0)

  const photoGroups = Math.max(1, Math.ceil(photoPageImages.length / 4))
  const visiblePhotos = Array.from({ length: 4 }, (_, index) => {
    const photoIndex = (photoPageIndex * 4 + index) % photoPageImages.length
    return photoPageImages[photoIndex]
  }).filter(Boolean)

  useEffect(() => {
    if (currentChapter !== 3 || photoGroups <= 1) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setPhotoPageIndex((currentIndex) => (currentIndex + 1) % photoGroups)
    }, 3000)

    return () => window.clearInterval(intervalId)
  }, [currentChapter, photoGroups])

  useEffect(() => {
    photoPageImages.forEach((photo) => {
      const image = new Image()
      image.src = photo.src
    })
  }, [])

  useEffect(() => {
    if (currentChapter !== 6) {
      setFinalMessageLength(0)
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setFinalMessageLength((currentLength) => {
        if (currentLength >= finalMessage.length) {
          window.clearInterval(intervalId)
          return currentLength
        }

        return currentLength + 1
      })
    }, 42)

    return () => window.clearInterval(intervalId)
  }, [currentChapter])

  function handleChapterOneAnswer(option) {
    setChapterOneSelected(option)

    if (option === chapterOneAnswer) {
      setIsChapterOneUnlocked(true)
      setChapterOneFeedback('Texto liberado.')
      return
    }

    setChapterOneFeedback('Só vou deixar tentar de novo porque é Dia dos Namorados')
  }

  function handleChapterTwoAnswer(option) {
    setChapterTwoSelected(option)

    if (option === chapterTwoAnswer) {
      setIsChapterTwoUnlocked(true)
      setChapterTwoFeedback('Capítulo II liberado.')
      return
    }

    setChapterTwoFeedback('Só vou deixar tentar de novo porque é Dia dos Namorados')
  }

  function handleChapterThreeAnswer(option) {
    setChapterThreeSelected(option)

    if (option === chapterThreeAnswer) {
      setIsChapterThreeUnlocked(true)
      setChapterThreeFeedback('Capítulo III liberado.')
      return
    }

    setChapterThreeFeedback('Só vou deixar tentar de novo porque é Dia dos Namorados')
  }

  return (
    <main className="screen story-screen">
      <section className="document-card story-panel">
        <span className="kindle-label">Plano A</span>

        {currentChapter === 1 && (
          <>
            <h1 className="story-title">Capítulo I</h1>
            <div className="story-text">
              <div className={isChapterOneUnlocked ? 'story-copy' : 'story-copy locked'}>
                <p>
                  Era uma vez, em um reino muito distante, mais conhecido como Rio
                  de Janeiro, onde duas pessoas, que seguiam seus próprios
                  caminhos, tiveram um encontro inesperado que mudaria o rumo de
                  suas vidas para sempre.
                </p>
              </div>

              {!isChapterOneUnlocked && (
                <div className="quiz-block inline-quiz">
                  <p className="question-text">O que eu mais gosto em você?</p>
                  <div className="answer-grid">
                    {chapterOneOptions.map((option) => (
                      <button
                        key={option}
                        className={chapterOneSelected === option ? 'answer selected' : 'answer'}
                        type="button"
                        onClick={() => handleChapterOneAnswer(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className={isChapterOneUnlocked ? 'story-copy' : 'story-copy locked'}>
                <p>
                  Ele não procurava nada, se sentia completo e feliz, e ela vivia
                  uma de suas melhores fases, tanto profissionalmente quanto
                  mentalmente. Mas, por ironia do destino, encontraram, um no
                  outro, aquilo que jamais tiveram coragem de procurar, o Amor.
                </p>
                <p>
                  E o tal do Amor veio, mesclado de confusão, e muitos encontros,
                  esses, que geraram boas histórias....
                </p>
              </div>
            </div>

            {chapterOneFeedback && (
              <p className={isChapterOneUnlocked ? 'feedback success-text' : 'feedback error'}>
                {chapterOneFeedback}
              </p>
            )}

            {isChapterOneUnlocked && (
              <div className="page-actions">
                <button className="primary-button" type="button" onClick={() => setCurrentChapter(2)}>
                  Próxima página
                </button>
              </div>
            )}
          </>
        )}

        {currentChapter === 2 && (
          <>
            <h1 className="story-title">Capítulo II</h1>
            <div className="story-text">
              <div className={isChapterTwoUnlocked ? 'story-copy' : 'story-copy locked'}>
                <p>
                  Existem algumas histórias que a gente acha que é um conto de
                  fadas por si só, mas às vezes é só a vida real. E foi assim
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
                        className={chapterTwoSelected === option ? 'answer selected' : 'answer'}
                        type="button"
                        onClick={() => handleChapterTwoAnswer(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className={isChapterTwoUnlocked ? 'story-copy' : 'story-copy locked'}>
                <p>Será que o sapo finalmente tinha encontrado sua princesa?</p>
                <p>
                  Já ela, devido ao cavalheirismo do malandro, achou que tivesse
                  encontrado o príncipe encantado. Aí vem a pergunta: será que
                  os anjos comemoraram quando eles finalmente se encontraram?
                </p>
                <p>
                  De lá para cá, foram muitas festas, dates, flores, cartas e,
                  por último, mas MAIS importante, muito companheirismo.
                </p>
                <p>
                  O amor e a lealdade mantiveram esse casal unido, proporcionando
                  algumas boas fotos, risadas e histórias que serão contadas
                  para seus filhos.
                </p>
              </div>
            </div>

            {chapterTwoFeedback && (
              <p className={isChapterTwoUnlocked ? 'feedback success-text' : 'feedback error'}>
                {chapterTwoFeedback}
              </p>
            )}

            {isChapterTwoUnlocked && (
              <div className="page-actions">
                <button className="primary-button" type="button" onClick={() => setCurrentChapter(3)}>
                  Próxima página
                </button>
              </div>
            )}
          </>
        )}

        {currentChapter === 3 && (
          <>
            <h1 className="story-title">Página de fotos</h1>
            <div className="photo-page">
              {visiblePhotos.map((photo) => (
                <figure className="kindle-photo" key={`${photoPageIndex}-${photo.id}`}>
                  <img src={photo.src} alt="" />
                </figure>
              ))}
            </div>
            <div className="page-actions">
              <button className="primary-button" type="button" onClick={() => setCurrentChapter(4)}>
                Próxima página
              </button>
            </div>
          </>
        )}

        {currentChapter === 4 && (
          <>
            <h1 className="story-title">Capítulo III</h1>
            <div className="story-text">
              <div className={isChapterThreeUnlocked ? 'story-copy' : 'story-copy locked'}>
                <p>
                  Tudo estabilizado, praticamente um ano juntos, a vida pela
                  frente, com planos, ambições e ainda muito amor para se colocar
                  em prática, se é que você entendeu...
                </p>
                <p>
                  Aí vem a notícia, que, para um lado, soou como uma gota de água
                  caindo em um rio seco e, para o outro, soou como um balde de
                  água fria: um intercâmbio.
                </p>
              </div>

              {!isChapterThreeUnlocked && (
                <div className="quiz-block inline-quiz">
                  <p className="question-text">O que vamos comer hoje?</p>
                  <div className="answer-grid">
                    {chapterThreeOptions.map((option) => (
                      <button
                        key={option}
                        className={chapterThreeSelected === option ? 'answer selected' : 'answer'}
                        type="button"
                        onClick={() => handleChapterThreeAnswer(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className={isChapterThreeUnlocked ? 'story-copy' : 'story-copy locked'}>
                <p>
                  Esse, que, aos olhos de quem vê, pode ser doloroso, mas, para
                  os nossos protagonistas, será apenas o primeiro obstáculo que
                  eles terão de enfrentar como casal. Uma das piores dores que
                  vão sentir é a saudade, da qual machuca. Mas, privilegiada é
                  a pessoa que pode senti-la, já que, para passar por tal
                  sentimento, é necessário ter alguém que significa muito para
                  você.
                </p>
                <p>
                  O Sapo vai desejar uma ótima viagem para a princesa, porque ele
                  sabe que ela precisa disso e que é uma grande oportunidade para
                  crescer, não só profissionalmente, mas como pessoa. Já a
                  princesa vai de braços abertos para o mundo, porque ela sabe
                  que, se cair, o Sapo, o Rei e a Rainha vão levantá-la e vão
                  mandar erguer a cabeça, porque, se não, a coroa cai.
                </p>
                <p>
                  Uma história que só está começando, mas que já foi de Vallum
                  Garden a Campo de Marte. De Copacabana a Campos do Jordão. E,
                  no final do ano, vai ter ido de Boston a Nova York...
                </p>
              </div>
            </div>

            {chapterThreeFeedback && (
              <p className={isChapterThreeUnlocked ? 'feedback success-text' : 'feedback error'}>
                {chapterThreeFeedback}
              </p>
            )}

            {isChapterThreeUnlocked && (
              <div className="page-actions">
                <button className="primary-button" type="button" onClick={() => setCurrentChapter(5)}>
                  Próxima página
                </button>
              </div>
            )}
          </>
        )}

        {currentChapter === 5 && (
          <>
            <h1 className="continued-title">To Be Continued....</h1>
            <div className="page-actions">
              <button className="primary-button" type="button" onClick={() => setCurrentChapter(6)}>
                Próxima página
              </button>
            </div>
          </>
        )}

        {currentChapter === 6 && (
          <div className="final-note-page">
            <p className="final-typed-message">
              {finalMessage.slice(0, finalMessageLength)}
              <span className="typing-caret" />
            </p>
          </div>
        )}
      </section>
    </main>
  )
}
