export default function FairyTaleIntro({ onNext }) {
  return (
    <main className="screen fairy-screen">
      <section className="fairy-panel">
        <span className="stamp">Plano A</span>
        <h1 className="fairy-title">Era uma vez...</h1>
        <p>
          Uma história guardada com cuidado, esperando a pessoa certa para virar
          a próxima página.
        </p>
        <button className="primary-button" type="button" onClick={onNext}>
          Avançar
        </button>
      </section>
    </main>
  )
}
