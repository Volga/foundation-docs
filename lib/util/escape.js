module.exports = function(text) {
  let cyrillicToTranslit = require('cyrillic-to-translit-js');

  if (typeof text === 'undefined') return '';
  return cyrillicToTranslit().transform(text,"-").toLowerCase().replace(/[^\w]+/g, '-');
}
