const audioPlayer = document.getElementById('audio-player');
const songTitle = document.getElementById('song-title');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const playlistItems = document.querySelectorAll('.playlist .song');

let currentSongIndex = 0;

const songs = [
  { title: 'Song 1 - Artist 1', file: 'song1.mp3' },
  { title: 'Song 2 - Artist 2', file: 'song2.mp3' },
  { title: 'Song 3 - Artist 3', file: 'song3.mp3' }
];

// Load a song
function loadSong(index) {
  currentSongIndex = index;
  audioPlayer.src = songs[index].file;
  songTitle.textContent = songs[index].title;
  updateActiveSong(index);
}

// Play or pause the song
function togglePlay() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.textContent = '⏸️';
  } else {
    audioPlayer.pause();
    playButton.textContent = '▶️';
  }
}

// Play the previous song
function playPrevSong() {
  const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(newIndex);
  audioPlayer.play();
}

// Play the next song
function playNextSong() {
  const newIndex = (currentSongIndex + 1) % songs.length;
  loadSong(newIndex);
  audioPlayer.play();
}

// Update the active song in the playlist
function updateActiveSong(index) {
  playlistItems.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

// Event listeners
playButton.addEventListener('click', togglePlay);
prevButton.addEventListener('click', playPrevSong);
nextButton.addEventListener('click', playNextSong);

playlistItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    loadSong(index);
    audioPlayer.play();
    playButton.textContent = '⏸️';
  });
});

// Load the first song initially
loadSong(0);
