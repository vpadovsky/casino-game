import React, { useState } from 'react';
import { setSpin } from "../api/main";

const SlotMachine = () => {
  const [balance, setBalance] = useState(20);
  const [result, setResult] = useState([]);
  const [winnings, setWinnings] = useState(0);

  const spinSlot = async () => {
    try {
      const response = await setSpin();
      setResult(response.data.result);
      setWinnings(response.data.winnings);
      response.data.winnings > 0
        ? setBalance((prevState) => prevState - 1 + response.data.winnings)
        : setBalance((prevState) => prevState - 1);
    } catch (error) {
      console.error('Error spinning the slot:', error);
    }
  };

  const emojiMap = {
    lemon: '🍋',
    apple: '🍎',
    cherry: '🍒',
    banana: '🍌',
  };

  //Get emojis from words
  const updatedResult = result.map((item) =>
    item
      .split(/,\s*/)
      .map((word) => emojiMap[word] || '')
      .join(', ')
  );

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Slot Machine</h2>
      <button
        onClick={spinSlot}
        className="px-4 py-2 bg-blue-600 text-white rounded mb-4"
        disabled={balance <= 0}
      >
        Spin
      </button>
      <div className="mb-2">Balance: {balance} coins</div>
      {result.length > 0 && (
        <div className="mb-2">
          Result: {updatedResult.join(' | ')}
          <br />
          Winnings: {winnings ? winnings : 0} coins
        </div>
      )}
    </section>
  );
};

export default SlotMachine;
