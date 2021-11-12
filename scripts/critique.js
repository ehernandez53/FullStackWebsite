(function (window) {
    'use strict';
    var App = window.App || {};

    class Critique {
        constructor(db) {
            'use strict';
            this.db = db;
        }
        createCritique(critique) {
            'use strict';
            return this.db.add(critique.description, critique);
        }
        printCritiques(printFn) {
            'use strict';
            return this.db.getAll()
                .then(function (critiques) {
                    var critiqueIdArray = Object.keys(critiques);
                        critiqueIdArray.forEach(function (id) {
                         if (printFn) {
                            printFn(critiques[id]);
                        }
                    }.bind(this));
                }.bind(this));
        }
    }

    App.Critique = Critique;
    window.App = App;
})(window);
