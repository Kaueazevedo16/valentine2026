import { useState } from 'react'

const ACCESS_PASSWORD_A = '201'

const planBMessages = [
  'Senha incorreta. O Plano B parece mais difícil do que deveria.',
  'Ainda não. Talvez você não tenha recebido essa senha por um motivo.',
  'Acesso negado. O Plano B não estava no caminho certo.',
]

export default function PasswordScreen({
  planType,
  title,
  description,
  buttonText,
  hint,
  onSuccess,
  onBack,
  onGoToPlanA,
}) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [planBAttempts, setPlanBAttempts] = useState(0)

  const isPlanBLocked = planType === 'B' && planBAttempts >= 3

  function handleSubmit(event) {
    event.preventDefault()

    if (planType === 'A') {
      if (password === ACCESS_PASSWORD_A) {
        onSuccess()
        return
      }

      setError('Senha incorreta. A carta tinha a resposta.')
      return
    }

    const nextAttempts = Math.min(planBAttempts + 1, 3)
    setPlanBAttempts(nextAttempts)
    setError(planBMessages[nextAttempts - 1])
    setPassword('')
  }

  return (
    <main className="screen password-screen">
      <section className="document-card access-panel">
        <button className="ghost-link back-link" type="button" onClick={onBack}>
          Voltar
        </button>

        <span className="stamp">ACESSO RESTRITO</span>
        <h1>{title}</h1>
        <p>{description}</p>

        <form className="password-form" onSubmit={handleSubmit}>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="off"
            disabled={isPlanBLocked}
          />

          <button className="primary-button" type="submit" disabled={isPlanBLocked}>
            {buttonText}
          </button>
        </form>

        <p className="hint">{hint}</p>
        {error && <p className="feedback error">{error}</p>}

        {isPlanBLocked && (
          <div className="plan-b-actions">
            <button className="secondary-button" type="button" onClick={onBack}>
              Voltar para os planos
            </button>
            <button className="ghost-link" type="button" onClick={onGoToPlanA}>
              Ir para o Plano A
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export { ACCESS_PASSWORD_A }
