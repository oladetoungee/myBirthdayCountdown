const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const birthday = '5 Dec 2021'

function countdown() {
   const currentDate = new Date();
   const birthdayDate = new Date(birthday);

   const totalSeconds = (birthdayDate-currentDate) / 1000
   const days = Math.floor(totalSeconds / 3600 / 24)
   const hours = Math.floor(totalSeconds / 3600) % 24
   const minutes = Math.floor(totalSeconds / 60) % 60
   const seconds = Math.floor(totalSeconds) % 60

   daysEl.innerHTML = days
   hoursEl.innerHTML = formatTime(hours)
   minsEl.innerHTML = formatTime(minutes)
   secondsEl.innerHTML = formatTime(seconds)
   console.log(days)
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time
}
countdown()
setInterval(countdown, 1000);