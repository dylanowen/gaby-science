var UrlEncoderDecoder = (function () {
    function UrlEncoderDecoder() {
    }
    UrlEncoderDecoder.decodeUrl = function () {
        var hash = window.location.hash.substr(1);
        if (hash.length > 0) {
            try {
                return JSON.parse(window.atob(hash));
            }
            catch (e) {
                console.log('Bad hash: ' + hash);
                return null;
            }
        }
        return null;
    };
    UrlEncoderDecoder.encodeUrl = function (obj) {
        return window.btoa(JSON.stringify(obj));
    };
    return UrlEncoderDecoder;
}());
/// <reference path="UrlEncoderDecoder.ts" />
/// <reference path="ScienceObject.ts" />
var ScienceMaker = (function () {
    function ScienceMaker(input, output) {
        var _this = this;
        this.update = function () {
            var value = _this.input.value;
            var science = { message: value };
            var encodedValue = UrlEncoderDecoder.encodeUrl(science);
            //clear the old output
            while (_this.output.firstChild) {
                _this.output.removeChild(_this.output.firstChild);
            }
            var link = document.createElement('a');
            link.textContent = '#' + encodedValue;
            link.href = '#' + encodedValue;
            link.target = '_blank';
            _this.output.appendChild(link);
        };
        this.input = input;
        this.output = output;
        console.log(this.input, this.output);
        this.input.addEventListener('input', this.update, false);
        console.log('lets make science');
    }
    return ScienceMaker;
}());
/// <reference path="ScienceObject.ts" />
//TODO this doesn't really require it's own class
var ScienceViewer = (function () {
    function ScienceViewer(output, scienceObject) {
        output.textContent = scienceObject.message;
    }
    return ScienceViewer;
}());
/// <reference path="ScienceMaker.ts" />
/// <reference path="ScienceViewer.ts" />
/// <reference path="UrlEncoderDecoder.ts" />
function ready() {
    var urlObject = UrlEncoderDecoder.decodeUrl();
    if (urlObject != null) {
        var output = document.getElementById('science-text');
        var scienceObject = urlObject;
        new ScienceViewer(output, scienceObject);
    }
    else {
        var input = document.getElementById('science-input');
        var output = document.getElementById('science-link');
        new ScienceMaker(input, output);
    }
}
if (document.readyState != 'loading') {
    ready();
}
else {
    document.addEventListener('DOMContentLoaded', ready);
}
