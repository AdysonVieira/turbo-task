import React from 'react'

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = React.useState(() => {
      let item = window.localStorage.getItem(key)
      return item ? setState(JSON.parse(item)) : initialValue
    })

  const setValue = React.useCallback((value) => {
    setState(value)
    return window.localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [state, setValue]
}

export default useLocalStorage