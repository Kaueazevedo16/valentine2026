export default function PlanIntro({ onStart }) {
  return (
    <main className="screen narrow-screen">
      <section className="document-card center-panel">
        <span className="stamp success">ACESSO LIBERADO</span>
        <h1>Acesso liberado. Plano A confirmado.</h1>
        <p>
          Você escolheu o Plano A. Boa escolha. Mas antes de revelar tudo,
          preciso confirmar algumas coisas.
        </p>
        <button className="primary-button" type="button" onClick={onStart}>
          Começar missão
        </button>
      </section>
    </main>
  )
}
