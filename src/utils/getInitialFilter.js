export function getInitialFilter(def) {
  const filter = {
    sex: "",
    brand: "",
    season: "",
    size: "",
    color: "",
    page: 1,
    sort: "",
    order: "",
    ...def,
  };

  const params = new URLSearchParams(location.search);
  for (const key of Object.keys(filter)) {
    if (!params.has(key)) continue;
    const value = params.get(key);
    if (!value) continue;
    filter[key] = value;
  }

  return filter;
}