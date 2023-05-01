import { useEffect, useState } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  //pointer move
  useEffect(() => {
    console.log('effect', { enabled })
    const handleMove = e => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    //cleanup method:
    //--> cuando el componente se demsonta
    //--> cuando cambian las dependencias, antes de ejecutar
    //   el efecto denuevo

    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  //* [] --> solo se ejecuta una vez cuando se monta el componente
  //* [enambled] --> se ejecuta cuando cmabia enabled y se ejcuta el componente
  //* undefined --> se ejecuta cada vez que se renderiza el componente

  // change body classname
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      //cleanup method
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])
  return (
    <main>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0,0,0,0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: '0.8',
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'}
      </button>
    </main>
  )
}

export default App
