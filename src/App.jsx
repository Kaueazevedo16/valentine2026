import { useEffect, useState } from 'react'
import FairyTaleIntro from './components/FairyTaleIntro.jsx'
import LockedStoryQuiz from './components/LockedStoryQuiz.jsx'
import PasswordScreen from './components/PasswordScreen.jsx'
import PlanChoiceScreen from './components/PlanChoiceScreen.jsx'

const STORAGE_KEY = 'planoAAccessGranted'

export default function App() {
  const [screen, setScreen] = useState('plans')
  const [selectedPlan, setSelectedPlan] = useState(null)

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
      setScreen('fairyIntro')
    }
  }, [])

  function choosePlan(plan) {
    setSelectedPlan(plan)
    setScreen('password')
  }

  function grantPlanAAccess() {
    localStorage.setItem(STORAGE_KEY, 'true')
    setScreen('fairyIntro')
  }

  return (
    <div className="app-shell">
      {screen === 'plans' && <PlanChoiceScreen onChoosePlan={choosePlan} />}

      {screen === 'password' && selectedPlan === 'A' && (
        <PasswordScreen
          planType="A"
          title="Arquivo do Plano A"
          description="A escolha já foi feita. Agora falta provar que você tem a chave."
          buttonText="Desbloquear Plano A"
          hint="Dica: a senha está na carta."
          onSuccess={grantPlanAAccess}
          onBack={() => setScreen('plans')}
        />
      )}

      {screen === 'password' && selectedPlan === 'B' && (
        <PasswordScreen
          planType="B"
          title="Arquivo do Plano B"
          description="Esse plano exige uma credencial diferente."
          buttonText="Desbloquear Plano B"
          hint="Dica: talvez essa senha nunca tenha sido entregue."
          onSuccess={() => {}}
          onBack={() => setScreen('plans')}
          onGoToPlanA={() => {
            setSelectedPlan('A')
            setScreen('password')
          }}
        />
      )}

      {screen === 'fairyIntro' && (
        <FairyTaleIntro onNext={() => setScreen('lockedStory')} />
      )}

      {screen === 'lockedStory' && <LockedStoryQuiz />}
    </div>
  )
}
