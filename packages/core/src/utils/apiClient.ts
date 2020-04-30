import {BASE_URL} from './values';

export default async function apiClient(url: string, body: any, options: any) {
  const res = await fetch(`${BASE_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (res.ok) {
    return await res.json();
  }

  throw new Error(await res.text());
}
