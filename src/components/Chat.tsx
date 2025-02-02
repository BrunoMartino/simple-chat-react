import { useUser } from "@/context/UserContext";
import { NameInput } from "./NameInput";
import { ChatInput } from "./ChatInput";
import { ChatTable } from "./ChatTable";

export function Chat() {
  const userCtx = useUser();
  if (!userCtx) return null;
  if (!userCtx.user) return <NameInput />;

  return (
    <div className="border border-gray-300 rounded-md">
      <div className="h-96 p-3 overflow-y-scroll">
        <ChatTable />
      </div>
      <div className="border-t border-t-gray-300 p-3">
        <ChatInput name={userCtx.user} />
      </div>
      <div className="border-t border-t-gray-300 p-3">
        <ChatInput name="Bot" />
      </div>
    </div>
  );
}
