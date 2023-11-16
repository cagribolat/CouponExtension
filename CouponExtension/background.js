// background.js

// Eklentinin yüklenmesiyle birlikte çalışacak kod
chrome.runtime.onInstalled.addListener(function () {
  console.log('Udemy Kupon Eklentisi yüklendi.');

  // Arka planda çalışan bir görev ekleyebilirsiniz.
  // Örneğin, belirli bir süre sonra bir görevin tetiklenmesi:
  chrome.alarms.create('kuponAlarm', {
    delayInMinutes: 60, // 60 dakika sonra
    periodInMinutes: 60 // Her 60 dakikada bir tekrarla
  });

  // Alarm tetiklendiğinde çalışacak kod
  chrome.alarms.onAlarm.addListener(function (alarm) {
    console.log('Kupon kontrolü yapılıyor...');

    // Kupon kontrolü için burada gerekli işlemleri yapabilirsiniz.
    // Örneğin, belirli bir API'ye istek göndermek veya sayfayı kontrol etmek.
  });
});

// Eklenti devre dışı bırakıldığında veya kaldırıldığında çalışacak kod
chrome.runtime.onSuspend.addListener(function () {
  console.log('Udemy Kupon Eklentisi devre dışı bırakıldı.');
});

// background.js

chrome.action.onClicked.addListener(function (tab) {
  // Aynı sekmede sayfayı aç
  chrome.tabs.update(tab.id, { url: 'https://www.udemy.com/' });
});
