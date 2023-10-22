import { RootLayout } from "@/components/layouts/layout";
import styles from "./style.module.scss";

export function PlayPage() {
  return (
    <RootLayout>
      <div>
        <span className={styles?.slno}>#1</span>
      </div>
      <div className={styles?.question}>
        A feeling of expectation and desire for a certain thing to happen
      </div>
    </RootLayout>
  );
}
