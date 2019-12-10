import {useEffect} from 'react'

const timings = {
  lockTimeout: Number(process.env.REACT_APP_TIMING_AUTH_CHECK_LOCK) || 1000
}

const authCheck = process.env.REACT_APP_AUTH_CHECK !== 'false'

export default function AuthCheck({isAuth, dispatch}) {
  let timeoutHandler = null
  useEffect(
    () => {
      if (authCheck && !isAuth)
        timeoutHandler = window.setTimeout(
          () => dispatch({type: 'lock', lockMessage: 'Неавторизованный доступ! Введите пин-код'}),
          timings.lockTimeout)
      return () => window.clearTimeout(timeoutHandler)
    }, [])

  // noinspection JSConstructorReturnsPrimitive
  return null
}
