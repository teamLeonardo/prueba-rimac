import React, { useCallback, useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount((v) => v + 1)
  }, [])

  return (
    <button className="btn" onClick={handleClick}>
      count is {count}
    </button>
  )
}
