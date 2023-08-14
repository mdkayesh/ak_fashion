import styles from "@/components/styles";

const loading = () => {
  return (
    <div className={styles.paddingX}>
      <div className={`${styles.loaderBox} h-24 mt-12`} />
      <div className={`${styles.loaderLine} mt-6 w-full h-5`} />
      <div className={`${styles.loaderLine} mt-6 w-32 h-3`} />
    </div>
  );
};

export default loading;
