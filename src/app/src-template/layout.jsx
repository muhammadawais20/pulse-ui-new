"use client";
import React, { useEffect } from "react";
import "../../style.scss";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../../common/store/store";
import { Provider } from "react-redux";
import axios from "axios";

export const runtime = 'edge';

import Layout from "../../components/src-template-component/Layout";


export default function NewPageLayout({ children }) {
  useEffect(() => {
    axios.defaults.baseURL = process.env.API_BASE_URL;
    axios.defaults.headers.post["Content-Type"] = "application/json";
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
        {children}
        </Layout>
      </PersistGate>
    </Provider>
  );
}