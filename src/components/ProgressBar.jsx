export default function ProgressBar({ currentStep, totalSteps }) {
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="progress-wrap" aria-label={`Etapa ${currentStep} de ${totalSteps}`}>
      <div className="progress-meta">
        <span>Missão Plano A</span>
        <span>
          {currentStep}/{totalSteps}
        </span>
      </div>
      <div className="progress-track">
        <span className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
