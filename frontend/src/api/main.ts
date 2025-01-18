import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export const getGames = (endpoint: string) => axios.get(REACT_APP_API_URL + endpoint);

export const getCurrencyConvert = (balance: number, currency: string) => axios.get(REACT_APP_API_URL + '/currency/convert', {
    params: {amount: balance, to: currency},
});

export const setSpin = () => axios.post(REACT_APP_API_URL + '/slot/spin');

