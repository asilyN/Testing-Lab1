import { useState } from "react";

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState("");
  const [isOn, setIsOn] = useState(true);
  const hellos = [
    "Hello", "Hola", "Bonjour", "Hallo", "Ciao",
    "こんにちは", "안녕하세요", "你好", "Привет", "Olá", "Kamusta"
  ];


  const handleNumber = (num: string) => {
    if (!isOn || currentNumber.length >= 10) return;
    if (num === "." && currentNumber.includes(".")) return;
    setCurrentNumber(currentNumber + num);
  };

  const handleOperator = (op: string) => {
    if (!isOn || currentNumber === "") return;
    const lastChar = currentNumber.slice(-1);
    const specialChars = ["%", "*", "/", "-", "+"];

    if (specialChars.includes(lastChar)) {
      if ((op === "-" && lastChar !== "-") || (op === "+" && lastChar !== "+")) {
        setCurrentNumber(currentNumber + op);
      } else {
        setCurrentNumber(currentNumber.slice(0, -1) + op);
      }
    } else {
      setCurrentNumber(currentNumber + op);
    }
  };

  const calculate = () => {
    if (!isOn || currentNumber === "") return;
    try {
      if (currentNumber.includes("/0") || currentNumber.includes("%0")) {
        setCurrentNumber("Error");
      } else {
        setCurrentNumber(eval(currentNumber).toString());
      }
    } catch {
      setCurrentNumber("Error");
    }
  };

  const handleHello = () => {
    if (!isOn) return;
    const randomHello = hellos[Math.floor(Math.random() * hellos.length)];
    setCurrentNumber(randomHello);
  };

  const handleGoodbye = () => {
    setCurrentNumber("Good Bye!");
    setTimeout(() => setIsOn(false), 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="max-w-xs w-full p-5 bg-white rounded-xl shadow-lg">
        <input
          type="text"
          className="w-full text-right text-4xl bg-gray-100 p-3 rounded-lg shadow-inner pointer-events-none"
          value={currentNumber}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2 mt-4">
          <button className="col-span-2 bg-pink-300 hover:bg-pink-400" onClick={handleHello}>HELLO</button>
          <button className="col-span-2 bg-pink-300 hover:bg-pink-400" onClick={handleGoodbye}>BYE</button>
          {["AC", "DEL", "%", "/"].map(op => (
            <button key={op} className="bg-gray-400 text-white" onClick={() => (op === "AC" ? setCurrentNumber("") : handleOperator(op))}>{op}</button>
          ))}
          {[7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", "00", 0, ".", "="].map(val => (
            <button
              key={val}
              className="bg-pink-200 hover:bg-pink-300"
              onClick={() => (val === "=" ? calculate() : typeof val === "number" || val === "." ? handleNumber(val.toString()) : handleOperator(val))}
            >
              {val}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;