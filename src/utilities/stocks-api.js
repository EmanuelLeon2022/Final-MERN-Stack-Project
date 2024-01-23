import {sendRequest} from './send-request';

const BASE_URL = '/api/stocks';

export function getAll() {
  return sendRequest(`${BASE_URL}/index`);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function loadUp(stockData) {
  return sendRequest(BASE_URL, "POST", stockData)
}

// export async function endMe(stockData){
//   return sendRequest(BASE_URL, "")
// }