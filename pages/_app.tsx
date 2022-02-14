import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import siteMetadata from "@/data/siteMetadata";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
