window.addEventListener('DOMContentLoaded', () => {
  Telemetry.init();

  // Test rule: fake cursor lags real cursor
  function loop() {
    UI.updateFakeCursor(Telemetry.mouseX + 40, Telemetry.mouseY + 40);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
});