import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
import Head from "next/head";
import styles from "./layout.module.scss";

export function RootLayout({ children }: { children: any }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <div className={styles?.rootContainer}>
        <div className={styles?.logoWrapper}>
          <img src="/logo.png" className={styles?.logo} alt="Guzwatt logo" />
        </div>
        <div className={styles?.childWrapper}>{children}</div>
      </div>
    </>
  );
}
