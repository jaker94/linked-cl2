import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    </SessionProvider>
  );
}
