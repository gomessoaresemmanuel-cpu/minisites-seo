
function updateCountdowns() {
  const now = new Date();
  const end = new Date();
  end.setHours(23,59,59,999);
  const diff = end - now;
  const hours = Math.floor(diff/(1000*60*60));
  const minutes = Math.floor((diff % (1000*60*60))/(1000*60));
  document.querySelectorAll('.countdown').forEach(el => { el.textContent = hours + 'h ' + minutes + 'm'; });
}
setInterval(updateCountdowns, 60000);
document.addEventListener('DOMContentLoaded', updateCountdowns);
