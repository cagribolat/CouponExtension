// content.js

// Belirli bir sayfa yüklendiğinde çalışacak kod
document.addEventListener('DOMContentLoaded', function () {
  // Örneğin, sayfanın başlığını değiştirelim
  document.title = 'Udemy Kuponları';
  
  // Sayfadaki belirli bir öğeyi değiştirmek için
  // Örneğin, başlığı içeren bir div öğesi varsa:
  var titleElement = document.querySelector('div.title');
  if (titleElement) {
    titleElement.textContent = 'Udemy Kuponları';
  }
});
