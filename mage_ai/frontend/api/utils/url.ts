import { queryString } from '@utils/url';

const LOCALHOST = 'localhost';
const PORT = 5000;

export function buildUrl(
  resource: string,
  id: string = null,
  childResource: string = null,
  childId: string = null,
  query: any = {},
): string {
  let host = LOCALHOST;
  let protocol = 'http://';
  if (typeof window !== 'undefined') {
    host = window.location.hostname;
  }
  if (host !== LOCALHOST) {
    protocol = 'https://';
  }
  let path: string = `${protocol}${host}:${PORT}/${resource}`;

  if (id) {
    path = `${path}/${id}`;
  }
  if (childResource) {
    path = `${path}/${childResource}`;
  }
  if (childId) {
    path = `${path}/${childId}`;
  }

  if (Object.values(query).length >= 1) {
    path = `${path}?${queryString(query)}`;
  }

  return path;
}

export default {
  buildUrl,
};