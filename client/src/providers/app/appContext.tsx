import { createContext, useContext } from "react";
export type CallbackFunction = () => void;

type ContextProps = {
//     storage: any;
//   addStorage: (key: string, value: any) => void;
//   clearStorage: (key?: any) => void;

//   tokenStorage: any;
//   addTokenStorage: (key: string, value: any) => void;
//   clearTokenStorage: (key?: any) => void;
handleApi: (
    apiCall: any,
    handleResponse?: (res: any) => void,
    handleAppError?: (res: any) => void,
    loader?: boolean
  ) => Promise<boolean>;
}

export const AppContext = createContext<ContextProps>({
    handleApi: async (
        apiCall: any,
        handleResponse?: (res: any) => void,
        handleAppError?: (res: any) => void,
        loader?: boolean
      ) => false,
})

export const useAppContext = () => useContext(AppContext);
