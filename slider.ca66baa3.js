parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wzuc":[function(require,module,exports) {
$(document).ready(function(){$(".slider").slick({dots:!0,slidesToShow:1,slidesToScroll:1,arrows:!0,speed:1e3,easing:"ease",waitForAnimate:!1,autoplay:!0,autoplaySpeed:4e3,responsive:[{breakpoint:767,settings:{arrows:!1,dots:!1,waitForAnimate:!0,asNavFor:".small-slider"}}]}),$(".small-slider").slick({responsive:[{breakpoint:767,settings:{adaptiveHeight:!0,slidesToShow:3,slidesToScroll:1,centerMode:!0,centerPadding:20,speed:1e3,easing:"ease",waitForAnimate:!0,focusOnSelect:!0,asNavFor:".slider"}}]})});
},{}]},{},["wzuc"], null)
//# sourceMappingURL=/hellen-project/slider.ca66baa3.js.map