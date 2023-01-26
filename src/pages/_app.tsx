// types
import type { AppProps } from "next/app";
// libs
import { useRouter } from "next/router";
// components


// hooks
// store
// utils & animation
import "../../styles/tailwind.css";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
          <Component {...pageProps} />
    </>
  );
}

export default MyApp;
