export default function checkCompatibility() {
  return (navigator.mediaDevices) && (window.DeviceOrientationEvent)
}
