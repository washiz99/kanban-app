exports.command = function (selector, value) {
  return this.cleareValue(selector)
    .setValue(selector, value)
    .trigger(selector, 'keyup', 13)
}
