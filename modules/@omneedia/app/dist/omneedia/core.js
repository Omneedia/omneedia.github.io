import './lib/String';
import './lib/Date';
import { Hashes } from './lib/Hashes';
var App = /** @class */ (function () {
    function App() {
        this.IOKey = Hashes.md5(new Date().toMySQL().split(' ')[0]);
    }
    App.onReady = function () {
        window.setTimeout(function () {
            function fade(el, type, ms) {
                var isIn = type === 'in', opacity = isIn ? 0 : 1, interval = 50, duration = ms, gap = interval / duration, self = this;
                if (isIn) {
                    el.style.display = 'inline';
                    el.style.opacity = opacity;
                }
                ;
                function func() {
                    opacity = isIn ? opacity + gap : opacity - gap;
                    el.style.opacity = opacity;
                    if (opacity <= 0)
                        el.style.display = 'none';
                    if (opacity <= 0 || opacity >= 1)
                        window.clearInterval(fading);
                }
                ;
                var fading = window.setInterval(func, interval);
            }
            ;
            var appLoadingIcon = document.getElementById('appLoadingIcon');
            var bootstrap = document.getElementById('bootstrap');
            appLoadingIcon.classList.remove('slideInDown');
            appLoadingIcon.classList.add('slideOutUp');
            fade(bootstrap, 'out', 1000);
        }, 1000);
    };
    App.blur = function () {
        var _createSvgElement = function (tagName) {
            return document.createElementNS('http://www.w3.org/2000/svg', tagName);
        };
        var svgUrl = document.location.protocol + '//' + document.location.host + document.location.pathname + document.location.search;
        var svg = _createSvgElement('svg');
        var filter = _createSvgElement('filter');
        filter.id = "blurme";
        var _svgGaussianFilter = _createSvgElement('feGaussianBlur');
        _svgGaussianFilter.setAttribute('stdDeviation', '5');
        svg.setAttribute('style', 'position:absolute');
        svg.setAttribute('width', '0');
        svg.setAttribute('height', '0');
        filter.appendChild(_svgGaussianFilter);
        svg.appendChild(filter);
        document.getElementsByTagName('body')[0].appendChild(svg);
        var cssFilterValue = 'url(' + svgUrl + '#blurme' + ')';
        document.getElementsByTagName('body')[0].style['filter'] = cssFilterValue;
    };
    App.unblur = function () {
        document.getElementsByTagName('body')[0].style['filter'] = '';
    };
    /*
    UUID Generator
    */
    App.uuid = function () {
        var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var chars = CHARS, uuid = new Array(36), rnd = 0, r;
        for (var i = 0; i < 36; i++) {
            if (i == 8 || i == 13 || i == 18 || i == 23) {
                uuid[i] = '-';
            }
            else if (i == 14) {
                uuid[i] = '4';
            }
            else {
                if (rnd <= 0x02)
                    rnd = 0x2000000 + (Math.random() * 0x1000000) | 0;
                r = rnd & 0xf;
                rnd = rnd >> 4;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
        ;
        return uuid.join('');
    };
    ;
    return App;
}());
export { App };
;
window.addEventListener('error', function (e) {
    console.log('%c GURU MEDITATION ', 'background: #222; color: #bada55');
    console.log({
        lineno: e.lineno,
        colno: e.colno,
        filename: e.filename,
        message: e.error.message,
        stack: e.error.stack
    });
});
if (!Settings.DEBUG) {
    if (typeof window.console === "undefined") {
        // Define a dummy window.console if not debugging
        window.console = ({
            debug: function (message) {
                var optionalParams = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    optionalParams[_i - 1] = arguments[_i];
                }
            },
            error: function (message) {
                var optionalParams = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    optionalParams[_i - 1] = arguments[_i];
                }
            },
            info: function (message) {
                var optionalParams = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    optionalParams[_i - 1] = arguments[_i];
                }
            },
            log: function (message) {
                var optionalParams = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    optionalParams[_i - 1] = arguments[_i];
                }
            },
            warn: function (message) {
                var optionalParams = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    optionalParams[_i - 1] = arguments[_i];
                }
            }
        });
    }
}
//# sourceMappingURL=core.js.map