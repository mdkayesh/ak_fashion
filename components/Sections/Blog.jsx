import React from "react";
import styles from "../styles";
import BlogSlider from "../BlogSlider";

const blogs = [
  {
    title: "numquam atque suscipit",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quae incidunt, qui rerum facilis numquam atque suscipit adipisci molestiae praesentium exercitationem sapiente quo non pariatur, impedit fugit aliquid modi. Et!`,
    img_url: "/assets/blog.jpg",
    date_time: "09/01/2022 10:07:32",
  },
  {
    title: "praesentium exercitationem sapiente",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quae incidunt, qui rerum facilis numquam atque suscipit adipisci molestiae praesentium exercitationem sapiente quo non pariatur, impedit fugit aliquid modi. Et!`,
    img_url: "/assets/blog2.jpg",
    date_time: "09/01/2022 10:07:32",
  },
  {
    title: "Illo quae incidunt",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quae incidunt, qui rerum facilis numquam atque suscipit adipisci molestiae praesentium exercitationem sapiente quo non pariatur, impedit fugit aliquid modi. Et!`,
    img_url: "/assets/blog3.jpg",
    date_time: "09/01/2022 10:07:32",
  },
  {
    title: "consectetur adipisicing elit",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quae incidunt, qui rerum facilis numquam atque suscipit adipisci molestiae praesentium exercitationem sapiente quo non pariatur, impedit fugit aliquid modi. Et!`,
    img_url: "/assets/blog4.jpg",
    date_time: "09/01/2022 10:07:32",
  },
  {
    title: "impedit fugit aliquid modi",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quae incidunt, qui rerum facilis numquam atque suscipit adipisci molestiae praesentium exercitationem sapiente quo non pariatur, impedit fugit aliquid modi. Et!`,
    img_url: "/assets/blog5.jpg",
    date_time: "09/01/2022 10:07:32",
  },
];

const Blog = () => {
  return (
    <section className={`blog ${styles.paddingX}`}>
      <div className="container">
        <div className="relative">
          <h1 className={`${styles.h1} absolute top-0 left-0`}>Latest Blogs</h1>
          <BlogSlider blogs={blogs} />
        </div>
      </div>
    </section>
  );
};

export default Blog;
