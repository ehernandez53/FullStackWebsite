(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    class CritiqueCompiler {
        constructor(selector) {
            if (!selector) {
                throw new Error('No selector provided');
            }
            this.$element = $(selector);
            if (this.$element.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        }

        addRow(critique) {
            var rowElement = new Row(critique);
            this.$element.append(rowElement.$element);
        }
    }

    class Row {
        constructor(critique) {
            var $div = $('<div></div>');
            var $label = $('<label></label>');

	    var comment = '<p>' + critique.name + " said:" + '<br/>';
            comment += critique.description + '<br/>';
            comment += critique.reaction + '<br/>';
            if (critique.use_line != "") {
                comment += critique.use_line + '<br/>';
            }
            if (critique.use_color) {
                comment += critique.use_color + '<br/>';
            }
            if (critique.use_space) {
                comment += critique.use_space + '<br/>';
            }
            if (critique.use_light) {
                comment += critique.use_light + '<br/>';
            }
            if (critique.use_shape) {
                comment += critique.use_shape + '<br/>';
            }
            if (critique.focus) {
                comment += critique.focus + '<br/>';
            }
            if (critique.themes) {
                comment += critique.themes + '<br/>';
            }
            comment += critique.success;
            if (critique.comments) {
                comment += '<br/>' + critique.comments + '</p>';
            }
            else {
                comment += '</p>'
            }
            
            $label.append(comment);
            $div.append($label);
            this.$element = $div;
        }
    }

    App.CritiqueCompiler = CritiqueCompiler;
    window.App = App;
})(window);
