import styles from "@/components/styles";

const Loading = () => {
  return (
    <div className="container border p-6 mt-10">
      <div className={`${styles.loaderLine} w-full h-6`} />
      <div className={`${styles.loaderLine} mt-4 h-4 w-2/3`} />
    </div>
  );
};

export default Loading;
