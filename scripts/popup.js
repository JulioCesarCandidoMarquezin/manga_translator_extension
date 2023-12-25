document.addEventListener("DOMContentLoaded", function () {
  const translateButton = document.getElementById("translateButton");
  let srcLanguage = document.getElementById("srcLanguage").value;
  let destLanguage = document.getElementById("destLanguage").value;
  // let isDragging = false;
  // let offsetX, offsetY;

  // translateButton.addEventListener("mousedown", startDragging);
  translateButton.addEventListener("click", translate);

  // document.addEventListener("mousemove", drag);
  // document.addEventListener("mouseup", stopDragging);

  // window.addEventListener("resize", function () {
  //   requestAnimationFrame(adjustButtonPosition);
  // });

  // document.addEventListener("visibilitychange", function () {
  //   if (!document.hidden) {
  //     requestAnimationFrame(adjustButtonPosition);
  //   }
  // });

  function translate() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "translate", srcLanguage: srcLanguage, destLanguage: destLanguage });
    });
  }

  // function startDragging(e) {
  //   isDragging = true;
  //   const buttonRect = translateButton.getBoundingClientRect();
  //   offsetX = e.clientX - buttonRect.left;
  //   offsetY = e.clientY - buttonRect.top;
  // }

  // function drag(e) {
  //   if (isDragging) {
  //     const x =
  //       (e.clientX / window.innerWidth) * 100 -
  //       (offsetX / window.innerWidth) * 100;
  //     const y =
  //       (e.clientY / window.innerHeight) * 100 -
  //       (offsetY / window.innerHeight) * 100;

  //     const maxX =
  //       100 - (translateButton.offsetWidth / window.innerWidth) * 100;
  //     const maxY =
  //       100 - (translateButton.offsetHeight / window.innerHeight) * 100;

  //     translateButton.style.left = Math.min(maxX, Math.max(0, x)) + "%";
  //     translateButton.style.top = Math.min(maxY, Math.max(0, y)) + "%";
  //   }
  // }

  // function stopDragging() {
  //   isDragging = false;
  // }

  // function adjustButtonPosition() {
  //   const currentX = parseFloat(translateButton.style.left);
  //   const currentY = parseFloat(translateButton.style.top);

  //   const maxX = 100 - (translateButton.offsetWidth / window.innerWidth) * 100;
  //   const maxY =
  //     100 - (translateButton.offsetHeight / window.innerHeight) * 100;

  //   translateButton.style.left = Math.min(maxX, Math.max(0, currentX)) + "%";
  //   translateButton.style.top = Math.min(maxY, Math.max(0, currentY)) + "%";
  // }

  // adjustButtonPosition();
});