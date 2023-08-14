import styles from "@/components/styles";

const Loading = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      {[...Array(4)].map((_, index) => (
        <div
          className="flex items-center gap-4 mt-7 max-w-lg w-full"
          key={index}
        >
          <div className={`${styles.loaderLine} min-w-[120px] h-4`} />
          <div className="flex-1">
            <div className={`${styles.loaderLine} w-full h-6`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
