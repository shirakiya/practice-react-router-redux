import 'whatwg-fetch';

export function get(url) {
  return fetch(url).then(res => res.json());
}

export function post(url, paramBody = {}) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(paramBody),
  }).then(res => res.json());
}
