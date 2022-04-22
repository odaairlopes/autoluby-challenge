import {
  createContext,
  ReactNode,
  useEffect,
  useContext,
  useState,
} from "react";
import { setItem, getItem, removeItem } from "../hooks/useLocalStorage";
import { IUser, IVehicles } from "../types";
import { ErrorResponseData, getLogin } from "../services/api";

type User = Pick<IUser, keyof IUser> & {
  vehicles: IVehicles[];
};

export type AuthResponseData = {
  message: string;
  token: string;
  totalEmployees: number;
  totalVehicles: number;
  totalVehiclesLoggedUser: number;
  user: User;
};

type Response = AuthResponseData | ErrorResponseData;

export const isErrorResponseData = (
  data: Response
): data is ErrorResponseData => {
  return (data as ErrorResponseData).error !== undefined;
};

export type Login = {
  email: string;
  password: string;
};

type CompanyData = {
  totalEmployees: number;
  totalVehicles: number;
  totalVehiclesLoggedUser: number;
};

type UserAuthState = {
  message: string;
  token: string;
  user: User | undefined;
  companyData: CompanyData;
  isLoggedIn: boolean;
  login: (login: Login) => Promise<{ error: boolean }>;
  logout: () => void;
};

type UserAuthProviderProps = {
  children: ReactNode;
};

const UserAuth = createContext<UserAuthState | undefined>(undefined);

export const UserAuthProvider = ({ children }: UserAuthProviderProps) => {
  const [authData, setAuthData] = useState<AuthResponseData>(
    {} as AuthResponseData
  );

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function getAuthStorage() {
      const authStorage = await getItem<AuthResponseData>("@AutoLuby:auth");

      if (!authStorage) {
        return;
      }

      setAuthData(authStorage);
      setIsLoggedIn(true);
    }

    getAuthStorage();
  }, []);

  const login = async (login: Login) => {
    const data: Response = await getLogin(login);

    if (isErrorResponseData(data)) {
      return { error: true };
    }

    setAuthData(data);
    setIsLoggedIn(true);

    await setItem("@AutoLuby:auth", data);

    return { error: false };
  };

  const logout = () => {
    setIsLoggedIn(false);
    removeItem("@AutoLuby:auth");
  };

  const value = {
    message: authData.message,
    user: authData.user,
    token: authData.token,
    companyData: {
      totalEmployees: authData.totalEmployees,
      totalVehicles: authData.totalVehicles,
      totalVehiclesLoggedUser: authData.totalVehiclesLoggedUser,
    },
    isLoggedIn,
    login,
    logout,
  };

  return <UserAuth.Provider value={value}>{children}</UserAuth.Provider>;
};

export const useUserAuth = () => {
  const context = useContext(UserAuth);

  if (context === undefined) {
    throw new Error("useUserAuth must be used within a UserAuthProvider");
  }

  return context;
};
