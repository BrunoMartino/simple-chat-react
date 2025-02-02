import { useUser } from "@/context/UserContext";
import { KeyboardEvent, useState } from "react";

export function NameInput() {
  const userCtx = useUser();
  const [userName, setUserName] = useState("");

  const handleKeyupAction = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLocaleLowerCase() === "enter") {
      if (userName.trim() !== "" && userName !== "bot") {
        userCtx?.setUser(userName.trim());
      }
    }
  };

  return (
    <div className="mt-14">
      <p className="text-xl mb-4">Qual seu nome?</p>
      <div className="flex gap-3 items-center text-lg">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="flex-1 border border-gray-300 rounded-md px-4 py-3 text-white bg-slate-950 outline-none"
          onKeyUp={handleKeyupAction}
        />
      </div>
    </div>
  );
}
