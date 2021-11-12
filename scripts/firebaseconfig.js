(function (window) {
    'use strict';
    var App = window.app || {};

    var FirebaseConfig = {
        apiKey: "AIzaSyCi16YWQ80WtFCKjjsBJ0-AWaite6b5SPw",
        authDomain: "critiqueseek.firebaseapp.com",
        projectId: "critiqueseek",
        storageBucket: "critiqueseek.appspot.com",
        messagingSenderId: "564384963097",
        appId: "1:564384963097:web:0e6e74dddfa3bd13356888",
        measurementId: "G-X8SB1DPQZ0"
      };

    App.FirebaseConfig = FirebaseConfig;

    firebase.initializeApp(App.FirebaseConfig);
    window.App = App;
})(window);