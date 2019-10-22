import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import subscribeUser from 'pushNotifications'


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(function(reg) {
        console.log('Service Worker Registered!', reg);
        
        var promise = subscribeUser();
        reg.pushManager.getSubscription().then(function(sub) {
            if (sub === null) {
                // Update UI to ask user to register for Push
                console.log('Not subscribed to push service!');
            } else {
                // We have a subscription, update the database
                console.log('Subscription object: ', sub);
            }
        });
    })
    .catch(function(err) {
        console.log('Service Worker registration failed: ', err);
    });
}