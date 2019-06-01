export default function isInStandalone () {
  return ('standalone' in window.navigator) && (window.navigator.standalone)
}
