import React, { useState } from 'react';
import axios from 'axios';

const SlotMachine = () => {
  const [balance, setBalance] = useState(20);
  const [result, setResult] = useState([]);
  const [winnings, setWinnings] = useState(0);

  console.log('balance', balance);

  const spinSlot = async () => {
    try {
      const response = await axios.post('http://localhost:3000/slot/spin');
      console.log('response', response.data);
      setResult(response.data.result);
      setWinnings(response.data.winnings);
      // console.log('BE balance', response.data.balance)
      response.data.winnings > 0
        ? setBalance((prevState) => prevState - 1 + response.data.winnings)
        : setBalance((prevState) => prevState - 1);
    } catch (error) {
      console.error('Error spinning the slot:', error);
    }
  };

  console.log('result', result);

  const emojiMap = {
    lemon: '🍋',
    apple: '🍎',
    cherry: '🍒',
    banana: '🍌',
  };

  //Get emojis against words
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
