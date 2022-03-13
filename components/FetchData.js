const baseURL = "https://task-api-eosin.vercel.app/api";

export const getData = async (target) => {
  const res = await fetch(baseURL + target);
  const data = await res?.json();

  return data;
};
