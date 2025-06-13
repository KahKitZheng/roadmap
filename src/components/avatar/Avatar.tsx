import styles from "./Avatar.module.scss";

type AvatarProps = {
  children?: React.ReactNode;
  zIndex?: number;
};

export default function Avatar(props: Readonly<AvatarProps>) {
  const { children, zIndex } = props;

  return (
    <span className={styles.avatar} style={{ zIndex }}>
      {children}
    </span>
  );
}
