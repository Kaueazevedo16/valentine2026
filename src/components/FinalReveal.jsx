import { finalRevealContent } from '../data/finalContent.js'

export default function FinalReveal({ onOpenSurprise }) {
  return (
    <main className="screen reveal-screen">
      <section className="document-card reveal-panel">
        <div className="reveal-copy">
          <span className="stamp success">DESBLOQUEADO</span>
          <h1>{finalRevealContent.title}</h1>
          <p>{finalRevealContent.mainText}</p>
          <p className="muted">{finalRevealContent.secondaryText}</p>
          <button className="primary-button" type="button" onClick={onOpenSurprise}>
            {finalRevealContent.buttonText}
          </button>
        </div>
        <img src={finalRevealContent.image} alt="" className="final-image" />
      </section>
    </main>
  )
}
