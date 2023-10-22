import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
import styles from "./layout.module.scss";

export function RootLayout({ children }: { children: any }) {
  return (
    <div className={styles?.rootContainer}>
      <div className={styles?.childWrapper}>{children}</div>
    </div>
  );
}
