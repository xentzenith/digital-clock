function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    
    const clockElement = document.getElementById('clock');
    clockElement.innerHTML = `
      <div class="time">
        <span>${hours}</span>
        <span class="colon">:</span>
        <span>${minutes}</span>
        <span class="colon">:</span>
        <span>${seconds}</span>
      </div>
      <div class="date">
        <span>${day}/${month}/${year}</span>
      </div>
    `;
  }
  
  setInterval(updateClock, 1000);
  updateClock();