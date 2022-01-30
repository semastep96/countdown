import { UI } from './view.js'
import { isValid, format } from 'date-fns'
import countdown from 'countdown'

let interval = undefined

UI.FORM.addEventListener("submit", function() {
  if (interval) clearInterval(interval)
  const userDate = new Date(UI.INPUT.value)
  if (!isValid(userDate)) {
    alert('Please enter valid date🙏🏻')
    return
  }
  interval = setInterval(() => {
    const difference = countdown(userDate)
    UI.OUTPUT.innerHTML = `You enter: ${format(userDate, 'dd MMMM yyyy, hh:mm')}<br>From (to) your date ${difference}`
  }, 1000);
})

