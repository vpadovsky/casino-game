import React, { useState } from 'react';
import { getCurrencyConvert } from "../api/main";

const CurrencyConverter: React.FC = () => {
  const BALANCE_INIT_QUANTITY = 20;
  const balance = BALANCE_INIT_QUANTITY;
  const [convertedBalance, setConvertedBalance] = useState<string | null>(null);
  const [currency, setCurrency] = useState<string>('EUR');

  const convertCurrency = async () => {
    try {
        getCurrencyConvert(balance, currency).then((data) => {
            console.log('data', data);
            setConvertedBalance(data.data.converted);
        });
    } catch (error) {
      console.error('Error converting currency:', error);
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Currency Converter</h2>
      <div className="mb-4">
        <label className="block mb-1">Choose Currency:</label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>
      </div>
      <button
        onClick={convertCurrency}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Convert
      </button>
      {convertedBalance && (
        <div className="mt-2">
          Converted Balance: {convertedBalance} {currency}
        </div>
      )}
    </section>
  );
};

export default CurrencyConverter;
