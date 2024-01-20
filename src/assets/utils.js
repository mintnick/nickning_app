function url_target(url) {
  return url.startsWith('http') ? '_blank' : '_self';
}

function change_favicon(path) {
  let favicon = document.querySelector("link[rel~='icon']");
  if (!favicon) {
    favicon = document.createElement('link');
    favicon.rel = 'icon';
    document.head.appendChild(favicon);
  }
  favicon.href = path;
}

export {
  url_target,
  change_favicon,
}