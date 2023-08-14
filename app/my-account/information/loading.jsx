import styles from "@/components/styles";

const Loading = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      {[...Array(4)].map((_, index) => (
        <div
          className="flex items-center gap-4 mt-7 max-w-lg w-full"
          key={index}
        >
          <div className={`${styles.loaderLine} h-4 min-w-[120px]`} />
          <div className="flex-1 h-6">
            <div className={`${styles.loaderLine} h-6 w-full`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
