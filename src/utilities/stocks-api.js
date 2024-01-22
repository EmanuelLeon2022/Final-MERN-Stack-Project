import {sendRequest} from './send-request';

const BASE_URL = '/api/stocks';

export function getAll() {
  return sendRequest(`${BASE_URL}/index`);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}