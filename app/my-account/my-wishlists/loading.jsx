import styles from "@/components/styles";

const Loading = () => {
  return (
    <div className="container border p-6 mt-10">
      <div className={`${styles.loaderLine} h-6 w-[120px] mx-auto mt-5`} />
      {[...Array(10)].map((_, index) => (
        <div className={`${styles.loaderBox} mt-4 h-10 w-full`} key={index} />
      ))}
    </div>
  );
};

export default Loading;
