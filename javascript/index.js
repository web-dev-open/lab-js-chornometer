document.addEventListener('DOMContentLoaded', () => {
  const chronometer = new Chronometer();

  function printTime() {
    const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
    const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
    document.getElementById('minDec').innerText = minutes[0];
    document.getElementById('minUni').innerText = minutes[1];
    document.getElementById('secDec').innerText = seconds[0];
    document.getElementById('secUni').innerText = seconds[1];
  }

  function toggleButtons() {
    const btnLeft = document.getElementById('btnLeft');
    const btnRight = document.getElementById('btnRight');

    if (btnLeft.classList.contains('start')) {
      btnLeft.innerText = 'STOP';
      btnLeft.className = 'btn stop';
      btnRight.innerText = 'SPLIT';
      btnRight.className = 'btn split';
      chronometer.start(printTime);
    } else {
      btnLeft.innerText = 'START';
      btnLeft.className = 'btn start';
      btnRight.innerText = 'RESET';
      btnRight.className = 'btn reset';
      chronometer.stop();
    }
  }

  document.getElementById('btnLeft').addEventListener('click', () => {
    toggleButtons();
  });

  document.getElementById('btnRight').addEventListener('click', () => {
    const btnRight = document.getElementById('btnRight');

    if (btnRight.classList.contains('split')) {
      // Perform action when split button is clicked (e.g., display split time)
      const splitTime = chronometer.split();
      // You can use splitTime as needed, for example, display it on the screen
      console.log(splitTime);
    } else {
      // Perform action when reset button is clicked (e.g., reset the chronometer)
      chronometer.reset();
      printTime(); // Reset the displayed time on the screen
    }
  });
});
