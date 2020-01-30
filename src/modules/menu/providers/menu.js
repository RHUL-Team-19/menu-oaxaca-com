import { get } from 'axios';

export function withMenu(fn) {
  return function(props) {
    return fn(get("https://api-oaxaca-com.wsantos.net/menu/"));
  }
}
