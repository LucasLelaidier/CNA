/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

// When the user close the notification (swipe on mobile)
// Use it to know what users do with ur notifications
self.addEventListener('notificationclose', function(e) {
    let notification = e.notification;
    let primaryKey = notification.data.primaryKey;
  
    console.log('Closed notification: ' + primaryKey);
});

// When user click on the notification
self.addEventListener('notificationclick', function(e) {
    var notification = e.notification;
    var action = e.action;
  
    if (action === 'close') {
        notification.close();
    } 
    else {
        clients.openWindow('http://www.google.com');
        notification.close();
    }
});

self.addEventListener('push', function(e) {
    var options = {
        body: 'This notification was generated from a push!',
        icon: 'favicon.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore', title: 'Explore this new world'
            },
            {
                action: 'close', title: 'Close'
            }
        ]
    };
    e.waitUntil(
      self.registration.showNotification('Hello world!', options)
    );
});