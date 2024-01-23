import * as stocksAPI from './stocks-api'

export async function loadUp(stockData) {
    const tebu = await stocksAPI.loadUp(stockData);
    localStorage.setItem("tebu", tebu);
    return tebu;
  }
export async function endMe(stockData){
  const tebu = await stocksAPI.endMe(stockData);
  localStorage.removeItem("tebu", tebu);
  return tebu;
}