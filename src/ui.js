/**
 * UI Action API - Lead: Shifana
 * Implements all frozen UI methods called by RL Decision Loop.
 */
window.UI = {
  // --- Banner Actions ---
  movePremiumBanner(mode) {
    const banner = document.getElementById('premium-banner');
    if (!banner) return;

    if (mode === 'moveCorner') {
      // Pick random relative bounded corner inside phone-frame
      const randomX = (Math.random() * 40 - 20).toFixed(0);
      const randomY = (Math.random() * 200 + 40).toFixed(0);
      banner.style.transform = `translate(${randomX}px, ${randomY}px)`;
    } else if (mode === 'stay') {
      banner.style.transform = 'translate(0px, 0px)';
    }
    this.updateAgentStatus(`Banner action executed: ${mode}`);
  },

  scalePremiumBanner(value) {
    const banner = document.getElementById('premium-banner');
    if (!banner) return;
    banner.style.transform += ` scale(${value})`;
    this.updateAgentStatus(`Banner scale adjusted: ${value}`);
  },

  pulsePremiumBanner() {
    const banner = document.getElementById('premium-banner');
    if (!banner) return;
    banner.style.opacity = '0.4';
    setTimeout(() => { banner.style.opacity = '1.0'; }, 200);
    this.updateAgentStatus('Banner pulse triggered');
  },

  // --- Scrollbar Actions ---
  scrollBioToTarget() {
    const bioPanel = document.getElementById('bio-panel');
    const target = document.getElementById('boring-target');
    if (!bioPanel || !target) return;
    bioPanel.scrollTop = target.offsetTop - bioPanel.offsetTop;
    this.updateAgentStatus('Scroll pushed to boring terms target');
  },

  adjustBioScroll(px) {
    const bioPanel = document.getElementById('bio-panel');
    if (!bioPanel) return;
    bioPanel.scrollTop += px;
    this.updateAgentStatus(`Scroll adjusted by ${px}px`);
  },

  // --- Cursor Twin Actions ---
  moveFakeCursorTo(buttonId) {
    const fakeCursor = document.getElementById('fake-cursor');
    const targetElement = document.getElementById(buttonId);
    if (!fakeCursor || !targetElement) return;

    const rect = targetElement.getBoundingClientRect();
    fakeCursor.style.display = 'block';
    // Offset cursor directly to button center
    fakeCursor.style.transform = `translate(${rect.left + rect.width / 2}px, ${rect.top + rect.height / 2}px)`;
    this.updateAgentStatus(`Fake cursor bait pointing toward: ${buttonId}`);
  },

  hideFakeCursor() {
    const fakeCursor = document.getElementById('fake-cursor');
    if (!fakeCursor) return;
    fakeCursor.style.display = 'none';
  },

  // --- Autocomplete Actions ---
  appendSuggestion(text) {
    const chatInput = document.getElementById('chat-input');
    if (!chatInput) return;
    chatInput.value = chatInput.value + ' ' + text;
    this.updateAgentStatus(`Appended suggestion: "${text}"`);
  },

  replaceWithSuggestion(text) {
    const chatInput = document.getElementById('chat-input');
    if (!chatInput) return;
    chatInput.value = text;
    this.updateAgentStatus(`Replaced input with: "${text}"`);
  },

  showSuggestionChip(text) {
    const chip = document.getElementById('suggestion-chip');
    if (!chip) return;
    chip.textContent = text;
    chip.classList.remove('hidden');
    this.updateAgentStatus(`Suggested chip shown: "${text}"`);
  },

  // --- Dashboard / Status Update ---
  updateAgentStatus(text) {
    const statusBox = document.getElementById('agent-status');
    if (statusBox) {
      statusBox.textContent = `[${new Date().toLocaleTimeString()}] ${text}`;
    }
  }
};