import { deselectCard } from '../paymentCard/paymentCardSlice'

export const logoutMiddleware = store => next => action => {
  if (action.type === 'usersAuth/removeCredentials') {
    const result = next(action)
    store.dispatch(deselectCard())
    return result
  }
  return next(action)
}