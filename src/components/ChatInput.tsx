import { useChat } from "@/context/ChatContext";
import { KeyboardEvent, useState } from "react";

type Props = {
  name: string;
};

export function ChatInput({ name }: Props) {
  const chatCtx = useChat();
  const [textInput, setTextInput] = useState("");

  const handleKeyupAction = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLocaleLowerCase() === "enter") {
      if (textInput.trim() !== "") {
        chatCtx?.addMessage(name, textInput.trim());
        setTextInput("");
      }
    }
  };

  return (
    <input
      type="text"
      placeholder={`${name}, digite uma mensagem e aperte ENTER`}
      className="w-full bg-transparent text-white text-md outline-none"
      value={textInput}
      onChange={(e) => setTextInput(e.target.value)}
      onKeyUp={handleKeyupAction}
    />
  );
}
