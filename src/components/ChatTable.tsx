import { useChat } from "@/context/ChatContext";
import { useUser } from "@/context/UserContext";

export function ChatTable() {
  const chatCtx = useChat();
  const userCtx = useUser();

  return (
    <div className="flex flex-col gap-2">
      {chatCtx?.chat.map((item) => (
        <div
          key={item.id}
          className={`border border-gray-200 rounded-md p-2 text-sm 
            ${
              item.user === userCtx?.user
                ? "self-end bg-blue-800 text-right"
                : "self-start bg-orange-800 text-left"
            }
            `}
        >
          <div className="font-bold">{item.user}</div>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
