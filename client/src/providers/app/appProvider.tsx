import React, { useState, useEffect, useRef } from "react";
import { CallbackFunction, AppContext } from "./appContext";

const AppProvider = ({ children }: any) => {
  const [loader, setAppLoader] = useState<any>(false)

  const handleApi = async (
    apiCall: any,
    handleResponse?: (res: any) => void,
    handleAppError?: (res: any) => void,
    loader: boolean = true
  ) => {
    try {
      if (loader) {
        setAppLoader("");
        console.log('setapploader')
      }

      const res = await apiCall();
      console.log(res,"<-----------------------resto------------->")

      if (res.data.isError) {
        if (handleAppError) {
          handleAppError(res.data.data);
        } else {
          // showCommonError();
          console.log('handleapierror')
        }
      } else if (res?.code === 200) {
        handleResponse && handleResponse(res.data);
        return res.data;
      }
      return false;
    } catch (error) {
      if (error && error.code !== 401) {
        // showCommonError();
        console.log(error.code)
      }
      return false;
    } finally {
      if (loader) {
        // hideAppLoader();
        console.log(loader)
      }
    }
  };

      return (
      <AppContext.Provider
        value ={{handleApi}}
        >
          {children}
      </AppContext.Provider>)

}

export default AppProvider;
