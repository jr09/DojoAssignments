function fib() {
  var x = 0;
  var y = 1;
  function nacci() {
    console.log(x+y);
    var temp = y;
    y=x+y;
    x=temp;
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
fibCounter() // should console.log "13"
