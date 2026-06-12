export default function FinalConfirmStep({ onConfirm }) {
  return (
    <article className="document-card mission-card">
      <span className="file-label">Etapa 4</span>
      <h1>Última confirmação</h1>
      <p>Antes da revelação final, confirme uma última coisa.</p>
      <p className="question-text">Você aceita continuar o Plano A?</p>

      <div className="confirm-actions">
        <button className="primary-button" type="button" onClick={onConfirm}>
          Sim
        </button>
        <button className="secondary-button" type="button" onClick={onConfirm}>
          Com certeza
        </button>
      </div>
    </article>
  )
}
