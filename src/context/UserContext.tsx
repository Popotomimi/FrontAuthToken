import { createContext, ReactNode, Dispatch, SetStateAction } from "react";
import useAuth from "../hooks/useAuth";

type User = {
  _id: string;
  name: string;
  email: string;
  [key: string]: unknown;
};

type LoginCredentials = {
  email: string;
  password: string;
};

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

type ContextProps = {
  authenticated: boolean;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  login: (credentials: LoginCredentials) => Promise<void>;
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

export const Context = createContext<ContextProps | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export function UserProvider({ children }: UserProviderProps) {
  const { authenticated, register, logout, login, user, setUser } = useAuth();

  return (
    <Context.Provider
      value={{ authenticated, register, logout, login, user, setUser }}>
      {children}
    </Context.Provider>
  );
}
