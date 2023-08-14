import styles from "@/components/styles";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex gap-6 items-center justify-center flex-wrap max-w-2xl">
        {[...Array(5)].map((_, index) => (
          <div className={`w-32 h-32 ${styles.loaderBox}`} key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
