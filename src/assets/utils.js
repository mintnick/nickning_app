function url_target(url) {
  return url.startsWith('http') ? '_blank' : '_self';
}

export {
  url_target,
}