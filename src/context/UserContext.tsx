import { createContext, ReactNode, useContext, useState } from "react";

export type UserContext = {
  user: string;
  setUser: (newUser: string) => void;
};

type Props = {
  children: ReactNode;
};

export const UserContext = createContext<UserContext | null>(null);

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
