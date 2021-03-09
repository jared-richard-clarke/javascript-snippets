// === Modeled after a polyfill by Douglas Crockford ===

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}

const newObject = Object.create(oldObject);
