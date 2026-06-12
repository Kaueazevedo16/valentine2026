export default function PlanChoiceScreen({ onChoosePlan }) {
  return (
    <main className="screen choice-screen">
      <section className="hero-copy">
        <span className="stamp">CONFIDENCIAL</span>
        <h1>Escolha seu plano</h1>
        <p>A carta já foi entregue. Agora a escolha precisa ser confirmada.</p>
      </section>

      <section className="plan-grid" aria-label="Planos disponíveis">
        <button
          className="document-card plan-card"
          type="button"
          onClick={() => onChoosePlan('A')}
        >
          <strong>Plano A</strong>
        </button>

        <button
          className="document-card plan-card"
          type="button"
          onClick={() => onChoosePlan('B')}
        >
          <strong>Plano B</strong>
        </button>
      </section>
    </main>
  )
}
