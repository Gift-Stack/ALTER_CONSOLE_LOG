let log = console.log

console.log = function () {
  // 1. Convert args to a normal array
  let args = Array.prototype.slice.call(arguments)

  // 2. Prepend log prefix log string

  args = args?.map((arg) => typeof arg + ' ' + arg)

  // 3. Pass along arguments to console.log
  log.apply(console, args)
}

console.log('Test Me!')
console.log(23, 24)
