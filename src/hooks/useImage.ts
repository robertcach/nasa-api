import { API_KEY, API_URL } from "../constants";

export function useImage(url?: string) {
  return fetch(
    `${API_URL}?api_key=${API_KEY}${url && url?.length > 0 ? url : ""}`
  ).then((res) => res.json());
}
