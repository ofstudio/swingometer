export default function deviceType() {
  const userAgent = window.navigator.userAgent.toLowerCase()
  return /iphone|ipad|ipod/.test(userAgent)
    ? 'ios'
    : 'android'
}
