import { createContext } from "react";
// Interface for the data
export interface User {
  name: string;
  age: number;
  isMarrried: boolean;
}
// interface for the context
interface UserContextType {
  users: User[] | null;
  addUser: (user: User) => void;
  updateUser: (id: string) => void;
  deleteUser: (id: string) => void;
}
// Interface for initial context values
const initialContextValues = {
  users: null,
  addUser: () => null,
  updateUser: () => null,
  deleteUser: () => null,
};
// interface for the children
interface ChildrenProp {
  children: React.ReactNode;
}
export const UserContext = createContext<UserContextType>(initialContextValues);
export const UserContextProvider = ({ children }: ChildrenProp) => {
  const value = initialContextValues;
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
