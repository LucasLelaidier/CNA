
// Ask the notifications permission in the browser
// Calling this few times return the user's last choice
function getPermissions() {
    Notification.requestPermission(function(status) {
        console.log('Notification permission status:', status);
    });
}

// Display a "Hello World" notification to the user
// Just here for exemple to show what is possible to do
function displayNotification() {
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then(function(reg) {
            var options = {
                body: 'Here is a notification body!',
                icon: 'images/example.png',
                vibrate: [100, 50, 100],
                data: {
                    dateOfArrival: Date.now(),
                    primaryKey: 1
                },
                actions: [
                    {
                        action: 'explore', title: 'Explore this new world'
                    },
                    {
                        action: 'close', title: 'Close notification'
                    }
                ]
            };
            reg.showNotification('Hello world!', options);
        });
    }
}

// Subscribe the user to the browser push service
function subscribeUser() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function(reg) {
            reg.pushManager.subscribe({
                userVisibleOnly: true
            })
            .then(function(sub) {
                console.log('Endpoint URL: ', sub.endpoint);
            })
            .catch(function(e) {
                if (Notification.permission === 'denied') {
                    console.warn('Permission for notifications was denied');
                } 
                else {
                    console.error('Unable to subscribe to push', e);
                }
            });
        })
    }
}

export default subscribeUser;