import React, { useState } from "react";
import { getCurrencyConvert } from "../api/main";

const BALANCE_INITIAL_QUANTITY = 20; // Extracted constant for reusability and clarity

const CurrencyConverter: React.FC = () => {
  const [convertedBalance, setConvertedBalance] = useState<string | null>(null);
  const [currency, setCurrency] = useState<string>("EUR");
  const [error, setError] = useState<string | null>(null);

  const convertCurrency = async () => {
    try {
      setError(null); // Reset error state before attempting conversion
      const response = await getCurrencyConvert(BALANCE_INITIAL_QUANTITY, currency);
      setConvertedBalance(response.data.converted);
    } catch (err) {
      console.error("Error converting currency:", err);
      setError("Failed to convert currency. Please try again later.");
    }
  };

  return (
      <section>
        <h2 className="text-2xl font-bold mb-4">Currency Converter</h2>
        <div className="mb-4">
          <label htmlFor="currency" className="block mb-1">
            Choose Currency:
          </label>
          <select
              id="currency"
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
            <div className="mt-4">
                Converted Balance: {convertedBalance} {currency}
            </div>
        )}
        {error && <div className="mt-4 text-red-600">{error}</div>}
      </section>
  );
};

export default CurrencyConverter;
