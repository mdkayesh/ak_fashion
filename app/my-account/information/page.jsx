"use client";

import styles from "@/components/styles";
import { db } from "@/firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Information = () => {
  const [userInfo, setUserInfo] = useState({
    user_name: "",
    user_birthdate: "",
    user_email: "",
    user_pass: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // data from redux

  const { user } = useSelector((state) => state.authSlice);

  useEffect(() => {
    if (user) {
      const docRef = doc(db, "users", user?.uid);
      getDoc(docRef)
        .then((doc) => {
          setUserInfo((prev) => {
            return {
              ...prev,
              user_name: doc.data()?.name,
              user_birthdate: doc.data()?.birthdate || "",
              user_email: user.email,
            };
          });
        })
        .catch((err) => setError(err));
    } else {
      router.push("/");
    }

    return () => null;
  }, [user]);

  const handleChange = (e) => {
    setUserInfo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const updateUserData = (e) => {
    e.preventDefault();
    const { user_name, user_email, user_birthdate } = userInfo;
    if (!user_name && !user_email && !user_birthdate) return;

    setLoading(true);
    const docRef = doc(db, "users", user.uid);

    updateDoc(docRef, {
      name: user_name,
      birthdate: user_birthdate,
      email: user_email,
    })
      .then(() => setLoading(false))
      .catch((err) => setError(err.message));
  };

  return (
    <div className={`${styles.paddingX}`}>
      <div className="container">
        <div className="border rounded p-6 mt-14 max-w-lg mx-auto">
          <form action="" onSubmit={updateUserData}>
            <div className="flex items-center">
              <div className={`${styles.label}`}>Name</div>
              <div className="input flex-1">
                <input
                  required
                  onChange={handleChange}
                  value={userInfo.user_name}
                  type="text"
                  name="user_name"
                  id="user_info_name"
                  className={`${styles.input}`}
                />
              </div>
            </div>
            <div className="flex items-center mt-6">
              <div className={`${styles.label}`}>Birthdate</div>
              <div className="input flex-1">
                <input
                  required
                  onChange={handleChange}
                  value={userInfo.user_birthdate}
                  type="date"
                  name="user_birthdate"
                  id="user_info_birthdate"
                  className={`${styles.input}`}
                />
              </div>
            </div>
            <div className="flex items-center mt-6">
              <div className={`${styles.label}`}>Email</div>
              <div className="input flex-1">
                <input
                  required
                  onChange={handleChange}
                  value={userInfo.user_email}
                  type="email"
                  name="user_email"
                  id="user_info_email"
                  className={`${styles.input}`}
                />
              </div>
            </div>
            <div className="flex items-center mt-6">
              <div className={`${styles.label}`}>password</div>
              <div className="input flex-1">
                <input
                  // required
                  onChange={handleChange}
                  value={userInfo.user_pass}
                  type="text"
                  name="user_pass"
                  id="user_info_pass"
                  className={`${styles.input}`}
                />
              </div>
            </div>
            <button
              type="submit"
              className="block ml-auto mt-5 px-4 md:px-6 py-2 text-sm md:text-base bg-primary_btn_bg hover:bg-primary_btn_bg_hover text-primary_btn_text hover:text-primary_btn_text_hover"
            >
              {loading ? "Saving" : "Save"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Information;
