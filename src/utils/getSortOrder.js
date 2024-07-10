export function getSortOrder() {
  const params = new URLSearchParams(location.search);
  const sort = params.get("sort");
  const order = params.get("order");
  if (!sort) return null;
  return sort == "createdAt" ? sort : order;
}