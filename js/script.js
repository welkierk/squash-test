// Sidebar toggle
const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
if (toggleButton && sidebar) {
  toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
}

// Highlight active link
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Initialize Leaflet map if exists
if (document.getElementById('map')) {
  const map = L.map('map').setView([52.2297, 21.0122], 13); // Warsaw center
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  L.marker([52.2297, 21.0122]).addTo(map)
    .bindPopup('WAWA Padel & Squash<br>ul. Sportowa 10, Warszawa')
    .openPopup();
}
