import ProgressBar from './ProgressBar.jsx'

export default function MissionLayout({ currentStep, totalSteps, children }) {
  return (
    <main className="screen mission-screen">
      <section className="mission-shell">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        {children}
      </section>
    </main>
  )
}
