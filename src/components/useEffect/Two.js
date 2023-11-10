import React, { useEffect, useState } from 'react'

const EffectTwo = () => {

  const [ windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div>
      <h4>useEffect</h4>
      {windowWidth}
      <hr />
    </div>
  )
}

export default EffectTwo