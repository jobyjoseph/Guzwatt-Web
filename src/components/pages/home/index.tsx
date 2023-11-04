import { RootLayout } from "@/components/layouts/layout";
import styles from "./style.module.scss";

export function HomePage({ gameQuestions }: { gameQuestions: any }) {
  const handlePlay = () => {
    window.location.href = "/play";
  };

  return (
    <RootLayout>
      <div className={styles?.playButtonWrapper}>
        <button onClick={handlePlay}>PLAY</button>
      </div>
    </RootLayout>
  );
}
