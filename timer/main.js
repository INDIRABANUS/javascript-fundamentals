const updateClock = ()=>{
  const time = new Date();
  let hours = time.getHours();
  const meridiem = hours >= 12 ? "PM": "AM";
  hours = hours % 12 || 12; 
  hours = hours.toString().padStart(2,0)
  const minute = time.getMinutes().toString().padStart(2,0);
  const seconds = time.getSeconds().toString().padStart(2,0);
  const timeString = `${hours}:${minute}:${seconds} ${meridiem}`

  const clock = document.getElementById("clock");
  
  clock.innerHTML = timeString;

}
updateClock();
setInterval(updateClock, 1000);