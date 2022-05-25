const gToken = 'gToken'

export const getGToken = () => localStorage.getItem(gToken)

export const setGToken = (token: string) => localStorage.setItem(gToken, token)

export const clearGToken = () => localStorage.removeItem(gToken)
