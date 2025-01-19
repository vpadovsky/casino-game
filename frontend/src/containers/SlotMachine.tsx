import React, { useState, useCallback } from "react";
import { setSpin } from "../api/main";

const SlotMachine = () => {
  const [balance, setBalance] = useState(20);
  const [result, setResult] = useState([]);
  const [winnings, setWinnings] = useState(0);

  // Map emoji strings to actual emojis
  const emojiMap = {
    lemon: "🍋",
    apple: "🍎",
    cherry: "🍒",
    banana: "🍌",
  };

  // Function to spin the slot machine
  const spinSlot = useCallback(async () => {
    if (balance <= 0) return;

    try {
      const response = await setSpin();
      const { result: rawResult, winnings: spinWinnings } = response.data;

      setResult(rawResult);
      setWinnings(spinWinnings);

      const newBalance = balance - 1 + (spinWinnings || 0);
      setBalance(newBalance);
    } catch (error) {
      console.error("Error spinning the slot:", error);
    }
  }, [balance]);

  // Get emojis from words in the result array
  const updatedResult = result.map((item) =>
      item
          .split(/,\s*/)
          .map((word) => emojiMap[word] || word) // Ensure fallback if the word isn't found in the emoji map
          .join(" | ")
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
              <p>Result: {updatedResult.join(" | ")}</p>
              <p>Winnings: {winnings || 0} coins</p>
            </div>
        )}
      </section>
  );
};

export default SlotMachine;
