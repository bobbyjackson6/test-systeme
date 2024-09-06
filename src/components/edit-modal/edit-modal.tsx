import React, { useState, ChangeEvent, useEffect } from "react";

interface StringInputProps {
  initialId: number;
  initialString: string;
  onStringChange: (newString: string, initialId: number) => void;
  onClose: () => void;
}

export const StringInput: React.FC<StringInputProps> = ({
  initialId,
  initialString,
  onStringChange,
  onClose,
}) => {
  const [inputValue, setInputValue] = useState<string>(initialString);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onStringChange(newValue, initialId);
  };

  useEffect(() => {
    setInputValue(initialString);
  }, [initialString]);

  useEffect(() => {
    const handleEnterPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleEnterPress);

    return () => {
      window.removeEventListener("keydown", handleEnterPress);
    };
  }, [onClose]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите текст"
      />
      <button onClick={onClose} type="submit">
        Accept
      </button>
    </div>
  );
};
