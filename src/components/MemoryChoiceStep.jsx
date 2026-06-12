import { useState } from 'react'
import { memories } from '../data/memories.js'

export default function MemoryChoiceStep({ onNext }) {
  const [selectedMemory, setSelectedMemory] = useState('')

  return (
    <article className="document-card mission-card">
      <span className="file-label">Etapa 2</span>
      <h1>Escolha uma memória</h1>
      <p>Escolha uma memória para liberar a próxima pista.</p>

      <div className="memory-grid">
        {memories.map((memory) => (
          <button
            key={memory.id}
            className={
              selectedMemory === memory.id ? 'memory-card selected' : 'memory-card'
            }
            type="button"
            onClick={() => setSelectedMemory(memory.id)}
          >
            <img src={memory.image} alt="" />
            <strong>{memory.title}</strong>
            <span>{memory.caption}</span>
          </button>
        ))}
      </div>

      {selectedMemory && (
        <p className="feedback success-text">
          Essa memória já explica boa parte do motivo do Plano A existir.
        </p>
      )}

      <button
        className="primary-button"
        type="button"
        disabled={!selectedMemory}
        onClick={onNext}
      >
        Próxima etapa
      </button>
    </article>
  )
}
