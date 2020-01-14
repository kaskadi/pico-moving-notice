const getTime = () => {
  const now = Date.now()
  const targetTime = new Date(2020, 2, 2, 7, 0, 0)
  const msDist = targetTime - now
  let dist = Math.round(msDist/1000)
  const secs = dist%60
  dist = (dist - secs)/60
  const mins = dist%60
  dist = (dist - mins)/60
  const hrs = dist%24
  dist = (dist - hrs)/24
  const days = dist
  return {
    secs,
    mins,
    hrs,
    days
  }
}
const daysDisplay = window['days-display'].querySelector('kaskadi-display')
const hoursDisplay = window['hours-display'].querySelector('kaskadi-display')
const minsDisplay = window['mins-display'].querySelector('kaskadi-display')
const secsDisplay = window['secs-display'].querySelector('kaskadi-display')
setInterval(() => {
  const time = getTime()
  daysDisplay.value = time.days
  hoursDisplay.value = time.hrs
  minsDisplay.value = time.mins
  secsDisplay.value = time.secs
}, 500)
