import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); // Note: `eval` is used here for simplicity, but use it cautiously
      setInput("");
    } catch {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult(null);
  };

  return (
    <main className="w-screen h-svh p-4 bg-slate-50 grid place-items-center">
      <div className="bg-white rounded-3xl shadow-2xl p-4 grid gap-4 w-full max-w-96">
        <div className="bg-stone-950 text-white rounded-2xl px-4 py-8 text-5xl text-end font-bold">
          {result !== null ? result : input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-2 font-bold">
          {["7", "8", "9", "/"].map((btn) => (
            <button
              className="bg-white shadow rounded-2xl p-4"
              key={btn}
              onClick={() => handleInput(btn)}
            >
              {btn}
            </button>
          ))}
          {["4", "5", "6", "*"].map((btn) => (
            <button
              className="bg-white shadow rounded-2xl p-4"
              key={btn}
              onClick={() => handleInput(btn)}
            >
              {btn}
            </button>
          ))}
          {["1", "2", "3", "-"].map((btn) => (
            <button
              className="bg-white shadow rounded-2xl p-4"
              key={btn}
              onClick={() => handleInput(btn)}
            >
              {btn}
            </button>
          ))}
          {["Clear", "0", ".", "+"].map((btn) => (
            <button
              className="bg-white shadow rounded-2xl p-4"
              key={btn}
              onClick={btn === "Clear" ? clearInput : () => handleInput(btn)}
            >
              {btn}
            </button>
          ))}
          <button
            className="bg-white shadow rounded-2xl p-4 col-span-4"
            onClick={calculateResult}
          >
            =
          </button>
        </div>
      </div>
    </main>
  );
};

export default Calculator;
