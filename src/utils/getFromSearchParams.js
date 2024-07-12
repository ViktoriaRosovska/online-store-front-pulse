export function getFromSearchParams(prop, def = [], proj = null) {
  const params = new URLSearchParams(location.search);
  const value = params.get(prop);
  if (!value) return def;

  const arr = value.split(",");
  if (proj) return arr.map(proj);
  return arr;
}