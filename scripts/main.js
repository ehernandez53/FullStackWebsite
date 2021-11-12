(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-critique="form"]';
    var FIREBASE_SERVER_URL = 'http://critiqueseek.firebaseapp.com';
    var COMMENT_SELECTOR = '[data-comments="comments"]';

    var App = window.App;
    var Critique = App.Critique;
    var firebasedatastore = App.firebasedatastore;
    var FormHandler = App.FormHandler;
    var CritiqueCompiler = App.CritiqueCompiler;

    var datastore = new firebasedatastore(FIREBASE_SERVER_URL);
    var critique = new Critique(datastore);
    window.critique = critique;

    var comment = new CritiqueCompiler(COMMENT_SELECTOR);
    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(function(data) {
        return critique.createCritique.call(critique, data)
    });

    critique.printCritiques(comment.addRow.bind(comment));

    console.log(formHandler);
})(window);