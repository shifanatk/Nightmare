// Test suite for Shifana's UI API implementation
window.addEventListener('DOMContentLoaded', () => {
  console.log('Validating UI API Contract...');

  // 1. Verify required DOM elements exist
  const requiredIds = [
    'profile-card', 'bio-panel', 'premium-banner', 'close-banner',
    'fake-cursor', 'like-btn', 'pass-btn', 'super-btn',
    'chat-input', 'send-btn', 'agent-status', 'total-reward',
    'q-states', 'reset-training'
  ];

  requiredIds.forEach(id => {
    if (!document.getElementById(id)) {
      console.error(`Missing required DOM ID: #${id}`);
    }
  });

  // 2. Add manual test listener to Close Banner
  document.getElementById('close-banner').addEventListener('click', () => {
    window.UI.movePremiumBanner('moveCorner');
  });

  // 3. Test cursor redirection when hovering Like button
  document.getElementById('like-btn').addEventListener('mouseenter', () => {
    window.UI.moveFakeCursorTo('pass-btn');
  });
  document.getElementById('like-btn').addEventListener('mouseleave', () => {
    window.UI.hideFakeCursor();
  });

  // 4. Test Autocomplete chip insertion
  document.getElementById('suggestion-chip').addEventListener('click', (e) => {
    window.UI.replaceWithSuggestion(e.target.textContent);
    e.target.classList.add('hidden');
  });

  console.log('UI API loaded and ready for Nihal to attach telemetry and Q-tables.');
});