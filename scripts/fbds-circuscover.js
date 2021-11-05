// This file might be useful for connecting to the database

(function (window) {
    'use strict';
    var App = window.App || {};

    var FirebaseConfig = {
        apiKey: "AIzaSyCi16YWQ80WtFCKjjsBJ0-AWaite6b5SPw",
        authDomain: "critiqueseek.firebaseapp.com",
        projectId: "critiqueseek",
        storageBucket: "critiqueseek.appspot.com",
        messagingSenderId: "564384963097",
        appId: "1:564384963097:web:0e6e74dddfa3bd13356888",
        measurementId: "G-X8SB1DPQZ0"
      };

    class firebasedatastore {
        constructor() {
            console.log('Running the firebasedatastore function');
            firebase.initializeApp(FirebaseConfig);
            this.db = firebase.firestore();
        }

        async add(key, val) {
            console.log('firebase add ');
            const docRef = this.db.doc(`circusbookcover/${this.makeDocHash(20)}`);
            return docRef.set(val);
        }

        async get(description, cb) {
            const docRef = this.db.collection(`circusbookcover`);
            const snapshot = await docRef.where('description', '==', description).get();
            return await snapshot.docs.map(e => e.data());
        }

        async getAll(cb) {
            const docRef = this.db.collection(`circusbookcover`);
            const snapshot = await docRef.get();
            return await snapshot.docs.map(e => e.data());
        }

        async remove(description) {
            const docRef = await this.db.collection(`circusbookcover`);
            const batch = this.db.batch();
            const snapshot = await docRef.where('description', '==', description).get();
            snapshot.forEach(doc => {
                batch.delete(doc.ref);
            });
            await batch.commit();
        }

        makeDocHash(len) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < len; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
    }

    App.firebasedatastore = firebasedatastore;
    window.App = App;
})(window);