const BASE_URL = "https://react-fast-pizza-api.jonas.io/api";
export async function getMenu() {
  const res = await fetch(`${BASE_URL}/menu`);
  if (!res.ok) throw Error("Data not fetched");
  const { data } = await res.json();
  return data;
}
