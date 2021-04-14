"use strict";
exports.__esModule = true;
exports.form = void 0;
var form = /** @class */ (function () {
    function form() {
        this.editDetails = function (req, res) {
            res.end("\n        <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Documen</title>\n    </head>\n    <body>\n        <form action=\"/books/edit\" method=\"PUT\">\n            <input type=\"text\" id=\"id\" name=\"id\" placeholder=\"Enter Id\" /><br/><br/>\n            <input type=\"text\" id=\"title\" name=\"title\" placeholder=\"Enter title\" /><br/><br/>\n            <input type=\"text\" id=\"author\" name=\"author\" placeholder=\"Enter author\" /><br/><br/>\n            <input type=\"text\" id=\"rating\" name=\"rating\" placeholder=\"Enter rating\"/><br/><br/>\n            <input type=\"text\" id=\"price\" name=\"price\" placeholder=\"Enter price\"/><br/><br/>\n            <button type=\"submit\">Save</button>\n        </form>\n    </body>\n    </html>\n    ");
        };
        this.addDetails = function (req, res) {
            res.end("\n        <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Document</title>\n    </head>\n    <body>\n        <form action=\"/books/add\" method=\"POST\">\n            <input type=\"text\" id=\"title\" name=\"title\" placeholder=\"Enter title\" /><br/><br/>\n            <input type=\"text\" id=\"author\" name=\"author\" placeholder=\"Enter author\"  /><br/><br/>\n            <input type=\"text\" id=\"rating\" name=\"rating\" placeholder=\"Enter rating\" /><br/><br/>\n            <input type=\"text\" id=\"price\" name=\"price\" placeholder=\"Enter price\" /><br/><br/>\n            <button type=\"submit\">Save</button>\n        </form>\n    </body>\n    </html>\n    ");
        };
    }
    return form;
}());
exports.form = form;
