 const audio = document.getElementById('backgroundAudio');
    audio.volume = 0.5; // Default volume 50%
    audio.play().catch(() => {
      console.log("Autoplay blocked by browser. User must interact to play.");
    });