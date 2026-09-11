const UI = {
  banner: document.getElementById('premium-banner'),
  fakeCursor: document.getElementById('fake-cursor'),
  bio: document.getElementById('bio-scroll-area'),
  chatInput: document.getElementById('chat-input'),

  moveBanner(offsetX, offsetY) {
    this.banner.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  },

  updateFakeCursor(x, y) {
    this.fakeCursor.style.left = `${x}px`;
    this.fakeCursor.style.top = `${y}px`;
  },

  scrollBioBy(amount) {
    this.bio.scrollTop += amount;
  },

  insertChat(word) {
    this.chatInput.value += (this.chatInput.value ? ' ' : '') + word;
  }
};