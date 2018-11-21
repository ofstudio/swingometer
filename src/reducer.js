export default function reducer(state, action) {
  switch (action.type) {
    case 'switch-scene':
      return {...state, scene: action.scene}
    case 'lock':
      return {isLocked: true, lockMessage: action.lockMessage, scene: 'start'}
    case 'unlock':
      return {...state, isLocked: false}
    case 'authorize':
      return {...state, isAuth: true}
    case 'de-authorize':
      return {...state, isAuth: false}
    case 'adjust':
      return {...state, adjust: action.value, adjustId: Math.random()}
    case 'score':
      return {...state, score: action.value}
    case 'capture':
      return {...state, capturedImage: action.value}
    case 'error':
      return {...state, scene: 'error', title: action.title, message: action.message}
    default:
      return state
  }
}
