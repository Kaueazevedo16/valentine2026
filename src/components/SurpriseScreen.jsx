import { surpriseContent } from '../data/finalContent.js'

export default function SurpriseScreen({ onRestart }) {
  return (
    <main className="screen narrow-screen">
      <section className="document-card center-panel">
        <span className="stamp">MISSÃO FINAL</span>
        <h1>{surpriseContent.title}</h1>
        <p>{surpriseContent.text}</p>
        <p className="muted">{surpriseContent.smallText}</p>
        <button className="primary-button" type="button" onClick={onRestart}>
          {surpriseContent.buttonText}
        </button>
      </section>
    </main>
  )
}
