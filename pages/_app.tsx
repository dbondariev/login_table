// pages/_app.tsx
import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";

interface MyAppProps {
    Component: React.ComponentType<any>;
    pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
