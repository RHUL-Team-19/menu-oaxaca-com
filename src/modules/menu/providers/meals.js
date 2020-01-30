export function withMe(fn) {
  return function(props) {
    return fn();
  }
}
