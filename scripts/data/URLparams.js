export function getUrlParam(param) {
  const url = new URL(window.location.href);
  console.log('URL PARAM:',url.searchParams.get(`${param}`));
  return url.searchParams.get(`${param}`);
}