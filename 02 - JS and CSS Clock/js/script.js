
      function setDate(){
        let date = new Date()
        let seconds = date.getSeconds()
        let minutes = date.getMinutes()
        let hours = date.getHours()

        let secondsDeg = (90 + seconds * 6)%360
        let minutesDeg = (90 + minutes * 6)%360
        let hoursDeg = (90 + (hours * 30)%360)

        secondsHand.style.transform = `rotate(${secondsDeg}deg)`;
        minutesHand.style.transform = `rotate(${minutesDeg}deg)`;
        hoursHand.style.transform = `rotate(${hoursDeg}deg)`;


        let fullDate = `Hoy es ${date.getDay()} del ${date.getMonth()} de ${date.getFullYear()}`
        console.log(fullDate, secondsDeg, minutesDeg, minutes, hoursDeg, hours)
      }
      
      const secondsHand = document.querySelector(".second-hand")
      const minutesHand = document.querySelector(".min-hand")
      const hoursHand = document.querySelector(".hour-hand")


      setInterval(setDate,1000);