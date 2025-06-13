import styles from "./Layout.module.scss";

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout(props: Readonly<LayoutProps>) {
  const { children } = props;

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <h1>RM</h1>
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
