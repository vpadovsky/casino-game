import React, { useState } from 'react';
import axios from 'axios';

const CurrencyConverter: React.FC = () => {
  const [balance, setBalance] = useState<number>(20);
  const [convertedBalance, setConvertedBalance] = useState<string | null>(null);
  const [currency, setCurrency] = useState<string>('EUR');
  console.log('convertedBalance', convertedBalance);
  const convertCurrency = async () => {
    try {
      //TODO: move api
      const response = await axios.get(
        'http://localhost:3000/currency/convert',
        {
          params: { amount: balance, to: currency },
        }
      );
      setConvertedBalance(response.data.converted);
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
