let userBalance = 20;

const reels = [
    ["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"],
    ["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"],
    ["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"],
];

const spinSlot = (req, res) => {
    if (userBalance <= 0) return res.status(400).send({ message: 'Insufficient balance' });

    userBalance -= 1; // Deduct spin cost
    const spinResult = reels.map((reel) => reel[Math.floor(Math.random() * reel.length)]);
    const winnings = calculateWinnings(spinResult);
    userBalance += winnings;

    res.send({
        result: spinResult,
        winnings,
        balance: userBalance,
    });
};

const calculateWinnings = (spin) => {
    const rewards = {
        cherry: { 3: 50, 2: 40 },
        apple: { 3: 20, 2: 10 },
        banana: { 3: 15, 2: 5 },
        lemon: { 3: 3 },
    };

    const counts = spin.reduce((acc, fruit) => {
        acc[fruit] = (acc[fruit] || 0) + 1;
        return acc;
    }, {});

    for (let fruit in rewards) {
        const reward = rewards[fruit];
        if (counts[fruit] >= 3) return reward[3];
        if (counts[fruit] === 2) return reward[2];
    }

    return 0;
};

module.exports = { spinSlot };
