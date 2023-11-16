// popup.js

document.addEventListener('DOMContentLoaded', function () {
  // Butonu seç
  var openUdemyButton = document.getElementById('openUdemyButton');

  // Butona tıklandığında çalışacak kod
  openUdemyButton.addEventListener('click', function () {
    // Udemy'nin ana sayfasını yeni bir sekmede aç
    chrome.tabs.create({ url: 'https://www.idownloadcoupon.com/' });

    // Pencereyi kapatmak için kullanabilirsiniz:
    // window.close();
  });
});
