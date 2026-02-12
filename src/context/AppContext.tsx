import { createContext, useContext } from "react";
import axios from "axios";
// import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

interface IAppContext {
  navigate: ReturnType<typeof useNavigate>;
  currency: string;
  axios: typeof axios;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {

  const navigate = useNavigate();
  const currency = import.meta.env.VITE_CURRENCY;


  const value: IAppContext = {
    navigate,
    currency,
    axios
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): IAppContext => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};
