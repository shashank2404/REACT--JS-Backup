import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-white/40 backdrop-blur-md shadow-md p-4 rounded-2xl text-sm flex items-center gap-4 transition hover:shadow-lg ${className}`}
    >
      {/* Amount Input */}
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-gray-600 font-medium mb-2 inline-block tracking-wide"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-white/80 text-gray-800 placeholder-gray-400 py-2 px-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          type="number"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency Select */}
      <div className="w-1/2 flex flex-col items-end text-right">
        <p className="text-gray-600 font-medium mb-2 tracking-wide">
          Currency Type
        </p>
        <select
          className="rounded-lg px-3 py-2 bg-white/80 text-gray-800 border border-gray-300 cursor-pointer outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
