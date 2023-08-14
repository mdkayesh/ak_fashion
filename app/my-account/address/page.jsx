"use client";

import styles from "@/components/styles";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import countries from "../../../components/jsons/countries.json";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { addressSchema } from "@/components/yup";

const Address = () => {
  //   const [userAddress, setuserAddress] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const router = useRouter();

  // formik

  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    setValues,
    handleBlur,
    touched,
  } = useFormik({
    initialValues: {
      name: "",
      address: "",
      city: "",
      country: "",
      phone: "",
    },
    validationSchema: addressSchema,
    onSubmit: (values) => {
      setLoading(true);
      const docRef = doc(db, "users", user.uid);

      updateDoc(docRef, {
        ...values,
        phoneWithCode: phoneCode + values.phone,
      })
        .then(() => {
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    },
  });

  // data from redux

  const { user } = useSelector((state) => state.authSlice);

  useEffect(() => {
    if (user) {
      const docRef = doc(db, "users", user?.uid);
      getDoc(docRef)
        .then((doc) => {
          setValues((prev) => {
            return { ...prev, ...doc?.data() };
          });
        })
        .catch((err) => setError(err));
    } else {
      router.push("/");
    }

    return () => null;
  }, [user]);

  useEffect(() => {
    countries.forEach((country) => {
      if (country.name.toLowerCase() === values.country.toLowerCase()) {
        setPhoneCode(country.code);
      }
    });

    return () => null;
  }, [values.country]);

  return (
    <div className={`${styles.paddingX}`}>
      <div className="container">
        <div className="border rounded p-6 mt-14 max-w-lg mx-auto">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex items-center">
              <div className={`${styles.label}`}>Name</div>
              <div className="input flex-1">
                <input
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  type="text"
                  name="name"
                  id="user_info_name"
                  className={`${styles.input}`}
                  placeholder="Ex:Md Kayesh"
                />
                {errors.name && touched.name ? (
                  <p className="text-red-600 text-sm">{errors.name}</p>
                ) : null}
              </div>
            </div>
            <div className="flex items-center mt-6">
              <div className={`${styles.label}`}>Address</div>
              <div className="input flex-1">
                <input
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address}
                  type="text"
                  name="address"
                  id="user_info_address"
                  className={`${styles.input}`}
                  placeholder="New York, America"
                />
                {errors.address && touched.address ? (
                  <p className="text-red-600 text-sm">{errors.address}</p>
                ) : null}
              </div>
            </div>
            <div className="flex items-center mt-6">
              <div className={`${styles.label}`}>City</div>
              <div className="input flex-1">
                <input
                  required
                  onBlur={handleBlur}
                  type="text"
                  name="city"
                  id="city"
                  onChange={handleChange}
                  value={values.city}
                  className={styles.input}
                  placeholder="New Work"
                />
                {errors.city && touched.city ? (
                  <p className="text-red-600 text-sm">{errors.city}</p>
                ) : null}
              </div>
            </div>
            <div className="flex items-center mt-6">
              <div className={`${styles.label}`}>Country</div>
              <div className="input flex-1">
                <select
                  required
                  onBlur={handleBlur}
                  name="country"
                  id="country"
                  onChange={handleChange}
                  value={values.country}
                  className={styles.input}
                >
                  <option value={""}>Select a Country</option>
                  {countries.map((country) => (
                    <option
                      value={country.name}
                      key={country.code + country.name}
                    >
                      {country.name}
                    </option>
                  ))}
                </select>
                {errors.country && touched.country ? (
                  <p className="text-red-600 text-sm">{errors.country}</p>
                ) : null}
              </div>
            </div>
            <div className="flex items-center mt-6">
              <div className={`${styles.label}`}>Phone</div>
              <div className="input flex-1">
                <div className="flex gap-2">
                  <input
                    required
                    onBlur={handleBlur}
                    onChange={(e) => setPhoneCode(e.target.value)}
                    value={`${phoneCode}`}
                    type="text"
                    name="phoneCode"
                    id="user_info_phone_code"
                    className={`${styles.input} max-w-[100px]`}
                    placeholder="+880"
                  />
                  <input
                    required
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={`${values.phone}`}
                    type="text"
                    name="phone"
                    id="user_info_phone"
                    className={`${styles.input}`}
                    placeholder="19*********"
                  />
                </div>
                {errors.phone && touched.phone ? (
                  <p className="text-red-600 text-sm">{errors.phone}</p>
                ) : null}
              </div>
            </div>

            <button
              type="submit"
              className={`${
                loading ? "animate-pulse" : ""
              } block ml-auto mt-5 px-4 md:px-6 py-2 text-sm md:text-base bg-primary_btn_bg hover:bg-primary_btn_bg_hover text-primary_btn_text hover:text-primary_btn_text_hover`}
            >
              {loading ? "Saving" : "Save"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Address;
