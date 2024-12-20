/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const emojies = ["😎", "💗", "⚙️", "✌️", "⭐", "💴"];

const Cards = () => {
  const [emoji, setEmoji] = useState(
    [...emojies, ...emojies].sort(() => Math.random() - 0.5)
  );
  const [turns, setTurns] = useState(0);
  const [match, setMatch] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [matchedCards, setMatchedCards] = useState([]);
  const [gameWon, setGameWon] = useState(false);

  // Handle card selection
  const handleChoice = (item, index) => {
    if (!choiceOne) {
      setChoiceOne({ item, index });
    } else if (choiceOne.index !== index) {
      setChoiceTwo({ item, index });
    }
  };

  // Check for match or reset choices
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setTurns((prev) => prev + 1);

      if (choiceOne.item === choiceTwo.item) {
        setMatchedCards((prev) => [...prev, choiceOne.index, choiceTwo.index]);
        setMatch((prev) => prev + 1);
      }

      setTimeout(() => resetChoices(), 1000);
    }
  }, [choiceOne, choiceTwo]);

  // Check if the game is won
  useEffect(() => {
    if (matchedCards.length === emoji.length) {
      setGameWon(true);
    }
  }, [matchedCards]);

  // Reset card choices
  const resetChoices = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  // Reset the game
  const resetGame = () => {
    setEmoji([...emojies, ...emojies].sort(() => Math.random() - 0.5));
    setTurns(0);
    setMatch(0);
    setMatchedCards([]);
    setGameWon(false);
    resetChoices();
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-10">
      <h1 className="text-5xl underline font-light">Memory Game</h1>

      <div className="h-80 flex items-center justify-center">
        {gameWon ? (
          <div className="text-4xl font-bold text-green-500">
            🎉 You Won! 🎉
          </div>
        ) : (
          <div className="bg-stone-600 rounded-lg px-6 py-3 grid grid-cols-4 gap-5">
            {emoji.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleChoice(item, idx)}
                className={`bg-stone-800 relative cursor-pointer p-10 rounded-lg flex ${
                  matchedCards.includes(idx) ? "bg-green-400" : ""
                }`}
              >
                {choiceOne?.index === idx ||
                choiceTwo?.index === idx ||
                matchedCards.includes(idx) ? (
                  <div className="text-4xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    {item}
                  </div>
                ) : (
                  <div className="text-4xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    ❔
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-5">
        <div className="px-4 py-2 rounded-lg bg-zinc-500 text-white font-semibold">
          Turns: {turns}
        </div>
        <div className="px-4 py-2 rounded-lg bg-zinc-500 text-white font-semibold">
          Match Emojies: {match}
        </div>
        <div
          onClick={resetGame}
          className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold cursor-pointer active:scale-95"
        >
          Reset Game
        </div>
      </div>
    </div>
  );
};

export default Cards;
