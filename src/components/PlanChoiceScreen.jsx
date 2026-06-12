export default function PlanChoiceScreen({ onChoosePlan }) {
  return (
    <main className="screen choice-screen">
      <section className="plan-grid" aria-label="Planos disponiveis">
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
