// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyCrcxC420HW5PXGNd8M4KuclUkiJSwHreM",
  authDomain: "kesher-bakir.firebaseapp.com",
  projectId: "kesher-bakir",
  storageBucket: "kesher-bakir.firebasestorage.app",
  messagingSenderId: "671996189455",
  appId: "1:671996189455:web:dbe089d69a85a2ab38fc7a",
  measurementId: "G-42EWSKFXW"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  const notificationTitle = (payload.notification && payload.notification.title) || 'הודעה חדשה';
  const notificationOptions = {
    body: (payload.notification && payload.notification.body) || '',
    icon: '/favicon.ico',
    data: payload.data || {}
  };
  return self.registration.showNotification(notificationTitle, notificationOptions);
});

