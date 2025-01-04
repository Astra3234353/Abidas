export function getUrlParam(param) {
  const url = new URL(window.location.href);
  console.log(url.searchParams.get(`${param}`));
  return url.searchParams.get(`${param}`);
}