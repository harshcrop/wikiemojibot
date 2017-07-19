'use strict';

class ImageIncomplete {
  constructor(key) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }

  toString() {
    return '¯\\_(ツ)_/¯ Try searching https://commons.wikimedia.org/wiki/Category:Images for that!';
  }
}

module.exports = ImageIncomplete;
