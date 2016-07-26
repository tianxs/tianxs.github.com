define(function(require,exports,module){
    exports.getStyle=function(obj,name){
    return (obj.currentStyle || getComputedStyle(obj,false))[name];
}
})
