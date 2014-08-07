'use strict';

// See http://stackoverflow.com/a/2117523/1333873 for details.
var uuid = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (character) {
    var randomNumber = Math.random() * 16 | 0,
        result =
          character === 'x' ?
            randomNumber :
            randomNumber & 0x3 | 0x8;

    return result.toString(16);
  });
};

uuid.empty = function () {
  return '00000000-0000-0000-0000-000000000000';
};

module.exports = uuid;
