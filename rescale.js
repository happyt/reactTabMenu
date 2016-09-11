var parse = require('parse-svg-path')
var scale = require('scale-svg-path')
var serialize = require('serialize-svg-path')
 
var path = parse('M10 10 L15 15')
var x = scale(path, 0.5)
var xy = scale(path, 0.5, 1.5)
 
serialize(x)
// => 'M5 5 L7.5 7.5' 
 
serialize(xy)
// => 'M5 15 L7.5 22.5'