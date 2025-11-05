// Display logged-in user if any
let username = localStorage.getItem("loggedInUser");
document.getElementById("welcome-user").textContent = username
  ? `Welcome, ${username}`
  : "";

// Playlist data with working image URLs
const playlists = [
  {
    name: "Chill Vibes",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    songs: [
      { title: "Dreams", artist: "Benjamin Tissot", file: "https://www.bensound.com/bensound-music/bensound-dreams.mp3" },
      { title: "Tenderness", artist: "Benjamin Tissot", file: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3" },
      { title: "Sunny", artist: "Benjamin Tissot", file: "https://www.bensound.com/bensound-music/bensound-sunny.mp3" },
      { title: "Slow Motion", artist: "Benjamin Tissot", file: "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3" }
    ]
  },
  {
    name: "Energetic Hits",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    songs: [
      { title: "Energy", artist: "Benjamin Tissot", file: "https://www.bensound.com/bensound-music/bensound-energy.mp3" },
      { title: "Epic", artist: "Benjamin Tissot", file: "https://www.bensound.com/bensound-music/bensound-epic.mp3" },
      { title: "Actionable", artist: "Benjamin Tissot", file: "https://www.bensound.com/bensound-music/bensound-actionable.mp3" },
      { title: "Adventure", artist: "Benjamin Tissot", file: "https://www.bensound.com/bensound-music/bensound-adventure.mp3" }
    ]
  },
  {
    name: "Karan Aujla",
    cover: "songs/Karan Aujla/Karan Aujla.jpg",
    songs: [
      { title: "At Peace", artist: "Karan Aujla", file: "songs/Karan Aujla/At Peace.mp3" },
      { title: "Wavy", artist: "Karan Aujla", file: "songs/Karan Aujla/Wavy.mp3" },
      { title: "For A Reason", artist: "Karan Aujla", file: "songs/Karan Aujla/For A Reason.mp3" }
    ]
  },
  {
    name: "Arjan Dhillon",
    cover: "songs/Arjan Dhillon/Arjan Dhillon.jpg",
    songs: [
      { title: "Mulaqat", artist: "Arjan Dhillon", file: "songs/Arjan Dhillon/Mulaqat.mp3" },
      { title: "Ok Hoye Paye Haan", artist: "Arjan Dhillon", file: "songs/Arjan Dhillon/Ok Hoye Paye Haan.mp3" },
      { title: "Dil Toot Jayega", artist: "Arjan Dhillon", file: "songs/Arjan Dhillon/Dil Toot Jayega.mp3" }
    ]
  },
  {
    name: "Yo Yo Honey Singh",
    cover: "songs/Yo Yo Honey Singh/Yo Yo Honey Singh.webp",
    songs: [
      { title: "Brown Rang", artist: "Yo Yo Honey Singh", file: "songs/Yo Yo Honey Singh/Brown Rang.mp3" },
      { title: "Desi Kalakaar", artist: "Yo Yo Honey Singh", file: "songs/Yo Yo Honey Singh/Desi Kalakaar.mp3" },
      { title: "Dope Shope", artist: "Yo Yo Honey Singh", file: "songs/Yo Yo Honey Singh/Dope Shope.mp3" }
    ]
  },
];

// Trending songs data with working image URLs
const trendingSongs = [
  {
    title: "Sirra",
    artist: "Guru Randhawa",
    cover: "songs/Guru Randhawa/Guru Randhawa.webp",
    file: "songs/Guru Randhawa/Sirra.mp3",
    plays: "75.55M"
  },
  {
    title: "As It Was",
    artist: "Harry Styles",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    file: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3",
    plays: "980M"
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    file: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
    plays: "2.5B"
  },
  {
    title: "Dance Monkey",
    artist: "Tones and I",
    cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    file: "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3",
    plays: "1.8B"
  },
];

// Popular Artists data with working image URLs
const popularArtists = [
  {
    name: "Diljit Dosanjh",
    image: "songs/Diljit Dosanjh/Diljit Dosanjh.webp",
    type: "Artist",
    followers: "40.2M"
  },
  {
    name: "Arijit Singh",
    image: "songs/Arijit Singh/Arijit Singh.webp",
    type: "Artist",
    followers: "40.2M"
  },
  {
    name: "Sidhu Moose Wala",
    image: "songs/sidhu moose wala/sidhu moose wala.webp",
    type: "Artist",
    followers: "40.2M"
  },
  {
    name: "AP Dhillon",
    image: "songs/AP Dhillon/AP Dhillon.webp",
    type: "Artist",
    followers: "40.2M"
  },
  {
    name: "Jubin Nautiyal",
    image: "songs/Jubin Nautiyal/Jubin Nautiyal.webp",
    type: "Artist",
    followers: "40.2M"
  },
];

let currentPlaylist = null;
let currentSong = 0;
let sidebarSongs = [];
let previousVolume = 0.5;

const audio = document.getElementById("audio");
audio.volume = 0.5;

const contentArea = document.getElementById("content-area");
const searchInput = document.getElementById("song-search");
const searchResults = document.getElementById("search-results");

// Modern Player Elements
const playerCover = document.getElementById('player-cover');
const playerTrackName = document.getElementById('player-track-name');
const playerArtistName = document.getElementById('player-artist-name');
const playerPlayBtn = document.getElementById('player-play');
const playerPrevBtn = document.getElementById('player-prev');
const playerNextBtn = document.getElementById('player-next');
const playerShuffleBtn = document.getElementById('player-shuffle');
const playerRepeatBtn = document.getElementById('player-repeat');
const playerCurrentTime = document.getElementById('player-current-time');
const playerTotalTime = document.getElementById('player-total-time');
const playerProgressBar = document.getElementById('player-progress-bar');
const playerProgressFilled = document.getElementById('player-progress-filled');
const playerVolumeBar = document.getElementById('player-volume-bar');
const playerVolumeFilled = document.getElementById('player-volume-filled');
const muteBtn = document.getElementById('mute-btn');

// Player state
let isPlaying = false;
let isShuffled = false;
let isRepeated = false;
let searchTimeout;

// Initialize player
updateVolumeBar();

// Add loaded class to images when they load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('img').forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', function() {
        this.classList.add('loaded');
      });
      img.addEventListener('error', function() {
        // If image fails to load, remove loading animation
        this.classList.add('loaded');
      });
    }
  });
});

// ------------------
// Player functionality
// ------------------
playerPlayBtn.addEventListener('click', function() {
  // Add click animation
  this.style.transform = 'scale(0.95)';
  setTimeout(() => {
    this.style.transform = '';
    togglePlay();
  }, 150);
});

function togglePlay() {
  if (audio.paused || !isPlaying) {
    audio.play().then(() => {
      playerPlayBtn.innerHTML = '<i class="fas fa-pause"></i>';
      isPlaying = true;
    }).catch(error => {
      console.error("Error playing audio:", error);
      showNotification("Error playing audio. Please check your connection.");
      // Reset button state on error
      playerPlayBtn.innerHTML = '<i class="fas fa-play"></i>';
      isPlaying = false;
    });
  } else {
    audio.pause();
    playerPlayBtn.innerHTML = '<i class="fas fa-play"></i>';
    isPlaying = false;
  }
}

// Progress bar functionality
audio.addEventListener('loadedmetadata', function() {
  playerTotalTime.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', function() {
  const progress = (audio.currentTime / audio.duration) * 100;
  playerProgressFilled.style.width = `${progress}%`;
  playerCurrentTime.textContent = formatTime(audio.currentTime);
});

playerProgressBar.addEventListener('click', function(e) {
  const rect = playerProgressBar.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  audio.currentTime = percent * audio.duration;
  playerProgressFilled.style.transition = 'width 0.1s linear';
});

// Volume control with mute functionality
playerVolumeBar.addEventListener('click', function(e) {
  const rect = playerVolumeBar.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  audio.volume = Math.max(0, Math.min(1, percent));
  updateVolumeBar();
  
  // Update mute button icon based on volume
  if (audio.volume > 0) {
    muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
});

// Mute button functionality
muteBtn.addEventListener('click', function() {
  if (audio.volume > 0) {
    // Mute
    previousVolume = audio.volume;
    audio.volume = 0;
    muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    playerVolumeFilled.style.width = '0%';
  } else {
    // Unmute
    audio.volume = previousVolume;
    muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    playerVolumeFilled.style.width = `${audio.volume * 100}%`;
  }
});

function updateVolumeBar() {
  playerVolumeFilled.style.width = `${audio.volume * 100}%`;
  
  // Update mute button icon based on current volume
  if (audio.volume > 0) {
    muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

// Format time helper
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

// Shuffle and Repeat
playerShuffleBtn.addEventListener('click', function() {
  isShuffled = !isShuffled;
  playerShuffleBtn.classList.toggle('active', isShuffled);
  // Add click animation
  this.style.transform = 'scale(0.9)';
  setTimeout(() => this.style.transform = '', 200);
});

playerRepeatBtn.addEventListener('click', function() {
  isRepeated = !isRepeated;
  playerRepeatBtn.classList.toggle('active', isRepeated);
  // Add click animation
  this.style.transform = 'scale(0.9)';
  setTimeout(() => this.style.transform = '', 200);
});

// Update player info when song changes
function updatePlayerInfo(song, cover) {
  playerTrackName.textContent = song.title;
  playerArtistName.textContent = song.artist;
  playerCover.src = cover;
}

// ------------------
// Search functionality with debouncing
// ------------------
searchInput.addEventListener("input", function() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    const query = this.value.trim().toLowerCase();
    
    if (query.length === 0) {
      searchResults.classList.remove("active");
      return;
    }
    
    performSearch(query);
  }, 300); // 300ms delay for smoother typing
});

function performSearch(query) {
  // Search in playlists and songs
  const results = {
    playlists: [],
    songs: [],
    artists: []
  };
  
  // Search in playlists
  playlists.forEach(playlist => {
    if (playlist.name.toLowerCase().includes(query)) {
      results.playlists.push({
        ...playlist,
        type: "playlist"
      });
    }
    
    // Search in playlist songs
    playlist.songs.forEach(song => {
      if (song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query)) {
        results.songs.push({
          ...song,
          playlistName: playlist.name,
          playlistCover: playlist.cover,
          type: "song"
        });
      }
    });
  });
  
  // Search in trending songs
  trendingSongs.forEach(song => {
    if (song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query)) {
      results.songs.push({
        ...song,
        playlistName: "Trending",
        type: "song"
      });
    }
  });

  // Search in popular artists
  popularArtists.forEach(artist => {
    if (artist.name.toLowerCase().includes(query)) {
      results.artists.push({
        ...artist,
        type: "artist"
      });
    }
  });
  
  displaySearchResults(results);
}

// Display search results
function displaySearchResults(results) {
  searchResults.innerHTML = "";
  
  if (results.playlists.length === 0 && results.songs.length === 0 && results.artists.length === 0) {
    searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
  } else {
    // Add artist results
    results.artists.forEach(artist => {
      const item = document.createElement("div");
      item.className = "search-result-item";
      item.innerHTML = `
        <img src="${artist.image}" alt="${artist.name}">
        <div class="search-result-info">
          <div class="search-result-title">${artist.name}</div>
          <div class="search-result-artist">Artist</div>
        </div>
        <div class="search-result-type">Artist</div>
      `;
      item.addEventListener("click", () => {
        // Show artist's songs (in a real app, this would show artist page)
        showNotification(`Showing songs by ${artist.name}`);
        searchInput.value = "";
        searchResults.classList.remove("active");
      });
      searchResults.appendChild(item);
    });
    
    // Add playlist results
    results.playlists.forEach(playlist => {
      const item = document.createElement("div");
      item.className = "search-result-item";
      item.innerHTML = `
        <img src="${playlist.cover}" alt="${playlist.name}">
        <div class="search-result-info">
          <div class="search-result-title">${playlist.name}</div>
          <div class="search-result-artist">Playlist</div>
        </div>
        <div class="search-result-type">Playlist</div>
      `;
      item.addEventListener("click", () => {
        const playlistIndex = playlists.findIndex(p => p.name === playlist.name);
        showPlaylistPage(playlistIndex);
        searchInput.value = "";
        searchResults.classList.remove("active");
      });
      searchResults.appendChild(item);
    });
    
    // Add song results
    results.songs.forEach(song => {
      const item = document.createElement("div");
      item.className = "search-result-item";
      item.innerHTML = `
        <img src="${song.playlistCover || song.cover}" alt="${song.title}">
        <div class="search-result-info">
          <div class="search-result-title">${song.title}</div>
          <div class="search-result-artist">${song.artist}</div>
        </div>
        <div class="search-result-type">Song</div>
      `;
      item.addEventListener("click", () => {
        // Find which playlist this song belongs to
        let playlistIndex = -1;
        let songIndex = -1;
        
        for (let i = 0; i < playlists.length; i++) {
          const playlist = playlists[i];
          songIndex = playlist.songs.findIndex(s => s.title === song.title && s.artist === song.artist);
          if (songIndex !== -1) {
            playlistIndex = i;
            break;
          }
        }
        
        if (playlistIndex !== -1) {
          currentPlaylist = playlistIndex;
          currentSong = songIndex;
          loadSong(currentSong);
          showPlaylistPage(playlistIndex);
        } else {
          // It's a trending song
          playTrendingSong(song);
        }
        
        searchInput.value = "";
        searchResults.classList.remove("active");
      });
      searchResults.appendChild(item);
    });
  }
  
  searchResults.classList.add("active");
}

// Close search results when clicking outside
document.addEventListener("click", function(e) {
  if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
    searchResults.classList.remove("active");
  }
});

// ------------------
// Show Home Page with all playlists, trending songs, and popular artists
// ------------------
function showHomePage() {
  contentArea.innerHTML = `
    <h2>Playlists</h2>
    <div id="playlist-grid" class="playlist-grid"></div>
    
    <div class="trending-songs">
      <h2 class="section-title">Trending Now</h2>
      <div id="trending-grid" class="trending-grid"></div>
    </div>

    <div class="popular-artists">
      <h2 class="section-title">Popular Artists</h2>
      <div id="artists-grid" class="artists-grid"></div>
    </div>
  `;
  
  // Populate playlists
  const playlistGrid = document.getElementById("playlist-grid");
  playlistGrid.innerHTML = "";
  
  playlists.forEach((pl, index) => {
    const card = document.createElement("div");
    card.classList.add("playlist-card", "fade-in");
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <img src="${pl.cover}" alt="${pl.name}">
      <p>${pl.name}</p>
      <button class="play-btn">
        <i class="fas fa-play"></i>
      </button>
    `;
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      showPlaylistPage(index);
    });
    playlistGrid.appendChild(card);
  });
  
  // Populate trending songs
  const trendingGrid = document.getElementById("trending-grid");
  trendingGrid.innerHTML = "";
  
  trendingSongs.forEach((song, index) => {
    const card = document.createElement("div");
    card.classList.add("trending-song-card", "fade-in");
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <img class="trending-song-cover" src="${song.cover}" alt="${song.title}">
      <div class="trending-song-info">
        <div class="trending-song-title">${song.title}</div>
        <div class="trending-song-artist">${song.artist}</div>
        <div class="trending-song-plays">${song.plays} plays</div>
      </div>
      <button class="play-btn">
        <i class="fas fa-play"></i>
      </button>
    `;
    card.addEventListener("click", () => {
      playTrendingSong(song);
    });
    trendingGrid.appendChild(card);
  });

  // Populate popular artists (without followers)
  const artistsGrid = document.getElementById("artists-grid");
  artistsGrid.innerHTML = "";
  
  popularArtists.forEach((artist, index) => {
    const card = document.createElement("div");
    card.classList.add("artist-card", "fade-in");
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <img class="artist-image" src="${artist.image}" alt="${artist.name}">
      <div class="artist-name">${artist.name}</div>
      <div class="artist-type">${artist.type}</div>
    `;
    card.addEventListener("click", () => {
      // In a real app, this would navigate to artist page
      showNotification(`Showing ${artist.name}'s profile`);
    });
    artistsGrid.appendChild(card);
  });
}

// ------------------
// Play a trending song
// ------------------
function playTrendingSong(song) {
  updatePlayerInfo(song, song.cover);
  audio.src = song.file;
  // Don't auto-play - wait for user to click play button
  playerPlayBtn.innerHTML = '<i class="fas fa-play"></i>';
  isPlaying = false;
  showNotification(`Loaded: ${song.title} by ${song.artist}. Click play to start.`);
}

// ------------------
// Show Playlist Page
// ------------------
function showPlaylistPage(playlistIndex) {
  const playlist = playlists[playlistIndex];
  
  contentArea.innerHTML = `
    <div class="playlist-header">
      <img class="playlist-cover" src="${playlist.cover}" alt="${playlist.name}">
      <div class="playlist-info">
        <p>PLAYLIST</p>
        <h1>${playlist.name}</h1>
        <p>${playlist.songs.length} songs</p>
        <div class="playlist-controls">
          <button class="play-button" id="play-playlist">
            <i class="fas fa-play"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="playlist-songs" id="playlist-songs-container">
      <!-- Songs will be added here -->
    </div>
  `;
  
  const songsContainer = document.getElementById("playlist-songs-container");
  
  // Add back button
  const backBtn = document.createElement("button");
  backBtn.className = "back-btn";
  backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Playlists';
  backBtn.addEventListener("click", showHomePage);
  contentArea.prepend(backBtn);
  
  // Add songs to the playlist page
  playlist.songs.forEach((song, index) => {
    const songRow = document.createElement("div");
    songRow.className = "song-row fade-in";
    songRow.style.animationDelay = `${index * 0.05}s`;
    songRow.innerHTML = `
      <div class="song-number">${index + 1}</div>
      <div class="song-info">
        <div class="song-title">${song.title}</div>
        <div class="song-artist">${song.artist}</div>
      </div>
      <div class="song-duration">-:--</div>
    `;
    
    songRow.addEventListener("click", () => {
      currentPlaylist = playlistIndex;
      currentSong = index;
      loadSong(currentSong);
      highlightActiveSong();
    });
    
    songsContainer.appendChild(songRow);
  });
  
  // Add event listener for play playlist button
  document.getElementById("play-playlist").addEventListener("click", function() {
    // Add click animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
      currentPlaylist = playlistIndex;
      currentSong = 0;
      loadSong(currentSong);
      playSong(); // Auto-play when clicking playlist play button
    }, 150);
  });
  
  // Highlight active song if any
  highlightActiveSong();
}

// ------------------
// Highlight active song in playlist
// ------------------
function highlightActiveSong() {
  const songRows = document.querySelectorAll('.song-row');
  songRows.forEach((row, index) => {
    if (index === currentSong) {
      row.classList.add('active');
    } else {
      row.classList.remove('active');
    }
  });
}

// ------------------
// Load a song with loading state (NO AUTO-PLAY)
// ------------------
function loadSong(songIndex) {
  if (currentPlaylist === null) return;
  
  const songObj = playlists[currentPlaylist].songs[songIndex];
  
  // Show loading state
  playerTrackName.textContent = "Loading...";
  playerPlayBtn.innerHTML = '<i class="fas fa-play"></i>'; // Always show play button initially
  
  updatePlayerInfo(songObj, playlists[currentPlaylist].cover);
  audio.src = songObj.file;
  
  // Reset progress bar smoothly
  playerProgressFilled.style.width = '0%';
  playerCurrentTime.textContent = '0:00';
  
  audio.load();
  
  audio.oncanplaythrough = function() {
    // Remove loading state but DON'T auto-play
    playerTrackName.textContent = songObj.title;
    playerPlayBtn.innerHTML = '<i class="fas fa-play"></i>'; // Keep as play button
    playerTotalTime.textContent = formatTime(audio.duration);
    isPlaying = false; // Ensure playing state is false
  };
  
  audio.onerror = function() {
    // Handle error
    playerTrackName.textContent = "Error loading song";
    playerPlayBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
    showNotification("Error loading song. Please try again.");
  };
  
  highlightActiveSong();
}

// ------------------
// Play / Pause
// ------------------
function playSong() {
  audio.play().then(() => {
    playerPlayBtn.innerHTML = '<i class="fas fa-pause"></i>';
    isPlaying = true;
  }).catch(error => {
    console.error("Error playing audio:", error);
    showNotification("Error playing audio. Please check your connection.");
  });
}

function pauseSong() {
  audio.pause();
  playerPlayBtn.innerHTML = '<i class="fas fa-play"></i>';
  isPlaying = false;
}

// ------------------
// Next / Previous with smooth transitions
// ------------------
playerNextBtn.addEventListener("click", function() {
  // Add click animation
  this.style.transform = 'scale(0.9)';
  setTimeout(() => this.style.transform = '', 200);
  
  if (currentPlaylist === null) return;
  currentSong = (currentSong + 1) % playlists[currentPlaylist].songs.length;
  loadSong(currentSong);
  // Don't auto-play - wait for user to click play
});

playerPrevBtn.addEventListener("click", function() {
  // Add click animation
  this.style.transform = 'scale(0.9)';
  setTimeout(() => this.style.transform = '', 200);
  
  if (currentPlaylist === null) return;
  currentSong = (currentSong - 1 + playlists[currentPlaylist].songs.length) % playlists[currentPlaylist].songs.length;
  loadSong(currentSong);
  // Don't auto-play - wait for user to click play
});

// Auto play next song with smooth transition
audio.addEventListener("ended", () => {
  playerPlayBtn.innerHTML = '<i class="fas fa-play"></i>';
  isPlaying = false;
  setTimeout(() => {
    if (isRepeated) {
      // If repeat is on, play the same song again
      audio.currentTime = 0;
      playSong();
    } else {
      playerNextBtn.click();
    }
  }, 500);
});

// ------------------
// Home button
// ------------------
document.getElementById("home-btn").addEventListener("click", function() {
  // Add click animation
  this.style.transform = 'scale(0.95)';
  setTimeout(() => {
    this.style.transform = '';
    searchInput.value = "";
    currentPlaylist = null;
    currentSong = 0;
    sidebarSongs = [];
    showHomePage();
    clearPlayer();
  }, 150);
});

// ------------------
// Clear player
// ------------------
function clearPlayer() {
  playerTrackName.textContent = "";
  playerArtistName.textContent = "";
  playerCover.src = "";
  audio.src = "";
  playerPlayBtn.innerHTML = '<i class="fas fa-play"></i>';
  isPlaying = false;
}

// ------------------
// Notification system
// ------------------
function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: #1db954;
    color: white;
    padding: 12px 20px;
    border-radius: 25px;
    z-index: 10000;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    animation: fadeInOut 3s ease-in-out;
  `;
  
  // Add keyframes for animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInOut {
      0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
      10% { opacity: 1; transform: translateX(-50%) translateY(0); }
      90% { opacity: 1; transform: translateX(-50%) translateY(0); }
      100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(notification);
  
  // Remove notification after animation
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 3000);
}

// ------------------
// INITIALIZE
// ------------------
document.addEventListener("DOMContentLoaded", () => {
  showHomePage();
});
// Authentication and User Management
function checkAuthentication() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const welcomeUser = document.getElementById("welcome-user");
  const logoutBtn = document.getElementById("logout-btn");
  const loginBtn = document.getElementById("login-btn-header");
  const signupBtn = document.getElementById("signup-btn-header");

  if (currentUser) {
    welcomeUser.textContent = `Welcome, ${currentUser.user}`;
    logoutBtn.style.display = "block";
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";
  } else {
    welcomeUser.textContent = "";
    logoutBtn.style.display = "none";
    loginBtn.style.display = "block";
    signupBtn.style.display = "block";
  }
}

// Logout functionality
document.getElementById("logout-btn").addEventListener("click", function() {
  localStorage.removeItem("currentUser");
  checkAuthentication();
  showNotification("Logged out successfully");
});

// Initialize authentication check
checkAuthentication();

// Rest of your existing JavaScript code remains the same...
// [All the existing player, playlist, and search functionality from the previous script.js]