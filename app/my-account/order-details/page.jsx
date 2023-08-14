import styles from "@/components/styles";

const Orders = () => {
  return (
    <div className={`${styles.paddingX}`}>
      <div className="container">
        <div className="border p-6 mt-14 mx-auto max-w-full">
          <p className="px-6 py-4 border border-red-500 bg-red-200 text-black">
            You have not placed any orders.
          </p>
          <p className="mt-6 text-[500] text-black">
            Here are the orders you've placed since your account was created.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
