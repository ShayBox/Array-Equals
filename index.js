Object.defineProperty(Array.prototype, 'equals', {
  value: function(array) {
    if (this === array) return true;
    if (this == null || array == null) return false;
    if (this.length !== array.length) return false;

    for (let i = 0; i < this.length; ++i) {
        if (this[i] !== array[i]) return false;
    }

    return true;
  }
})