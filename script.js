document.addEventListener("DOMContentLoaded", function () {
  function getStudyAndBreakDuration() {
    const studyDuration =
      parseInt(document.getElementById("studyDuration").value) * 60;
    const breakDuration =
      parseInt(document.getElementById("breakDuration").value) * 60;

    let sessions = JSON.parse(localStorage.getItem("sessions")) || [];
    sessions.push({
      studyDuration: studyDuration / 60,
      breakDuration: breakDuration / 60,
    });

    localStorage.setItem("sessions", JSON.stringify(sessions));

    console.log("Study duration and break duration saved successfully.");

    startStudySession(studyDuration, breakDuration);
  }

  function startStudySession(studyDuration, breakDuration) {
    let progress = 0;
    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = "0%";

    const interval = 1000;
    const timer = setInterval(function () {
      progress += interval / 1000;
      const percent = (progress / studyDuration) * 100;
      progressBar.style.width = percent + "%";

      if (progress >= studyDuration) {
        clearInterval(timer);
        alert("It's time to take a break!");
        startBreakSession(breakDuration);
      }
    }, interval);
  }

  function startBreakSession(duration) {
    let progress = 0;
    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = "0%";

    const interval = 1000;
    const timer = setInterval(function () {
      progress += interval / 1000;
      const percent = (progress / duration) * 100;
      progressBar.style.width = percent + "%";

      if (progress >= duration) {
        clearInterval(timer);
        alert("Break is over. Time to resume studying!");
      }
    }, interval);
  }

  document.getElementById("startButton").addEventListener("click", function () {
    getStudyAndBreakDuration();
    printDurations();
  });
  document.getElementById("clearButton").addEventListener("click", function () {
    clearLocalStorage();
  });
  function clearLocalStorage() {
    localStorage.clear();
  }
  function printDurations() {
    const sessions = JSON.parse(localStorage.getItem("sessions")) || [];
    const studyBreakDurations = document.getElementById("sessionsContainer");
    studyBreakDurations.innerHTML = "";

    sessions.forEach(function (session, index) {
      const sessionInfo = document.createElement("p");
      sessionInfo.textContent =
        "Session " +
        (index + 1) +
        ": Study Duration - " +
        session.studyDuration +
        " minutes, Break Duration - " +
        session.breakDuration +
        " minutes";
      studyBreakDurations.appendChild(sessionInfo);
    });
  }
});
