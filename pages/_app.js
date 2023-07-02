import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { CookiesProvider } from "react-cookie";

//최종적으로 Component들이 모여서 보여지는 곳 !!!!
export default function App({ Component, pageProps }) {
  return (
    <div>
      <CookiesProvider>
        <Global styles={globalStyles}/>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </CookiesProvider>
    </div>
)
}
