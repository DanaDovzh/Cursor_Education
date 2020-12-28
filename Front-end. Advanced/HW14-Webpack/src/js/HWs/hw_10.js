export const playSound = (sound, nameSound) => {
  sound.src = `${nameSound}`;
  sound.play();
  sound.volume = 0.6;
}