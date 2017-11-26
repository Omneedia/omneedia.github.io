(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.omneedia = {})));
}(this, (function (exports) { 'use strict';

// implementation
String.prototype.padZero = function (length) {
    var s = this;
    while (s.length < length) {
        s = '0' + s;
    }
    return s;
};
String.prototype.latinize = function () {
    var Latinise = {
        latin_map: { "Á": "A", "Ă": "A", "Ắ": "A", "Ặ": "A", "Ằ": "A", "Ẳ": "A", "Ẵ": "A", "Ǎ": "A", "Â": "A", "Ấ": "A", "Ậ": "A", "Ầ": "A", "Ẩ": "A", "Ẫ": "A", "Ä": "A", "Ǟ": "A", "Ȧ": "A", "Ǡ": "A", "Ạ": "A", "Ȁ": "A", "À": "A", "Ả": "A", "Ȃ": "A", "Ā": "A", "Ą": "A", "Å": "A", "Ǻ": "A", "Ḁ": "A", "Ⱥ": "A", "Ã": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ḃ": "B", "Ḅ": "B", "Ɓ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ć": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ĉ": "C", "Ċ": "C", "Ƈ": "C", "Ȼ": "C", "Ď": "D", "Ḑ": "D", "Ḓ": "D", "Ḋ": "D", "Ḍ": "D", "Ɗ": "D", "Ḏ": "D", "ǲ": "D", "ǅ": "D", "Đ": "D", "Ƌ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "É": "E", "Ĕ": "E", "Ě": "E", "Ȩ": "E", "Ḝ": "E", "Ê": "E", "Ế": "E", "Ệ": "E", "Ề": "E", "Ể": "E", "Ễ": "E", "Ḙ": "E", "Ë": "E", "Ė": "E", "Ẹ": "E", "Ȅ": "E", "È": "E", "Ẻ": "E", "Ȇ": "E", "Ē": "E", "Ḗ": "E", "Ḕ": "E", "Ę": "E", "Ɇ": "E", "Ẽ": "E", "Ḛ": "E", "Ꝫ": "ET", "Ḟ": "F", "Ƒ": "F", "Ǵ": "G", "Ğ": "G", "Ǧ": "G", "Ģ": "G", "Ĝ": "G", "Ġ": "G", "Ɠ": "G", "Ḡ": "G", "Ǥ": "G", "Ḫ": "H", "Ȟ": "H", "Ḩ": "H", "Ĥ": "H", "Ⱨ": "H", "Ḧ": "H", "Ḣ": "H", "Ḥ": "H", "Ħ": "H", "Í": "I", "Ĭ": "I", "Ǐ": "I", "Î": "I", "Ï": "I", "Ḯ": "I", "İ": "I", "Ị": "I", "Ȉ": "I", "Ì": "I", "Ỉ": "I", "Ȋ": "I", "Ī": "I", "Į": "I", "Ɨ": "I", "Ĩ": "I", "Ḭ": "I", "Ꝺ": "D", "Ꝼ": "F", "Ᵹ": "G", "Ꞃ": "R", "Ꞅ": "S", "Ꞇ": "T", "Ꝭ": "IS", "Ĵ": "J", "Ɉ": "J", "Ḱ": "K", "Ǩ": "K", "Ķ": "K", "Ⱪ": "K", "Ꝃ": "K", "Ḳ": "K", "Ƙ": "K", "Ḵ": "K", "Ꝁ": "K", "Ꝅ": "K", "Ĺ": "L", "Ƚ": "L", "Ľ": "L", "Ļ": "L", "Ḽ": "L", "Ḷ": "L", "Ḹ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ḻ": "L", "Ŀ": "L", "Ɫ": "L", "ǈ": "L", "Ł": "L", "Ǉ": "LJ", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ń": "N", "Ň": "N", "Ņ": "N", "Ṋ": "N", "Ṅ": "N", "Ṇ": "N", "Ǹ": "N", "Ɲ": "N", "Ṉ": "N", "Ƞ": "N", "ǋ": "N", "Ñ": "N", "Ǌ": "NJ", "Ó": "O", "Ŏ": "O", "Ǒ": "O", "Ô": "O", "Ố": "O", "Ộ": "O", "Ồ": "O", "Ổ": "O", "Ỗ": "O", "Ö": "O", "Ȫ": "O", "Ȯ": "O", "Ȱ": "O", "Ọ": "O", "Ő": "O", "Ȍ": "O", "Ò": "O", "Ỏ": "O", "Ơ": "O", "Ớ": "O", "Ợ": "O", "Ờ": "O", "Ở": "O", "Ỡ": "O", "Ȏ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ō": "O", "Ṓ": "O", "Ṑ": "O", "Ɵ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Õ": "O", "Ṍ": "O", "Ṏ": "O", "Ȭ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ɛ": "E", "Ɔ": "O", "Ȣ": "OU", "Ṕ": "P", "Ṗ": "P", "Ꝓ": "P", "Ƥ": "P", "Ꝕ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝙ": "Q", "Ꝗ": "Q", "Ŕ": "R", "Ř": "R", "Ŗ": "R", "Ṙ": "R", "Ṛ": "R", "Ṝ": "R", "Ȑ": "R", "Ȓ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꜿ": "C", "Ǝ": "E", "Ś": "S", "Ṥ": "S", "Š": "S", "Ṧ": "S", "Ş": "S", "Ŝ": "S", "Ș": "S", "Ṡ": "S", "Ṣ": "S", "Ṩ": "S", "Ť": "T", "Ţ": "T", "Ṱ": "T", "Ț": "T", "Ⱦ": "T", "Ṫ": "T", "Ṭ": "T", "Ƭ": "T", "Ṯ": "T", "Ʈ": "T", "Ŧ": "T", "Ɐ": "A", "Ꞁ": "L", "Ɯ": "M", "Ʌ": "V", "Ꜩ": "TZ", "Ú": "U", "Ŭ": "U", "Ǔ": "U", "Û": "U", "Ṷ": "U", "Ü": "U", "Ǘ": "U", "Ǚ": "U", "Ǜ": "U", "Ǖ": "U", "Ṳ": "U", "Ụ": "U", "Ű": "U", "Ȕ": "U", "Ù": "U", "Ủ": "U", "Ư": "U", "Ứ": "U", "Ự": "U", "Ừ": "U", "Ử": "U", "Ữ": "U", "Ȗ": "U", "Ū": "U", "Ṻ": "U", "Ų": "U", "Ů": "U", "Ũ": "U", "Ṹ": "U", "Ṵ": "U", "Ꝟ": "V", "Ṿ": "V", "Ʋ": "V", "Ṽ": "V", "Ꝡ": "VY", "Ẃ": "W", "Ŵ": "W", "Ẅ": "W", "Ẇ": "W", "Ẉ": "W", "Ẁ": "W", "Ⱳ": "W", "Ẍ": "X", "Ẋ": "X", "Ý": "Y", "Ŷ": "Y", "Ÿ": "Y", "Ẏ": "Y", "Ỵ": "Y", "Ỳ": "Y", "Ƴ": "Y", "Ỷ": "Y", "Ỿ": "Y", "Ȳ": "Y", "Ɏ": "Y", "Ỹ": "Y", "Ź": "Z", "Ž": "Z", "Ẑ": "Z", "Ⱬ": "Z", "Ż": "Z", "Ẓ": "Z", "Ȥ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ĳ": "IJ", "Œ": "OE", "ᴀ": "A", "ᴁ": "AE", "ʙ": "B", "ᴃ": "B", "ᴄ": "C", "ᴅ": "D", "ᴇ": "E", "ꜰ": "F", "ɢ": "G", "ʛ": "G", "ʜ": "H", "ɪ": "I", "ʁ": "R", "ᴊ": "J", "ᴋ": "K", "ʟ": "L", "ᴌ": "L", "ᴍ": "M", "ɴ": "N", "ᴏ": "O", "ɶ": "OE", "ᴐ": "O", "ᴕ": "OU", "ᴘ": "P", "ʀ": "R", "ᴎ": "N", "ᴙ": "R", "ꜱ": "S", "ᴛ": "T", "ⱻ": "E", "ᴚ": "R", "ᴜ": "U", "ᴠ": "V", "ᴡ": "W", "ʏ": "Y", "ᴢ": "Z", "á": "a", "ă": "a", "ắ": "a", "ặ": "a", "ằ": "a", "ẳ": "a", "ẵ": "a", "ǎ": "a", "â": "a", "ấ": "a", "ậ": "a", "ầ": "a", "ẩ": "a", "ẫ": "a", "ä": "a", "ǟ": "a", "ȧ": "a", "ǡ": "a", "ạ": "a", "ȁ": "a", "à": "a", "ả": "a", "ȃ": "a", "ā": "a", "ą": "a", "ᶏ": "a", "ẚ": "a", "å": "a", "ǻ": "a", "ḁ": "a", "ⱥ": "a", "ã": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ḃ": "b", "ḅ": "b", "ɓ": "b", "ḇ": "b", "ᵬ": "b", "ᶀ": "b", "ƀ": "b", "ƃ": "b", "ɵ": "o", "ć": "c", "č": "c", "ç": "c", "ḉ": "c", "ĉ": "c", "ɕ": "c", "ċ": "c", "ƈ": "c", "ȼ": "c", "ď": "d", "ḑ": "d", "ḓ": "d", "ȡ": "d", "ḋ": "d", "ḍ": "d", "ɗ": "d", "ᶑ": "d", "ḏ": "d", "ᵭ": "d", "ᶁ": "d", "đ": "d", "ɖ": "d", "ƌ": "d", "ı": "i", "ȷ": "j", "ɟ": "j", "ʄ": "j", "ǳ": "dz", "ǆ": "dz", "é": "e", "ĕ": "e", "ě": "e", "ȩ": "e", "ḝ": "e", "ê": "e", "ế": "e", "ệ": "e", "ề": "e", "ể": "e", "ễ": "e", "ḙ": "e", "ë": "e", "ė": "e", "ẹ": "e", "ȅ": "e", "è": "e", "ẻ": "e", "ȇ": "e", "ē": "e", "ḗ": "e", "ḕ": "e", "ⱸ": "e", "ę": "e", "ᶒ": "e", "ɇ": "e", "ẽ": "e", "ḛ": "e", "ꝫ": "et", "ḟ": "f", "ƒ": "f", "ᵮ": "f", "ᶂ": "f", "ǵ": "g", "ğ": "g", "ǧ": "g", "ģ": "g", "ĝ": "g", "ġ": "g", "ɠ": "g", "ḡ": "g", "ᶃ": "g", "ǥ": "g", "ḫ": "h", "ȟ": "h", "ḩ": "h", "ĥ": "h", "ⱨ": "h", "ḧ": "h", "ḣ": "h", "ḥ": "h", "ɦ": "h", "ẖ": "h", "ħ": "h", "ƕ": "hv", "í": "i", "ĭ": "i", "ǐ": "i", "î": "i", "ï": "i", "ḯ": "i", "ị": "i", "ȉ": "i", "ì": "i", "ỉ": "i", "ȋ": "i", "ī": "i", "į": "i", "ᶖ": "i", "ɨ": "i", "ĩ": "i", "ḭ": "i", "ꝺ": "d", "ꝼ": "f", "ᵹ": "g", "ꞃ": "r", "ꞅ": "s", "ꞇ": "t", "ꝭ": "is", "ǰ": "j", "ĵ": "j", "ʝ": "j", "ɉ": "j", "ḱ": "k", "ǩ": "k", "ķ": "k", "ⱪ": "k", "ꝃ": "k", "ḳ": "k", "ƙ": "k", "ḵ": "k", "ᶄ": "k", "ꝁ": "k", "ꝅ": "k", "ĺ": "l", "ƚ": "l", "ɬ": "l", "ľ": "l", "ļ": "l", "ḽ": "l", "ȴ": "l", "ḷ": "l", "ḹ": "l", "ⱡ": "l", "ꝉ": "l", "ḻ": "l", "ŀ": "l", "ɫ": "l", "ᶅ": "l", "ɭ": "l", "ł": "l", "ǉ": "lj", "ſ": "s", "ẜ": "s", "ẛ": "s", "ẝ": "s", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ᵯ": "m", "ᶆ": "m", "ń": "n", "ň": "n", "ņ": "n", "ṋ": "n", "ȵ": "n", "ṅ": "n", "ṇ": "n", "ǹ": "n", "ɲ": "n", "ṉ": "n", "ƞ": "n", "ᵰ": "n", "ᶇ": "n", "ɳ": "n", "ñ": "n", "ǌ": "nj", "ó": "o", "ŏ": "o", "ǒ": "o", "ô": "o", "ố": "o", "ộ": "o", "ồ": "o", "ổ": "o", "ỗ": "o", "ö": "o", "ȫ": "o", "ȯ": "o", "ȱ": "o", "ọ": "o", "ő": "o", "ȍ": "o", "ò": "o", "ỏ": "o", "ơ": "o", "ớ": "o", "ợ": "o", "ờ": "o", "ở": "o", "ỡ": "o", "ȏ": "o", "ꝋ": "o", "ꝍ": "o", "ⱺ": "o", "ō": "o", "ṓ": "o", "ṑ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "õ": "o", "ṍ": "o", "ṏ": "o", "ȭ": "o", "ƣ": "oi", "ꝏ": "oo", "ɛ": "e", "ᶓ": "e", "ɔ": "o", "ᶗ": "o", "ȣ": "ou", "ṕ": "p", "ṗ": "p", "ꝓ": "p", "ƥ": "p", "ᵱ": "p", "ᶈ": "p", "ꝕ": "p", "ᵽ": "p", "ꝑ": "p", "ꝙ": "q", "ʠ": "q", "ɋ": "q", "ꝗ": "q", "ŕ": "r", "ř": "r", "ŗ": "r", "ṙ": "r", "ṛ": "r", "ṝ": "r", "ȑ": "r", "ɾ": "r", "ᵳ": "r", "ȓ": "r", "ṟ": "r", "ɼ": "r", "ᵲ": "r", "ᶉ": "r", "ɍ": "r", "ɽ": "r", "ↄ": "c", "ꜿ": "c", "ɘ": "e", "ɿ": "r", "ś": "s", "ṥ": "s", "š": "s", "ṧ": "s", "ş": "s", "ŝ": "s", "ș": "s", "ṡ": "s", "ṣ": "s", "ṩ": "s", "ʂ": "s", "ᵴ": "s", "ᶊ": "s", "ȿ": "s", "ɡ": "g", "ᴑ": "o", "ᴓ": "o", "ᴝ": "u", "ť": "t", "ţ": "t", "ṱ": "t", "ț": "t", "ȶ": "t", "ẗ": "t", "ⱦ": "t", "ṫ": "t", "ṭ": "t", "ƭ": "t", "ṯ": "t", "ᵵ": "t", "ƫ": "t", "ʈ": "t", "ŧ": "t", "ᵺ": "th", "ɐ": "a", "ᴂ": "ae", "ǝ": "e", "ᵷ": "g", "ɥ": "h", "ʮ": "h", "ʯ": "h", "ᴉ": "i", "ʞ": "k", "ꞁ": "l", "ɯ": "m", "ɰ": "m", "ᴔ": "oe", "ɹ": "r", "ɻ": "r", "ɺ": "r", "ⱹ": "r", "ʇ": "t", "ʌ": "v", "ʍ": "w", "ʎ": "y", "ꜩ": "tz", "ú": "u", "ŭ": "u", "ǔ": "u", "û": "u", "ṷ": "u", "ü": "u", "ǘ": "u", "ǚ": "u", "ǜ": "u", "ǖ": "u", "ṳ": "u", "ụ": "u", "ű": "u", "ȕ": "u", "ù": "u", "ủ": "u", "ư": "u", "ứ": "u", "ự": "u", "ừ": "u", "ử": "u", "ữ": "u", "ȗ": "u", "ū": "u", "ṻ": "u", "ų": "u", "ᶙ": "u", "ů": "u", "ũ": "u", "ṹ": "u", "ṵ": "u", "ᵫ": "ue", "ꝸ": "um", "ⱴ": "v", "ꝟ": "v", "ṿ": "v", "ʋ": "v", "ᶌ": "v", "ⱱ": "v", "ṽ": "v", "ꝡ": "vy", "ẃ": "w", "ŵ": "w", "ẅ": "w", "ẇ": "w", "ẉ": "w", "ẁ": "w", "ⱳ": "w", "ẘ": "w", "ẍ": "x", "ẋ": "x", "ᶍ": "x", "ý": "y", "ŷ": "y", "ÿ": "y", "ẏ": "y", "ỵ": "y", "ỳ": "y", "ƴ": "y", "ỷ": "y", "ỿ": "y", "ȳ": "y", "ẙ": "y", "ɏ": "y", "ỹ": "y", "ź": "z", "ž": "z", "ẑ": "z", "ʑ": "z", "ⱬ": "z", "ż": "z", "ẓ": "z", "ȥ": "z", "ẕ": "z", "ᵶ": "z", "ᶎ": "z", "ʐ": "z", "ƶ": "z", "ɀ": "z", "ﬀ": "ff", "ﬃ": "ffi", "ﬄ": "ffl", "ﬁ": "fi", "ﬂ": "fl", "ĳ": "ij", "œ": "oe", "ﬆ": "st", "ₐ": "a", "ₑ": "e", "ᵢ": "i", "ⱼ": "j", "ₒ": "o", "ᵣ": "r", "ᵤ": "u", "ᵥ": "v", "ₓ": "x" }
    };
    return this.replace(/[^A-Za-z0-9\[\] ]/g, function (a) {
        return Latinise.latin_map[a] || a;
    });
};
String.prototype.isLatin = function () {
    return this == this.latinize();
};
String.prototype.toDate = function () {
    try {
        var mydate = this.split('T')[0];
        var mytime = this.split('T')[1].split('Z')[0];
        var y = mydate.split('-')[0] * 1;
        var M = mydate.split('-')[1] * 1 - 1;
        var d = mydate.split('-')[2] * 1;
        var h = mytime.split(':')[0] * 1;
        var m = mytime.split(':')[1] * 1;
        var s = mytime.split(':')[2] * 1;
        var x = new Date(y, M, d, h, m, s);
        x.setHours(x.getHours() - x.getTimezoneOffset() / 60);
        return x;
    }
    catch (e) {
        return new Date(0, 0, 0, 0, 0, 0);
    }
};

var culture_date_i18n = {};
culture_date_i18n["af-za"] = {
    name: "af-ZA",
    englishName: "Afrikaans (South Africa)",
    nativeName: "Afrikaans (Suid Afrika)",
    dayNames: ["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"],
    abbreviatedDayNames: ["Son", "Maan", "Dins", "Woen", "Dond", "Vry", "Sat"],
    shortestDayNames: ["So", "Ma", "Di", "Wo", "Do", "Vr", "Sa"],
    firstLetterDayNames: ["S", "M", "D", "W", "D", "V", "S"],
    monthNames: ["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
    amDesignator: "",
    pmDesignator: "nm",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy/MM/dd",
        longDate: "dd MMMM yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd MMMM yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uarie)?/i,
        feb: /^feb(ruarie)?/i,
        mar: /^maart/i,
        apr: /^apr(il)?/i,
        may: /^mei/i,
        jun: /^jun(ie)?/i,
        jul: /^jul(ie)?/i,
        aug: /^aug(ustus)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^des(ember)?/i,
        sun: /^so(n(dag)?)?/i,
        mon: /^ma(an(dag)?)?/i,
        tue: /^di(ns(dag)?)?/i,
        wed: /^wo(en(sdag)?)?/i,
        thu: /^do(nd(erdag)?)?/i,
        fri: /^vr(y(dag)?)?/i,
        sat: /^sa(t(erdag)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["ar-ae"] = {
    name: "ar-AE",
    englishName: "Arabic (U.A.E.)",
    nativeName: "العربية (الإمارات العربية المتحدة)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    abbreviatedMonthNames: ["ينا", "فبر", "مار", "أبر", "ماي", "يون", "يول", "أغس", "سبت", "أكت", "نوف", "ديس"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 7,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^ينا(ير)?/i,
        feb: /^فبر(اير)?/i,
        mar: /^مار(س)?/i,
        apr: /^أبر(يل)?/i,
        may: /^ماي(و)?/i,
        jun: /^يون(يو)?/i,
        jul: /^يول(يو)?/i,
        aug: /^أغس(طس)?/i,
        sep: /^سبت(مبر)?/i,
        oct: /^أكت(وبر)?/i,
        nov: /^نوف(مبر)?/i,
        dec: /^ديس(مبر)?/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^(((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب)?توقيت )?(الخليج|gst|gulf (standard)? tim(e|ing)))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "GST",
            offset: "+0400"
        }]
}, culture_date_i18n["ar-bh"] = {
    name: "ar-BH",
    englishName: "Arabic (Bahrain)",
    nativeName: "العربية (البحرين)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    abbreviatedMonthNames: ["ينا", "فبر", "مار", "أبر", "ماي", "يون", "يول", "أغس", "سبت", "أكت", "نوف", "ديس"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 7,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^ينا(ير)?/i,
        feb: /^فبر(اير)?/i,
        mar: /^مار(س)?/i,
        apr: /^أبر(يل)?/i,
        may: /^ماي(و)?/i,
        jun: /^يون(يو)?/i,
        jul: /^يول(يو)?/i,
        aug: /^أغس(طس)?/i,
        sep: /^سبت(مبر)?/i,
        oct: /^أكت(وبر)?/i,
        nov: /^نوف(مبر)?/i,
        dec: /^ديس(مبر)?/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^(((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب(ال)?)?توقيت )?(مكة( المكرمة)?|(مملكة )?البحرين|المنامة|العرب(ي)?( القياسي)?|ast|arabia( standard)? tim(e|ing)))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "AST",
            offset: "+0300"
        }]
}, culture_date_i18n["ar-dj"] = {
    name: "ar-DJ",
    englishName: "Arabic (Djibouti)",
    nativeName: "العربية (جيبوتي)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    abbreviatedMonthNames: ["ينا", "فبر", "مار", "أبر", "ماي", "يون", "يول", "أغس", "سبت", "أكت", "نوف", "ديس"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 6,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^ينا(ير)?/i,
        feb: /^فبر(اير)?/i,
        mar: /^مار(س)?/i,
        apr: /^أبر(يل)?/i,
        may: /^ماي(و)?/i,
        jun: /^يون(يو)?/i,
        jul: /^يول(يو)?/i,
        aug: /^أغس(طس)?/i,
        sep: /^سبت(مبر)?/i,
        oct: /^أكت(وبر)?/i,
        nov: /^نوف(مبر)?/i,
        dec: /^ديس(مبر)?/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^(((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب(ال)?)?توقيت )?((جمهورية )?|جيبوتي|شرق افريقيا|eat|ast|eastern africa? tim(e|ing)))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "EAT",
            offset: "+0300"
        }, {
            name: "AST",
            offset: "+0300"
        }]
}, culture_date_i18n["ar-dz"] = {
    name: "ar-DZ",
    englishName: "Arabic (Algeria)",
    nativeName: "العربية (الجزائر)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["جانفييه", "فيفرييه", "مارس", "أفريل", "مي", "جوان", "جوييه", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    abbreviatedMonthNames: ["جان", "فيف", "مار", "أفر", "مي", "جوا", "جوي", "أوت", "سبت", "اكت", "نوف", "ديس"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 7,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^جان(فييه)?/i,
        feb: /^فيف(رييه)?/i,
        mar: /^مار(س)?/i,
        apr: /^أفر(يل)?/i,
        may: /^مي/i,
        jun: /^جوا(ن)?/i,
        jul: /^جوي(يه)/i,
        aug: /^أغس(طس)?/i,
        sep: /^سبت(مبر)?/i,
        oct: /^أكت(وبر)?/i,
        nov: /^نوف(مبر)?/i,
        dec: /^ديس(مبر)?/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^(((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب(ال)?)?توقيت )?((ال)?(جمهورية )?(ال)?جزائر(ية)?|وسط أوروبا|cet|(central)? european tim(e|ing)))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "CET",
            offset: "+0100"
        }]
}, culture_date_i18n["ar-eg"] = {
    name: "ar-EG",
    englishName: "Arabic (Egypt)",
    nativeName: "العربية (مصر)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    abbreviatedMonthNames: ["ينا", "فبر", "مار", "أبر", "ماي", "يون", "يول", "أغس", "سبت", "أكت", "نوف", "ديس"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 7,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^ينا(ير)?/i,
        feb: /^فبر(اير)?/i,
        mar: /^مار(س)?/i,
        apr: /^أبر(يل)?/i,
        may: /^ماي(و)?/i,
        jun: /^يون(يو)?/i,
        jul: /^يول(يو)?/i,
        aug: /^أغس(طس)?/i,
        sep: /^سبت(مبر)?/i,
        oct: /^أكت(وبر)?/i,
        nov: /^نوف(مبر)?/i,
        dec: /^ديس(مبر)?/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^(((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب(ال)?)?توقيت )?((جمهورية )?مصر|القاهرة|شرق أوروبا( الصيفي)?|ast|adt|arabia( daylight)?( standard)? tim(e|ing)|eet|eest|eastern european (summer)? tim(e|ing)))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "EET",
            offset: "+0200"
        }, {
            name: "EEST",
            offset: "+0300"
        }, {
            name: "AST",
            offset: "+0300"
        }, {
            name: "ADT",
            offset: "+0200"
        }]
}, culture_date_i18n["ar-iq"] = {
    name: "ar-IQ",
    englishName: "Arabic (Iraq)",
    nativeName: "العربية (العراق)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
    abbreviatedMonthNames: ["كانون 2", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين 1", "تشرين 2", "كانون 1"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 7,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^كا(2|نون (2|الثاني))/i,
        feb: /^شبا(ط)?/i,
        mar: /^آذا(ر)?/i,
        apr: /^نيس(ان)?/i,
        may: /^أيا(ر)?/i,
        jun: /^حزي(ران)?/i,
        jul: /^تمو(ز)?/i,
        aug: /^آب/i,
        sep: /^أيل(ول)/i,
        oct: /^تش(1|رين (1|الأول))/i,
        nov: /^تش(2|رين (2|الثاني))/i,
        dec: /^كا(1|نون (1|الأول))/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^(((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب(ال)?)?توقيت )?(مكة( المكرمة)?|(جمهورية )?العراق|بغداد|العرب(ي)?( القياسي)?|ast|arabia( standard)? tim(e|ing)))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "AST",
            offset: "+0300"
        }]
}, culture_date_i18n["ar-jo"] = {
    name: "ar-JO",
    englishName: "Arabic (Jordan)",
    nativeName: "العربية (الأردن)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
    abbreviatedMonthNames: ["كانون 2", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين 1", "تشرين 2", "كانون 1"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 7,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^كا(2|نون (2|الثاني))/i,
        feb: /^شبا(ط)?/i,
        mar: /^آذا(ر)?/i,
        apr: /^نيس(ان)?/i,
        may: /^أيا(ر)?/i,
        jun: /^حزي(ران)?/i,
        jul: /^تمو(ز)?/i,
        aug: /^آب/i,
        sep: /^أيل(ول)/i,
        oct: /^تش(1|رين (1|الأول))/i,
        nov: /^تش(2|رين (2|الثاني))/i,
        dec: /^كا(1|نون (1|الأول))/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^(((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب(ال)?)?توقيت )?(((ال)?مملكة )?الأردن(ية)?|عمان|العرب(ي)?( الصيفي)?( القياسي)?|ast|adt|arabia( daylight)?( standard)? tim(e|ing)))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "AST",
            offset: "+0300"
        }, {
            name: "ADT",
            offset: "+0200"
        }]
}, culture_date_i18n["ar-km"] = {
    name: "ar-KM",
    englishName: "Arabic (Comoros)",
    nativeName: "العربية (جزر القمر)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    abbreviatedMonthNames: ["ينا", "فبر", "مار", "أبر", "ماي", "يون", "يول", "أغس", "سبت", "أكت", "نوف", "ديس"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 7,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^ينا(ير)?/i,
        feb: /^فبر(اير)?/i,
        mar: /^مار(س)?/i,
        apr: /^أبر(يل)?/i,
        may: /^ماي(و)?/i,
        jun: /^يون(يو)?/i,
        jul: /^يول(يو)?/i,
        aug: /^أغس(طس)?/i,
        sep: /^سبت(مبر)?/i,
        oct: /^أكت(وبر)?/i,
        nov: /^نوف(مبر)?/i,
        dec: /^ديس(مبر)?/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^(((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب(ال)?)?توقيت )?((جمهورية )?السودان|الخرطوم|شرق افريقيا|eat|eastern africa? tim(e|ing)))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "EAT",
            offset: "+0300"
        }, {
            name: "AST",
            offset: "+0300"
        }]
}, culture_date_i18n["ar-kw"] = {
    name: "ar-KW",
    englishName: "Arabic (Kuwait)",
    nativeName: "العربية (الكويت)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    abbreviatedMonthNames: ["ينا", "فبر", "مار", "أبر", "ماي", "يون", "يول", "أغس", "سبت", "أكت", "نوف", "ديس"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 7,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^ينا(ير)?/i,
        feb: /^فبر(اير)?/i,
        mar: /^مار(س)?/i,
        apr: /^أبر(يل)?/i,
        may: /^ماي(و)?/i,
        jun: /^يون(يو)?/i,
        jul: /^يول(يو)?/i,
        aug: /^أغس(طس)?/i,
        sep: /^سبت(مبر)?/i,
        oct: /^أكت(وبر)?/i,
        nov: /^نوف(مبر)?/i,
        dec: /^ديس(مبر)?/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^(((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب(ال)?)?توقيت )?(مكة( المكرمة)?|(دولة )?الكويت|العرب(ي)?( القياسي)?|ast|arabia( standard)? tim(e|ing)))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "AST",
            offset: "+0300"
        }]
}, culture_date_i18n["ar-lb"] = {
    name: "ar-LB",
    englishName: "Arabic (Lebanon)",
    nativeName: "العربية (لبنان)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
    abbreviatedMonthNames: ["كانون 2", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين 1", "تشرين 2", "كانون 1"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^كا(2|نون (2|الثاني))/i,
        feb: /^شبا(ط)?/i,
        mar: /^آذا(ر)?/i,
        apr: /^نيس(ان)?/i,
        may: /^أيا(ر)?/i,
        jun: /^حزي(ران)?/i,
        jul: /^تمو(ز)?/i,
        aug: /^آب/i,
        sep: /^أيل(ول)/i,
        oct: /^تش(1|رين (1|الأول))/i,
        nov: /^تش(2|رين (2|الثاني))/i,
        dec: /^كا(1|نون (1|الأول))/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^(((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب(ال)?)?توقيت )?(((ال)?جمهورية )?(ال)?لبنان(ية)?|بيروت|شرق أوروبا( الصيفي)?|العرب(ي)?( الصيفي)?( القياسي)?|ast|adt|arabia( daylight)?( standard)? tim(e|ing)|eet|eest|eastern european (summer)? tim(e|ing)))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "EET",
            offset: "+0200"
        }, {
            name: "EEST",
            offset: "+0300"
        }, {
            name: "AST",
            offset: "+0300"
        }, {
            name: "ADT",
            offset: "+0200"
        }]
}, culture_date_i18n["ar-ly"] = {
    name: "ar-LY",
    englishName: "Arabic (Libya)",
    nativeName: "العربية (ليبيا)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    abbreviatedMonthNames: ["ينا", "فبر", "مار", "أبر", "ماي", "يون", "يول", "أغس", "سبت", "أكت", "نوف", "ديس"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 7,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^ينا(ير)?/i,
        feb: /^فبر(اير)?/i,
        mar: /^مار(س)?/i,
        apr: /^أبر(يل)?/i,
        may: /^ماي(و)?/i,
        jun: /^يون(يو)?/i,
        jul: /^يول(يو)?/i,
        aug: /^أغس(طس)?/i,
        sep: /^سبت(مبر)?/i,
        oct: /^أكت(وبر)?/i,
        nov: /^نوف(مبر)?/i,
        dec: /^ديس(مبر)?/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^(((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب(ال)?)?توقيت )?((ال)?(جمهورية )?(ال)?ليبي(ة|ا)|طرابلس|شرق أوروبا|وسط أوروبا|eet|cet|(eastern)?(central)? european tim(e|ing)))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "EET",
            offset: "+0200"
        }, {
            name: "CET",
            offset: "+0100"
        }]
}, culture_date_i18n["ar-ma"] = {
    name: "ar-MA",
    englishName: "Arabic (Morocco)",
    nativeName: "العربية (المملكة المغربية)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليوز", "غشت", "شتنبر", "أكتوبر", "نونبر", "دجنبر"],
    abbreviatedMonthNames: ["ينا", "فبر", "مار", "أبر", "ماي", "يون", "يول", "غشت", "شتن", "أكت", "نون", "دجن"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^ينا(ير)?/i,
        feb: /^فبر(اير)?/i,
        mar: /^مار(س)?/i,
        apr: /^أبر(يل)?/i,
        may: /^ماي/i,
        jun: /^يون(يو)?/i,
        jul: /^يول(يوز)?/i,
        aug: /^غشت/i,
        sep: /^شتن(بر)?/i,
        oct: /^أكت(وبر)?/i,
        nov: /^نون(بر)?/i,
        dec: /^دجن(بر)?/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب(ال)?)?توقيت )?((ال)?(مملكة )?(ال)?مغرب(ية)?|الرباط|جرينتش|غرب أوروبا|wet|west|western europe (summer)? tim(e|ing))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "WET",
            offset: "+000"
        }, {
            name: "WEST",
            offset: "+0100"
        }]
}, culture_date_i18n["ar-mr"] = {
    name: "ar-MR",
    englishName: "Arabic (Mauritania)",
    nativeName: "العربية (موريتانيا)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغشت", "شتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    abbreviatedMonthNames: ["ينا", "فبر", "مار", "أبر", "ماي", "يون", "يول", "أغش", "شتم", "أكت", "نوف", "ديس"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 7,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^ينا(ير)?/i,
        feb: /^فبر(اير)?/i,
        mar: /^مار(س)?/i,
        apr: /^أبر(يل)?/i,
        may: /^ماي(و)?/i,
        jun: /^يون(يو)?/i,
        jul: /^يول(يو)?/i,
        aug: /^أغش(ت)?/i,
        sep: /^شتم(بر)?/i,
        oct: /^أكت(وبر)?/i,
        nov: /^نوف(مبر)?/i,
        dec: /^ديس(مبر)?/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب(ال)?)?توقيت )?((جمهورية )?موريتانيا|نواكشوط|جرينتش|غرب أوروبا|wet|west|western europe tim(e|ing))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "WET",
            offset: "+000"
        }]
}, culture_date_i18n["ar-om"] = {
    name: "ar-OM",
    englishName: "Arabic (Oman)",
    nativeName: "العربية (عمان)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    abbreviatedMonthNames: ["ينا", "فبر", "مار", "أبر", "ماي", "يون", "يول", "أغس", "سبت", "أكت", "نوف", "ديس"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 7,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^ينا(ير)?/i,
        feb: /^فبر(اير)?/i,
        mar: /^مار(س)?/i,
        apr: /^أبر(يل)?/i,
        may: /^ماي(و)?/i,
        jun: /^يون(يو)?/i,
        jul: /^يول(يو)?/i,
        aug: /^أغس(طس)?/i,
        sep: /^سبت(مبر)?/i,
        oct: /^أكت(وبر)?/i,
        nov: /^نوف(مبر)?/i,
        dec: /^ديس(مبر)?/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^(((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب)?توقيت )?(الخليج|gst|gulf (standard)? tim(e|ing)))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "GST",
            offset: "+0400"
        }]
}, culture_date_i18n["ar-ps"] = {
    name: "ar-PS",
    englishName: "Arabic (Palestine)",
    nativeName: "العربية (فلسطين)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
    abbreviatedMonthNames: ["كانون 2", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين 1", "تشرين 2", "كانون 1"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 7,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^كا(2|نون (2|الثاني))/i,
        feb: /^شبا(ط)?/i,
        mar: /^آذا(ر)?/i,
        apr: /^نيس(ان)?/i,
        may: /^أيا(ر)?/i,
        jun: /^حزي(ران)?/i,
        jul: /^تمو(ز)?/i,
        aug: /^آب/i,
        sep: /^أيل(ول)/i,
        oct: /^تش(1|رين (1|الأول))/i,
        nov: /^تش(2|رين (2|الثاني))/i,
        dec: /^كا(1|نون (1|الأول))/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^(((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب(ال)?)?توقيت )?((دولة )?فلسطين|القدس(المحتلة)?|العرب(ي)?( الصيفي)?( القياسي)?|ast|adt|arabia( daylight)?( standard)? tim(e|ing)))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "AST",
            offset: "+0300"
        }, {
            name: "ADT",
            offset: "+0200"
        }]
}, culture_date_i18n["ar-qa"] = {
    name: "ar-QA",
    englishName: "Arabic (Qatar)",
    nativeName: "العربية (قطر)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    abbreviatedMonthNames: ["ينا", "فبر", "مار", "أبر", "ماي", "يون", "يول", "أغس", "سبت", "أكت", "نوف", "ديس"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 7,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^ينا(ير)?/i,
        feb: /^فبر(اير)?/i,
        mar: /^مار(س)?/i,
        apr: /^أبر(يل)?/i,
        may: /^ماي(و)?/i,
        jun: /^يون(يو)?/i,
        jul: /^يول(يو)?/i,
        aug: /^أغس(طس)?/i,
        sep: /^سبت(مبر)?/i,
        oct: /^أكت(وبر)?/i,
        nov: /^نوف(مبر)?/i,
        dec: /^ديس(مبر)?/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^(((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب(ال)?)?توقيت )?(مكة( المكرمة)?|(دولة )?قطر|الدوحة|العرب(ي)?( القياسي)?|ast|arabia( standard)? tim(e|ing)))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "AST",
            offset: "+0300"
        }]
}, culture_date_i18n["ar-sa"] = {
    name: "ar-SA",
    englishName: "Arabic (Saudi Arabia)",
    nativeName: "العربية (المملكة العربية السعودية)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    abbreviatedMonthNames: ["ينا", "فبر", "مار", "أبر", "ماي", "يون", "يول", "أغس", "سبت", "أكت", "نوف", "ديس"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 7,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^ينا(ير)?/i,
        feb: /^فبر(اير)?/i,
        mar: /^مار(س)?/i,
        apr: /^أبر(يل)?/i,
        may: /^ماي(و)?/i,
        jun: /^يون(يو)?/i,
        jul: /^يول(يو)?/i,
        aug: /^أغس(طس)?/i,
        sep: /^سبت(مبر)?/i,
        oct: /^أكت(وبر)?/i,
        nov: /^نوف(مبر)?/i,
        dec: /^ديس(مبر)?/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^(((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب)?توقيت )?(مكة (المكرمة)?|(المملكة العربية)?السعودية|الرياض|ast|arab (standard)? tim(e|ing)))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "AST",
            offset: "+0300"
        }]
}, culture_date_i18n["ar-sd"] = {
    name: "ar-SD",
    englishName: "Arabic (Sudan)",
    nativeName: "العربية (السودان)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "دجنبر"],
    abbreviatedMonthNames: ["ينا", "فبر", "مار", "أبر", "ماي", "يون", "يول", "أغس", "سبت", "أكت", "نوف", "دجم"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 7,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^ينا(ير)?/i,
        feb: /^فبر(اير)?/i,
        mar: /^مار(س)?/i,
        apr: /^أبر(يل)?/i,
        may: /^ماي(و)?/i,
        jun: /^يون(يو)?/i,
        jul: /^يول(يو)?/i,
        aug: /^أغس(طس)?/i,
        sep: /^سبت(مبر)?/i,
        oct: /^أكت(وبر)?/i,
        nov: /^نوف(مبر)?/i,
        dec: /^ديس(مبر)?/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^(((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب(ال)?)?توقيت )?((جمهورية )?السودان|الخرطوم|شرق افريقيا|eat|eastern africa? tim(e|ing)))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "EAT",
            offset: "+0300"
        }, {
            name: "AST",
            offset: "+0300"
        }]
}, culture_date_i18n["ar-so"] = {
    name: "ar-SO",
    englishName: "Arabic (Somalia)",
    nativeName: "العربية (الصومال)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    abbreviatedMonthNames: ["ينا", "فبر", "مار", "أبر", "ماي", "يون", "يول", "أغس", "سبت", "أكت", "نوف", "ديس"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 7,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^ينا(ير)?/i,
        feb: /^فبر(اير)?/i,
        mar: /^مار(س)?/i,
        apr: /^أبر(يل)?/i,
        may: /^ماي(و)?/i,
        jun: /^يون(يو)?/i,
        jul: /^يول(يو)?/i,
        aug: /^أغس(طس)?/i,
        sep: /^سبت(مبر)?/i,
        oct: /^أكت(وبر)?/i,
        nov: /^نوف(مبر)?/i,
        dec: /^ديس(مبر)?/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^(((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب(ال)?)?توقيت )?((جمهورية )?|الصومال|مقديشو|شرق افريقيا|eat|ast|eastern africa? tim(e|ing)))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "EAT",
            offset: "+0300"
        }, {
            name: "AST",
            offset: "+0300"
        }]
}, culture_date_i18n["ar-sy"] = {
    name: "ar-SY",
    englishName: "Arabic (Syria)",
    nativeName: "العربية (سوريا)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
    abbreviatedMonthNames: ["كانون 2", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين 1", "تشرين 2", "كانون 1"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 7,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^كا(2|نون (2|الثاني))/i,
        feb: /^شبا(ط)?/i,
        mar: /^آذا(ر)?/i,
        apr: /^نيس(ان)?/i,
        may: /^أيا(ر)?/i,
        jun: /^حزي(ران)?/i,
        jul: /^تمو(ز)?/i,
        aug: /^آب/i,
        sep: /^أيل(ول)/i,
        oct: /^تش(1|رين (1|الأول))/i,
        nov: /^تش(2|رين (2|الثاني))/i,
        dec: /^كا(1|نون (1|الأول))/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^(((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب(ال)?)?توقيت )?(((ال)?جمهورية )?(ال)?سوري(ة|ا)?|دمشق|شرق أوروبا( الصيفي)?|ast|adt|arabia( daylight)?( standard)? tim(e|ing)|eet|eest|eastern european (summer)? tim(e|ing)))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "EET",
            offset: "+0200"
        }, {
            name: "EEST",
            offset: "+0300"
        }, {
            name: "AST",
            offset: "+0300"
        }, {
            name: "ADT",
            offset: "+0200"
        }]
}, culture_date_i18n["ar-tn"] = {
    name: "ar-TN",
    englishName: "Arabic (Tunisia)",
    nativeName: "العربية (تونس)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["جانفي", "فيفري", "مارس", "افريل", "ماي", "جوان", "جويلية", "اوت", "سبتمبر", "اكتوبر", "نوفمبر", "ديسمبر"],
    abbreviatedMonthNames: ["جان", "فيف", "مار", "أفر", "ماي", "جوا", "جوي", "أوت", "سبت", "أكت", "نوف", "ديس"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^جان(في)?/i,
        feb: /^فيف(ري)?/i,
        mar: /^مار(س)?/i,
        apr: /^أفر(يل)?/i,
        may: /^ماي/i,
        jun: /^جوا(ن)?/i,
        jul: /^جوي(لية)?/i,
        aug: /^أوت/i,
        sep: /^سبت(مبر)?/i,
        oct: /^أكت(وبر)?/i,
        nov: /^نوف(مبر)?/i,
        dec: /^ديس(مبر)?/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب(ال)?)?توقيت )?((ال)?(جمهورية )?(ال)?تونس(ية)?|تونس|وسط أوروبا(صيفي)?|cet|cest|central europe (summer)? tim(e|ing))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "CET",
            offset: "+0100"
        }, {
            name: "CEST",
            offset: "+0200"
        }]
}, culture_date_i18n["ar-ye"] = {
    name: "ar-YE",
    englishName: "Arabic (Yemen)",
    nativeName: "العربية (اليمن)",
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    shortestDayNames: ["حد", "ثن", "ثل", "رع", "خم", "جم", "سب"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    abbreviatedMonthNames: ["ينا", "فبر", "مار", "أبر", "ماي", "يون", "يول", "أغس", "سبت", "أكت", "نوف", "ديس"],
    amDesignator: "ص",
    pmDesignator: "م",
    firstDayOfWeek: 7,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd/MMMM/yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^ينا(ير)?/i,
        feb: /^فبر(اير)?/i,
        mar: /^مار(س)?/i,
        apr: /^أبر(يل)?/i,
        may: /^ماي(و)?/i,
        jun: /^يون(يو)?/i,
        jul: /^يول(يو)?/i,
        aug: /^أغس(طس)?/i,
        sep: /^سبت(مبر)?/i,
        oct: /^أكت(وبر)?/i,
        nov: /^نوف(مبر)?/i,
        dec: /^ديس(مبر)?/i,
        sun: /^الأحد|(أ|ا)حد|ح(د)?/i,
        mon: /^الإثنين|(إ|ا)ثنين|(ث)?ن/i,
        tue: /^الثلاثاء|ث(ل|لاثاء)?/i,
        wed: /^الأربعاء|(أ|ا)ربعاء|ر(ع)?/i,
        thu: /^الخميس|خ(م|ميس)?/i,
        fri: /^الجمعة|ج(م|معة)?/i,
        sat: /^السبت|س(ب|بت)?/i,
        future: /^القادم/i,
        past: /^الماضي/i,
        add: /^(\+|بعد|عقب)/i,
        subtract: /^(\-|قبل|منذ)/i,
        yesterday: /^((ال)?(ا|أ)مس|(ال)?بارح(ة)?)/i,
        today: /^اليوم/i,
        tomorrow: /^(الغد|غد(ا)?)/i,
        now: /^(ال)?آن/i,
        millisecond: /^(ال)?ج(زء(ا))?( من( ال(أ|ا)لف من)? |( )?.( )?)(ال)?ث(انية)?(.)?/i,
        second: /^(ال)?ث(انية|وان(ي)?)?(.)?/i,
        minute: /^(ال)?د(قيقة|قائق)?(.)?/i,
        hour: /^(ال)?س(اعة|اعات)?(.)?/i,
        week: /^(ال)?(إ|ا)س(بوع|ابيع)/i,
        month: /^(ال)?((أ|ا)?شهر|شهور)/i,
        day: /(ال)?(يوم|أيام)/i,
        year: /^(ال)?سن(ة|ين|ون|وات)/i,
        shortMeridian: /^(ص|م)/i,
        longMeridian: /^(صباح(ا)?|مساء(ا)?)/i,
        timezone: /^(((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc|((ب(ال)?)?توقيت )?(مكة( المكرمة)?|((ال)?جمهورية )?اليمن(ية)?|صنعاء|العرب(ي)?( القياسي)?|ast|arabia( standard)? tim(e|ing)))/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "+000"
        }, {
            name: "GMT",
            offset: "+000"
        }, {
            name: "AST",
            offset: "+0300"
        }]
}, culture_date_i18n["az-cyrl-az"] = {
    name: "az-Cyrl-AZ",
    englishName: "Azeri (Cyrillic, Azerbaijan)",
    nativeName: "Азәрбајҹан (Азәрбајҹан)",
    dayNames: ["Базар", "Базар ертәси", "Чәршәнбә ахшамы", "Чәршәнбә", "Ҹүмә ахшамы", "Ҹүмә", "Шәнбә"],
    abbreviatedDayNames: ["Б", "Бе", "Ча", "Ч", "Ҹа", "Ҹ", "Ш"],
    shortestDayNames: ["Б", "Бе", "Ча", "Ч", "Ҹа", "Ҹ", "Ш"],
    firstLetterDayNames: ["Б", "Б", "Ч", "Ч", "Ҹ", "Ҹ", "Ш"],
    monthNames: ["Јанвар", "Феврал", "Март", "Апрел", "Мај", "Ијун", "Ијул", "Август", "Сентјабр", "Октјабр", "Нојабр", "Декабр"],
    abbreviatedMonthNames: ["Јан", "Фев", "Мар", "Апр", "Мај", "Ијун", "Ијул", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "d MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^јан(вар)?/i,
        feb: /^фев(рал)?/i,
        mar: /^мар(т)?/i,
        apr: /^апр(ел)?/i,
        may: /^мај/i,
        jun: /^ијун/i,
        jul: /^ијул/i,
        aug: /^авг(уст)?/i,
        sep: /^сен(тјабр)?/i,
        oct: /^окт(јабр)?/i,
        nov: /^нојабр/i,
        dec: /^дек(абр)?/i,
        sun: /^базар/i,
        mon: /^базар ертәси/i,
        tue: /^чәршәнбә ахшамы/i,
        wed: /^чәршәнбә/i,
        thu: /^ҹүмә ахшамы/i,
        fri: /^ҹүмә/i,
        sat: /^шәнбә/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["az-latn-az"] = {
    name: "az-Latn-AZ",
    englishName: "Azeri (Latin, Azerbaijan)",
    nativeName: "Azərbaycan­ılı (Azərbaycanca)",
    dayNames: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"],
    abbreviatedDayNames: ["B", "Be", "Ça", "Ç", "Ca", "C", "Ş"],
    shortestDayNames: ["B", "Be", "Ça", "Ç", "Ca", "C", "Ş"],
    firstLetterDayNames: ["B", "B", "Ç", "Ç", "C", "C", "Ş"],
    monthNames: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
    abbreviatedMonthNames: ["Yan", "Fev", "Mar", "Apr", "May", "İyun", "İyul", "Avg", "Sen", "Okt", "Noy", "Dek"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "d MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^yan(var)?/i,
        feb: /^fev(ral)?/i,
        mar: /^mar(t)?/i,
        apr: /^apr(el)?/i,
        may: /^may/i,
        jun: /^iyun/i,
        jul: /^iyul/i,
        aug: /^avg(ust)?/i,
        sep: /^sen(tyabr)?/i,
        oct: /^okt(yabr)?/i,
        nov: /^noy(abr)?/i,
        dec: /^dek(abr)?/i,
        sun: /^bazar/i,
        mon: /^bazar ertəsi/i,
        tue: /^çərşənbə axşamı/i,
        wed: /^çərşənbə/i,
        thu: /^cümə axşamı/i,
        fri: /^cümə/i,
        sat: /^şənbə/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["be-by"] = {
    name: "be-BY",
    englishName: "Belarusian (Belarus)",
    nativeName: "Беларускі (Беларусь)",
    dayNames: ["нядзеля", "панядзелак", "аўторак", "серада", "чацвер", "пятніца", "субота"],
    abbreviatedDayNames: ["нд", "пн", "аў", "ср", "чц", "пт", "сб"],
    shortestDayNames: ["нд", "пн", "аў", "ср", "чц", "пт", "сб"],
    firstLetterDayNames: ["н", "п", "а", "с", "ч", "п", "с"],
    monthNames: ["Студзень", "Люты", "Сакавік", "Красавік", "Май", "Чэрвень", "Ліпень", "Жнівень", "Верасень", "Кастрычнік", "Лістапад", "Снежань"],
    abbreviatedMonthNames: ["Сту", "Лют", "Сак", "Кра", "Май", "Чэр", "Ліп", "Жні", "Вер", "Кас", "Ліс", "Сне"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "d MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^сту(дзень)?/i,
        feb: /^лют(ы)?/i,
        mar: /^сак(авік)?/i,
        apr: /^кра(савік)?/i,
        may: /^май/i,
        jun: /^чэр(вень)?/i,
        jul: /^ліп(ень)?/i,
        aug: /^жні(вень)?/i,
        sep: /^вер(асень)?/i,
        oct: /^кас(трычнік)?/i,
        nov: /^ліс(тапад)?/i,
        dec: /^сне(жань)?/i,
        sun: /^нядзеля/i,
        mon: /^панядзелак/i,
        tue: /^аўторак/i,
        wed: /^серада/i,
        thu: /^чацвер/i,
        fri: /^пятніца/i,
        sat: /^субота/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["bg-bg"] = {
    name: "bg-BG",
    englishName: "Bulgarian (Bulgaria)",
    nativeName: "български (България)",
    dayNames: ["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"],
    abbreviatedDayNames: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    shortestDayNames: ["не", "по", "вт", "ср", "че", "пе", "съ"],
    firstLetterDayNames: ["н", "п", "в", "с", "ч", "п", "с"],
    monthNames: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
    abbreviatedMonthNames: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.M.yyyy 'г.'",
        longDate: "dd MMMM yyyy 'г.'",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dd MMMM yyyy 'г.' HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy 'г.'"
    },
    regexPatterns: {
        jan: /^януари/i,
        feb: /^февруари/i,
        mar: /^март/i,
        apr: /^април/i,
        may: /^май/i,
        jun: /^юни/i,
        jul: /^юли/i,
        aug: /^август/i,
        sep: /^септември/i,
        oct: /^октомври/i,
        nov: /^ноември/i,
        dec: /^декември/i,
        sun: /^не((деля)?)?/i,
        mon: /^по((неделник)?)?/i,
        tue: /^вторник/i,
        wed: /^сряда/i,
        thu: /^че((твъртък)?)?/i,
        fri: /^пе((тък)?)?/i,
        sat: /^съ((бота)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["bs-latn-ba"] = {
    name: "bs-Latn-BA",
    englishName: "Bosnian (Bosnia and Herzegovina)",
    nativeName: "bosanski (Bosna i Hercegovina)",
    dayNames: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
    abbreviatedDayNames: ["ned", "pon", "uto", "sri", "čet", "pet", "sub"],
    shortestDayNames: ["ned", "pon", "uto", "sri", "čet", "pet", "sub"],
    firstLetterDayNames: ["n", "p", "u", "s", "č", "p", "s"],
    monthNames: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
    abbreviatedMonthNames: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d.M.yyyy",
        longDate: "d. MMMM yyyy",
        shortTime: "H:mm:ss",
        longTime: "H:mm:ss",
        fullDateTime: "d. MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uar)?/i,
        feb: /^feb(ruar)?/i,
        mar: /^mar(t)?/i,
        apr: /^apr(il)?/i,
        may: /^maj/i,
        jun: /^jun/i,
        jul: /^jul/i,
        aug: /^avg(ust)?/i,
        sep: /^sep(tembar)?/i,
        oct: /^okt(obar)?/i,
        nov: /^nov(embar)?/i,
        dec: /^dec(embar)?/i,
        sun: /^nedjelja/i,
        mon: /^ponedjeljak/i,
        tue: /^utorak/i,
        wed: /^srijeda/i,
        thu: /^četvrtak/i,
        fri: /^petak/i,
        sat: /^subota/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["ca-es"] = {
    name: "ca-ES",
    englishName: "Catalan (Catalan)",
    nativeName: "català (català)",
    dayNames: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
    abbreviatedDayNames: ["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."],
    shortestDayNames: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
    firstLetterDayNames: ["d", "d", "d", "d", "d", "d", "d"],
    monthNames: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
    abbreviatedMonthNames: ["gen", "feb", "març", "abr", "maig", "juny", "jul", "ag", "set", "oct", "nov", "des"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, d' / 'MMMM' / 'yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dddd, d' / 'MMMM' / 'yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' / 'yyyy"
    },
    regexPatterns: {
        jan: /^gen(er)?/i,
        feb: /^feb(rer)?/i,
        mar: /^març/i,
        apr: /^abr(il)?/i,
        may: /^maig/i,
        jun: /^juny/i,
        jul: /^jul(iol)?/i,
        aug: /^ag(ost)?/i,
        sep: /^set(embre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(embre)?/i,
        dec: /^des(embre)?/i,
        sun: /^dg((.(umenge)?)?)?/i,
        mon: /^dl((.(lluns)?)?)?/i,
        tue: /^dt((.(marts)?)?)?/i,
        wed: /^dc((.(mecres)?)?)?/i,
        thu: /^dj((.(jous)?)?)?/i,
        fri: /^dv((.(vendres)?)?)?/i,
        sat: /^ds((.(ssabte)?)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["cs-cz"] = {
    name: "cs-CZ",
    englishName: "Czech (Czech Republic)",
    nativeName: "čeština (Česká republika)",
    dayNames: ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"],
    abbreviatedDayNames: ["ne", "po", "út", "st", "čt", "pá", "so"],
    shortestDayNames: ["ne", "po", "út", "st", "čt", "pá", "so"],
    firstLetterDayNames: ["n", "p", "ú", "s", "č", "p", "s"],
    monthNames: ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"],
    abbreviatedMonthNames: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"],
    amDesignator: "dop.",
    pmDesignator: "odp.",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d.M.yyyy",
        longDate: "d. MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d. MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^leden/i,
        feb: /^únor/i,
        mar: /^březen/i,
        apr: /^duben/i,
        may: /^květen/i,
        jun: /^červen/i,
        jul: /^červenec/i,
        aug: /^srpen/i,
        sep: /^září/i,
        oct: /^říjen/i,
        nov: /^listopad/i,
        dec: /^prosinec/i,
        sun: /^neděle/i,
        mon: /^pondělí/i,
        tue: /^úterý/i,
        wed: /^středa/i,
        thu: /^čtvrtek/i,
        fri: /^pátek/i,
        sat: /^sobota/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["cy-gb"] = {
    name: "cy-GB",
    englishName: "Welsh (United Kingdom)",
    nativeName: "Cymraeg (y Deyrnas Unedig)",
    dayNames: ["Dydd Sul", "Dydd Llun", "Dydd Mawrth", "Dydd Mercher", "Dydd Iau", "Dydd Gwener", "Dydd Sadwrn"],
    abbreviatedDayNames: ["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"],
    shortestDayNames: ["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"],
    firstLetterDayNames: ["S", "L", "M", "M", "I", "G", "S"],
    monthNames: ["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"],
    abbreviatedMonthNames: ["Ion", "Chwe", "Maw", "Ebr", "Mai", "Meh", "Gor", "Aws", "Med", "Hyd", "Tach", "Rhag"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dd MMMM yyyy",
        shortTime: "HH:mm:ss",
        longTime: "HH:mm:ss",
        fullDateTime: "dd MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^ion(awr)?/i,
        feb: /^chwe(fror)?/i,
        mar: /^maw(rth)?/i,
        apr: /^ebr(ill)?/i,
        may: /^mai/i,
        jun: /^meh(efin)?/i,
        jul: /^gor(ffennaf)?/i,
        aug: /^aws(t)?/i,
        sep: /^med(i)?/i,
        oct: /^hyd(ref)?/i,
        nov: /^tach(wedd)?/i,
        dec: /^rhag(fyr)?/i,
        sun: /^dydd sul/i,
        mon: /^dydd llun/i,
        tue: /^dydd mawrth/i,
        wed: /^dydd mercher/i,
        thu: /^dydd iau/i,
        fri: /^dydd gwener/i,
        sat: /^dydd sadwrn/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["da-dk"] = {
    name: "da-DK",
    englishName: "Danish (Denmark)",
    nativeName: "dansk (Danmark)",
    dayNames: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
    abbreviatedDayNames: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
    shortestDayNames: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
    firstLetterDayNames: ["s", "m", "t", "o", "t", "f", "l"],
    monthNames: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"],
    abbreviatedMonthNames: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd-MM-yyyy",
        longDate: "d. MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "d. MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d. MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uar)?/i,
        feb: /^feb(ruar)?/i,
        mar: /^mar(ts)?/i,
        apr: /^apr(il)?/i,
        may: /^maj/i,
        jun: /^jun(i)?/i,
        jul: /^jul(i)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^søndag/i,
        mon: /^mandag/i,
        tue: /^tirsdag/i,
        wed: /^onsdag/i,
        thu: /^torsdag/i,
        fri: /^fredag/i,
        sat: /^lørdag/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["de-at"] = {
    name: "de-AT",
    englishName: "German (Austria)",
    nativeName: "Deutsch (Österreich)",
    dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    abbreviatedDayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    shortestDayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "D", "M", "D", "F", "S"],
    monthNames: ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    abbreviatedMonthNames: ["Jän", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "dddd, dd. MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dddd, dd. MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jän(ner)?/i,
        feb: /^feb(ruar)?/i,
        mar: /^mär(z)?/i,
        apr: /^apr(il)?/i,
        may: /^mai/i,
        jun: /^jun(i)?/i,
        jul: /^jul(i)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dez(ember)?/i,
        sun: /^so(n(ntag)?)?/i,
        mon: /^mo(n(tag)?)?/i,
        tue: /^di(e(nstag)?)?/i,
        wed: /^mi(t(twoch)?)?/i,
        thu: /^do(n(nerstag)?)?/i,
        fri: /^fr(e(itag)?)?/i,
        sat: /^sa(m(stag)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["de-ch"] = {
    name: "de-CH",
    englishName: "German (Switzerland)",
    nativeName: "Deutsch (Schweiz)",
    dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    abbreviatedDayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    shortestDayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "D", "M", "D", "F", "S"],
    monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "dddd, d. MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dddd, d. MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uar)?/i,
        feb: /^feb(ruar)?/i,
        mar: /^märz/i,
        apr: /^apr(il)?/i,
        may: /^mai/i,
        jun: /^jun(i)?/i,
        jul: /^jul(i)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dez(ember)?/i,
        sun: /^so(n(ntag)?)?/i,
        mon: /^mo(n(tag)?)?/i,
        tue: /^di(e(nstag)?)?/i,
        wed: /^mi(t(twoch)?)?/i,
        thu: /^do(n(nerstag)?)?/i,
        fri: /^fr(e(itag)?)?/i,
        sat: /^sa(m(stag)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["de-de"] = {
    name: "de-DE",
    englishName: "German (Germany)",
    nativeName: "Deutsch (Deutschland)",
    dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    abbreviatedDayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    shortestDayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "D", "M", "D", "F", "S"],
    monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "dddd, d. MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dddd, d. MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uar)?/i,
        feb: /^feb(ruar)?/i,
        mar: /^märz/i,
        apr: /^apr(il)?/i,
        may: /^mai/i,
        jun: /^jun(i)?/i,
        jul: /^jul(i)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dez(ember)?/i,
        sun: /^so(n(ntag)?)?/i,
        mon: /^mo(n(tag)?)?/i,
        tue: /^di(e(nstag)?)?/i,
        wed: /^mi(t(twoch)?)?/i,
        thu: /^do(n(nerstag)?)?/i,
        fri: /^fr(e(itag)?)?/i,
        sat: /^sa(m(stag)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["de-li"] = {
    name: "de-LI",
    englishName: "German (Liechtenstein)",
    nativeName: "Deutsch (Liechtenstein)",
    dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    abbreviatedDayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    shortestDayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "D", "M", "D", "F", "S"],
    monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "dddd, d. MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dddd, d. MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uar)?/i,
        feb: /^feb(ruar)?/i,
        mar: /^märz/i,
        apr: /^apr(il)?/i,
        may: /^mai/i,
        jun: /^jun(i)?/i,
        jul: /^jul(i)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dez(ember)?/i,
        sun: /^sonntag/i,
        mon: /^montag/i,
        tue: /^dienstag/i,
        wed: /^mittwoch/i,
        thu: /^donnerstag/i,
        fri: /^freitag/i,
        sat: /^samstag/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["de-lu"] = {
    name: "de-LU",
    englishName: "German (Luxembourg)",
    nativeName: "Deutsch (Luxemburg)",
    dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    abbreviatedDayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    shortestDayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "D", "M", "D", "F", "S"],
    monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "dddd, d. MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dddd, d. MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uar)?/i,
        feb: /^feb(ruar)?/i,
        mar: /^märz/i,
        apr: /^apr(il)?/i,
        may: /^mai/i,
        jun: /^jun(i)?/i,
        jul: /^jul(i)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dez(ember)?/i,
        sun: /^sonntag/i,
        mon: /^montag/i,
        tue: /^dienstag/i,
        wed: /^mittwoch/i,
        thu: /^donnerstag/i,
        fri: /^freitag/i,
        sat: /^samstag/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["dv-mv"] = {
    name: "dv-MV",
    englishName: "Divehi (Maldives)",
    nativeName: "ދިވެހިބަސް (ދިވެހި ރާއްޖެ)",
    dayNames: ["الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "السبت"],
    abbreviatedDayNames: ["الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "السبت"],
    shortestDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    firstLetterDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
    monthNames: ["محرم", "صفر", "ربيع الأول", "ربيع الثاني", "جمادى الأولى", "جمادى الثانية", "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"],
    abbreviatedMonthNames: ["محرم", "صفر", "ربيع الاول", "ربيع الثاني", "جمادى الاولى", "جمادى الثانية", "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"],
    amDesignator: "މކ",
    pmDesignator: "މފ",
    firstDayOfWeek: 0,
    twoDigitYearMax: 1451,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dd/MMMM/yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dd/MMMM/yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^محرم/i,
        feb: /^صفر/i,
        mar: /^ربيع الأول/i,
        apr: /^ربيع الثاني/i,
        may: /^جمادى الأولى/i,
        jun: /^جمادى الثانية/i,
        jul: /^رجب/i,
        aug: /^شعبان/i,
        sep: /^رمضان/i,
        oct: /^شوال/i,
        nov: /^ذو القعدة/i,
        dec: /^ذو الحجة/i,
        sun: /^الاحد/i,
        mon: /^الاثنين/i,
        tue: /^الثلاثاء/i,
        wed: /^الاربعاء/i,
        thu: /^الخميس/i,
        fri: /^الجمعة/i,
        sat: /^السبت/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["el-gr"] = {
    name: "el-GR",
    englishName: "Greek (Greece)",
    nativeName: "ελληνικά (Ελλάδα)",
    dayNames: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
    abbreviatedDayNames: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
    shortestDayNames: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σά"],
    firstLetterDayNames: ["Κ", "Δ", "Τ", "Τ", "Π", "Π", "Σ"],
    monthNames: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
    abbreviatedMonthNames: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαϊ", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
    amDesignator: "πμ",
    pmDesignator: "μμ",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d/M/yyyy",
        longDate: "dddd, d MMMM yyyy",
        shortTime: "h:mm tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "dddd, d MMMM yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^ιαν(ουάριος)?/i,
        feb: /^φεβ(ρουάριος)?/i,
        mar: /^μάρτιος/i,
        apr: /^απρ(ίλιος)?/i,
        may: /^μάιος/i,
        jun: /^ιούνιος/i,
        jul: /^ιούλιος/i,
        aug: /^αύγουστος/i,
        sep: /^σεπ(τέμβριος)?/i,
        oct: /^οκτ(ώβριος)?/i,
        nov: /^νοέμβριος/i,
        dec: /^δεκ(έμβριος)?/i,
        sun: /^κυ(ρ(ιακή)?)?/i,
        mon: /^δε(υ(τέρα)?)?/i,
        tue: /^τρ(ι(τη)?)?/i,
        wed: /^τε(τ(άρτη)?)?/i,
        thu: /^πε(μ(πτη)?)?/i,
        fri: /^πα(ρ(ασκευή)?)?/i,
        sat: /^σά(β(βατο)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["en-029"] = {
    name: "en-029",
    englishName: "English (Caribbean)",
    nativeName: "English (Caribbean)",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "mdy",
    formatPatterns: {
        shortDate: "MM/dd/yyyy",
        longDate: "dddd, MMMM dd, yyyy",
        shortTime: "h:mm tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["en-au"] = {
    name: "en-AU",
    englishName: "English (Australia)",
    nativeName: "English (Australia)",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d/MM/yyyy",
        longDate: "dddd, d MMMM yyyy",
        shortTime: "h:mm tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "dddd, d MMMM yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["en-bz"] = {
    name: "en-BZ",
    englishName: "English (Belize)",
    nativeName: "English (Belize)",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd MMMM yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd MMMM yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["en-ca"] = {
    name: "en-CA",
    englishName: "English (Canada)",
    nativeName: "English (Canada)",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "MMMM d, yyyy",
        shortTime: "h:mm tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "MMMM d, yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["en-gb"] = {
    name: "en-GB",
    englishName: "English (United Kingdom)",
    nativeName: "English (United Kingdom)",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dd MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dd MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["en-ie"] = {
    name: "en-IE",
    englishName: "English (Ireland)",
    nativeName: "English (Eire)",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dd MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dd MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["en-jm"] = {
    name: "en-JM",
    englishName: "English (Jamaica)",
    nativeName: "English (Jamaica)",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, MMMM dd, yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, MMMM dd, yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["en-nz"] = {
    name: "en-NZ",
    englishName: "English (New Zealand)",
    nativeName: "English (New Zealand)",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d/MM/yyyy",
        longDate: "dddd, d MMMM yyyy",
        shortTime: "h:mm tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "dddd, d MMMM yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["en-ph"] = {
    name: "en-PH",
    englishName: "English (Republic of the Philippines)",
    nativeName: "English (Philippines)",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "mdy",
    formatPatterns: {
        shortDate: "M/d/yyyy",
        longDate: "dddd, MMMM dd, yyyy",
        shortTime: "h:mm tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["en-tt"] = {
    name: "en-TT",
    englishName: "English (Trinidad and Tobago)",
    nativeName: "English (Trinidad y Tobago)",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd MMMM yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd MMMM yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["en-us"] = {
    name: "en-US",
    englishName: "English (United States)",
    nativeName: "English (United States)",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "mdy",
    formatPatterns: {
        shortDate: "M/d/yyyy",
        longDate: "dddd, MMMM dd, yyyy",
        shortTime: "h:mm tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["en-za"] = {
    name: "en-ZA",
    englishName: "English (South Africa)",
    nativeName: "English (South Africa)",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy/MM/dd",
        longDate: "dd MMMM yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd MMMM yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["en-zw"] = {
    name: "en-ZW",
    englishName: "English (Zimbabwe)",
    nativeName: "English (Zimbabwe)",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "mdy",
    formatPatterns: {
        shortDate: "M/d/yyyy",
        longDate: "dddd, MMMM dd, yyyy",
        shortTime: "h:mm tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["es-ar"] = {
    name: "es-AR",
    englishName: "Spanish (Argentina)",
    nativeName: "Español (Argentina)",
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(é(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^sá(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["es-bo"] = {
    name: "es-BO",
    englishName: "Spanish (Bolivia)",
    nativeName: "Español (Bolivia)",
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(é(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^sá(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["es-cl"] = {
    name: "es-CL",
    englishName: "Spanish (Chile)",
    nativeName: "Español (Chile)",
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd-MM-yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(é(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^sá(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["es-co"] = {
    name: "es-CO",
    englishName: "Spanish (Colombia)",
    nativeName: "Español (Colombia)",
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(é(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^sá(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["es-cr"] = {
    name: "es-CR",
    englishName: "Spanish (Costa Rica)",
    nativeName: "Español (Costa Rica)",
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(é(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^sá(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["es-do"] = {
    name: "es-DO",
    englishName: "Spanish (Dominican Republic)",
    nativeName: "Español (República Dominicana)",
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(é(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^sá(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["es-ec"] = {
    name: "es-EC",
    englishName: "Spanish (Ecuador)",
    nativeName: "Español (Ecuador)",
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(é(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^sá(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["es-es"] = {
    name: "es-ES",
    englishName: "Spanish (Spain)",
    nativeName: "español (España)",
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(é(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^sá(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["es-gt"] = {
    name: "es-GT",
    englishName: "Spanish (Guatemala)",
    nativeName: "Español (Guatemala)",
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(é(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^sá(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["es-hn"] = {
    name: "es-HN",
    englishName: "Spanish (Honduras)",
    nativeName: "Español (Honduras)",
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(é(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^sá(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["es-mx"] = {
    name: "es-MX",
    englishName: "Spanish (Mexico)",
    nativeName: "Español (México)",
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(é(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^sá(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["es-ni"] = {
    name: "es-NI",
    englishName: "Spanish (Nicaragua)",
    nativeName: "Español (Nicaragua)",
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(é(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^sá(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["es-pa"] = {
    name: "es-PA",
    englishName: "Spanish (Panama)",
    nativeName: "Español (Panamá)",
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "mdy",
    formatPatterns: {
        shortDate: "MM/dd/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(é(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^sá(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["es-pe"] = {
    name: "es-PE",
    englishName: "Spanish (Peru)",
    nativeName: "Español (Perú)",
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(é(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^sá(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["es-pr"] = {
    name: "es-PR",
    englishName: "Spanish (Puerto Rico)",
    nativeName: "Español (Puerto Rico)",
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(é(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^sá(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["es-py"] = {
    name: "es-PY",
    englishName: "Spanish (Paraguay)",
    nativeName: "Español (Paraguay)",
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(é(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^sá(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["es-sv"] = {
    name: "es-SV",
    englishName: "Spanish (El Salvador)",
    nativeName: "Español (El Salvador)",
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(é(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^sá(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["es-uy"] = {
    name: "es-UY",
    englishName: "Spanish (Uruguay)",
    nativeName: "Español (Uruguay)",
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(é(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^sá(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["es-ve"] = {
    name: "es-VE",
    englishName: "Spanish (Venezuela)",
    nativeName: "Español (Republica Bolivariana de Venezuela)",
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(é(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^sá(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["et-ee"] = {
    name: "et-EE",
    englishName: "Estonian (Estonia)",
    nativeName: "eesti (Eesti)",
    dayNames: ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"],
    abbreviatedDayNames: ["P", "E", "T", "K", "N", "R", "L"],
    shortestDayNames: ["P", "E", "T", "K", "N", "R", "L"],
    firstLetterDayNames: ["P", "E", "T", "K", "N", "R", "L"],
    monthNames: ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"],
    abbreviatedMonthNames: ["jaan", "veebr", "märts", "apr", "mai", "juuni", "juuli", "aug", "sept", "okt", "nov", "dets"],
    amDesignator: "EL",
    pmDesignator: "PL",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d.MM.yyyy",
        longDate: "d. MMMM yyyy'. a.'",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d. MMMM yyyy'. a.' H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d. MMMM",
        yearMonth: "MMMM yyyy'. a.'"
    },
    regexPatterns: {
        jan: /^jaan(uar)?/i,
        feb: /^veebr(uar)?/i,
        mar: /^märts/i,
        apr: /^apr(ill)?/i,
        may: /^mai/i,
        jun: /^juuni/i,
        jul: /^juuli/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(oober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dets(ember)?/i,
        sun: /^pühapäev/i,
        mon: /^esmaspäev/i,
        tue: /^teisipäev/i,
        wed: /^kolmapäev/i,
        thu: /^neljapäev/i,
        fri: /^reede/i,
        sat: /^laupäev/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["eu-es"] = {
    name: "eu-ES",
    englishName: "Basque (Basque)",
    nativeName: "euskara (euskara)",
    dayNames: ["igandea", "astelehena", "asteartea", "asteazkena", "osteguna", "ostirala", "larunbata"],
    abbreviatedDayNames: ["ig.", "al.", "as.", "az.", "og.", "or.", "lr."],
    shortestDayNames: ["ig", "al", "as", "az", "og", "or", "lr"],
    firstLetterDayNames: ["i", "a", "a", "a", "o", "o", "l"],
    monthNames: ["urtarrila", "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua"],
    abbreviatedMonthNames: ["urt.", "ots.", "mar.", "api.", "mai.", "eka.", "uzt.", "abu.", "ira.", "urr.", "aza.", "abe."],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy/MM/dd",
        longDate: "dddd, yyyy.'eko' MMMM'k 'd",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dddd, yyyy.'eko' MMMM'k 'd HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "yyyy.'eko' MMMM"
    },
    regexPatterns: {
        jan: /^urt(.(arrila)?)?/i,
        feb: /^ots(.(aila)?)?/i,
        mar: /^mar(.(txoa)?)?/i,
        apr: /^api(.(rila)?)?/i,
        may: /^mai(.(atza)?)?/i,
        jun: /^eka(.(ina)?)?/i,
        jul: /^uzt(.(aila)?)?/i,
        aug: /^abu(.(ztua)?)?/i,
        sep: /^ira(.(ila)?)?/i,
        oct: /^urr(.(ia)?)?/i,
        nov: /^aza(.(roa)?)?/i,
        dec: /^abe(.(ndua)?)?/i,
        sun: /^ig((.(andea)?)?)?/i,
        mon: /^al((.(telehena)?)?)?/i,
        tue: /^as((.(teartea)?)?)?/i,
        wed: /^az((.(teazkena)?)?)?/i,
        thu: /^og((.(teguna)?)?)?/i,
        fri: /^or((.(tirala)?)?)?/i,
        sat: /^lr((.(runbata)?)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["fa-ir"] = {
    name: "fa-IR",
    englishName: "Persian (Iran)",
    nativeName: "فارسى (ايران)",
    dayNames: ["یکشنبه", "دوشنبه", "سه شنبه", "چهار شنبه", "پنجشنبه", "جمعه", "یک"],
    abbreviatedDayNames: ["یکشنبه", "دو", "سه", "چهار", "پنج", "جمعه", "شنبه"],
    shortestDayNames: ["یک", "دو", "سه", "چه", "پن", "جم", "شن"],
    firstLetterDayNames: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
    monthNames: ["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئیه", "ژولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"],
    abbreviatedMonthNames: ["ژان", "فور", "مار", "آور", "مه", "ژوئ", "ژول", "آگو", "سپت", "اکت", "نوا", "دسا"],
    amDesignator: "ق.ظ",
    pmDesignator: "ب.ظ",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "mdy",
    formatPatterns: {
        shortDate: "M/d/yyyy",
        longDate: "dddd, MMMM dd, yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, MMMM dd, yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^ژانویه/i,
        feb: /^فوریه/i,
        mar: /^مارس/i,
        apr: /^آوریل/i,
        may: /^مه/i,
        jun: /^ژوئیه/i,
        jul: /^ژولای/i,
        aug: /^آگوست/i,
        sep: /^سپتامبر/i,
        oct: /^اکتبر/i,
        nov: /^سپتامبر/i,
        dec: /^دسامبر/i,
        sun: /^یکشنبه/i,
        mon: /^دوشنبه/i,
        tue: /^سه شنبه/i,
        wed: /^چهارشنبه/i,
        thu: /^پنجشنبه/i,
        fri: /^جمعه/i,
        sat: /^شنبه/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["fi-fi"] = {
    name: "fi-FI",
    englishName: "Finnish (Finland)",
    nativeName: "suomi (Suomi)",
    dayNames: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
    abbreviatedDayNames: ["su", "ma", "ti", "ke", "to", "pe", "la"],
    shortestDayNames: ["su", "ma", "ti", "ke", "to", "pe", "la"],
    firstLetterDayNames: ["s", "m", "t", "k", "t", "p", "l"],
    monthNames: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
    abbreviatedMonthNames: ["tammi", "helmi", "maalis", "huhti", "touko", "kesä", "heinä", "elo", "syys", "loka", "marras", "joulu"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d.M.yyyy",
        longDate: "d. MMMM'ta 'yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d. MMMM'ta 'yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d. MMMM'ta'",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^tammi(kuu)?/i,
        feb: /^helmi(kuu)?/i,
        mar: /^maalis(kuu)?/i,
        apr: /^huhti(kuu)?/i,
        may: /^touko(kuu)?/i,
        jun: /^kesä(kuu)?/i,
        jul: /^heinä(kuu)?/i,
        aug: /^elo(kuu)?/i,
        sep: /^syys(kuu)?/i,
        oct: /^loka(kuu)?/i,
        nov: /^marras(kuu)?/i,
        dec: /^joulu(kuu)?/i,
        sun: /^sunnuntai/i,
        mon: /^maanantai/i,
        tue: /^tiistai/i,
        wed: /^keskiviikko/i,
        thu: /^torstai/i,
        fri: /^perjantai/i,
        sat: /^lauantai/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["fo-fo"] = {
    name: "fo-FO",
    englishName: "Faroese (Faroe Islands)",
    nativeName: "føroyskt (Føroyar)",
    dayNames: ["sunnudagur", "mánadagur", "týsdagur", "mikudagur", "hósdagur", "fríggjadagur", "leygardagur"],
    abbreviatedDayNames: ["sun", "mán", "týs", "mik", "hós", "frí", "leyg"],
    shortestDayNames: ["su", "má", "tý", "mi", "hó", "fr", "ley"],
    firstLetterDayNames: ["s", "m", "t", "m", "h", "f", "l"],
    monthNames: ["januar", "februar", "mars", "apríl", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
    abbreviatedMonthNames: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd-MM-yyyy",
        longDate: "d. MMMM yyyy",
        shortTime: "HH.mm",
        longTime: "HH.mm.ss",
        fullDateTime: "d. MMMM yyyy HH.mm.ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d. MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uar)?/i,
        feb: /^feb(ruar)?/i,
        mar: /^mar(s)?/i,
        apr: /^apr(íl)?/i,
        may: /^mai/i,
        jun: /^jun(i)?/i,
        jul: /^jul(i)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^des(ember)?/i,
        sun: /^su(n(nudagur)?)?/i,
        mon: /^má(n(adagur)?)?/i,
        tue: /^tý(s(dagur)?)?/i,
        wed: /^mi(k(udagur)?)?/i,
        thu: /^hó(s(dagur)?)?/i,
        fri: /^fr(í(ggjadagur)?)?/i,
        sat: /^ley(g(ardagur)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["fr-be"] = {
    name: "fr-BE",
    englishName: "French (Belgium)",
    nativeName: "français (Belgique)",
    dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
    abbreviatedDayNames: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
    shortestDayNames: ["di", "lu", "ma", "me", "je", "ve", "sa"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
    abbreviatedMonthNames: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d/MM/yyyy",
        longDate: "dddd d MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "dddd d MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^janv(\.|ier)?/i,
        feb: /^févr(\.|ier)?/i,
        mar: /^mars/i,
        apr: /^avr(\.|il)?/i,
        may: /^mai/i,
        jun: /^juin/i,
        jul: /^juil(\.|let)?/i,
        aug: /^août/i,
        sep: /^sept(\.|embre)?/i,
        oct: /^oct(\.|obre)?/i,
        nov: /^nov(\.|embre)?/i,
        dec: /^déc(\.|embre)?/i,
        sun: /^di(\.|m|m\.|anche)?/i,
        mon: /^lu(\.|n|n\.|di)?/i,
        tue: /^ma(\.|r|r\.|di)?/i,
        wed: /^me(\.|r|r\.|credi)?/i,
        thu: /^je(\.|u|u\.|di)?/i,
        fri: /^ve(\.|n|n\.|dredi)?/i,
        sat: /^sa(\.|m|m\.|edi)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["fr-ca"] = {
    name: "fr-CA",
    englishName: "French (Canada)",
    nativeName: "français (Canada)",
    dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
    abbreviatedDayNames: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
    shortestDayNames: ["di", "lu", "ma", "me", "je", "ve", "sa"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
    abbreviatedMonthNames: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy-MM-dd",
        longDate: "d MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "d MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^janv(\.|ier)?/i,
        feb: /^févr(\.|ier)?/i,
        mar: /^mars/i,
        apr: /^avr(\.|il)?/i,
        may: /^mai/i,
        jun: /^juin/i,
        jul: /^juil(\.|let)?/i,
        aug: /^août/i,
        sep: /^sept(\.|embre)?/i,
        oct: /^oct(\.|obre)?/i,
        nov: /^nov(\.|embre)?/i,
        dec: /^déc(\.|embre)?/i,
        sun: /^di(\.|m|m\.|anche)?/i,
        mon: /^lu(\.|n|n\.|di)?/i,
        tue: /^ma(\.|r|r\.|di)?/i,
        wed: /^me(\.|r|r\.|credi)?/i,
        thu: /^je(\.|u|u\.|di)?/i,
        fri: /^ve(\.|n|n\.|dredi)?/i,
        sat: /^sa(\.|m|m\.|edi)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["fr-ch"] = {
    name: "fr-CH",
    englishName: "French (Switzerland)",
    nativeName: "français (Suisse)",
    dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
    abbreviatedDayNames: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
    shortestDayNames: ["di", "lu", "ma", "me", "je", "ve", "sa"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
    abbreviatedMonthNames: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "dddd, d. MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dddd, d. MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^janv(\.|ier)?/i,
        feb: /^févr(\.|ier)?/i,
        mar: /^mars/i,
        apr: /^avr(\.|il)?/i,
        may: /^mai/i,
        jun: /^juin/i,
        jul: /^juil(\.|let)?/i,
        aug: /^août/i,
        sep: /^sept(\.|embre)?/i,
        oct: /^oct(\.|obre)?/i,
        nov: /^nov(\.|embre)?/i,
        dec: /^déc(\.|embre)?/i,
        sun: /^di(\.|m|m\.|anche)?/i,
        mon: /^lu(\.|n|n\.|di)?/i,
        tue: /^ma(\.|r|r\.|di)?/i,
        wed: /^me(\.|r|r\.|credi)?/i,
        thu: /^je(\.|u|u\.|di)?/i,
        fri: /^ve(\.|n|n\.|dredi)?/i,
        sat: /^sa(\.|m|m\.|edi)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["fr-fr"] = {
    name: "fr-FR",
    englishName: "French (France)",
    nativeName: "français (France)",
    dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
    abbreviatedDayNames: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
    shortestDayNames: ["di", "lu", "ma", "me", "je", "ve", "sa"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
    abbreviatedMonthNames: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd d MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dddd d MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^janv(\.|ier)?/i,
        feb: /^févr(\.|ier)?/i,
        mar: /^mars/i,
        apr: /^avr(\.|il)?/i,
        may: /^mai/i,
        jun: /^juin/i,
        jul: /^juil(\.|let)?/i,
        aug: /^août/i,
        sep: /^sept(\.|embre)?/i,
        oct: /^oct(\.|obre)?/i,
        nov: /^nov(\.|embre)?/i,
        dec: /^déc(\.|embre)?/i,
        sun: /^di(\.|m|m\.|anche)?/i,
        mon: /^lu(\.|n|n\.|di)?/i,
        tue: /^ma(\.|r|r\.|di)?/i,
        wed: /^me(\.|r|r\.|credi)?/i,
        thu: /^je(\.|u|u\.|di)?/i,
        fri: /^ve(\.|n|n\.|dredi)?/i,
        sat: /^sa(\.|m|m\.|edi)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["fr-lu"] = {
    name: "fr-LU",
    englishName: "French (Luxembourg)",
    nativeName: "français (Luxembourg)",
    dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
    abbreviatedDayNames: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
    shortestDayNames: ["di", "lu", "ma", "me", "je", "ve", "sa"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
    abbreviatedMonthNames: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd d MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dddd d MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^janv(\.|ier)?/i,
        feb: /^févr(\.|ier)?/i,
        mar: /^mars/i,
        apr: /^avr(\.|il)?/i,
        may: /^mai/i,
        jun: /^juin/i,
        jul: /^juil(\.|let)?/i,
        aug: /^août/i,
        sep: /^sept(\.|embre)?/i,
        oct: /^oct(\.|obre)?/i,
        nov: /^nov(\.|embre)?/i,
        dec: /^déc(\.|embre)?/i,
        sun: /^di(\.|m|m\.|anche)?/i,
        mon: /^lu(\.|n|n\.|di)?/i,
        tue: /^ma(\.|r|r\.|di)?/i,
        wed: /^me(\.|r|r\.|credi)?/i,
        thu: /^je(\.|u|u\.|di)?/i,
        fri: /^ve(\.|n|n\.|dredi)?/i,
        sat: /^sa(\.|m|m\.|edi)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["fr-mc"] = {
    name: "fr-MC",
    englishName: "French (Principality of Monaco)",
    nativeName: "français (Principauté de Monaco)",
    dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
    abbreviatedDayNames: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
    shortestDayNames: ["di", "lu", "ma", "me", "je", "ve", "sa"],
    firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
    monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
    abbreviatedMonthNames: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd d MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dddd d MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^janv(\.|ier)?/i,
        feb: /^févr(\.|ier)?/i,
        mar: /^mars/i,
        apr: /^avr(\.|il)?/i,
        may: /^mai/i,
        jun: /^juin/i,
        jul: /^juil(\.|let)?/i,
        aug: /^août/i,
        sep: /^sept(\.|embre)?/i,
        oct: /^oct(\.|obre)?/i,
        nov: /^nov(\.|embre)?/i,
        dec: /^déc(\.|embre)?/i,
        sun: /^di(\.|m|m\.|anche)?/i,
        mon: /^lu(\.|n|n\.|di)?/i,
        tue: /^ma(\.|r|r\.|di)?/i,
        wed: /^me(\.|r|r\.|credi)?/i,
        thu: /^je(\.|u|u\.|di)?/i,
        fri: /^ve(\.|n|n\.|dredi)?/i,
        sat: /^sa(\.|m|m\.|edi)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["gl-es"] = {
    name: "gl-ES",
    englishName: "Galician (Galician)",
    nativeName: "galego (galego)",
    dayNames: ["domingo", "luns", "martes", "mércores", "xoves", "venres", "sábado"],
    abbreviatedDayNames: ["dom", "luns", "mar", "mér", "xov", "ven", "sab"],
    shortestDayNames: ["do", "lu", "ma", "mé", "xo", "ve", "sa"],
    firstLetterDayNames: ["d", "l", "m", "m", "x", "v", "s"],
    monthNames: ["xaneiro", "febreiro", "marzo", "abril", "maio", "xuño", "xullo", "agosto", "setembro", "outubro", "novembro", "decembro"],
    abbreviatedMonthNames: ["xan", "feb", "mar", "abr", "maio", "xuñ", "xull", "ago", "set", "out", "nov", "dec"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^xan(eiro)?/i,
        feb: /^feb(reiro)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^maio/i,
        jun: /^xuñ(o)?/i,
        jul: /^xull(o)?/i,
        aug: /^ago(sto)?/i,
        sep: /^set(embro)?/i,
        oct: /^out(ubro)?/i,
        nov: /^nov(embro)?/i,
        dec: /^dec(embro)?/i,
        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(1)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mé(r(cores)?)?/i,
        thu: /^xo(v(es)?)?/i,
        fri: /^ve(n(res)?)?/i,
        sat: /^sa(b(ado)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["gu-in"] = {
    name: "gu-IN",
    englishName: "Gujarati (India)",
    nativeName: "ગુજરાતી (ભારત)",
    dayNames: ["રવિવાર", "સોમવાર", "મંગળવાર", "બુધવાર", "ગુરુવાર", "શુક્રવાર", "શનિવાર"],
    abbreviatedDayNames: ["રવિ", "સોમ", "મંગળ", "બુધ", "ગુરુ", "શુક્ર", "શનિ"],
    shortestDayNames: ["ર", "સ", "મ", "બ", "ગ", "શ", "શ"],
    firstLetterDayNames: ["ર", "સ", "મ", "બ", "ગ", "શ", "શ"],
    monthNames: ["જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઑગસ્ટ", "સપ્ટેમ્બર", "ઑક્ટ્બર", "નવેમ્બર", "ડિસેમ્બર"],
    abbreviatedMonthNames: ["જાન્યુ", "ફેબ્રુ", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઑગસ્ટ", "સપ્ટે", "ઑક્ટો", "નવે", "ડિસે"],
    amDesignator: "પૂર્વ મધ્યાહ્ન",
    pmDesignator: "ઉત્તર મધ્યાહ્ન",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd-MM-yy",
        longDate: "dd MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dd MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^જાન્યુ(આરી)?/i,
        feb: /^ફેબ્રુ(આરી)?/i,
        mar: /^માર્ચ/i,
        apr: /^એપ્રિલ/i,
        may: /^મે/i,
        jun: /^જૂન/i,
        jul: /^જુલાઈ/i,
        aug: /^ઑગસ્ટ/i,
        sep: /^સપ્ટે(મ્બર)?/i,
        oct: /^ઑક્ટ્બર/i,
        nov: /^નવે(મ્બર)?/i,
        dec: /^ડિસે(મ્બર)?/i,
        sun: /^ર(વિ(વાર)?)?/i,
        mon: /^સ(ોમ(વાર)?)?/i,
        tue: /^મ(ંગળ(વાર)?)?/i,
        wed: /^બ(ુધ(વાર)?)?/i,
        thu: /^ગ(ુરુ(વાર)?)?/i,
        fri: /^શ(ુક્ર(વાર)?)?/i,
        sat: /^શ(નિ(વાર)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["he-il"] = {
    name: "he-IL",
    englishName: "Hebrew (Israel)",
    nativeName: "עברית (ישראל)",
    dayNames: ["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי", "יום שישי", "שבת"],
    abbreviatedDayNames: ["יום א", "יום ב", "יום ג", "יום ד", "יום ה", "יום ו", "שבת"],
    shortestDayNames: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
    firstLetterDayNames: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
    monthNames: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
    abbreviatedMonthNames: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd dd MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dddd dd MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^ינו(אר)?/i,
        feb: /^פבר(ואר)?/i,
        mar: /^מרץ/i,
        apr: /^אפר(יל)?/i,
        may: /^מאי/i,
        jun: /^יונ(י)?/i,
        jul: /^יול(י)?/i,
        aug: /^אוג(וסט)?/i,
        sep: /^ספט(מבר)?/i,
        oct: /^אוק(טובר)?/i,
        nov: /^נוב(מבר)?/i,
        dec: /^דצמ(בר)?/i,
        sun: /^א(ום א(אשון)?)?/i,
        mon: /^ב(ום ב(ני)?)?/i,
        tue: /^ג(ום ג(לישי)?)?/i,
        wed: /^ד(ום ד(ביעי)?)?/i,
        thu: /^ה(ום ה(מישי)?)?/i,
        fri: /^ו(ום ו(ישי)?)?/i,
        sat: /^ש(1)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["hi-in"] = {
    name: "hi-IN",
    englishName: "Hindi (India)",
    nativeName: "हिंदी (भारत)",
    dayNames: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
    abbreviatedDayNames: ["रवि.", "सोम.", "मंगल.", "बुध.", "गुरु.", "शुक्र.", "शनि."],
    shortestDayNames: ["र", "स", "म", "ब", "ग", "श", "श"],
    firstLetterDayNames: ["र", "स", "म", "ब", "ग", "श", "श"],
    monthNames: ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितम्बर", "अक्तूबर", "नवम्बर", "दिसम्बर"],
    abbreviatedMonthNames: ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितम्बर", "अक्तूबर", "नवम्बर", "दिसम्बर"],
    amDesignator: "पूर्वाह्न",
    pmDesignator: "अपराह्न",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd-MM-yyyy",
        longDate: "dd MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dd MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^जनवरी/i,
        feb: /^फरवरी/i,
        mar: /^मार्च/i,
        apr: /^अप्रैल/i,
        may: /^मई/i,
        jun: /^जून/i,
        jul: /^जुलाई/i,
        aug: /^अगस्त/i,
        sep: /^सितम्बर/i,
        oct: /^अक्तूबर/i,
        nov: /^नवम्बर/i,
        dec: /^दिसम्बर/i,
        sun: /^र(वि(.(वार)?)?)?/i,
        mon: /^स(ोम(.(वार)?)?)?/i,
        tue: /^म(ंगल(.(वार)?)?)?/i,
        wed: /^ब(ुध(.(वार)?)?)?/i,
        thu: /^ग(ुरु(.(वार)?)?)?/i,
        fri: /^श(ुक्र(.(वार)?)?)?/i,
        sat: /^श(नि(.(वार)?)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["hr-ba"] = {
    name: "hr-BA",
    englishName: "Croatian (Bosnia and Herzegovina)",
    nativeName: "hrvatski (Bosna i Hercegovina)",
    dayNames: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
    abbreviatedDayNames: ["ned", "pon", "uto", "sri", "čet", "pet", "sub"],
    shortestDayNames: ["ned", "pon", "uto", "sri", "čet", "pet", "sub"],
    firstLetterDayNames: ["n", "p", "u", "s", "č", "p", "s"],
    monthNames: ["siječanj", "veljača", "ožujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"],
    abbreviatedMonthNames: ["sij", "vlj", "ožu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d.M.yyyy",
        longDate: "d. MMMM yyyy",
        shortTime: "H:mm:ss",
        longTime: "H:mm:ss",
        fullDateTime: "d. MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^sij(ečanj)?/i,
        feb: /^veljača/i,
        mar: /^ožu(jak)?/i,
        apr: /^tra(vanj)?/i,
        may: /^svi(banj)?/i,
        jun: /^lip(anj)?/i,
        jul: /^srp(anj)?/i,
        aug: /^kol(ovoz)?/i,
        sep: /^ruj(an)?/i,
        oct: /^lis(topad)?/i,
        nov: /^stu(deni)?/i,
        dec: /^pro(sinac)?/i,
        sun: /^nedjelja/i,
        mon: /^ponedjeljak/i,
        tue: /^utorak/i,
        wed: /^srijeda/i,
        thu: /^četvrtak/i,
        fri: /^petak/i,
        sat: /^subota/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["hr-hr"] = {
    name: "hr-HR",
    englishName: "Croatian (Croatia)",
    nativeName: "hrvatski (Hrvatska)",
    dayNames: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
    abbreviatedDayNames: ["ned", "pon", "uto", "sri", "čet", "pet", "sub"],
    shortestDayNames: ["ne", "po", "ut", "sr", "če", "pe", "su"],
    firstLetterDayNames: ["n", "p", "u", "s", "č", "p", "s"],
    monthNames: ["siječanj", "veljača", "ožujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"],
    abbreviatedMonthNames: ["sij", "vlj", "ožu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d.M.yyyy",
        longDate: "d. MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d. MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d. MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^sij(ečanj)?/i,
        feb: /^veljača/i,
        mar: /^ožu(jak)?/i,
        apr: /^tra(vanj)?/i,
        may: /^svi(banj)?/i,
        jun: /^lip(anj)?/i,
        jul: /^srp(anj)?/i,
        aug: /^kol(ovoz)?/i,
        sep: /^ruj(an)?/i,
        oct: /^lis(topad)?/i,
        nov: /^stu(deni)?/i,
        dec: /^pro(sinac)?/i,
        sun: /^ne(d(jelja)?)?/i,
        mon: /^po(n(edjeljak)?)?/i,
        tue: /^ut(o(rak)?)?/i,
        wed: /^sr(i(jeda)?)?/i,
        thu: /^če(t(vrtak)?)?/i,
        fri: /^pe(t(ak)?)?/i,
        sat: /^su(b(ota)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["hu-hu"] = {
    name: "hu-HU",
    englishName: "Hungarian (Hungary)",
    nativeName: "magyar (Magyarország)",
    dayNames: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
    abbreviatedDayNames: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
    shortestDayNames: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
    firstLetterDayNames: ["V", "H", "K", "S", "C", "P", "S"],
    monthNames: ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
    abbreviatedMonthNames: ["jan.", "febr.", "márc.", "ápr.", "máj.", "jún.", "júl.", "aug.", "szept.", "okt.", "nov.", "dec."],
    amDesignator: "de.",
    pmDesignator: "du.",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy. MM. dd.",
        longDate: "yyyy. MMMM d.",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "yyyy. MMMM d. H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM d.",
        yearMonth: "yyyy. MMMM"
    },
    regexPatterns: {
        jan: /^jan(.(uár)?)?/i,
        feb: /^febr(.(uár)?)?/i,
        mar: /^márc(.(ius)?)?/i,
        apr: /^ápr(.(ilis)?)?/i,
        may: /^máj(.(us)?)?/i,
        jun: /^jún(.(ius)?)?/i,
        jul: /^júl(.(ius)?)?/i,
        aug: /^aug(.(usztus)?)?/i,
        sep: /^szept(.(ember)?)?/i,
        oct: /^okt(.(óber)?)?/i,
        nov: /^nov(.(ember)?)?/i,
        dec: /^dec(.(ember)?)?/i,
        sun: /^vasárnap/i,
        mon: /^hétfő/i,
        tue: /^kedd/i,
        wed: /^szerda/i,
        thu: /^csütörtök/i,
        fri: /^péntek/i,
        sat: /^szombat/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["hy-am"] = {
    name: "hy-AM",
    englishName: "Armenian (Armenia)",
    nativeName: "Հայերեն (Հայաստան)",
    dayNames: ["Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "ՈՒրբաթ", "Շաբաթ"],
    abbreviatedDayNames: ["Կիր", "Երկ", "Երք", "Չրք", "Հնգ", "ՈՒր", "Շբթ"],
    shortestDayNames: ["Կ", "Ե", "Ե", "Չ", "Հ", "Ո", "Շ"],
    firstLetterDayNames: ["Կ", "Ե", "Ե", "Չ", "Հ", "Ո", "Շ"],
    monthNames: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"],
    abbreviatedMonthNames: ["ՀՆՎ", "ՓՏՎ", "ՄՐՏ", "ԱՊՐ", "ՄՅՍ", "ՀՆՍ", "ՀԼՍ", "ՕԳՍ", "ՍԵՊ", "ՀՈԿ", "ՆՈՅ", "ԴԵԿ"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "d MMMM, yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d MMMM, yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^հունվար/i,
        feb: /^փետրվար/i,
        mar: /^մարտ/i,
        apr: /^ապր(իլ)?/i,
        may: /^մայիս/i,
        jun: /^հունիս/i,
        jul: /^հուլիս/i,
        aug: /^օգոստոս/i,
        sep: /^սեպ(տեմբեր)?/i,
        oct: /^հոկ(տեմբեր)?/i,
        nov: /^նոյ(եմբեր)?/i,
        dec: /^դեկ(տեմբեր)?/i,
        sun: /^կ(իր(ակի)?)?/i,
        mon: /^ե(րկ(ուշաբթի)?)?/i,
        tue: /^ե(րք(քշաբթի)?)?/i,
        wed: /^չ(րք(եքշաբթի)?)?/i,
        thu: /^հ(նգ(գշաբթի)?)?/i,
        fri: /^ո(ւր(բաթ)?)?/i,
        sat: /^շ(բթ(աթ)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["id-id"] = {
    name: "id-ID",
    englishName: "Indonesian (Indonesia)",
    nativeName: "Bahasa Indonesia (Indonesia)",
    dayNames: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
    abbreviatedDayNames: ["Minggu", "Sen", "Sel", "Rabu", "Kamis", "Jumat", "Sabtu"],
    shortestDayNames: ["M", "S", "S", "R", "K", "J", "S"],
    firstLetterDayNames: ["M", "S", "S", "R", "K", "J", "S"],
    monthNames: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agust", "Sep", "Okt", "Nop", "Des"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dd MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "dd MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uari)?/i,
        feb: /^feb(ruari)?/i,
        mar: /^mar(et)?/i,
        apr: /^apr(il)?/i,
        may: /^mei/i,
        jun: /^jun(i)?/i,
        jul: /^jul(i)?/i,
        aug: /^agust(us)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nop(ember)?/i,
        dec: /^des(ember)?/i,
        sun: /^m(1)?/i,
        mon: /^s(en(in)?)?/i,
        tue: /^s(el(asa)?)?/i,
        wed: /^r(1)?/i,
        thu: /^k(1)?/i,
        fri: /^j(1)?/i,
        sat: /^s(1)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["is-is"] = {
    name: "is-IS",
    englishName: "Icelandic (Iceland)",
    nativeName: "íslenska (Ísland)",
    dayNames: ["sunnudagur", "mánudagur", "þriðjudagur", "miðvikudagur", "fimmtudagur", "föstudagur", "laugardagur"],
    abbreviatedDayNames: ["sun.", "mán.", "þri.", "mið.", "fim.", "fös.", "lau."],
    shortestDayNames: ["su", "má", "þr", "mi", "fi", "fö", "la"],
    firstLetterDayNames: ["s", "m", "þ", "m", "f", "f", "l"],
    monthNames: ["janúar", "febrúar", "mars", "apríl", "maí", "júní", "júlí", "ágúst", "september", "október", "nóvember", "desember"],
    abbreviatedMonthNames: ["jan.", "feb.", "mar.", "apr.", "maí", "jún.", "júl.", "ágú.", "sep.", "okt.", "nóv.", "des."],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d.M.yyyy",
        longDate: "d. MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "d. MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d. MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(.(úar)?)?/i,
        feb: /^feb(.(rúar)?)?/i,
        mar: /^mar(.(s)?)?/i,
        apr: /^apr(.(íl)?)?/i,
        may: /^maí/i,
        jun: /^jún(.(í)?)?/i,
        jul: /^júl(.(í)?)?/i,
        aug: /^ágú(.(st)?)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(.(óber)?)?/i,
        nov: /^nóv(.(ember)?)?/i,
        dec: /^des(.(ember)?)?/i,
        sun: /^su(n(.(nudagur)?)?)?/i,
        mon: /^má(n(.(udagur)?)?)?/i,
        tue: /^þr(i(.(ðjudagur)?)?)?/i,
        wed: /^mi(ð(.(vikudagur)?)?)?/i,
        thu: /^fi(m(.(mtudagur)?)?)?/i,
        fri: /^fö(s(.(tudagur)?)?)?/i,
        sat: /^la(u(.(gardagur)?)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["it-ch"] = {
    name: "it-CH",
    englishName: "Italian (Switzerland)",
    nativeName: "italiano (Svizzera)",
    dayNames: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
    shortestDayNames: ["do", "lu", "ma", "me", "gi", "ve", "sa"],
    firstLetterDayNames: ["d", "l", "m", "m", "g", "v", "s"],
    monthNames: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
    abbreviatedMonthNames: ["gen", "feb", "mar", "apr", "mag", "gio", "lug", "ago", "set", "ott", "nov", "dic"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "dddd, d. MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dddd, d. MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d. MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^gen(naio)?/i,
        feb: /^feb(braio)?/i,
        mar: /^mar(zo)?/i,
        apr: /^apr(ile)?/i,
        may: /^mag(gio)?/i,
        jun: /^giugno/i,
        jul: /^lug(lio)?/i,
        aug: /^ago(sto)?/i,
        sep: /^set(tembre)?/i,
        oct: /^ott(obre)?/i,
        nov: /^nov(embre)?/i,
        dec: /^dic(embre)?/i,
        sun: /^do(m(enica)?)?/i,
        mon: /^lu(n(edì)?)?/i,
        tue: /^ma(r(tedì)?)?/i,
        wed: /^me(r(coledì)?)?/i,
        thu: /^gi(o(vedì)?)?/i,
        fri: /^ve(n(erdì)?)?/i,
        sat: /^sa(b(ato)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["it-it"] = {
    name: "it-IT",
    englishName: "Italian (Italy)",
    nativeName: "italiano (Italia)",
    dayNames: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
    shortestDayNames: ["do", "lu", "ma", "me", "gi", "ve", "sa"],
    firstLetterDayNames: ["d", "l", "m", "m", "g", "v", "s"],
    monthNames: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
    abbreviatedMonthNames: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd d MMMM yyyy",
        shortTime: "H.mm",
        longTime: "H.mm.ss",
        fullDateTime: "dddd d MMMM yyyy H.mm.ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^gen(naio)?/i,
        feb: /^feb(braio)?/i,
        mar: /^mar(zo)?/i,
        apr: /^apr(ile)?/i,
        may: /^mag(gio)?/i,
        jun: /^giu(gno)?/i,
        jul: /^lug(lio)?/i,
        aug: /^ago(sto)?/i,
        sep: /^set(tembre)?/i,
        oct: /^ott(obre)?/i,
        nov: /^nov(embre)?/i,
        dec: /^dic(embre)?/i,
        sun: /^do(m(enica)?)?/i,
        mon: /^lu(n(edì)?)?/i,
        tue: /^ma(r(tedì)?)?/i,
        wed: /^me(r(coledì)?)?/i,
        thu: /^gi(o(vedì)?)?/i,
        fri: /^ve(n(erdì)?)?/i,
        sat: /^sa(b(ato)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["ja-jp"] = {
    name: "ja-JP",
    englishName: "Japanese (Japan)",
    nativeName: "日本語 (日本)",
    dayNames: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
    abbreviatedDayNames: ["日", "月", "火", "水", "木", "金", "土"],
    shortestDayNames: ["日", "月", "火", "水", "木", "金", "土"],
    firstLetterDayNames: ["日", "月", "火", "水", "木", "金", "土"],
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    abbreviatedMonthNames: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    amDesignator: "午前",
    pmDesignator: "午後",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy/MM/dd",
        longDate: "yyyy'年'M'月'd'日'",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "yyyy'年'M'月'd'日' H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "M'月'd'日'",
        yearMonth: "yyyy'年'M'月'"
    },
    regexPatterns: {
        jan: /^1(月)?/i,
        feb: /^2(月)?/i,
        mar: /^3(月)?/i,
        apr: /^4(月)?/i,
        may: /^5(月)?/i,
        jun: /^6(月)?/i,
        jul: /^7(月)?/i,
        aug: /^8(月)?/i,
        sep: /^9(月)?/i,
        oct: /^10(月)?/i,
        nov: /^11(月)?/i,
        dec: /^12(月)?/i,
        sun: /^日曜日/i,
        mon: /^月曜日/i,
        tue: /^火曜日/i,
        wed: /^水曜日/i,
        thu: /^木曜日/i,
        fri: /^金曜日/i,
        sat: /^土曜日/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["ka-ge"] = {
    name: "ka-GE",
    englishName: "Georgian (Georgia)",
    nativeName: "ქართული (საქართველო)",
    dayNames: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"],
    abbreviatedDayNames: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"],
    shortestDayNames: ["კ", "ო", "ს", "ო", "ხ", "პ", "შ"],
    firstLetterDayNames: ["კ", "ო", "ს", "ო", "ხ", "პ", "შ"],
    monthNames: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"],
    abbreviatedMonthNames: ["იან", "თებ", "მარ", "აპრ", "მაის", "ივნ", "ივლ", "აგვ", "სექ", "ოქტ", "ნოემ", "დეკ"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "yyyy 'წლის' dd MM, dddd",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "yyyy 'წლის' dd MM, dddd H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^იან(ვარი)?/i,
        feb: /^თებ(ერვალი)?/i,
        mar: /^მარ(ტი)?/i,
        apr: /^აპრ(ილი)?/i,
        may: /^მაის(ი)?/i,
        jun: /^ივნ(ისი)?/i,
        jul: /^ივლ(ისი)?/i,
        aug: /^აგვ(ისტო)?/i,
        sep: /^სექ(ტემბერი)?/i,
        oct: /^ოქტ(ომბერი)?/i,
        nov: /^ნოემ(ბერი)?/i,
        dec: /^დეკ(ემბერი)?/i,
        sun: /^კ(1)?/i,
        mon: /^ო(1)?/i,
        tue: /^ს(1)?/i,
        wed: /^ო(1)?/i,
        thu: /^ხ(1)?/i,
        fri: /^პ(1)?/i,
        sat: /^შ(1)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["kab-dz"] = {
    name: "kab",
    englishName: "Kabyle (Algaria)",
    nativeName: "Taqbaylit (Ledzayer)",
    dayNames: ["acer", "arim", "aram", "ahad", "amhad", "sem", "sed"],
    abbreviatedDayNames: ["ace.", "ari.", "ara.", "aha.", "amh.", "sem.", "sed."],
    shortestDayNames: ["ac", "ar", "ra", "ah", "am", "sm", "sd"],
    firstLetterDayNames: ["c", "r", "m", "h", "a", "s", "d"],
    monthNames: ["yennayer", "furar", "meɣres", "yebrir", "maggu", "yunyu", "yulyu", "ɣuct", "ctember", "tuber", "number", "bujember"],
    abbreviatedMonthNames: ["yen.", "fur.", "meɣ.", "yeb.", "mag.", "yun.", "yul.", "ɣuc", "cte.", "tub.", "num.", "buj."],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd d MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dddd d MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^yenna(.(yer)?)?/i,
        feb: /^fur(.(ar)?)?/i,
        mar: /^meɣ(.(res)?)?/i,
        apr: /^yeb(.(rir)?)?/i,
        may: /^mag(.(gu)?)?/i,
        jun: /^yun(.(yu)?)?/i,
        jul: /^yul(.(yu)?)?/i,
        aug: /^ɣuct/i,
        sep: /^ctem(.(ber)?)?/i,
        oct: /^tu(.(ber)?)?/i,
        nov: /^num(.(ber)?)?/i,
        dec: /^bujem(.(ber)?)?/i,
        sun: /^ac(.(er)?)?/i,
        mon: /^ar(.(im)?)?/i,
        tue: /^ar(.(am)?)?/i,
        wed: /^ah(.(ad)?)?/i,
        thu: /^am(.(had)?)?/i,
        fri: /^se(.(m)?)?/i,
        sat: /^se(.(d)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["kk-kz"] = {
    name: "kk-KZ",
    englishName: "Kazakh (Kazakhstan)",
    nativeName: "Қазақ (Қазақстан)",
    dayNames: ["Жексенбі", "Дүйсенбі", "Сейсенбі", "Сәрсенбі", "Бейсенбі", "Жұма", "Сенбі"],
    abbreviatedDayNames: ["Жк", "Дс", "Сс", "Ср", "Бс", "Жм", "Сн"],
    shortestDayNames: ["Жк", "Дс", "Сс", "Ср", "Бс", "Жм", "Сн"],
    firstLetterDayNames: ["Ж", "Д", "С", "С", "Б", "Ж", "С"],
    monthNames: ["қаңтар", "ақпан", "наурыз", "сәуір", "мамыр", "маусым", "шілде", "тамыз", "қыркүйек", "қазан", "қараша", "желтоқсан"],
    abbreviatedMonthNames: ["Қаң", "Ақп", "Нау", "Сәу", "Мам", "Мау", "Шіл", "Там", "Қыр", "Қаз", "Қар", "Жел"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "d MMMM yyyy 'ж.'",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d MMMM yyyy 'ж.' H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^қаң(тар)?/i,
        feb: /^ақп(ан)?/i,
        mar: /^нау(рыз)?/i,
        apr: /^сәу(ір)?/i,
        may: /^мам(ыр)?/i,
        jun: /^мау(сым)?/i,
        jul: /^шіл(де)?/i,
        aug: /^там(ыз)?/i,
        sep: /^қыр(күйек)?/i,
        oct: /^қаз(ан)?/i,
        nov: /^қар(аша)?/i,
        dec: /^жел(тоқсан)?/i,
        sun: /^жексенбі/i,
        mon: /^дүйсенбі/i,
        tue: /^сейсенбі/i,
        wed: /^сәрсенбі/i,
        thu: /^бейсенбі/i,
        fri: /^жұма/i,
        sat: /^сенбі/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["kn-in"] = {
    name: "kn-IN",
    englishName: "Kannada (India)",
    nativeName: "ಕನ್ನಡ (ಭಾರತ)",
    dayNames: ["ಭಾನುವಾರ", "ಸೋಮವಾರ", "ಮಂಗಳವಾರ", "ಬುಧವಾರ", "ಗುರುವಾರ", "ಶುಕ್ರವಾರ", "ಶನಿವಾರ"],
    abbreviatedDayNames: ["ಭಾನು.", "ಸೋಮ.", "ಮಂಗಳ.", "ಬುಧ.", "ಗುರು.", "ಶುಕ್ರ.", "ಶನಿ."],
    shortestDayNames: ["ರ", "ಸ", "ಮ", "ಬ", "ಗ", "ಶ", "ಶ"],
    firstLetterDayNames: ["ರ", "ಸ", "ಮ", "ಬ", "ಗ", "ಶ", "ಶ"],
    monthNames: ["ಜನವರಿ", "ಫೆಬ್ರವರಿ", "ಮಾರ್ಚ್", "ಎಪ್ರಿಲ್", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗಸ್ಟ್", "ಸೆಪ್ಟಂಬರ್", "ಅಕ್ಟೋಬರ್", "ನವೆಂಬರ್", "ಡಿಸೆಂಬರ್"],
    abbreviatedMonthNames: ["ಜನವರಿ", "ಫೆಬ್ರವರಿ", "ಮಾರ್ಚ್", "ಎಪ್ರಿಲ್", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗಸ್ಟ್", "ಸೆಪ್ಟಂಬರ್", "ಅಕ್ಟೋಬರ್", "ನವೆಂಬರ್", "ಡಿಸೆಂಬರ್"],
    amDesignator: "ಪೂರ್ವಾಹ್ನ",
    pmDesignator: "ಅಪರಾಹ್ನ",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd-MM-yy",
        longDate: "dd MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dd MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^ಜನವರಿ/i,
        feb: /^ಫೆಬ್ರವರಿ/i,
        mar: /^ಮಾರ್ಚ್/i,
        apr: /^ಎಪ್ರಿಲ್/i,
        may: /^ಮೇ/i,
        jun: /^ಜೂನ್/i,
        jul: /^ಜುಲೈ/i,
        aug: /^ಆಗಸ್ಟ್/i,
        sep: /^ಸೆಪ್ಟಂಬರ್/i,
        oct: /^ಅಕ್ಟೋಬರ್/i,
        nov: /^ನವೆಂಬರ್/i,
        dec: /^ಡಿಸೆಂಬರ್/i,
        sun: /^ರ(ಾನು(.(ವಾರ)?)?)?/i,
        mon: /^ಸ(ೋಮ(.(ವಾರ)?)?)?/i,
        tue: /^ಮ(ಂಗಳ(.(ವಾರ)?)?)?/i,
        wed: /^ಬ(ುಧ(.(ವಾರ)?)?)?/i,
        thu: /^ಗ(ುರು(.(ವಾರ)?)?)?/i,
        fri: /^ಶ(ುಕ್ರ(.(ವಾರ)?)?)?/i,
        sat: /^ಶ(ನಿ(.(ವಾರ)?)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["ko-kr"] = {
    name: "ko-KR",
    englishName: "Korean (Korea)",
    nativeName: "한국어 (대한민국)",
    dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
    abbreviatedDayNames: ["일", "월", "화", "수", "목", "금", "토"],
    shortestDayNames: ["일", "월", "화", "수", "목", "금", "토"],
    firstLetterDayNames: ["일", "월", "화", "수", "목", "금", "토"],
    monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    abbreviatedMonthNames: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    amDesignator: "오전",
    pmDesignator: "오후",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy-MM-dd",
        longDate: "yyyy'년' M'월' d'일' dddd",
        shortTime: "tt h:mm",
        longTime: "tt h:mm:ss",
        fullDateTime: "yyyy'년' M'월' d'일' dddd tt h:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "M'월' d'일'",
        yearMonth: "yyyy'년' M'월'"
    },
    regexPatterns: {
        jan: /^1(월)?/i,
        feb: /^2(월)?/i,
        mar: /^3(월)?/i,
        apr: /^4(월)?/i,
        may: /^5(월)?/i,
        jun: /^6(월)?/i,
        jul: /^7(월)?/i,
        aug: /^8(월)?/i,
        sep: /^9(월)?/i,
        oct: /^10(월)?/i,
        nov: /^11(월)?/i,
        dec: /^12(월)?/i,
        sun: /^일요일/i,
        mon: /^월요일/i,
        tue: /^화요일/i,
        wed: /^수요일/i,
        thu: /^목요일/i,
        fri: /^금요일/i,
        sat: /^토요일/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["kok-in"] = {
    name: "kok-IN",
    englishName: "Konkani (India)",
    nativeName: "कोंकणी (भारत)",
    dayNames: ["आयतार", "सोमार", "मंगळार", "बुधवार", "बिरेस्तार", "सुक्रार", "शेनवार"],
    abbreviatedDayNames: ["आय.", "सोम.", "मंगळ.", "बुध.", "बिरे.", "सुक्र.", "शेन."],
    shortestDayNames: ["आ", "स", "म", "ब", "ब", "स", "श"],
    firstLetterDayNames: ["आ", "स", "म", "ब", "ब", "स", "श"],
    monthNames: ["जानेवारी", "फेब्रुवारी", "मार्च", "एप्रिल", "मे", "जून", "जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोवेम्बर", "डिसेंबर"],
    abbreviatedMonthNames: ["जानेवारी", "फेब्रुवारी", "मार्च", "एप्रिल", "मे", "जून", "जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोवेम्बर", "डिसेंबर"],
    amDesignator: "म.पू.",
    pmDesignator: "म.नं.",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd-MM-yyyy",
        longDate: "dd MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dd MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^जानेवारी/i,
        feb: /^फेब्रुवारी/i,
        mar: /^मार्च/i,
        apr: /^एप्रिल/i,
        may: /^मे/i,
        jun: /^जून/i,
        jul: /^जुलै/i,
        aug: /^ऑगस्ट/i,
        sep: /^सप्टेंबर/i,
        oct: /^ऑक्टोबर/i,
        nov: /^नोवेम्बर/i,
        dec: /^डिसेंबर/i,
        sun: /^आ(य(.(तार)?)?)?/i,
        mon: /^स(ोम(.(ार)?)?)?/i,
        tue: /^म(ंगळ(.(ार)?)?)?/i,
        wed: /^ब(ुध(.(वार)?)?)?/i,
        thu: /^ब(िरे(.(स्तार)?)?)?/i,
        fri: /^स(ुक्र(.(ार)?)?)?/i,
        sat: /^श(ेन(.(वार)?)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["ky-kg"] = {
    name: "ky-KG",
    englishName: "Kyrgyz (Kyrgyzstan)",
    nativeName: "Кыргыз (Кыргызстан)",
    dayNames: ["Жекшемби", "Дүйшөмбү", "Шейшемби", "Шаршемби", "Бейшемби", "Жума", "Ишемби"],
    abbreviatedDayNames: ["Жш", "Дш", "Шш", "Шр", "Бш", "Жм", "Иш"],
    shortestDayNames: ["Жш", "Дш", "Шш", "Шр", "Бш", "Жм", "Иш"],
    firstLetterDayNames: ["Ж", "Д", "Ш", "Ш", "Б", "Ж", "И"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    abbreviatedMonthNames: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yy",
        longDate: "d'-'MMMM yyyy'-ж.'",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d'-'MMMM yyyy'-ж.' H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM yyyy'-ж.'"
    },
    regexPatterns: {
        jan: /^янв(арь)?/i,
        feb: /^фев(раль)?/i,
        mar: /^мар(т)?/i,
        apr: /^апр(ель)?/i,
        may: /^май/i,
        jun: /^июн(ь)?/i,
        jul: /^июл(ь)?/i,
        aug: /^авг(уст)?/i,
        sep: /^сен(тябрь)?/i,
        oct: /^окт(ябрь)?/i,
        nov: /^ноя(брь)?/i,
        dec: /^дек(абрь)?/i,
        sun: /^жекшемби/i,
        mon: /^дүйшөмбү/i,
        tue: /^шейшемби/i,
        wed: /^шаршемби/i,
        thu: /^бейшемби/i,
        fri: /^жума/i,
        sat: /^ишемби/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["lt-lt"] = {
    name: "lt-LT",
    englishName: "Lithuanian (Lithuania)",
    nativeName: "lietuvių (Lietuva)",
    dayNames: ["sekmadienis", "pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis"],
    abbreviatedDayNames: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"],
    shortestDayNames: ["S", "P", "A", "T", "K", "Pn", "Š"],
    firstLetterDayNames: ["S", "P", "A", "T", "K", "P", "Š"],
    monthNames: ["sausis", "vasaris", "kovas", "balandis", "gegužė", "birželis", "liepa", "rugpjūtis", "rugsėjis", "spalis", "lapkritis", "gruodis"],
    abbreviatedMonthNames: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rgp", "Rgs", "Spl", "Lap", "Grd"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy.MM.dd",
        longDate: "yyyy 'm.' MMMM d 'd.'",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "yyyy 'm.' MMMM d 'd.' HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM d 'd.'",
        yearMonth: "yyyy 'm.' MMMM"
    },
    regexPatterns: {
        jan: /^sau(sis)?/i,
        feb: /^vas(aris)?/i,
        mar: /^kov(as)?/i,
        apr: /^bal(andis)?/i,
        may: /^geg(užė)?/i,
        jun: /^bir(želis)?/i,
        jul: /^lie(pa)?/i,
        aug: /^rugpjūtis/i,
        sep: /^rugsėjis/i,
        oct: /^spalis/i,
        nov: /^lap(kritis)?/i,
        dec: /^gruodis/i,
        sun: /^s(k(kmadienis)?)?/i,
        mon: /^p(r(rmadienis)?)?/i,
        tue: /^a(n(tradienis)?)?/i,
        wed: /^t(r(ečiadienis)?)?/i,
        thu: /^k(t(tvirtadienis)?)?/i,
        fri: /^penktadienis/i,
        sat: /^š(t(štadienis)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["lv-lv"] = {
    name: "lv-LV",
    englishName: "Latvian (Latvia)",
    nativeName: "latviešu (Latvija)",
    dayNames: ["svētdiena", "pirmdiena", "otrdiena", "trešdiena", "ceturtdiena", "piektdiena", "sestdiena"],
    abbreviatedDayNames: ["Sv", "Pr", "Ot", "Tr", "Ce", "Pk", "Se"],
    shortestDayNames: ["Sv", "Pr", "Ot", "Tr", "Ce", "Pk", "Se"],
    firstLetterDayNames: ["S", "P", "O", "T", "C", "P", "S"],
    monthNames: ["janvāris", "februāris", "marts", "aprīlis", "maijs", "jūnijs", "jūlijs", "augusts", "septembris", "oktobris", "novembris", "decembris"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jūn", "Jūl", "Aug", "Sep", "Okt", "Nov", "Dec"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy.MM.dd.",
        longDate: "dddd, yyyy'. gada 'd. MMMM",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "dddd, yyyy'. gada 'd. MMMM H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d. MMMM",
        yearMonth: "yyyy. MMMM"
    },
    regexPatterns: {
        jan: /^jan(vāris)?/i,
        feb: /^feb(ruāris)?/i,
        mar: /^mar(ts)?/i,
        apr: /^apr(īlis)?/i,
        may: /^mai(js)?/i,
        jun: /^jūn(ijs)?/i,
        jul: /^jūl(ijs)?/i,
        aug: /^aug(usts)?/i,
        sep: /^sep(tembris)?/i,
        oct: /^okt(obris)?/i,
        nov: /^nov(embris)?/i,
        dec: /^dec(embris)?/i,
        sun: /^svētdiena/i,
        mon: /^pirmdiena/i,
        tue: /^otrdiena/i,
        wed: /^trešdiena/i,
        thu: /^ceturtdiena/i,
        fri: /^piektdiena/i,
        sat: /^sestdiena/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["mi-nz"] = {
    name: "mi-NZ",
    englishName: "Maori (New Zealand)",
    nativeName: "Reo Māori (Aotearoa)",
    dayNames: ["Rātapu", "Mane", "Tūrei", "Wenerei", "Tāite", "Paraire", "Hātarei"],
    abbreviatedDayNames: ["Ta", "Ma", "Tū", "We", "Tāi", "Pa", "Hā"],
    shortestDayNames: ["Ta", "Ma", "Tū", "We", "Tāi", "Pa", "Hā"],
    firstLetterDayNames: ["T", "M", "T", "W", "T", "P", "H"],
    monthNames: ["Kohi-tātea", "Hui-tanguru", "Poutū-te-rangi", "Paenga-whāwhā", "Haratua", "Pipiri", "Hōngoingoi", "Here-turi-kōkā", "Mahuru", "Whiringa-ā-nuku", "Whiringa-ā-rangi", "Hakihea"],
    abbreviatedMonthNames: ["Kohi", "Hui", "Pou", "Pae", "Hara", "Pipi", "Hōngoi", "Here", "Mahu", "Whi-nu", "Whi-ra", "Haki"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d/MM/yyyy",
        longDate: "dddd, d MMMM yyyy",
        shortTime: "h:mm:ss tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "dddd, d MMMM yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^kohi(-tātea)?/i,
        feb: /^hui(-tanguru)?/i,
        mar: /^pou(tū-te-rangi)?/i,
        apr: /^pae(nga-whāwhā)?/i,
        may: /^hara(tua)?/i,
        jun: /^pipi(ri)?/i,
        jul: /^hōngoi(ngoi)?/i,
        aug: /^here(-turi-kōkā)?/i,
        sep: /^mahu(ru)?/i,
        oct: /^whiringa-ā-nuku/i,
        nov: /^whiringa-ā-rangi/i,
        dec: /^haki(hea)?/i,
        sun: /^rātapu/i,
        mon: /^mane/i,
        tue: /^tūrei/i,
        wed: /^wenerei/i,
        thu: /^tāite/i,
        fri: /^paraire/i,
        sat: /^hātarei/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["mk-mk"] = {
    name: "mk-MK",
    englishName: "Macedonian (Former Yugoslav Republic of Macedonia)",
    nativeName: "македонски јазик (Македонија)",
    dayNames: ["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"],
    abbreviatedDayNames: ["нед", "пон", "втр", "срд", "чет", "пет", "саб"],
    shortestDayNames: ["не", "по", "вт", "ср", "че", "пе", "са"],
    firstLetterDayNames: ["н", "п", "в", "с", "ч", "п", "с"],
    monthNames: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
    abbreviatedMonthNames: ["јан", "фев", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "ное", "дек"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "dddd, dd MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dddd, dd MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^јан(уари)?/i,
        feb: /^фев(руари)?/i,
        mar: /^мар(т)?/i,
        apr: /^апр(ил)?/i,
        may: /^мај/i,
        jun: /^јун(и)?/i,
        jul: /^јул(и)?/i,
        aug: /^авг(уст)?/i,
        sep: /^сеп(тември)?/i,
        oct: /^окт(омври)?/i,
        nov: /^ное(мври)?/i,
        dec: /^дек(ември)?/i,
        sun: /^не(д(ела)?)?/i,
        mon: /^по(н(еделник)?)?/i,
        tue: /^вт(р(рник)?)?/i,
        wed: /^ср(д(да)?)?/i,
        thu: /^че(т(врток)?)?/i,
        fri: /^пе(т(ок)?)?/i,
        sat: /^са(б(ота)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["mn-mn"] = {
    name: "mn-MN",
    englishName: "Mongolian (Cyrillic, Mongolia)",
    nativeName: "Монгол хэл (Монгол улс)",
    dayNames: ["Ням", "Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба"],
    abbreviatedDayNames: ["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"],
    shortestDayNames: ["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"],
    firstLetterDayNames: ["Н", "Д", "М", "Л", "П", "Б", "Б"],
    monthNames: ["1 дүгээр сар", "2 дугаар сар", "3 дугаар сар", "4 дүгээр сар", "5 дугаар сар", "6 дугаар сар", "7 дугаар сар", "8 дугаар сар", "9 дүгээр сар", "10 дугаар сар", "11 дүгээр сар", "12 дугаар сар"],
    abbreviatedMonthNames: ["I", "II", "III", "IV", "V", "VI", "VII", "VШ", "IX", "X", "XI", "XII"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yy.MM.dd",
        longDate: "yyyy 'оны' MMMM d",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "yyyy 'оны' MMMM d H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "yyyy 'он' MMMM"
    },
    regexPatterns: {
        jan: /^1 дүгээр сар/i,
        feb: /^2 дугаар сар/i,
        mar: /^3 дугаар сар/i,
        apr: /^4 дүгээр сар/i,
        may: /^5 дугаар сар/i,
        jun: /^6 дугаар сар/i,
        jul: /^7 дугаар сар/i,
        aug: /^8 дугаар сар/i,
        sep: /^9 дүгээр сар/i,
        oct: /^10 дугаар сар/i,
        nov: /^11 дүгээр сар/i,
        dec: /^12 дугаар сар/i,
        sun: /^ням/i,
        mon: /^даваа/i,
        tue: /^мягмар/i,
        wed: /^лхагва/i,
        thu: /^пүрэв/i,
        fri: /^баасан/i,
        sat: /^бямба/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["mr-in"] = {
    name: "mr-IN",
    englishName: "Marathi (India)",
    nativeName: "मराठी (भारत)",
    dayNames: ["रविवार", "सोमवार", "मंगळवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
    abbreviatedDayNames: ["रवि.", "सोम.", "मंगळ.", "बुध.", "गुरु.", "शुक्र.", "शनि."],
    shortestDayNames: ["र", "स", "म", "ब", "ग", "श", "श"],
    firstLetterDayNames: ["र", "स", "म", "ब", "ग", "श", "श"],
    monthNames: ["जानेवारी", "फेब्रुवारी", "मार्च", "एप्रिल", "मे", "जून", "जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोव्हेंबर", "डिसेंबर"],
    abbreviatedMonthNames: ["जाने.", "फेब्रु.", "मार्च", "एप्रिल", "मे", "जून", "जुलै", "ऑगस्ट", "सप्टें.", "ऑक्टो.", "नोव्हें.", "डिसें."],
    amDesignator: "म.पू.",
    pmDesignator: "म.नं.",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd-MM-yyyy",
        longDate: "dd MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dd MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^जाने(.(वारी)?)?/i,
        feb: /^फेब्रु(.(वारी)?)?/i,
        mar: /^मार्च/i,
        apr: /^एप्रिल/i,
        may: /^मे/i,
        jun: /^जून/i,
        jul: /^जुलै/i,
        aug: /^ऑगस्ट/i,
        sep: /^सप्टें(.(बर)?)?/i,
        oct: /^ऑक्टो(.(बर)?)?/i,
        nov: /^नोव्हें(.(बर)?)?/i,
        dec: /^डिसें(.(बर)?)?/i,
        sun: /^र(वि(.(वार)?)?)?/i,
        mon: /^स(ोम(.(वार)?)?)?/i,
        tue: /^म(ंगळ(.(वार)?)?)?/i,
        wed: /^ब(ुध(.(वार)?)?)?/i,
        thu: /^ग(ुरु(.(वार)?)?)?/i,
        fri: /^श(ुक्र(.(वार)?)?)?/i,
        sat: /^श(नि(.(वार)?)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["ms-bn"] = {
    name: "ms-BN",
    englishName: "Malay (Brunei Darussalam)",
    nativeName: "Bahasa Malaysia (Brunei Darussalam)",
    dayNames: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
    abbreviatedDayNames: ["Ahad", "Isnin", "Sel", "Rabu", "Khamis", "Jumaat", "Sabtu"],
    shortestDayNames: ["A", "I", "S", "R", "K", "J", "S"],
    firstLetterDayNames: ["A", "I", "S", "R", "K", "J", "S"],
    monthNames: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogos", "Sept", "Okt", "Nov", "Dis"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dd MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "dd MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uari)?/i,
        feb: /^feb(ruari)?/i,
        mar: /^mac/i,
        apr: /^apr(il)?/i,
        may: /^mei/i,
        jun: /^jun/i,
        jul: /^jul(ai)?/i,
        aug: /^ogos/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dis(ember)?/i,
        sun: /^a(1)?/i,
        mon: /^i(1)?/i,
        tue: /^s(el(asa)?)?/i,
        wed: /^r(1)?/i,
        thu: /^k(1)?/i,
        fri: /^j(1)?/i,
        sat: /^s(1)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["ms-my"] = {
    name: "ms-MY",
    englishName: "Malay (Malaysia)",
    nativeName: "Bahasa Malaysia (Malaysia)",
    dayNames: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
    abbreviatedDayNames: ["Ahad", "Isnin", "Sel", "Rabu", "Khamis", "Jumaat", "Sabtu"],
    shortestDayNames: ["A", "I", "S", "R", "K", "J", "S"],
    firstLetterDayNames: ["A", "I", "S", "R", "K", "J", "S"],
    monthNames: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogos", "Sept", "Okt", "Nov", "Dis"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dd MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "dd MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uari)?/i,
        feb: /^feb(ruari)?/i,
        mar: /^mac/i,
        apr: /^apr(il)?/i,
        may: /^mei/i,
        jun: /^jun/i,
        jul: /^jul(ai)?/i,
        aug: /^ogos/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dis(ember)?/i,
        sun: /^a(1)?/i,
        mon: /^i(1)?/i,
        tue: /^s(el(asa)?)?/i,
        wed: /^r(1)?/i,
        thu: /^k(1)?/i,
        fri: /^j(1)?/i,
        sat: /^s(1)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["mt-mt"] = {
    name: "mt-MT",
    englishName: "Maltese (Malta)",
    nativeName: "Malti (Malta)",
    dayNames: ["Il-Ħadd", "It-Tnejn", "It-Tlieta", "L-Erbgħa", "Il-Ħamis", "Il-Ġimgħa", "Is-Sibt"],
    abbreviatedDayNames: ["Ħad", "Tne", "Tli", "Erb", "Ħam", "Ġim", "Sib"],
    shortestDayNames: ["Ħad", "Tne", "Tli", "Erb", "Ħam", "Ġim", "Sib"],
    firstLetterDayNames: ["Ħ", "T", "T", "E", "Ħ", "Ġ", "S"],
    monthNames: ["Jannar", "Frar", "Marzu", "April", "Mejju", "Ġunju", "Lulju", "Awissu", "Settembru", "Ottubru", "Novembru", "Diċembru"],
    abbreviatedMonthNames: ["Jan", "Fra", "Mar", "Apr", "Mej", "Ġun", "Lul", "Awi", "Set", "Ott", "Nov", "Diċ"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, d' ta' 'MMMM yyyy",
        shortTime: "HH:mm:ss",
        longTime: "HH:mm:ss",
        fullDateTime: "dddd, d' ta' 'MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(nar)?/i,
        feb: /^fra(r)?/i,
        mar: /^mar(zu)?/i,
        apr: /^apr(il)?/i,
        may: /^mej(ju)?/i,
        jun: /^ġun(ju)?/i,
        jul: /^lul(ju)?/i,
        aug: /^awi(ssu)?/i,
        sep: /^set(tembru)?/i,
        oct: /^ott(ubru)?/i,
        nov: /^nov(embru)?/i,
        dec: /^diċ(embru)?/i,
        sun: /^il-ħadd/i,
        mon: /^it-tnejn/i,
        tue: /^it-tlieta/i,
        wed: /^l-erbgħa/i,
        thu: /^il-ħamis/i,
        fri: /^il-ġimgħa/i,
        sat: /^is-sibt/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["nb-no"] = {
    name: "nb-NO",
    englishName: "Norwegian, Bokmål (Norway)",
    nativeName: "norsk, bokmål (Norge)",
    dayNames: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
    abbreviatedDayNames: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
    shortestDayNames: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
    firstLetterDayNames: ["s", "m", "t", "o", "t", "f", "l"],
    monthNames: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
    abbreviatedMonthNames: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "d. MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "d. MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d. MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uar)?/i,
        feb: /^feb(ruar)?/i,
        mar: /^mar(s)?/i,
        apr: /^apr(il)?/i,
        may: /^mai/i,
        jun: /^jun(i)?/i,
        jul: /^jul(i)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^des(ember)?/i,
        sun: /^søndag/i,
        mon: /^mandag/i,
        tue: /^tirsdag/i,
        wed: /^onsdag/i,
        thu: /^torsdag/i,
        fri: /^fredag/i,
        sat: /^lørdag/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["nl-be"] = {
    name: "nl-BE",
    englishName: "Dutch (Belgium)",
    nativeName: "Nederlands (België)",
    dayNames: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
    abbreviatedDayNames: ["zo", "ma", "di", "wo", "do", "vr", "za"],
    shortestDayNames: ["zo", "ma", "di", "wo", "do", "vr", "za"],
    firstLetterDayNames: ["z", "m", "d", "w", "d", "v", "z"],
    monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
    abbreviatedMonthNames: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d/MM/yyyy",
        longDate: "dddd d MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "dddd d MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uari)?/i,
        feb: /^feb(ruari)?/i,
        mar: /^maart/i,
        apr: /^apr(il)?/i,
        may: /^mei/i,
        jun: /^jun(i)?/i,
        jul: /^jul(i)?/i,
        aug: /^aug(ustus)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^zondag/i,
        mon: /^maandag/i,
        tue: /^dinsdag/i,
        wed: /^woensdag/i,
        thu: /^donderdag/i,
        fri: /^vrijdag/i,
        sat: /^zaterdag/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["nl-nl"] = {
    name: "nl-NL",
    englishName: "Dutch (Netherlands)",
    nativeName: "Nederlands (Nederland)",
    dayNames: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
    abbreviatedDayNames: ["zo", "ma", "di", "wo", "do", "vr", "za"],
    shortestDayNames: ["zo", "ma", "di", "wo", "do", "vr", "za"],
    firstLetterDayNames: ["z", "m", "d", "w", "d", "v", "z"],
    monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
    abbreviatedMonthNames: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d-M-yyyy",
        longDate: "dddd d MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "dddd d MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uari)?/i,
        feb: /^feb(ruari)?/i,
        mar: /^maart/i,
        apr: /^apr(il)?/i,
        may: /^mei/i,
        jun: /^jun(i)?/i,
        jul: /^jul(i)?/i,
        aug: /^aug(ustus)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^zondag/i,
        mon: /^maandag/i,
        tue: /^dinsdag/i,
        wed: /^woensdag/i,
        thu: /^donderdag/i,
        fri: /^vrijdag/i,
        sat: /^zaterdag/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["nn-no"] = {
    name: "nn-NO",
    englishName: "Norwegian, Nynorsk (Norway)",
    nativeName: "norsk, nynorsk (Noreg)",
    dayNames: ["søndag", "måndag", "tysdag", "onsdag", "torsdag", "fredag", "laurdag"],
    abbreviatedDayNames: ["sø", "må", "ty", "on", "to", "fr", "la"],
    shortestDayNames: ["sø", "må", "ty", "on", "to", "fr", "la"],
    firstLetterDayNames: ["s", "m", "t", "o", "t", "f", "l"],
    monthNames: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
    abbreviatedMonthNames: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "d. MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "d. MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d. MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uar)?/i,
        feb: /^feb(ruar)?/i,
        mar: /^mar(s)?/i,
        apr: /^apr(il)?/i,
        may: /^mai/i,
        jun: /^jun(i)?/i,
        jul: /^jul(i)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^des(ember)?/i,
        sun: /^søndag/i,
        mon: /^måndag/i,
        tue: /^tysdag/i,
        wed: /^onsdag/i,
        thu: /^torsdag/i,
        fri: /^fredag/i,
        sat: /^laurdag/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["ns-za"] = {
    name: "ns-ZA",
    englishName: "Northern Sotho (South Africa)",
    nativeName: "Sesotho sa Leboa (Afrika Borwa)",
    dayNames: ["Lamorena", "Mošupologo", "Labobedi", "Laboraro", "Labone", "Labohlano", "Mokibelo"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["Pherekgong", "Hlakola", "Mopitlo", "Moranang", "Mosegamanye", "Ngoatobošego", "Phuphu", "Phato", "Lewedi", "Diphalana", "Dibatsela", "Manthole"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy/MM/dd",
        longDate: "dd MMMM yyyy",
        shortTime: "hh:mm:ss tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd MMMM yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^pherekgong/i,
        feb: /^hlakola/i,
        mar: /^mopitlo/i,
        apr: /^moranang/i,
        may: /^mosegamanye/i,
        jun: /^ngoatobošego/i,
        jul: /^phuphu/i,
        aug: /^phato/i,
        sep: /^lewedi/i,
        oct: /^diphalana/i,
        nov: /^dibatsela/i,
        dec: /^manthole/i,
        sun: /^lamorena/i,
        mon: /^mošupologo/i,
        tue: /^labobedi/i,
        wed: /^laboraro/i,
        thu: /^labone/i,
        fri: /^labohlano/i,
        sat: /^mokibelo/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["pa-in"] = {
    name: "pa-IN",
    englishName: "Punjabi (India)",
    nativeName: "ਪੰਜਾਬੀ (ਭਾਰਤ)",
    dayNames: ["ਐਤਵਾਰ", "ਸੋਮਵਾਰ", "ਮੰਗਲਵਾਰ", "ਬੁਧਵਾਰ", "ਵੀਰਵਾਰ", "ਸ਼ੁੱਕਰਵਾਰ", "ਸ਼ਨੀਚਰਵਾਰ"],
    abbreviatedDayNames: ["ਐਤ.", "ਸੋਮ.", "ਮੰਗਲ.", "ਬੁਧ.", "ਵੀਰ.", "ਸ਼ੁਕਰ.", "ਸ਼ਨੀ."],
    shortestDayNames: ["ਐ", "ਸ", "ਮ", "ਬ", "ਵ", "ਸ਼", "ਸ਼"],
    firstLetterDayNames: ["ਐ", "ਸ", "ਮ", "ਬ", "ਵ", "ਸ਼", "ਸ਼"],
    monthNames: ["ਜਨਵਰੀ", "ਫ਼ਰਵਰੀ", "ਮਾਰਚ", "ਅਪ੍ਰੈਲ", "ਮਈ", "ਜੂਨ", "ਜੁਲਾਈ", "ਅਗਸਤ", "ਸਤੰਬਰ", "ਅਕਤੂਬਰ", "ਨਵੰਬਰ", "ਦਸੰਬਰ"],
    abbreviatedMonthNames: ["ਜਨਵਰੀ", "ਫ਼ਰਵਰੀ", "ਮਾਰਚ", "ਅਪ੍ਰੈਲ", "ਮਈ", "ਜੂਨ", "ਜੁਲਾਈ", "ਅਗਸਤ", "ਸਤੰਬਰ", "ਅਕਤੂਬਰ", "ਨਵੰਬਰ", "ਦਸੰਬਰ"],
    amDesignator: "ਸਵੇਰੇ",
    pmDesignator: "ਸ਼ਾਮ",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd-MM-yy",
        longDate: "dd MMMM yyyy dddd",
        shortTime: "tt hh:mm",
        longTime: "tt hh:mm:ss",
        fullDateTime: "dd MMMM yyyy dddd tt hh:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^ਜਨਵਰੀ/i,
        feb: /^ਫ਼ਰਵਰੀ/i,
        mar: /^ਮਾਰਚ/i,
        apr: /^ਅਪ੍ਰੈਲ/i,
        may: /^ਮਈ/i,
        jun: /^ਜੂਨ/i,
        jul: /^ਜੁਲਾਈ/i,
        aug: /^ਅਗਸਤ/i,
        sep: /^ਸਤੰਬਰ/i,
        oct: /^ਅਕਤੂਬਰ/i,
        nov: /^ਨਵੰਬਰ/i,
        dec: /^ਦਸੰਬਰ/i,
        sun: /^ਐ(ਤ(.(ਵਾਰ)?)?)?/i,
        mon: /^ਸ(ੋਮ(.(ਵਾਰ)?)?)?/i,
        tue: /^ਮ(ੰਗਲ(.(ਵਾਰ)?)?)?/i,
        wed: /^ਬ(ੁਧ(.(ਵਾਰ)?)?)?/i,
        thu: /^ਵ(ੀਰ(.(ਵਾਰ)?)?)?/i,
        fri: /^ਸ਼(ੁਕਰ(.(ਰਵਾਰ)?)?)?/i,
        sat: /^ਸ਼(ਨੀ(.(ਚਰਵਾਰ)?)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["pl-pl"] = {
    name: "pl-PL",
    englishName: "Polish (Poland)",
    nativeName: "polski (Polska)",
    dayNames: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"],
    abbreviatedDayNames: ["N", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
    shortestDayNames: ["N", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
    firstLetterDayNames: ["N", "P", "W", "Ś", "C", "P", "S"],
    monthNames: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
    abbreviatedMonthNames: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy-MM-dd",
        longDate: "d MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "d MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^sty(czeń)?/i,
        feb: /^lut(y)?/i,
        mar: /^mar(zec)?/i,
        apr: /^kwi(ecień)?/i,
        may: /^maj/i,
        jun: /^cze(rwiec)?/i,
        jul: /^lip(iec)?/i,
        aug: /^sie(rpień)?/i,
        sep: /^wrz(esień)?/i,
        oct: /^paź(dziernik)?/i,
        nov: /^lis(topad)?/i,
        dec: /^gru(dzień)?/i,
        sun: /^niedziela/i,
        mon: /^poniedziałek/i,
        tue: /^wtorek/i,
        wed: /^środa/i,
        thu: /^czwartek/i,
        fri: /^piątek/i,
        sat: /^sobota/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["pt-br"] = {
    name: "pt-BR",
    englishName: "Portuguese (Brazil)",
    nativeName: "Português (Brasil)",
    dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
    abbreviatedDayNames: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    shortestDayNames: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    firstLetterDayNames: ["d", "s", "t", "q", "q", "s", "s"],
    monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    abbreviatedMonthNames: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d/M/yyyy",
        longDate: "dddd, d \\de MMMM \\de yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "dddd, d \\de MMMM \\de yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd \\de MMMM",
        yearMonth: "MMMM \\de yyyy"
    },
    regexPatterns: {
        jan: /^jan(eiro)?/i,
        feb: /^fev(ereiro)?/i,
        mar: /^mar(ço)?/i,
        apr: /^abr(il)?/i,
        may: /^mai(o)?/i,
        jun: /^jun(ho)?/i,
        jul: /^jul(ho)?/i,
        aug: /^ago(sto)?/i,
        sep: /^set(embro)?/i,
        oct: /^out(ubro)?/i,
        nov: /^nov(embro)?/i,
        dec: /^dez(embro)?/i,
        sun: /^domingo/i,
        mon: /^segunda-feira/i,
        tue: /^terça-feira/i,
        wed: /^quarta-feira/i,
        thu: /^quinta-feira/i,
        fri: /^sexta-feira/i,
        sat: /^sábado/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["pt-pt"] = {
    name: "pt-PT",
    englishName: "Portuguese (Portugal)",
    nativeName: "português (Portugal)",
    dayNames: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
    abbreviatedDayNames: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
    shortestDayNames: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
    firstLetterDayNames: ["d", "s", "t", "q", "q", "s", "s"],
    monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    abbreviatedMonthNames: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd-MM-yyyy",
        longDate: "dddd, d' de 'MMMM' de 'yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "dddd, d' de 'MMMM' de 'yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d/M",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^jan(eiro)?/i,
        feb: /^fev(ereiro)?/i,
        mar: /^mar(ço)?/i,
        apr: /^abr(il)?/i,
        may: /^mai(o)?/i,
        jun: /^jun(ho)?/i,
        jul: /^jul(ho)?/i,
        aug: /^ago(sto)?/i,
        sep: /^set(embro)?/i,
        oct: /^out(ubro)?/i,
        nov: /^nov(embro)?/i,
        dec: /^dez(embro)?/i,
        sun: /^domingo/i,
        mon: /^segunda-feira/i,
        tue: /^terça-feira/i,
        wed: /^quarta-feira/i,
        thu: /^quinta-feira/i,
        fri: /^sexta-feira/i,
        sat: /^sábado/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["quz-bo"] = {
    name: "quz-BO",
    englishName: "Quechua (Bolivia)",
    nativeName: "runasimi (Bolivia Suyu)",
    dayNames: ["intichaw", "killachaw", "atipachaw", "quyllurchaw", "Ch' askachaw", "Illapachaw", "k'uychichaw"],
    abbreviatedDayNames: ["int", "kil", "ati", "quy", "Ch", "Ill", "k'u"],
    shortestDayNames: ["int", "kil", "ati", "quy", "Ch", "Ill", "k'u"],
    firstLetterDayNames: ["i", "k", "a", "q", "C", "I", "k"],
    monthNames: ["Qulla puquy", "Hatun puquy", "Pauqar waray", "ayriwa", "Aymuray", "Inti raymi", "Anta Sitwa", "Qhapaq Sitwa", "Uma raymi", "Kantaray", "Ayamarq'a", "Kapaq Raymi"],
    abbreviatedMonthNames: ["Qul", "Hat", "Pau", "ayr", "Aym", "Int", "Ant", "Qha", "Uma", "Kan", "Aya", "Kap"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "hh:mm:ss tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^qul(la puquy)?/i,
        feb: /^hat(un puquy)?/i,
        mar: /^pau(qar waray)?/i,
        apr: /^ayr(iwa)?/i,
        may: /^aym(uray)?/i,
        jun: /^int(i raymi)?/i,
        jul: /^ant(a sitwa)?/i,
        aug: /^qha(paq sitwa)?/i,
        sep: /^uma( raymi)?/i,
        oct: /^kan(taray)?/i,
        nov: /^aya(marq'a)?/i,
        dec: /^kap(aq raymi)?/i,
        sun: /^intichaw/i,
        mon: /^killachaw/i,
        tue: /^atipachaw/i,
        wed: /^quyllurchaw/i,
        thu: /^ch' askachaw/i,
        fri: /^illapachaw/i,
        sat: /^k'uychichaw/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["quz-ec"] = {
    name: "quz-EC",
    englishName: "Quechua (Ecuador)",
    nativeName: "runasimi (Ecuador Suyu)",
    dayNames: ["intichaw", "killachaw", "atipachaw", "quyllurchaw", "Ch' askachaw", "Illapachaw", "k'uychichaw"],
    abbreviatedDayNames: ["int", "kil", "ati", "quy", "Ch", "Ill", "k'u"],
    shortestDayNames: ["int", "kil", "ati", "quy", "Ch", "Ill", "k'u"],
    firstLetterDayNames: ["i", "k", "a", "q", "C", "I", "k"],
    monthNames: ["Qulla puquy", "Hatun puquy", "Pauqar waray", "ayriwa", "Aymuray", "Inti raymi", "Anta Sitwa", "Qhapaq Sitwa", "Uma raymi", "Kantaray", "Ayamarq'a", "Kapaq Raymi"],
    abbreviatedMonthNames: ["Qul", "Hat", "Pau", "ayr", "Aym", "Int", "Ant", "Qha", "Uma", "Kan", "Aya", "Kap"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "H:mm:ss",
        longTime: "H:mm:ss",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^qul(la puquy)?/i,
        feb: /^hat(un puquy)?/i,
        mar: /^pau(qar waray)?/i,
        apr: /^ayr(iwa)?/i,
        may: /^aym(uray)?/i,
        jun: /^int(i raymi)?/i,
        jul: /^ant(a sitwa)?/i,
        aug: /^qha(paq sitwa)?/i,
        sep: /^uma( raymi)?/i,
        oct: /^kan(taray)?/i,
        nov: /^aya(marq'a)?/i,
        dec: /^kap(aq raymi)?/i,
        sun: /^intichaw/i,
        mon: /^killachaw/i,
        tue: /^atipachaw/i,
        wed: /^quyllurchaw/i,
        thu: /^ch' askachaw/i,
        fri: /^illapachaw/i,
        sat: /^k'uychichaw/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["quz-pe"] = {
    name: "quz-PE",
    englishName: "Quechua (Peru)",
    nativeName: "runasimi (Peru Suyu)",
    dayNames: ["intichaw", "killachaw", "atipachaw", "quyllurchaw", "Ch' askachaw", "Illapachaw", "k'uychichaw"],
    abbreviatedDayNames: ["int", "kil", "ati", "quy", "Ch", "Ill", "k'u"],
    shortestDayNames: ["int", "kil", "ati", "quy", "Ch", "Ill", "k'u"],
    firstLetterDayNames: ["i", "k", "a", "q", "C", "I", "k"],
    monthNames: ["Qulla puquy", "Hatun puquy", "Pauqar waray", "ayriwa", "Aymuray", "Inti raymi", "Anta Sitwa", "Qhapaq Sitwa", "Uma raymi", "Kantaray", "Ayamarq'a", "Kapaq Raymi"],
    abbreviatedMonthNames: ["Qul", "Hat", "Pau", "ayr", "Aym", "Int", "Ant", "Qha", "Uma", "Kan", "Aya", "Kap"],
    amDesignator: "a.m.",
    pmDesignator: "p.m.",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "hh:mm:ss tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM' de 'yyyy"
    },
    regexPatterns: {
        jan: /^qul(la puquy)?/i,
        feb: /^hat(un puquy)?/i,
        mar: /^pau(qar waray)?/i,
        apr: /^ayr(iwa)?/i,
        may: /^aym(uray)?/i,
        jun: /^int(i raymi)?/i,
        jul: /^ant(a sitwa)?/i,
        aug: /^qha(paq sitwa)?/i,
        sep: /^uma( raymi)?/i,
        oct: /^kan(taray)?/i,
        nov: /^aya(marq'a)?/i,
        dec: /^kap(aq raymi)?/i,
        sun: /^intichaw/i,
        mon: /^killachaw/i,
        tue: /^atipachaw/i,
        wed: /^quyllurchaw/i,
        thu: /^ch' askachaw/i,
        fri: /^illapachaw/i,
        sat: /^k'uychichaw/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["ro-ro"] = {
    name: "ro-RO",
    englishName: "Romanian (Romania)",
    nativeName: "română (România)",
    dayNames: ["duminică", "luni", "marţi", "miercuri", "joi", "vineri", "sâmbătă"],
    abbreviatedDayNames: ["D", "L", "Ma", "Mi", "J", "V", "S"],
    shortestDayNames: ["D", "L", "Ma", "Mi", "J", "V", "S"],
    firstLetterDayNames: ["D", "L", "M", "M", "J", "V", "S"],
    monthNames: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"],
    abbreviatedMonthNames: ["ian.", "feb.", "mar.", "apr.", "mai.", "iun.", "iul.", "aug.", "sep.", "oct.", "nov.", "dec."],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "d MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "d MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^ian(.(uarie)?)?/i,
        feb: /^feb(.(ruarie)?)?/i,
        mar: /^mar(.(tie)?)?/i,
        apr: /^apr(.(ilie)?)?/i,
        may: /^mai(.()?)?/i,
        jun: /^iun(.(ie)?)?/i,
        jul: /^iul(.(ie)?)?/i,
        aug: /^aug(.(ust)?)?/i,
        sep: /^sep(.(tembrie)?)?/i,
        oct: /^oct(.(ombrie)?)?/i,
        nov: /^noiembrie/i,
        dec: /^dec(.(embrie)?)?/i,
        sun: /^duminică/i,
        mon: /^luni/i,
        tue: /^marţi/i,
        wed: /^miercuri/i,
        thu: /^joi/i,
        fri: /^vineri/i,
        sat: /^sâmbătă/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["ru-ru"] = {
    name: "ru-RU",
    englishName: "Russian (Russia)",
    nativeName: "русский (Россия)",
    dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
    abbreviatedDayNames: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    shortestDayNames: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    firstLetterDayNames: ["В", "П", "В", "С", "Ч", "П", "С"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    abbreviatedMonthNames: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "d MMMM yyyy 'г.'",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d MMMM yyyy 'г.' H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy 'г.'"
    },
    regexPatterns: {
        jan: /^янв(арь)?/i,
        feb: /^фев(раль)?/i,
        mar: /^мар(т)?/i,
        apr: /^апр(ель)?/i,
        may: /^май/i,
        jun: /^июн(ь)?/i,
        jul: /^июл(ь)?/i,
        aug: /^авг(уст)?/i,
        sep: /^сен(тябрь)?/i,
        oct: /^окт(ябрь)?/i,
        nov: /^ноя(брь)?/i,
        dec: /^дек(абрь)?/i,
        sun: /^воскресенье/i,
        mon: /^понедельник/i,
        tue: /^вторник/i,
        wed: /^среда/i,
        thu: /^четверг/i,
        fri: /^пятница/i,
        sat: /^суббота/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["sa-in"] = {
    name: "sa-IN",
    englishName: "Sanskrit (India)",
    nativeName: "संस्कृत (भारतम्)",
    dayNames: ["रविवासरः", "सोमवासरः", "मङ्गलवासरः", "बुधवासरः", "गुरुवासरः", "शुक्रवासरः", "शनिवासरः"],
    abbreviatedDayNames: ["रविवासरः", "सोमवासरः", "मङ्गलवासरः", "बुधवासरः", "गुरुवासरः", "शुक्रवासरः", "शनिवासरः"],
    shortestDayNames: ["र", "स", "म", "ब", "ग", "श", "श"],
    firstLetterDayNames: ["र", "स", "म", "ब", "ग", "श", "श"],
    monthNames: ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितम्बर", "अक्तूबर", "नवम्बर", "दिसम्बर"],
    abbreviatedMonthNames: ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितम्बर", "अक्तूबर", "नवम्बर", "दिसम्बर"],
    amDesignator: "पूर्वाह्न",
    pmDesignator: "अपराह्न",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd-MM-yyyy",
        longDate: "dd MMMM yyyy dddd",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dd MMMM yyyy dddd HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^जनवरी/i,
        feb: /^फरवरी/i,
        mar: /^मार्च/i,
        apr: /^अप्रैल/i,
        may: /^मई/i,
        jun: /^जून/i,
        jul: /^जुलाई/i,
        aug: /^अगस्त/i,
        sep: /^सितम्बर/i,
        oct: /^अक्तूबर/i,
        nov: /^नवम्बर/i,
        dec: /^दिसम्बर/i,
        sun: /^र(1)?/i,
        mon: /^स(1)?/i,
        tue: /^म(1)?/i,
        wed: /^ब(1)?/i,
        thu: /^ग(1)?/i,
        fri: /^श(1)?/i,
        sat: /^श(1)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["se-fi"] = {
    name: "se-FI",
    englishName: "Sami (Northern) (Finland)",
    nativeName: "davvisámegiella (Suopma)",
    dayNames: ["sotnabeaivi", "vuossárga", "maŋŋebárga", "gaskavahkku", "duorastat", "bearjadat", "lávvardat"],
    abbreviatedDayNames: ["sotn", "vuos", "maŋ", "gask", "duor", "bear", "láv"],
    shortestDayNames: ["sotn", "vuos", "maŋ", "gask", "duor", "bear", "láv"],
    firstLetterDayNames: ["s", "v", "m", "g", "d", "b", "l"],
    monthNames: ["ođđajagemánnu", "guovvamánnu", "njukčamánnu", "cuoŋománnu", "miessemánnu", "geassemánnu", "suoidnemánnu", "borgemánnu", "čakčamánnu", "golggotmánnu", "skábmamánnu", "juovlamánnu"],
    abbreviatedMonthNames: ["ođđj", "guov", "njuk", "cuo", "mies", "geas", "suoi", "borg", "čakč", "golg", "skáb", "juov"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d.M.yyyy",
        longDate: "MMMM d'. b. 'yyyy",
        shortTime: "H:mm:ss",
        longTime: "H:mm:ss",
        fullDateTime: "MMMM d'. b. 'yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^ođđajagemánnu/i,
        feb: /^guov(vamánnu)?/i,
        mar: /^njuk(čamánnu)?/i,
        apr: /^cuo(ŋománnu)?/i,
        may: /^mies(semánnu)?/i,
        jun: /^geas(semánnu)?/i,
        jul: /^suoi(dnemánnu)?/i,
        aug: /^borg(emánnu)?/i,
        sep: /^čakč(amánnu)?/i,
        oct: /^golg(gotmánnu)?/i,
        nov: /^skáb(mamánnu)?/i,
        dec: /^juov(lamánnu)?/i,
        sun: /^sotnabeaivi/i,
        mon: /^vuossárga/i,
        tue: /^maŋŋebárga/i,
        wed: /^gaskavahkku/i,
        thu: /^duorastat/i,
        fri: /^bearjadat/i,
        sat: /^lávvardat/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["se-no"] = {
    name: "se-NO",
    englishName: "Sami (Northern) (Norway)",
    nativeName: "davvisámegiella (Norga)",
    dayNames: ["sotnabeaivi", "vuossárga", "maŋŋebárga", "gaskavahkku", "duorastat", "bearjadat", "lávvardat"],
    abbreviatedDayNames: ["sotn", "vuos", "maŋ", "gask", "duor", "bear", "láv"],
    shortestDayNames: ["sotn", "vuos", "maŋ", "gask", "duor", "bear", "láv"],
    firstLetterDayNames: ["s", "v", "m", "g", "d", "b", "l"],
    monthNames: ["ođđajagemánnu", "guovvamánnu", "njukčamánnu", "cuoŋománnu", "miessemánnu", "geassemánnu", "suoidnemánnu", "borgemánnu", "čakčamánnu", "golggotmánnu", "skábmamánnu", "juovlamánnu"],
    abbreviatedMonthNames: ["ođđj", "guov", "njuk", "cuo", "mies", "geas", "suoi", "borg", "čakč", "golg", "skáb", "juov"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "MMMM d'. b. 'yyyy",
        shortTime: "HH:mm:ss",
        longTime: "HH:mm:ss",
        fullDateTime: "MMMM d'. b. 'yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^ođđajagemánnu/i,
        feb: /^guov(vamánnu)?/i,
        mar: /^njuk(čamánnu)?/i,
        apr: /^cuo(ŋománnu)?/i,
        may: /^mies(semánnu)?/i,
        jun: /^geas(semánnu)?/i,
        jul: /^suoi(dnemánnu)?/i,
        aug: /^borg(emánnu)?/i,
        sep: /^čakč(amánnu)?/i,
        oct: /^golg(gotmánnu)?/i,
        nov: /^skáb(mamánnu)?/i,
        dec: /^juov(lamánnu)?/i,
        sun: /^sotnabeaivi/i,
        mon: /^vuossárga/i,
        tue: /^maŋŋebárga/i,
        wed: /^gaskavahkku/i,
        thu: /^duorastat/i,
        fri: /^bearjadat/i,
        sat: /^lávvardat/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["se-se"] = {
    name: "se-SE",
    englishName: "Sami (Northern) (Sweden)",
    nativeName: "davvisámegiella (Ruoŧŧa)",
    dayNames: ["sotnabeaivi", "mánnodat", "disdat", "gaskavahkku", "duorastat", "bearjadat", "lávvardat"],
    abbreviatedDayNames: ["sotn", "mán", "dis", "gask", "duor", "bear", "láv"],
    shortestDayNames: ["sotn", "mán", "dis", "gask", "duor", "bear", "láv"],
    firstLetterDayNames: ["s", "m", "d", "g", "d", "b", "l"],
    monthNames: ["ođđajagemánnu", "guovvamánnu", "njukčamánnu", "cuoŋománnu", "miessemánnu", "geassemánnu", "suoidnemánnu", "borgemánnu", "čakčamánnu", "golggotmánnu", "skábmamánnu", "juovlamánnu"],
    abbreviatedMonthNames: ["ođđj", "guov", "njuk", "cuo", "mies", "geas", "suoi", "borg", "čakč", "golg", "skáb", "juov"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy-MM-dd",
        longDate: "MMMM d'. b. 'yyyy",
        shortTime: "HH:mm:ss",
        longTime: "HH:mm:ss",
        fullDateTime: "MMMM d'. b. 'yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^ođđajagemánnu/i,
        feb: /^guov(vamánnu)?/i,
        mar: /^njuk(čamánnu)?/i,
        apr: /^cuo(ŋománnu)?/i,
        may: /^mies(semánnu)?/i,
        jun: /^geas(semánnu)?/i,
        jul: /^suoi(dnemánnu)?/i,
        aug: /^borg(emánnu)?/i,
        sep: /^čakč(amánnu)?/i,
        oct: /^golg(gotmánnu)?/i,
        nov: /^skáb(mamánnu)?/i,
        dec: /^juov(lamánnu)?/i,
        sun: /^sotnabeaivi/i,
        mon: /^mánnodat/i,
        tue: /^disdat/i,
        wed: /^gaskavahkku/i,
        thu: /^duorastat/i,
        fri: /^bearjadat/i,
        sat: /^lávvardat/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["sk-sk"] = {
    name: "sk-SK",
    englishName: "Slovak (Slovakia)",
    nativeName: "slovenčina (Slovenská republika)",
    dayNames: ["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"],
    abbreviatedDayNames: ["ne", "po", "ut", "st", "št", "pi", "so"],
    shortestDayNames: ["ne", "po", "ut", "st", "št", "pi", "so"],
    firstLetterDayNames: ["n", "p", "u", "s", "š", "p", "s"],
    monthNames: ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"],
    abbreviatedMonthNames: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d. M. yyyy",
        longDate: "d. MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d. MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^január/i,
        feb: /^február/i,
        mar: /^marec/i,
        apr: /^apríl/i,
        may: /^máj/i,
        jun: /^jún/i,
        jul: /^júl/i,
        aug: /^august/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^október/i,
        nov: /^november/i,
        dec: /^december/i,
        sun: /^nedeľa/i,
        mon: /^pondelok/i,
        tue: /^utorok/i,
        wed: /^streda/i,
        thu: /^štvrtok/i,
        fri: /^piatok/i,
        sat: /^sobota/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["sl-si"] = {
    name: "sl-SI",
    englishName: "Slovenian (Slovenia)",
    nativeName: "slovenski (Slovenija)",
    dayNames: ["nedelja", "ponedeljek", "torek", "sreda", "četrtek", "petek", "sobota"],
    abbreviatedDayNames: ["ned", "pon", "tor", "sre", "čet", "pet", "sob"],
    shortestDayNames: ["ne", "po", "to", "sr", "če", "pe", "so"],
    firstLetterDayNames: ["n", "p", "t", "s", "č", "p", "s"],
    monthNames: ["januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september", "oktober", "november", "december"],
    abbreviatedMonthNames: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d.M.yyyy",
        longDate: "d. MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d. MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d. MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uar)?/i,
        feb: /^feb(ruar)?/i,
        mar: /^mar(ec)?/i,
        apr: /^apr(il)?/i,
        may: /^maj/i,
        jun: /^jun(ij)?/i,
        jul: /^jul(ij)?/i,
        aug: /^avg(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^ne(d(elja)?)?/i,
        mon: /^po(n(edeljek)?)?/i,
        tue: /^to(r(ek)?)?/i,
        wed: /^sr(e(da)?)?/i,
        thu: /^če(t(rtek)?)?/i,
        fri: /^pe(t(ek)?)?/i,
        sat: /^so(b(ota)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["sma-no"] = {
    name: "sma-NO",
    englishName: "Sami (Southern) (Norway)",
    nativeName: "åarjelsaemiengiele (Nöörje)",
    dayNames: ["aejlege", "måanta", "dæjsta", "gaskevåhkoe", "duarsta", "bearjadahke", "laavvardahke"],
    abbreviatedDayNames: ["aej", "måa", "dæj", "gask", "duar", "bearj", "laav"],
    shortestDayNames: ["aej", "måa", "dæj", "gask", "duar", "bearj", "laav"],
    firstLetterDayNames: ["a", "m", "d", "g", "d", "b", "l"],
    monthNames: ["tsïengele", "goevte", "njoktje", "voerhtje", "suehpede", "ruffie", "snjaltje", "mïetske", "skïerede", "golke", "rahka", "goeve"],
    abbreviatedMonthNames: ["tsïen", "goevt", "njok", "voer", "sueh", "ruff", "snja", "mïet", "skïer", "golk", "rahk", "goev"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "MMMM d'. b. 'yyyy",
        shortTime: "HH:mm:ss",
        longTime: "HH:mm:ss",
        fullDateTime: "MMMM d'. b. 'yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^tsïen(gele)?/i,
        feb: /^goevt(e)?/i,
        mar: /^njok(tje)?/i,
        apr: /^voer(htje)?/i,
        may: /^sueh(pede)?/i,
        jun: /^ruff(ie)?/i,
        jul: /^snja(ltje)?/i,
        aug: /^mïet(ske)?/i,
        sep: /^skïer(ede)?/i,
        oct: /^golk(e)?/i,
        nov: /^rahk(a)?/i,
        dec: /^goev(e)?/i,
        sun: /^aejlege/i,
        mon: /^måanta/i,
        tue: /^dæjsta/i,
        wed: /^gaskevåhkoe/i,
        thu: /^duarsta/i,
        fri: /^bearjadahke/i,
        sat: /^laavvardahke/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["sma-se"] = {
    name: "sma-SE",
    englishName: "Sami (Southern) (Sweden)",
    nativeName: "åarjelsaemiengiele (Sveerje)",
    dayNames: ["aejlege", "måanta", "dæjsta", "gaskevåhkoe", "duarsta", "bearjadahke", "laavvardahke"],
    abbreviatedDayNames: ["aej", "måa", "dæj", "gask", "duar", "bearj", "laav"],
    shortestDayNames: ["aej", "måa", "dæj", "gask", "duar", "bearj", "laav"],
    firstLetterDayNames: ["a", "m", "d", "g", "d", "b", "l"],
    monthNames: ["tsïengele", "goevte", "njoktje", "voerhtje", "suehpede", "ruffie", "snjaltje", "mïetske", "skïerede", "golke", "rahka", "goeve"],
    abbreviatedMonthNames: ["tsïen", "goevt", "njok", "voer", "sueh", "ruff", "snja", "mïet", "skïer", "golk", "rahk", "goev"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy-MM-dd",
        longDate: "MMMM d'. b. 'yyyy",
        shortTime: "HH:mm:ss",
        longTime: "HH:mm:ss",
        fullDateTime: "MMMM d'. b. 'yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^tsïen(gele)?/i,
        feb: /^goevt(e)?/i,
        mar: /^njok(tje)?/i,
        apr: /^voer(htje)?/i,
        may: /^sueh(pede)?/i,
        jun: /^ruff(ie)?/i,
        jul: /^snja(ltje)?/i,
        aug: /^mïet(ske)?/i,
        sep: /^skïer(ede)?/i,
        oct: /^golk(e)?/i,
        nov: /^rahk(a)?/i,
        dec: /^goev(e)?/i,
        sun: /^aejlege/i,
        mon: /^måanta/i,
        tue: /^dæjsta/i,
        wed: /^gaskevåhkoe/i,
        thu: /^duarsta/i,
        fri: /^bearjadahke/i,
        sat: /^laavvardahke/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["smj-no"] = {
    name: "smj-NO",
    englishName: "Sami (Lule) (Norway)",
    nativeName: "julevusámegiella (Vuodna)",
    dayNames: ["sådnåbiejvve", "mánnodahka", "dijstahka", "gasskavahkko", "duorastahka", "bierjjedahka", "lávvodahka"],
    abbreviatedDayNames: ["såd", "mán", "dis", "gas", "duor", "bier", "láv"],
    shortestDayNames: ["såd", "mán", "dis", "gas", "duor", "bier", "láv"],
    firstLetterDayNames: ["s", "m", "d", "g", "d", "b", "l"],
    monthNames: ["ådåjakmánno", "guovvamánno", "sjnjuktjamánno", "vuoratjismánno", "moarmesmánno", "biehtsemánno", "sjnjilltjamánno", "bårggemánno", "ragátmánno", "gålgådismánno", "basádismánno", "javllamánno"],
    abbreviatedMonthNames: ["ådåj", "guov", "snju", "vuor", "moar", "bieh", "snji", "bårg", "ragá", "gålg", "basá", "javl"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "MMMM d'. b. 'yyyy",
        shortTime: "HH:mm:ss",
        longTime: "HH:mm:ss",
        fullDateTime: "MMMM d'. b. 'yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^ådåj(akmánno)?/i,
        feb: /^guov(vamánno)?/i,
        mar: /^sjnjuktjamánno/i,
        apr: /^vuor(atjismánno)?/i,
        may: /^moar(mesmánno)?/i,
        jun: /^bieh(tsemánno)?/i,
        jul: /^sjnjilltjamánno/i,
        aug: /^bårg(gemánno)?/i,
        sep: /^ragá(tmánno)?/i,
        oct: /^gålg(ådismánno)?/i,
        nov: /^basá(dismánno)?/i,
        dec: /^javl(lamánno)?/i,
        sun: /^sådnåbiejvve/i,
        mon: /^mánnodahka/i,
        tue: /^dijstahka/i,
        wed: /^gasskavahkko/i,
        thu: /^duorastahka/i,
        fri: /^bierjjedahka/i,
        sat: /^lávvodahka/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["smj-se"] = {
    name: "smj-SE",
    englishName: "Sami (Lule) (Sweden)",
    nativeName: "julevusámegiella (Svierik)",
    dayNames: ["ájllek", "mánnodahka", "dijstahka", "gasskavahkko", "duorastahka", "bierjjedahka", "lávvodahka"],
    abbreviatedDayNames: ["ájl", "mán", "dis", "gas", "duor", "bier", "láv"],
    shortestDayNames: ["ájl", "mán", "dis", "gas", "duor", "bier", "láv"],
    firstLetterDayNames: ["á", "m", "d", "g", "d", "b", "l"],
    monthNames: ["ådåjakmánno", "guovvamánno", "sjnjuktjamánno", "vuoratjismánno", "moarmesmánno", "biehtsemánno", "sjnjilltjamánno", "bårggemánno", "ragátmánno", "gålgådismánno", "basádismánno", "javllamánno"],
    abbreviatedMonthNames: ["ådåj", "guov", "snju", "vuor", "moar", "bieh", "snji", "bårg", "ragá", "gålg", "basá", "javl"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy-MM-dd",
        longDate: "MMMM d'. b. 'yyyy",
        shortTime: "HH:mm:ss",
        longTime: "HH:mm:ss",
        fullDateTime: "MMMM d'. b. 'yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^ådåj(akmánno)?/i,
        feb: /^guov(vamánno)?/i,
        mar: /^sjnjuktjamánno/i,
        apr: /^vuor(atjismánno)?/i,
        may: /^moar(mesmánno)?/i,
        jun: /^bieh(tsemánno)?/i,
        jul: /^sjnjilltjamánno/i,
        aug: /^bårg(gemánno)?/i,
        sep: /^ragá(tmánno)?/i,
        oct: /^gålg(ådismánno)?/i,
        nov: /^basá(dismánno)?/i,
        dec: /^javl(lamánno)?/i,
        sun: /^ájllek/i,
        mon: /^mánnodahka/i,
        tue: /^dijstahka/i,
        wed: /^gasskavahkko/i,
        thu: /^duorastahka/i,
        fri: /^bierjjedahka/i,
        sat: /^lávvodahka/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["smn-fi"] = {
    name: "smn-FI",
    englishName: "Sami (Inari) (Finland)",
    nativeName: "sämikielâ (Suomâ)",
    dayNames: ["pasepeivi", "vuossargâ", "majebargâ", "koskokko", "tuorâstâh", "vástuppeivi", "lávárdâh"],
    abbreviatedDayNames: ["pa", "vu", "ma", "ko", "tu", "vá", "lá"],
    shortestDayNames: ["pa", "vu", "ma", "ko", "tu", "vá", "lá"],
    firstLetterDayNames: ["p", "v", "m", "k", "t", "v", "l"],
    monthNames: ["uđđâivemáánu", "kuovâmáánu", "njuhčâmáánu", "cuáŋuimáánu", "vyesimáánu", "kesimáánu", "syeinimáánu", "porgemáánu", "čohčâmáánu", "roovvâdmáánu", "skammâmáánu", "juovlâmáánu"],
    abbreviatedMonthNames: ["uđiv", "kuov", "njuh", "cuoŋ", "vyes", "kesi", "syei", "porg", "čoh", "roov", "ska", "juov"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d.M.yyyy",
        longDate: "MMMM d'. p. 'yyyy",
        shortTime: "H:mm:ss",
        longTime: "H:mm:ss",
        fullDateTime: "MMMM d'. p. 'yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^uđđâivemáánu/i,
        feb: /^kuov(âmáánu)?/i,
        mar: /^njuh(čâmáánu)?/i,
        apr: /^cuáŋuimáánu/i,
        may: /^vyes(imáánu)?/i,
        jun: /^kesi(máánu)?/i,
        jul: /^syei(nimáánu)?/i,
        aug: /^porg(emáánu)?/i,
        sep: /^čoh(čâmáánu)?/i,
        oct: /^roov(vâdmáánu)?/i,
        nov: /^ska(mmâmáánu)?/i,
        dec: /^juov(lâmáánu)?/i,
        sun: /^pasepeivi/i,
        mon: /^vuossargâ/i,
        tue: /^majebargâ/i,
        wed: /^koskokko/i,
        thu: /^tuorâstâh/i,
        fri: /^vástuppeivi/i,
        sat: /^lávárdâh/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["sms-fi"] = {
    name: "sms-FI",
    englishName: "Sami (Skolt) (Finland)",
    nativeName: "sääm´ǩiõll (Lää´ddjânnam)",
    dayNames: ["pâ´sspei´vv", "vuõssargg", "mââibargg", "seärad", "nelljdpei´vv", "piâtnâc", "sue´vet"],
    abbreviatedDayNames: ["pâ", "vu", "mâ", "se", "ne", "pi", "su"],
    shortestDayNames: ["pâ", "vu", "mâ", "se", "ne", "pi", "su"],
    firstLetterDayNames: ["p", "v", "m", "s", "n", "p", "s"],
    monthNames: ["ođđee´jjmään", "tä´lvvmään", "pâ´zzlâšttammään", "njuhččmään", "vue´ssmään", "ǩie´ssmään", "suei´nnmään", "på´rǧǧmään", "čõhččmään", "kålggmään", "skamm´mään", "rosttovmään"],
    abbreviatedMonthNames: ["ođjm", "tä´lvv", "pâzl", "njuh", "vue", "ǩie", "suei", "på´r", "čõh", "kålg", "ska", "rost"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d.M.yyyy",
        longDate: "MMMM d'. p. 'yyyy",
        shortTime: "H:mm:ss",
        longTime: "H:mm:ss",
        fullDateTime: "MMMM d'. p. 'yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^ođđee´jjmään/i,
        feb: /^tä´lvv(mään)?/i,
        mar: /^pâ´zzlâšttammään/i,
        apr: /^njuh(ččmään)?/i,
        may: /^vue(´ssmään)?/i,
        jun: /^ǩie(´ssmään)?/i,
        jul: /^suei(´nnmään)?/i,
        aug: /^på´r(ǧǧmään)?/i,
        sep: /^čõh(ččmään)?/i,
        oct: /^kålg(gmään)?/i,
        nov: /^ska(mm´mään)?/i,
        dec: /^rost(tovmään)?/i,
        sun: /^pâ´sspei´vv/i,
        mon: /^vuõssargg/i,
        tue: /^mââibargg/i,
        wed: /^seärad/i,
        thu: /^nelljdpei´vv/i,
        fri: /^piâtnâc/i,
        sat: /^sue´vet/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["sq-al"] = {
    name: "sq-AL",
    englishName: "Albanian (Albania)",
    nativeName: "shqipe (Shqipëria)",
    dayNames: ["e diel", "e hënë", "e martë", "e mërkurë", "e enjte", "e premte", "e shtunë"],
    abbreviatedDayNames: ["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Sht"],
    shortestDayNames: ["Di", "Hë", "Ma", "Më", "En", "Pr", "Sh"],
    firstLetterDayNames: ["D", "H", "M", "M", "E", "P", "S"],
    monthNames: ["janar", "shkurt", "mars", "prill", "maj", "qershor", "korrik", "gusht", "shtator", "tetor", "nëntor", "dhjetor"],
    abbreviatedMonthNames: ["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Kor", "Gsh", "Sht", "Tet", "Nën", "Dhj"],
    amDesignator: "PD",
    pmDesignator: "MD",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy-MM-dd",
        longDate: "yyyy-MM-dd",
        shortTime: "h:mm.tt",
        longTime: "h:mm:ss.tt",
        fullDateTime: "yyyy-MM-dd h:mm:ss.tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "yyyy-MM"
    },
    regexPatterns: {
        jan: /^jan(ar)?/i,
        feb: /^shk(urt)?/i,
        mar: /^mar(s)?/i,
        apr: /^pri(ll)?/i,
        may: /^maj/i,
        jun: /^qer(shor)?/i,
        jul: /^kor(rik)?/i,
        aug: /^gusht/i,
        sep: /^sht(ator)?/i,
        oct: /^tet(or)?/i,
        nov: /^nën(tor)?/i,
        dec: /^dhj(etor)?/i,
        sun: /^di(e(iel)?)?/i,
        mon: /^hë(n(ënë)?)?/i,
        tue: /^ma(r(artë)?)?/i,
        wed: /^më(r(ërkurë)?)?/i,
        thu: /^en(j(njte)?)?/i,
        fri: /^pr(e(remte)?)?/i,
        sat: /^sh(t(htunë)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["sr-cyrl-ba"] = {
    name: "sr-Cyrl-BA",
    englishName: "Serbian (Cyrillic) (Bosnia and Herzegovina)",
    nativeName: "српски (Босна и Херцеговина)",
    dayNames: ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"],
    abbreviatedDayNames: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"],
    shortestDayNames: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"],
    firstLetterDayNames: ["н", "п", "у", "с", "ч", "п", "с"],
    monthNames: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
    abbreviatedMonthNames: ["јан", "феб", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "нов", "дец"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d.M.yyyy",
        longDate: "d. MMMM yyyy",
        shortTime: "H:mm:ss",
        longTime: "H:mm:ss",
        fullDateTime: "d. MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^јан(уар)?/i,
        feb: /^феб(руар)?/i,
        mar: /^мар(т)?/i,
        apr: /^апр(ил)?/i,
        may: /^мај/i,
        jun: /^јун/i,
        jul: /^јул/i,
        aug: /^авг(уст)?/i,
        sep: /^сеп(тембар)?/i,
        oct: /^окт(обар)?/i,
        nov: /^нов(ембар)?/i,
        dec: /^дец(ембар)?/i,
        sun: /^недеља/i,
        mon: /^понедељак/i,
        tue: /^уторак/i,
        wed: /^среда/i,
        thu: /^четвртак/i,
        fri: /^петак/i,
        sat: /^субота/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["sr-cyrl-cs"] = {
    name: "sr-Cyrl-CS",
    englishName: "Serbian (Cyrillic, Serbia)",
    nativeName: "српски (Србија)",
    dayNames: ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"],
    abbreviatedDayNames: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"],
    shortestDayNames: ["не", "по", "ут", "ср", "че", "пе", "су"],
    firstLetterDayNames: ["н", "п", "у", "с", "ч", "п", "с"],
    monthNames: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
    abbreviatedMonthNames: ["јан", "феб", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "нов", "дец"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d.M.yyyy",
        longDate: "d. MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d. MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d. MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^јан(уар)?/i,
        feb: /^феб(руар)?/i,
        mar: /^мар(т)?/i,
        apr: /^апр(ил)?/i,
        may: /^мај/i,
        jun: /^јун/i,
        jul: /^јул/i,
        aug: /^авг(уст)?/i,
        sep: /^сеп(тембар)?/i,
        oct: /^окт(обар)?/i,
        nov: /^нов(ембар)?/i,
        dec: /^дец(ембар)?/i,
        sun: /^не(д(еља)?)?/i,
        mon: /^по(н(едељак)?)?/i,
        tue: /^ут(о(рак)?)?/i,
        wed: /^ср(е(да)?)?/i,
        thu: /^че(т(вртак)?)?/i,
        fri: /^пе(т(ак)?)?/i,
        sat: /^су(б(ота)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["sr-latn-ba"] = {
    name: "sr-Latn-BA",
    englishName: "Serbian (Latin) (Bosnia and Herzegovina)",
    nativeName: "srpski (Bosna i Hercegovina)",
    dayNames: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"],
    abbreviatedDayNames: ["ned", "pon", "uto", "sre", "čet", "pet", "sub"],
    shortestDayNames: ["ned", "pon", "uto", "sre", "čet", "pet", "sub"],
    firstLetterDayNames: ["n", "p", "u", "s", "č", "p", "s"],
    monthNames: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
    abbreviatedMonthNames: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d.M.yyyy",
        longDate: "d. MMMM yyyy",
        shortTime: "H:mm:ss",
        longTime: "H:mm:ss",
        fullDateTime: "d. MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uar)?/i,
        feb: /^feb(ruar)?/i,
        mar: /^mar(t)?/i,
        apr: /^apr(il)?/i,
        may: /^maj/i,
        jun: /^jun/i,
        jul: /^jul/i,
        aug: /^avg(ust)?/i,
        sep: /^sep(tembar)?/i,
        oct: /^okt(obar)?/i,
        nov: /^nov(embar)?/i,
        dec: /^dec(embar)?/i,
        sun: /^nedelja/i,
        mon: /^ponedeljak/i,
        tue: /^utorak/i,
        wed: /^sreda/i,
        thu: /^četvrtak/i,
        fri: /^petak/i,
        sat: /^subota/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["sr-latn-cs"] = {
    name: "sr-Latn-CS",
    englishName: "Serbian (Latin, Serbia)",
    nativeName: "srpski (Srbija)",
    dayNames: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"],
    abbreviatedDayNames: ["ned", "pon", "uto", "sre", "čet", "pet", "sub"],
    shortestDayNames: ["ne", "po", "ut", "sr", "če", "pe", "su"],
    firstLetterDayNames: ["n", "p", "u", "s", "č", "p", "s"],
    monthNames: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
    abbreviatedMonthNames: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d.M.yyyy",
        longDate: "d. MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d. MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d. MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uar)?/i,
        feb: /^feb(ruar)?/i,
        mar: /^mar(t)?/i,
        apr: /^apr(il)?/i,
        may: /^maj/i,
        jun: /^jun/i,
        jul: /^jul/i,
        aug: /^avg(ust)?/i,
        sep: /^sep(tembar)?/i,
        oct: /^okt(obar)?/i,
        nov: /^nov(embar)?/i,
        dec: /^dec(embar)?/i,
        sun: /^ne(d(elja)?)?/i,
        mon: /^po(n(edeljak)?)?/i,
        tue: /^ut(o(rak)?)?/i,
        wed: /^sr(e(da)?)?/i,
        thu: /^če(t(vrtak)?)?/i,
        fri: /^pe(t(ak)?)?/i,
        sat: /^su(b(ota)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["sv-fi"] = {
    name: "sv-FI",
    englishName: "Swedish (Finland)",
    nativeName: "svenska (Finland)",
    dayNames: ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"],
    abbreviatedDayNames: ["sö", "må", "ti", "on", "to", "fr", "lö"],
    shortestDayNames: ["sö", "må", "ti", "on", "to", "fr", "lö"],
    firstLetterDayNames: ["s", "m", "t", "o", "t", "f", "l"],
    monthNames: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"],
    abbreviatedMonthNames: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d.M.yyyy",
        longDate: "'den 'd MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "'den 'd MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "'den 'd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uari)?/i,
        feb: /^feb(ruari)?/i,
        mar: /^mar(s)?/i,
        apr: /^apr(il)?/i,
        may: /^maj/i,
        jun: /^jun(i)?/i,
        jul: /^jul(i)?/i,
        aug: /^aug(usti)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^söndag/i,
        mon: /^måndag/i,
        tue: /^tisdag/i,
        wed: /^onsdag/i,
        thu: /^torsdag/i,
        fri: /^fredag/i,
        sat: /^lördag/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["sv-se"] = {
    name: "sv-SE",
    englishName: "Swedish (Sweden)",
    nativeName: "svenska (Sverige)",
    dayNames: ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"],
    abbreviatedDayNames: ["sö", "må", "ti", "on", "to", "fr", "lö"],
    shortestDayNames: ["sö", "må", "ti", "on", "to", "fr", "lö"],
    firstLetterDayNames: ["s", "m", "t", "o", "t", "f", "l"],
    monthNames: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"],
    abbreviatedMonthNames: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy-MM-dd",
        longDate: "'den 'd MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "'den 'd MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "'den 'd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^jan(uari)?/i,
        feb: /^feb(ruari)?/i,
        mar: /^mar(s)?/i,
        apr: /^apr(il)?/i,
        may: /^maj/i,
        jun: /^jun(i)?/i,
        jul: /^jul(i)?/i,
        aug: /^aug(usti)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^söndag/i,
        mon: /^måndag/i,
        tue: /^tisdag/i,
        wed: /^onsdag/i,
        thu: /^torsdag/i,
        fri: /^fredag/i,
        sat: /^lördag/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["sw-ke"] = {
    name: "sw-KE",
    englishName: "Kiswahili (Kenya)",
    nativeName: "Kiswahili (Kenya)",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "mdy",
    formatPatterns: {
        shortDate: "M/d/yyyy",
        longDate: "dddd, MMMM dd, yyyy",
        shortTime: "h:mm tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^s(un(day)?)?/i,
        mon: /^m(on(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^w(ed(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^f(ri(day)?)?/i,
        sat: /^s(at(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["syr-sy"] = {
    name: "syr-SY",
    englishName: "Syriac (Syria)",
    nativeName: "ܣܘܪܝܝܐ (سوريا)",
    dayNames: ["ܚܕ ܒܫܒܐ", "ܬܪܝܢ ܒܫܒܐ", "ܬܠܬܐ ܒܫܒܐ", "ܐܪܒܥܐ ܒܫܒܐ", "ܚܡܫܐ ܒܫܒܐ", "ܥܪܘܒܬܐ", "ܫܒܬܐ"],
    abbreviatedDayNames: ["܏ܐ ܏ܒܫ", "܏ܒ ܏ܒܫ", "܏ܓ ܏ܒܫ", "܏ܕ ܏ܒܫ", "܏ܗ ܏ܒܫ", "܏ܥܪܘܒ", "܏ܫܒ"],
    shortestDayNames: ["܏", "܏", "܏", "܏", "܏", "܏", "܏"],
    firstLetterDayNames: ["܏", "܏", "܏", "܏", "܏", "܏", "܏"],
    monthNames: ["ܟܢܘܢ ܐܚܪܝ", "ܫܒܛ", "ܐܕܪ", "ܢܝܣܢ", "ܐܝܪ", "ܚܙܝܪܢ", "ܬܡܘܙ", "ܐܒ", "ܐܝܠܘܠ", "ܬܫܪܝ ܩܕܝܡ", "ܬܫܪܝ ܐܚܪܝ", "ܟܢܘܢ ܩܕܝܡ"],
    abbreviatedMonthNames: ["܏ܟܢ ܏ܒ", "ܫܒܛ", "ܐܕܪ", "ܢܝܣܢ", "ܐܝܪ", "ܚܙܝܪܢ", "ܬܡܘܙ", "ܐܒ", "ܐܝܠܘܠ", "܏ܬܫ ܏ܐ", "܏ܬܫ ܏ܒ", "܏ܟܢ ܏ܐ"],
    amDesignator: "ܩ.ܛ",
    pmDesignator: "ܒ.ܛ",
    firstDayOfWeek: 6,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dd MMMM, yyyy",
        shortTime: "hh:mm tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd MMMM, yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^ܟܢܘܢ ܐܚܪܝ/i,
        feb: /^ܫܒܛ/i,
        mar: /^ܐܕܪ/i,
        apr: /^ܢܝܣܢ/i,
        may: /^ܐܝܪ/i,
        jun: /^ܚܙܝܪܢ/i,
        jul: /^ܬܡܘܙ/i,
        aug: /^ܐܒ/i,
        sep: /^ܐܝܠܘܠ/i,
        oct: /^ܬܫܪܝ ܩܕܝܡ/i,
        nov: /^ܬܫܪܝ ܐܚܪܝ/i,
        dec: /^ܟܢܘܢ ܩܕܝܡ/i,
        sun: /^܏(ܐ ܏ܒܫ(ܐ)?)?/i,
        mon: /^܏(ܒ ܏ܒܫ(ܫܒܐ)?)?/i,
        tue: /^܏(ܓ ܏ܒܫ(ܫܒܐ)?)?/i,
        wed: /^܏(ܕ ܏ܒܫ(ܒܫܒܐ)?)?/i,
        thu: /^܏(ܗ ܏ܒܫ(ܫܒܐ)?)?/i,
        fri: /^܏(ܥܪܘܒ(ܐ)?)?/i,
        sat: /^܏(ܫܒ(ܐ)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["ta-in"] = {
    name: "ta-IN",
    englishName: "Tamil (India)",
    nativeName: "தமிழ் (இந்தியா)",
    dayNames: ["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"],
    abbreviatedDayNames: ["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"],
    shortestDayNames: ["ஞ", "த", "ச", "ப", "வ", "வ", "ச"],
    firstLetterDayNames: ["ஞ", "த", "ச", "ப", "வ", "வ", "ச"],
    monthNames: ["ஜனவரி", "பெப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்", "ஜூலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"],
    abbreviatedMonthNames: ["ஜன.", "பெப்.", "மார்.", "ஏப்.", "மே", "ஜூன்", "ஜூலை", "ஆக.", "செப்.", "அக்.", "நவ.", "டிச."],
    amDesignator: "காலை",
    pmDesignator: "மாலை",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd-MM-yyyy",
        longDate: "dd MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dd MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^ஜன(.(வரி)?)?/i,
        feb: /^பெப்(.(ரவரி)?)?/i,
        mar: /^மார்(.(ச்)?)?/i,
        apr: /^ஏப்(.(ரல்)?)?/i,
        may: /^மே/i,
        jun: /^ஜூன்/i,
        jul: /^ஜூலை/i,
        aug: /^ஆக(.(ஸ்ட்)?)?/i,
        sep: /^செப்(.(டம்பர்)?)?/i,
        oct: /^அக்(.(டோபர்)?)?/i,
        nov: /^நவ(.(ம்பர்)?)?/i,
        dec: /^டிச(.(ம்பர்)?)?/i,
        sun: /^ஞ(ா(யிறு)?)?/i,
        mon: /^த(ி(ங்கள்)?)?/i,
        tue: /^ச(ெ(வ்வாய்)?)?/i,
        wed: /^ப(ு(தன்)?)?/i,
        thu: /^வ(ி(யாழன்)?)?/i,
        fri: /^வ(ெ(ள்ளி)?)?/i,
        sat: /^சனி/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["te-in"] = {
    name: "te-IN",
    englishName: "Telugu (India)",
    nativeName: "తెలుగు (భారత దేశం)",
    dayNames: ["ఆదివారం", "సోమవారం", "మంగళవారం", "బుధవారం", "గురువారం", "శుక్రవారం", "శనివారం"],
    abbreviatedDayNames: ["ఆది.", "సోమ.", "మంగళ.", "బుధ.", "గురు.", "శుక్ర.", "శని."],
    shortestDayNames: ["ఆ", "స", "మ", "బ", "గ", "శ", "శ"],
    firstLetterDayNames: ["ఆ", "స", "మ", "బ", "గ", "శ", "శ"],
    monthNames: ["జనవరి", "ఫిబ్రవరి", "మార్చి", "ఏప్రిల్", "మే", "జూన్", "జూలై", "ఆగస్టు", "సెప్టెంబర్", "అక్టోబర్", "నవంబర్", "డిసెంబర్"],
    abbreviatedMonthNames: ["జనవరి", "ఫిబ్రవరి", "మార్చి", "ఏప్రిల్", "మే", "జూన్", "జూలై", "ఆగస్టు", "సెప్టెంబర్", "అక్టోబర్", "నవంబర్", "డిసెంబర్"],
    amDesignator: "పూర్వాహ్న",
    pmDesignator: "అపరాహ్న",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd-MM-yy",
        longDate: "dd MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dd MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^జనవరి/i,
        feb: /^ఫిబ్రవరి/i,
        mar: /^మార్చి/i,
        apr: /^ఏప్రిల్/i,
        may: /^మే/i,
        jun: /^జూన్/i,
        jul: /^జూలై/i,
        aug: /^ఆగస్టు/i,
        sep: /^సెప్టెంబర్/i,
        oct: /^అక్టోబర్/i,
        nov: /^నవంబర్/i,
        dec: /^డిసెంబర్/i,
        sun: /^ఆ(ది(.(వారం)?)?)?/i,
        mon: /^స(ోమ(.(వారం)?)?)?/i,
        tue: /^మ(ంగళ(.(వారం)?)?)?/i,
        wed: /^బ(ుధ(.(వారం)?)?)?/i,
        thu: /^గ(ురు(.(వారం)?)?)?/i,
        fri: /^శ(ుక్ర(.(వారం)?)?)?/i,
        sat: /^శ(ని(.(వారం)?)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["th-th"] = {
    name: "th-TH",
    englishName: "Thai (Thailand)",
    nativeName: "ไทย (ไทย)",
    dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
    abbreviatedDayNames: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
    shortestDayNames: ["อ", "จ", "อ", "พ", "พ", "ศ", "ส"],
    firstLetterDayNames: ["อ", "จ", "อ", "พ", "พ", "ศ", "ส"],
    monthNames: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
    abbreviatedMonthNames: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2572,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d/M/yyyy",
        longDate: "d MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^ม(.(กราค)?)?/i,
        feb: /^ก(.(ุมภาพันธ์)?)?/i,
        mar: /^มี(.(นาคม)?)?/i,
        apr: /^เม(.(ษายน)?)?/i,
        may: /^พ(.(ฤษภาคม)?)?/i,
        jun: /^มิ(.(ถุนายน)?)?/i,
        jul: /^ก(.(รฎาคม)?)?/i,
        aug: /^ส(.(ิงหาคม)?)?/i,
        sep: /^ก(.(ันยายน)?)?/i,
        oct: /^ต(.(ุลาคม)?)?/i,
        nov: /^พ(.(ฤศจิกายน)?)?/i,
        dec: /^ธ(.(ันวาคม)?)?/i,
        sun: /^อ(า(.(ทิตย์)?)?)?/i,
        mon: /^จ((.(ันทร์)?)?)?/i,
        tue: /^อ((.(ังคาร)?)?)?/i,
        wed: /^พ((.(ุธ)?)?)?/i,
        thu: /^พ(ฤ(.(หัสบดี)?)?)?/i,
        fri: /^ศ((.(ุกร์)?)?)?/i,
        sat: /^ส((.(สาร์)?)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["tn-za"] = {
    name: "tn-ZA",
    englishName: "Tswana (South Africa)",
    nativeName: "Setswana (Aforika Borwa)",
    dayNames: ["Latshipi", "Mosupologo", "Labobedi", "Laboraro", "Labone", "Labotlhano", "Lamatlhatso"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["Ferikgong", "Tlhakole", "Mopitloe", "Moranang", "Motsheganong", "Seetebosigo", "Phukwi", "Phatwe", "Lwetse", "Diphalane", "Ngwanatsele", "Sedimothole"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy/MM/dd",
        longDate: "dd MMMM yyyy",
        shortTime: "hh:mm:ss tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd MMMM yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^ferikgong/i,
        feb: /^tlhakole/i,
        mar: /^mopitloe/i,
        apr: /^moranang/i,
        may: /^motsheganong/i,
        jun: /^seetebosigo/i,
        jul: /^phukwi/i,
        aug: /^phatwe/i,
        sep: /^lwetse/i,
        oct: /^diphalane/i,
        nov: /^ngwanatsele/i,
        dec: /^sedimothole/i,
        sun: /^latshipi/i,
        mon: /^mosupologo/i,
        tue: /^labobedi/i,
        wed: /^laboraro/i,
        thu: /^labone/i,
        fri: /^labotlhano/i,
        sat: /^lamatlhatso/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["tr-tr"] = {
    name: "tr-TR",
    englishName: "Turkish (Turkey)",
    nativeName: "Türkçe (Türkiye)",
    dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
    abbreviatedDayNames: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
    shortestDayNames: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
    firstLetterDayNames: ["P", "P", "S", "Ç", "P", "C", "C"],
    monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
    abbreviatedMonthNames: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "dd MMMM yyyy dddd",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dd MMMM yyyy dddd HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^oca(k)?/i,
        feb: /^şub(at)?/i,
        mar: /^mar(t)?/i,
        apr: /^nis(an)?/i,
        may: /^may(ıs)?/i,
        jun: /^haz(iran)?/i,
        jul: /^tem(muz)?/i,
        aug: /^ağu(stos)?/i,
        sep: /^eyl(ül)?/i,
        oct: /^eki(m)?/i,
        nov: /^kas(ım)?/i,
        dec: /^ara(lık)?/i,
        sun: /^pz(z(ar)?)?/i,
        mon: /^pt(t(artesi)?)?/i,
        tue: /^sa(l(ı)?)?/i,
        wed: /^ça(r(şamba)?)?/i,
        thu: /^pe(r(şembe)?)?/i,
        fri: /^cu(m(a)?)?/i,
        sat: /^ct(t(artesi)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["tt-ru"] = {
    name: "tt-RU",
    englishName: "Tatar (Russia)",
    nativeName: "Татар (Россия)",
    dayNames: ["Якшәмбе", "Дүшәмбе", "Сишәмбе", "Чәршәмбе", "Пәнҗешәмбе", "Җомга", "Шимбә"],
    abbreviatedDayNames: ["Якш", "Дүш", "Сиш", "Чәрш", "Пәнҗ", "Җом", "Шим"],
    shortestDayNames: ["Якш", "Дүш", "Сиш", "Чәрш", "Пәнҗ", "Җом", "Шим"],
    firstLetterDayNames: ["Я", "Д", "С", "Ч", "П", "Җ", "Ш"],
    monthNames: ["Гыйнварь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    abbreviatedMonthNames: ["Гыйнв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "d MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^гыйнв(арь)?/i,
        feb: /^фев(раль)?/i,
        mar: /^мар(т)?/i,
        apr: /^апр(ель)?/i,
        may: /^май/i,
        jun: /^июн(ь)?/i,
        jul: /^июл(ь)?/i,
        aug: /^авг(уст)?/i,
        sep: /^сен(тябрь)?/i,
        oct: /^окт(ябрь)?/i,
        nov: /^ноя(брь)?/i,
        dec: /^дек(абрь)?/i,
        sun: /^якшәмбе/i,
        mon: /^дүшәмбе/i,
        tue: /^сишәмбе/i,
        wed: /^чәршәмбе/i,
        thu: /^пәнҗешәмбе/i,
        fri: /^җомга/i,
        sat: /^шимбә/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["uk-ua"] = {
    name: "uk-UA",
    englishName: "Ukrainian (Ukraine)",
    nativeName: "україньска (Україна)",
    dayNames: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"],
    abbreviatedDayNames: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    shortestDayNames: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    firstLetterDayNames: ["Н", "П", "В", "С", "Ч", "П", "С"],
    monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
    abbreviatedMonthNames: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "d MMMM yyyy' р.'",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d MMMM yyyy' р.' H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM yyyy' р.'"
    },
    regexPatterns: {
        jan: /^січ(ень)?/i,
        feb: /^лют(ий)?/i,
        mar: /^бер(езень)?/i,
        apr: /^кві(тень)?/i,
        may: /^тра(вень)?/i,
        jun: /^чер(вень)?/i,
        jul: /^лип(ень)?/i,
        aug: /^сер(пень)?/i,
        sep: /^вер(есень)?/i,
        oct: /^жов(тень)?/i,
        nov: /^лис(топад)?/i,
        dec: /^гру(день)?/i,
        sun: /^неділя/i,
        mon: /^понеділок/i,
        tue: /^вівторок/i,
        wed: /^середа/i,
        thu: /^четвер/i,
        fri: /^п'ятниця/i,
        sat: /^субота/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["ur-pk"] = {
    name: "ur-PK",
    englishName: "Urdu (Islamic Republic of Pakistan)",
    nativeName: "اُردو (پاکستان)",
    dayNames: ["اتوار", "پير", "منگل", "بدھ", "جمعرات", "جمعه", "هفته"],
    abbreviatedDayNames: ["اتوار", "پير", "منگل", "بدھ", "جمعرات", "جمعه", "هفته"],
    shortestDayNames: ["ا", "پ", "م", "ب", "ج", "ج", "ه"],
    firstLetterDayNames: ["ا", "پ", "م", "ب", "ج", "ج", "ه"],
    monthNames: ["جنورى", "فرورى", "مارچ", "اپريل", "مئ", "جون", "جولاٸ", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
    abbreviatedMonthNames: ["جنورى", "فرورى", "مارچ", "اپريل", "مئ", "جون", "جولاٸ", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dd MMMM, yyyy",
        shortTime: "h:mm tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "dd MMMM, yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^جنورى/i,
        feb: /^فرورى/i,
        mar: /^مارچ/i,
        apr: /^اپريل/i,
        may: /^مئ/i,
        jun: /^جون/i,
        jul: /^جولاٸ/i,
        aug: /^اگست/i,
        sep: /^ستمبر/i,
        oct: /^اکتوبر/i,
        nov: /^نومبر/i,
        dec: /^دسمبر/i,
        sun: /^ا(1)?/i,
        mon: /^پ(1)?/i,
        tue: /^م(1)?/i,
        wed: /^ب(1)?/i,
        thu: /^ج(1)?/i,
        fri: /^ج(1)?/i,
        sat: /^ه(1)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["uz-cyrl-uz"] = {
    name: "uz-Cyrl-UZ",
    englishName: "Uzbek (Cyrillic, Uzbekistan)",
    nativeName: "Ўзбек (Ўзбекистон)",
    dayNames: ["якшанба", "душанба", "сешанба", "чоршанба", "пайшанба", "жума", "шанба"],
    abbreviatedDayNames: ["якш", "дш", "сш", "чш", "пш", "ж", "ш"],
    shortestDayNames: ["якш", "дш", "сш", "чш", "пш", "ж", "ш"],
    firstLetterDayNames: ["я", "д", "с", "ч", "п", "ж", "ш"],
    monthNames: ["Январ", "Феврал", "Март", "Апрел", "Май", "Июн", "Июл", "Август", "Сентябр", "Октябр", "Ноябр", "Декабр"],
    abbreviatedMonthNames: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "yyyy 'йил' d-MMMM",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "yyyy 'йил' d-MMMM HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d-MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^янв(ар)?/i,
        feb: /^фев(рал)?/i,
        mar: /^мар(т)?/i,
        apr: /^апр(ел)?/i,
        may: /^май/i,
        jun: /^июн/i,
        jul: /^июл/i,
        aug: /^авг(уст)?/i,
        sep: /^сен(тябр)?/i,
        oct: /^окт(ябр)?/i,
        nov: /^ноя(бр)?/i,
        dec: /^дек(абр)?/i,
        sun: /^якшанба/i,
        mon: /^душанба/i,
        tue: /^сешанба/i,
        wed: /^чоршанба/i,
        thu: /^пайшанба/i,
        fri: /^жума/i,
        sat: /^шанба/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["uz-latn-uz"] = {
    name: "uz-Latn-UZ",
    englishName: "Uzbek (Latin, Uzbekistan)",
    nativeName: "U'zbek (U'zbekiston Respublikasi)",
    dayNames: ["yakshanba", "dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba"],
    abbreviatedDayNames: ["yak.", "dsh.", "sesh.", "chr.", "psh.", "jm.", "sh."],
    shortestDayNames: ["yak", "dsh", "sesh", "chr", "psh", "jm", "sh"],
    firstLetterDayNames: ["y", "d", "s", "c", "p", "j", "s"],
    monthNames: ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentyabr", "oktyabr", "noyabr", "dekabr"],
    abbreviatedMonthNames: ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentyabr", "oktyabr", "noyabr", "dekabr"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM yyyy",
        longDate: "yyyy 'yil' d-MMMM",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "yyyy 'yil' d-MMMM HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d-MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^yanvar/i,
        feb: /^fevral/i,
        mar: /^mart/i,
        apr: /^aprel/i,
        may: /^may/i,
        jun: /^iyun/i,
        jul: /^iyul/i,
        aug: /^avgust/i,
        sep: /^sentyabr/i,
        oct: /^oktyabr/i,
        nov: /^noyabr/i,
        dec: /^dekabr/i,
        sun: /^yak((.(shanba)?)?)?/i,
        mon: /^dsh((.(hanba)?)?)?/i,
        tue: /^sesh((.(anba)?)?)?/i,
        wed: /^chr((.(rshanba)?)?)?/i,
        thu: /^psh((.(shanba)?)?)?/i,
        fri: /^jm((.(ma)?)?)?/i,
        sat: /^sh((.(anba)?)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["vi-vn"] = {
    name: "vi-VN",
    englishName: "Vietnamese (Vietnam)",
    nativeName: "Tiếng Việt (Việt Nam)",
    dayNames: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
    abbreviatedDayNames: ["CN", "Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy"],
    shortestDayNames: ["C", "H", "B", "T", "N", "S", "B"],
    firstLetterDayNames: ["C", "H", "B", "T", "N", "S", "B"],
    monthNames: ["Tháng Giêng", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"],
    abbreviatedMonthNames: ["Thg1", "Thg2", "Thg3", "Thg4", "Thg5", "Thg6", "Thg7", "Thg8", "Thg9", "Thg10", "Thg11", "Thg12"],
    amDesignator: "SA",
    pmDesignator: "CH",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dd MMMM yyyy",
        shortTime: "h:mm tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "dd MMMM yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^tháng giêng/i,
        feb: /^tháng hai/i,
        mar: /^tháng ba/i,
        apr: /^tháng tư/i,
        may: /^tháng năm/i,
        jun: /^tháng sáu/i,
        jul: /^tháng bảy/i,
        aug: /^tháng tám/i,
        sep: /^tháng chín/i,
        oct: /^tháng mười/i,
        nov: /^tháng mười một/i,
        dec: /^tháng mười hai/i,
        sun: /^c(n(ủ nhật)?)?/i,
        mon: /^h(ai(́ hai)?)?/i,
        tue: /^b(a(ứ ba)?)?/i,
        wed: /^t(ư(ứ tư)?)?/i,
        thu: /^n(ăm(́ năm)?)?/i,
        fri: /^s(áu( sáu)?)?/i,
        sat: /^b(ảy( bảy)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["xh-za"] = {
    name: "xh-ZA",
    englishName: "Xhosa (South Africa)",
    nativeName: "isiXhosa (uMzantsi Afrika)",
    dayNames: ["iCawa", "uMvulo", "uLwesibini", "uLwesithathu", "uLwesine", "uLwesihlanu", "uMgqibelo"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["eyoMqungu", "eyoMdumba", "eyoKwindla", "Tshazimpuzi", "Canzibe", "eyeSilimela", "eyeKhala", "eyeThupha", "eyoMsintsi", "eyeDwara", "eyeNkanga", "eyoMnga"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy/MM/dd",
        longDate: "dd MMMM yyyy",
        shortTime: "hh:mm:ss tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd MMMM yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^eyomqungu/i,
        feb: /^eyomdumba/i,
        mar: /^eyokwindla/i,
        apr: /^tshazimpuzi/i,
        may: /^canzibe/i,
        jun: /^eyesilimela/i,
        jul: /^eyekhala/i,
        aug: /^eyethupha/i,
        sep: /^eyomsintsi/i,
        oct: /^eyedwara/i,
        nov: /^eyenkanga/i,
        dec: /^eyomnga/i,
        sun: /^icawa/i,
        mon: /^umvulo/i,
        tue: /^ulwesibini/i,
        wed: /^ulwesithathu/i,
        thu: /^ulwesine/i,
        fri: /^ulwesihlanu/i,
        sat: /^umgqibelo/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["zh-cn"] = {
    name: "zh-CN",
    englishName: "Chinese (People's Republic of China)",
    nativeName: "中文(中华人民共和国)",
    dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    abbreviatedDayNames: ["日", "一", "二", "三", "四", "五", "六"],
    shortestDayNames: ["日", "一", "二", "三", "四", "五", "六"],
    firstLetterDayNames: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    abbreviatedMonthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    amDesignator: "上午",
    pmDesignator: "下午",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy/M/d",
        longDate: "yyyy'年'M'月'd'日'",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "yyyy'年'M'月'd'日' H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "M'月'd'日'",
        yearMonth: "yyyy'年'M'月'"
    },
    regexPatterns: {
        jan: /^一月/i,
        feb: /^二月/i,
        mar: /^三月/i,
        apr: /^四月/i,
        may: /^五月/i,
        jun: /^六月/i,
        jul: /^七月/i,
        aug: /^八月/i,
        sep: /^九月/i,
        oct: /^十月/i,
        nov: /^十一月/i,
        dec: /^十二月/i,
        sun: /^星期日/i,
        mon: /^星期一/i,
        tue: /^星期二/i,
        wed: /^星期三/i,
        thu: /^星期四/i,
        fri: /^星期五/i,
        sat: /^星期六/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["zh-hk"] = {
    name: "zh-HK",
    englishName: "Chinese (Hong Kong S.A.R.)",
    nativeName: "中文(香港特别行政區)",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d/M/yyyy",
        longDate: "dddd, d MMMM, yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "dddd, d MMMM, yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["zh-mo"] = {
    name: "zh-MO",
    englishName: "Chinese (Macao S.A.R.)",
    nativeName: "中文(澳門特别行政區)",
    dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    abbreviatedDayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    shortestDayNames: ["日", "一", "二", "三", "四", "五", "六"],
    firstLetterDayNames: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    abbreviatedMonthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d/M/yyyy",
        longDate: "dddd, d MMMM, yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "dddd, d MMMM, yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^一月/i,
        feb: /^二月/i,
        mar: /^三月/i,
        apr: /^四月/i,
        may: /^五月/i,
        jun: /^六月/i,
        jul: /^七月/i,
        aug: /^八月/i,
        sep: /^九月/i,
        oct: /^十月/i,
        nov: /^十一月/i,
        dec: /^十二月/i,
        sun: /^星期日/i,
        mon: /^星期一/i,
        tue: /^星期二/i,
        wed: /^星期三/i,
        thu: /^星期四/i,
        fri: /^星期五/i,
        sat: /^星期六/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["zh-sg"] = {
    name: "zh-SG",
    englishName: "Chinese (Singapore)",
    nativeName: "中文(新加坡)",
    dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    abbreviatedDayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    shortestDayNames: ["日", "一", "二", "三", "四", "五", "六"],
    firstLetterDayNames: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    abbreviatedMonthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "d/M/yyyy",
        longDate: "dddd, d MMMM, yyyy",
        shortTime: "tt h:mm",
        longTime: "tt h:mm:ss",
        fullDateTime: "dddd, d MMMM, yyyy tt h:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^一月/i,
        feb: /^二月/i,
        mar: /^三月/i,
        apr: /^四月/i,
        may: /^五月/i,
        jun: /^六月/i,
        jul: /^七月/i,
        aug: /^八月/i,
        sep: /^九月/i,
        oct: /^十月/i,
        nov: /^十一月/i,
        dec: /^十二月/i,
        sun: /^星期日/i,
        mon: /^星期一/i,
        tue: /^星期二/i,
        wed: /^星期三/i,
        thu: /^星期四/i,
        fri: /^星期五/i,
        sat: /^星期六/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["zh-tw"] = {
    name: "zh-TW",
    englishName: "Chinese (Taiwan)",
    nativeName: "中文(台灣)",
    dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    abbreviatedDayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    shortestDayNames: ["日", "一", "二", "三", "四", "五", "六"],
    firstLetterDayNames: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    abbreviatedMonthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    amDesignator: "上午",
    pmDesignator: "下午",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy/M/d",
        longDate: "yyyy'年'M'月'd'日'",
        shortTime: "tt hh:mm",
        longTime: "tt hh:mm:ss",
        fullDateTime: "yyyy'年'M'月'd'日' tt hh:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "M'月'd'日'",
        yearMonth: "yyyy'年'M'月'"
    },
    regexPatterns: {
        jan: /^一月/i,
        feb: /^二月/i,
        mar: /^三月/i,
        apr: /^四月/i,
        may: /^五月/i,
        jun: /^六月/i,
        jul: /^七月/i,
        aug: /^八月/i,
        sep: /^九月/i,
        oct: /^十月/i,
        nov: /^十一月/i,
        dec: /^十二月/i,
        sun: /^星期日/i,
        mon: /^星期一/i,
        tue: /^星期二/i,
        wed: /^星期三/i,
        thu: /^星期四/i,
        fri: /^星期五/i,
        sat: /^星期六/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
}, culture_date_i18n["zu-za"] = {
    name: "zu-ZA",
    englishName: "Zulu (South Africa)",
    nativeName: "isiZulu (iNingizimu Afrika)",
    dayNames: ["iSonto", "uMsombuluko", "uLwesibili", "uLwesithathu", "uLwesine", "uLwesihlanu", "uMgqibelo"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["uJanuwari", "uFebuwari", "uMashi", "uAprhili", "uMeyi", "uJuni", "uJulayi", "uAgaste", "uSepthemba", "uOkthoba", "uNovemba", "uDisemba"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    formatPatterns: {
        shortDate: "yyyy/MM/dd",
        longDate: "dd MMMM yyyy",
        shortTime: "hh:mm:ss tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd MMMM yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy"
    },
    regexPatterns: {
        jan: /^ujanuwari/i,
        feb: /^ufebuwari/i,
        mar: /^umashi/i,
        apr: /^uaprhili/i,
        may: /^umeyi/i,
        jun: /^ujuni/i,
        jul: /^ujulayi/i,
        aug: /^uagaste/i,
        sep: /^usepthemba/i,
        oct: /^uokthoba/i,
        nov: /^unovemba/i,
        dec: /^udisemba/i,
        sun: /^isonto/i,
        mon: /^umsombuluko/i,
        tue: /^ulwesibili/i,
        wed: /^ulwesithathu/i,
        thu: /^ulwesine/i,
        fri: /^ulwesihlanu/i,
        sat: /^umgqibelo/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
};

// implementation
var p = function (s, l) {
    if (l === void 0) { l = null; }
    if (!l) {
        l = 2;
    }
    return ("000" + s).slice(l * -1);
};
//declare var culture_date_i18n : {};
Date.CultureInfo = culture_date_i18n[navigator.language.toLowerCase()];
/**
 * Resets the time of this Date object to 12:00 AM (00:00), which is the start of the day.
 * @param {Boolean}  .clone() this date instance before clearing Time
 * @return {Date}    this
 */
Date.prototype.clearTime = function () {
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    this.setMilliseconds(0);
    return this;
};
/**
 * Convert a date object to MySQL string.
 * @return {String}    this
 */
Date.prototype.toMySQL = function () {
    function twoDigits(d) {
        if (0 <= d && d < 10)
            return "0" + d.toString();
        if (-10 < d && d < 0)
            return "-0" + (-1 * d).toString();
        return d.toString();
    }
    
    return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
};
/**
 * Resets the time of this Date object to the current time ('now').
 * @return {Date}    this
 */
Date.prototype.setTimeToNow = function () {
    var n = new Date();
    this.setHours(n.getHours());
    this.setMinutes(n.getMinutes());
    this.setSeconds(n.getSeconds());
    this.setMilliseconds(n.getMilliseconds());
    return this;
};
/**
 * Gets a date that is set to the current date. The time is set to the start of the day (00:00 or 12:00 AM).
 * @return {Date}    The current date.
 */
Date.today = function () {
    return new Date().clearTime();
};
/**
 * Compares the first date to the second date and returns an number indication of their relative values.
 * @param {Date}     First Date object to compare [Required].
 * @param {Date}     Second Date object to compare to [Required].
 * @return {Number}  -1 = date1 is lessthan date2. 0 = values are equal. 1 = date1 is greaterthan date2.
 */
Date.compare = function (date1, date2) {
    if (isNaN(date1) || isNaN(date2)) {
        throw new Error(date1 + " - " + date2);
    }
    else if (date1 instanceof Date && date2 instanceof Date) {
        return (date1 < date2) ? -1 : (date1 > date2) ? 1 : 0;
    }
    else {
        throw new TypeError(date1 + " - " + date2);
    }
};
/**
 * Compares the first Date object to the second Date object and returns true if they are equal.
 * @param {Date}     First Date object to compare [Required]
 * @param {Date}     Second Date object to compare to [Required]
 * @return {Boolean} true if dates are equal. false if they are not equal.
 */
Date.equals = function (date1, date2) {
    return (date1.compareTo(date2) === 0);
};
/**
 * Gets the day number (0-6) if given a CultureInfo specific string which is a valid dayName, abbreviatedDayName or shortestDayName (two char).
 * @param {String}   The name of the day (eg. "Monday, "Mon", "tuesday", "tue", "We", "we").
 * @return {Number}  The day number
 */
Date.getDayNumberFromName = function (name) {
    var n = Date.CultureInfo.dayNames, m = Date.CultureInfo.abbreviatedDayNames, o = Date.CultureInfo.shortestDayNames, s = name.toLowerCase();
    for (var i = 0; i < n.length; i++) {
        if (n[i].toLowerCase() == s || m[i].toLowerCase() == s || o[i].toLowerCase() == s) {
            return i;
        }
    }
    return -1;
};
/**
 * Gets the month number (0-11) if given a Culture Info specific string which is a valid monthName or abbreviatedMonthName.
 * @param {String}   The name of the month (eg. "February, "Feb", "october", "oct").
 * @return {Number}  The day number
 */
Date.getMonthNumberFromName = function (name) {
    var n = Date.CultureInfo.monthNames, m = Date.CultureInfo.abbreviatedMonthNames, s = name.toLowerCase();
    for (var i = 0; i < n.length; i++) {
        if (n[i].toLowerCase() == s || m[i].toLowerCase() == s) {
            return i;
        }
    }
    return -1;
};
/**
 * Determines if the current date instance is within a LeapYear.
 * @param {Number}   The year.
 * @return {Boolean} true if date is within a LeapYear, otherwise false.
 */
Date.isLeapYear = function (year) {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
};
/**
 * Gets the number of days in the month, given a year and month value. Automatically corrects for LeapYear.
 * @param {Number}   The year.
 * @param {Number}   The month (0-11).
 * @return {Number}  The number of days in the month.
 */
Date.getDaysInMonth = function (year, month) {
    return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};
Date.getTimezoneAbbreviation = function (offset) {
    var z = Date.CultureInfo.timezones;
    for (var i = 0; i < z.length; i++) {
        if (z[i].offset === offset) {
            return z[i].name;
        }
    }
    return null;
};
Date.getTimezoneOffset = function (name) {
    var z = Date.CultureInfo.timezones;
    for (var i = 0; i < z.length; i++) {
        if (z[i].name === name.toUpperCase()) {
            return z[i].offset;
        }
    }
    return null;
};
/**
 * Returns a new Date object that is an exact date and time copy of the original instance.
 * @return {Date}    A new Date instance
 */
Date.prototype.clone = function () {
    return new Date(this.getTime());
};
/**
 * Compares this instance to a Date object and returns an number indication of their relative values.
 * @param {Date}     Date object to compare [Required]
 * @return {Number}  -1 = this is lessthan date. 0 = values are equal. 1 = this is greaterthan date.
 */
Date.prototype.compareTo = function (date) {
    return Date.compare(this, date);
};
/**
 * Compares this instance to another Date object and returns true if they are equal.
 * @param {Date}     Date object to compare. If no date to compare, new Date() [now] is used.
 * @return {Boolean} true if dates are equal. false if they are not equal.
 */
Date.prototype.equals = function (date) {
    return Date.equals(this, date || new Date());
};
/**
 * Determines if this instance is between a range of two dates or equal to either the start or end dates.
 * @param {Date}     Start of range [Required]
 * @param {Date}     End of range [Required]
 * @return {Boolean} true is this is between or equal to the start and end dates, else false
 */
Date.prototype.between = function (start, end) {
    return this.getTime() >= start.getTime() && this.getTime() <= end.getTime();
};
/**
 * Determines if this date occurs after the date to compare to.
 * @param {Date}     Date object to compare. If no date to compare, new Date() ("now") is used.
 * @return {Boolean} true if this date instance is greater than the date to compare to (or "now"), otherwise false.
 */
Date.prototype.isAfter = function (date) {
    return this.compareTo(date || new Date()) === 1;
};
/**
 * Determines if this date occurs before the date to compare to.
 * @param {Date}     Date object to compare. If no date to compare, new Date() ("now") is used.
 * @return {Boolean} true if this date instance is less than the date to compare to (or "now").
 */
Date.prototype.isBefore = function (date) {
    return (this.compareTo(date || new Date()) === -1);
};
/**
 * Determines if the current Date instance occurs today.
 * @return {Boolean} true if this date instance is 'today', otherwise false.
 */
/**
 * Determines if the current Date instance occurs on the same Date as the supplied 'date'.
 * If no 'date' to compare to is provided, the current Date instance is compared to 'today'.
 * @param {date}     Date object to compare. If no date to compare, the current Date ("now") is used.
 * @return {Boolean} true if this Date instance occurs on the same Day as the supplied 'date'.
 */
Date.prototype.isToday = Date.prototype.isSameDay = function (date) {
    return this.clone().clearTime().equals((date || new Date()).clone().clearTime());
};
/**
 * Adds the specified number of milliseconds to this instance.
 * @param {Number}   The number of milliseconds to add. The number can be positive or negative [Required]
 * @return {Date}    this
 */
Date.prototype.addMilliseconds = function (value) {
    this.setMilliseconds(this.getMilliseconds() + value * 1);
    return this;
};
/**
 * Adds the specified number of seconds to this instance.
 * @param {Number}   The number of seconds to add. The number can be positive or negative [Required]
 * @return {Date}    this
 */
Date.prototype.addSeconds = function (value) {
    return this.addMilliseconds(value * 1000);
};
/**
 * Adds the specified number of seconds to this instance.
 * @param {Number}   The number of seconds to add. The number can be positive or negative [Required]
 * @return {Date}    this
 */
Date.prototype.addMinutes = function (value) {
    return this.addMilliseconds(value * 60000); /* 60*1000 */
};
/**
 * Adds the specified number of hours to this instance.
 * @param {Number}   The number of hours to add. The number can be positive or negative [Required]
 * @return {Date}    this
 */
Date.prototype.addHours = function (value) {
    return this.addMilliseconds(value * 3600000); /* 60*60*1000 */
};
/**
 * Adds the specified number of days to this instance.
 * @param {Number}   The number of days to add. The number can be positive or negative [Required]
 * @return {Date}    this
 */
Date.prototype.addDays = function (value) {
    this.setDate(this.getDate() + value * 1);
    return this;
};
/**
 * Adds the specified number of weeks to this instance.
 * @param {Number}   The number of weeks to add. The number can be positive or negative [Required]
 * @return {Date}    this
 */
Date.prototype.addWeeks = function (value) {
    return this.addDays(value * 7);
};
/**
 * Adds the specified number of months to this instance.
 * @param {Number}   The number of months to add. The number can be positive or negative [Required]
 * @return {Date}    this
 */
Date.prototype.addMonths = function (value) {
    var n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value * 1);
    this.setDate(Math.min(n, Date.getDaysInMonth(this.getFullYear(), this.getMonth())));
    return this;
};
/**
 * Adds the specified number of years to this instance.
 * @param {Number}   The number of years to add. The number can be positive or negative [Required]
 * @return {Date}    this
 */
Date.prototype.addYears = function (value) {
    return this.addMonths(value * 12);
};
/**
 * Adds (or subtracts) to the value of the years, months, weeks, days, hours, minutes, seconds, milliseconds of the date instance using given configuration object. Positive and Negative values allowed.
 * Example
<pre><code>
Date.today().add( { days: 1, months: 1 } )

new Date().add( { years: -1 } )
</code></pre>
 * @param {Object}   Configuration object containing attributes (months, days, etc.)
 * @return {Date}    this
 */
Date.prototype.add = function (config) {
    if (typeof config == "number") {
        this._orient = config;
        return this;
    }
    var x = config;
    if (x.milliseconds) {
        this.addMilliseconds(x.milliseconds);
    }
    if (x.seconds) {
        this.addSeconds(x.seconds);
    }
    if (x.minutes) {
        this.addMinutes(x.minutes);
    }
    if (x.hours) {
        this.addHours(x.hours);
    }
    if (x.weeks) {
        this.addWeeks(x.weeks);
    }
    if (x.months) {
        this.addMonths(x.months);
    }
    if (x.years) {
        this.addYears(x.years);
    }
    if (x.days) {
        this.addDays(x.days);
    }
    return this;
};
var $y;
var $m;
var $d;
/**
 * Get the week number. Week one (1) is the week which contains the first Thursday of the year. Monday is considered the first day of the week.
 * This algorithm is a JavaScript port of the work presented by Claus Tøndering at http://www.tondering.dk/claus/cal/node8.html#SECTION00880000000000000000
 * .getWeek() Algorithm Copyright (c) 2008 Claus Tondering.
 * The .getWeek() function does NOT convert the date to UTC. The local datetime is used. Please use .getISOWeek() to get the week of the UTC converted date.
 * @return {Number}  1 to 53
 */
Date.prototype.getWeek = function () {
    var a, b, c, d, e, f, g, n, s, w;
    $y = (!$y) ? this.getFullYear() : $y;
    $m = (!$m) ? this.getMonth() + 1 : $m;
    $d = (!$d) ? this.getDate() : $d;
    if ($m <= 2) {
        a = $y - 1;
        b = (a / 4 | 0) - (a / 100 | 0) + (a / 400 | 0);
        c = ((a - 1) / 4 | 0) - ((a - 1) / 100 | 0) + ((a - 1) / 400 | 0);
        s = b - c;
        e = 0;
        f = $d - 1 + (31 * ($m - 1));
    }
    else {
        a = $y;
        b = (a / 4 | 0) - (a / 100 | 0) + (a / 400 | 0);
        c = ((a - 1) / 4 | 0) - ((a - 1) / 100 | 0) + ((a - 1) / 400 | 0);
        s = b - c;
        e = s + 1;
        f = $d + ((153 * ($m - 3) + 2) / 5) + 58 + s;
    }
    g = (a + b) % 7;
    d = (f + g - e) % 7;
    n = (f + 3 - d) | 0;
    if (n < 0) {
        w = 53 - ((g - s) / 5 | 0);
    }
    else if (n > 364 + s) {
        w = 1;
    }
    else {
        w = (n / 7 | 0) + 1;
    }
    $y = $m = $d = null;
    return w;
};
/**
 * Get the ISO 8601 week number. Week one ("01") is the week which contains the first Thursday of the year. Monday is considered the first day of the week.
 * The .getISOWeek() function does convert the date to it's UTC value. Please use .getWeek() to get the week of the local date.
 * @return {String}  "01" to "53"
 */
Date.prototype.getISOWeek = function () {
    $y = this.getUTCFullYear();
    $m = this.getUTCMonth() + 1;
    $d = this.getUTCDate();
    return p(this.getWeek());
};
/**
 * Moves the date to Monday of the week set. Week one (1) is the week which contains the first Thursday of the year.
 * @param {Number}   A Number (1 to 53) that represents the week of the year.
 * @return {Date}    this
 */
Date.prototype.setWeek = function (n) {
    return this.moveToDayOfWeek(1).addWeeks(n - this.getWeek());
};
// private
var validate = function (n, min, max, name) {
    if (typeof n == "undefined") {
        return false;
    }
    else if (typeof n != "number") {
        throw new TypeError(n + " is not a Number.");
    }
    else if (n < min || n > max) {
        throw new RangeError(n + " is not a valid value for " + name + ".");
    }
    return true;
};
/**
 * Validates the number is within an acceptable range for milliseconds [0-999].
 * @param {Number}   The number to check if within range.
 * @return {Boolean} true if within range, otherwise false.
 */
Date.validateMillisecond = function (value) {
    return validate(value, 0, 999, "millisecond");
};
/**
 * Validates the number is within an acceptable range for seconds [0-59].
 * @param {Number}   The number to check if within range.
 * @return {Boolean} true if within range, otherwise false.
 */
Date.validateSecond = function (value) {
    return validate(value, 0, 59, "second");
};
/**
 * Validates the number is within an acceptable range for minutes [0-59].
 * @param {Number}   The number to check if within range.
 * @return {Boolean} true if within range, otherwise false.
 */
Date.validateMinute = function (value) {
    return validate(value, 0, 59, "minute");
};
/**
 * Validates the number is within an acceptable range for hours [0-23].
 * @param {Number}   The number to check if within range.
 * @return {Boolean} true if within range, otherwise false.
 */
Date.validateHour = function (value) {
    return validate(value, 0, 23, "hour");
};
/**
 * Validates the number is within an acceptable range for the days in a month [0-MaxDaysInMonth].
 * @param {Number}   The number to check if within range.
 * @return {Boolean} true if within range, otherwise false.
 */
Date.validateDay = function (value, year, month) {
    return validate(value, 1, Date.getDaysInMonth(year, month), "day");
};
/**
 * Validates the number is within an acceptable range for months [0-11].
 * @param {Number}   The number to check if within range.
 * @return {Boolean} true if within range, otherwise false.
 */
Date.validateMonth = function (value) {
    return validate(value, 0, 11, "month");
};
/**
 * Validates the number is within an acceptable range for years.
 * @param {Number}   The number to check if within range.
 * @return {Boolean} true if within range, otherwise false.
 */
Date.validateYear = function (value) {
    return validate(value, 0, 9999, "year");
};

var Hashes = /** @class */ (function () {
    function Hashes() {
    }
    Hashes.utf8_encode = function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        
        return utftext;
    };
    
    Hashes.utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c2 = 0;
        var c = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i + 1);
                var c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        
        return string;
    };
    
    Hashes.md5 = function (s) {
        function add32(a, b) {
            return (a + b) & 0xFFFFFFFF;
        }
        
        function md5cycle(x, k) {
            var a = x[0], b = x[1], c = x[2], d = x[3];
            a = ff(a, b, c, d, k[0], 7, -680876936);
            d = ff(d, a, b, c, k[1], 12, -389564586);
            c = ff(c, d, a, b, k[2], 17, 606105819);
            b = ff(b, c, d, a, k[3], 22, -1044525330);
            a = ff(a, b, c, d, k[4], 7, -176418897);
            d = ff(d, a, b, c, k[5], 12, 1200080426);
            c = ff(c, d, a, b, k[6], 17, -1473231341);
            b = ff(b, c, d, a, k[7], 22, -45705983);
            a = ff(a, b, c, d, k[8], 7, 1770035416);
            d = ff(d, a, b, c, k[9], 12, -1958414417);
            c = ff(c, d, a, b, k[10], 17, -42063);
            b = ff(b, c, d, a, k[11], 22, -1990404162);
            a = ff(a, b, c, d, k[12], 7, 1804603682);
            d = ff(d, a, b, c, k[13], 12, -40341101);
            c = ff(c, d, a, b, k[14], 17, -1502002290);
            b = ff(b, c, d, a, k[15], 22, 1236535329);
            a = gg(a, b, c, d, k[1], 5, -165796510);
            d = gg(d, a, b, c, k[6], 9, -1069501632);
            c = gg(c, d, a, b, k[11], 14, 643717713);
            b = gg(b, c, d, a, k[0], 20, -373897302);
            a = gg(a, b, c, d, k[5], 5, -701558691);
            d = gg(d, a, b, c, k[10], 9, 38016083);
            c = gg(c, d, a, b, k[15], 14, -660478335);
            b = gg(b, c, d, a, k[4], 20, -405537848);
            a = gg(a, b, c, d, k[9], 5, 568446438);
            d = gg(d, a, b, c, k[14], 9, -1019803690);
            c = gg(c, d, a, b, k[3], 14, -187363961);
            b = gg(b, c, d, a, k[8], 20, 1163531501);
            a = gg(a, b, c, d, k[13], 5, -1444681467);
            d = gg(d, a, b, c, k[2], 9, -51403784);
            c = gg(c, d, a, b, k[7], 14, 1735328473);
            b = gg(b, c, d, a, k[12], 20, -1926607734);
            a = hh(a, b, c, d, k[5], 4, -378558);
            d = hh(d, a, b, c, k[8], 11, -2022574463);
            c = hh(c, d, a, b, k[11], 16, 1839030562);
            b = hh(b, c, d, a, k[14], 23, -35309556);
            a = hh(a, b, c, d, k[1], 4, -1530992060);
            d = hh(d, a, b, c, k[4], 11, 1272893353);
            c = hh(c, d, a, b, k[7], 16, -155497632);
            b = hh(b, c, d, a, k[10], 23, -1094730640);
            a = hh(a, b, c, d, k[13], 4, 681279174);
            d = hh(d, a, b, c, k[0], 11, -358537222);
            c = hh(c, d, a, b, k[3], 16, -722521979);
            b = hh(b, c, d, a, k[6], 23, 76029189);
            a = hh(a, b, c, d, k[9], 4, -640364487);
            d = hh(d, a, b, c, k[12], 11, -421815835);
            c = hh(c, d, a, b, k[15], 16, 530742520);
            b = hh(b, c, d, a, k[2], 23, -995338651);
            a = ii(a, b, c, d, k[0], 6, -198630844);
            d = ii(d, a, b, c, k[7], 10, 1126891415);
            c = ii(c, d, a, b, k[14], 15, -1416354905);
            b = ii(b, c, d, a, k[5], 21, -57434055);
            a = ii(a, b, c, d, k[12], 6, 1700485571);
            d = ii(d, a, b, c, k[3], 10, -1894986606);
            c = ii(c, d, a, b, k[10], 15, -1051523);
            b = ii(b, c, d, a, k[1], 21, -2054922799);
            a = ii(a, b, c, d, k[8], 6, 1873313359);
            d = ii(d, a, b, c, k[15], 10, -30611744);
            c = ii(c, d, a, b, k[6], 15, -1560198380);
            b = ii(b, c, d, a, k[13], 21, 1309151649);
            a = ii(a, b, c, d, k[4], 6, -145523070);
            d = ii(d, a, b, c, k[11], 10, -1120210379);
            c = ii(c, d, a, b, k[2], 15, 718787259);
            b = ii(b, c, d, a, k[9], 21, -343485551);
            x[0] = add32(a, x[0]);
            x[1] = add32(b, x[1]);
            x[2] = add32(c, x[2]);
            x[3] = add32(d, x[3]);
        }
        
        function cmn(q, a, b, x, s, t) {
            a = add32(add32(a, q), add32(x, t));
            return add32((a << s) | (a >>> (32 - s)), b);
        }
        
        function ff(a, b, c, d, x, s, t) {
            return cmn((b & c) | ((~b) & d), a, b, x, s, t);
        }
        
        function gg(a, b, c, d, x, s, t) {
            return cmn((b & d) | (c & (~d)), a, b, x, s, t);
        }
        
        function hh(a, b, c, d, x, s, t) {
            return cmn(b ^ c ^ d, a, b, x, s, t);
        }
        
        function ii(a, b, c, d, x, s, t) {
            return cmn(c ^ (b | (~d)), a, b, x, s, t);
        }
        
        function md51(s) {
            var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i;
            for (i = 64; i <= s.length; i += 64) {
                md5cycle(state, md5blk(s.substring(i - 64, i)));
            }
            s = s.substring(i - 64);
            var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (i = 0; i < s.length; i++)
                tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
            tail[i >> 2] |= 0x80 << ((i % 4) << 3);
            if (i > 55) {
                md5cycle(state, tail);
                for (i = 0; i < 16; i++)
                    tail[i] = 0;
            }
            tail[14] = n * 8;
            md5cycle(state, tail);
            return state;
        }
        
        /* there needs to be support for Unicode here,
         * unless we pretend that we can redefine the MD-5
         * algorithm for multi-byte characters (perhaps
         * by adding every four 16-bit characters and
         * shortening the sum to 32 bits). Otherwise
         * I suggest performing MD-5 as if every character
         * was two bytes--e.g., 0040 0025 = @%--but then
         * how will an ordinary MD-5 sum be matched?
         * There is no way to standardize text to something
         * like UTF-8 before transformation; speed cost is
         * utterly prohibitive. The JavaScript standard
         * itself needs to look at this: it should start
         * providing access to strings as preformed UTF-8
         * 8-bit unsigned value arrays.
         */
        function md5blk(s) {
            var md5blks = [], i; /* Andy King said do it this way. */
            for (i = 0; i < 64; i += 4) {
                md5blks[i >> 2] = s.charCodeAt(i) +
                    (s.charCodeAt(i + 1) << 8) +
                    (s.charCodeAt(i + 2) << 16) +
                    (s.charCodeAt(i + 3) << 24);
            }
            return md5blks;
        }
        
        var hex_chr = '0123456789abcdef'.split('');
        function rhex(n) {
            var s = '', j = 0;
            for (; j < 4; j++)
                s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] +
                    hex_chr[(n >> (j * 8)) & 0x0F];
            return s;
        }
        
        function hex(x) {
            for (var i = 0; i < x.length; i++)
                x[i] = rhex(x[i]);
            return x.join('');
        }
        
        return hex(md51(s));
    };
    
    return Hashes;
}());

var App = /** @class */ (function () {
    function App() {
        this.IOKey = Hashes.md5(new Date().toMySQL().split(' ')[0]);
    }
    App.onReady = function () {
        window.setTimeout(function () {
            function fade(el, type, ms) {
                var isIn = type === 'in', opacity = isIn ? 0 : 1, interval = 50, duration = ms, gap = interval / duration;
                if (isIn) {
                    el.style.display = 'inline';
                    el.style.opacity = opacity;
                }
                
                function func() {
                    opacity = isIn ? opacity + gap : opacity - gap;
                    el.style.opacity = opacity;
                    if (opacity <= 0)
                        el.style.display = 'none';
                    if (opacity <= 0 || opacity >= 1)
                        window.clearInterval(fading);
                }
                
                var fading = window.setInterval(func, interval);
            }
            
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
        
        return uuid.join('');
    };
    
    return App;
}());

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

var DB = /** @class */ (function () {
    function DB() {
    }
    DB.get = function (uri, cb) {
        function ajax(o) {
            var xhr = new XMLHttpRequest();
            xhr.open(o.type, o.url);
            xhr.setRequestHeader('Content-Type', o.contentType);
            xhr.onload = function () {
                if (xhr.status === 200)
                    o.success(xhr.responseText);
                else {
                    if (o.error)
                        o.error(xhr.status);
                }
            };
            if ((typeof o.data === "object") && (o.data !== null))
                xhr.send(JSON.stringify(o.data));
            else
                xhr.send(o.data);
        }
        if (uri.indexOf('://') == -1)
            return cb(false);
        var post = [
            {
                "action": "__QUERY__",
                "method": "exec",
                "data": [
                    { "__SQL__": uri }
                ],
                "type": "rpc",
                "tid": 1
            }
        ];
        var url = Settings.DB[uri.split('://')[0]];
        url += "/api";
        url = url.replace(/([^:]\/)\/+/g, url);
        ajax({
            type: 'post',
            url: url,
            data: JSON.stringify(post),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                data = JSON.parse(data);
                cb(data[0].result);
            }
        });
    };
    return DB;
}());

exports.App = App;
exports.DB = DB;

Object.defineProperty(exports, '__esModule', { value: true });

})));