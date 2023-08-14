import React from "react";
import styles from "../styles";
import BlogSlider from "../BlogSlider";

const blogs = [
  {
    title: "lorem Ipsum something",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quae incidunt, qui rerum facilis numquam atque suscipit adipisci molestiae praesentium exercitationem sapiente quo non pariatur, impedit fugit aliquid modi. Et!`,
    img_url:
      "https://prestashop.mahardhi.com/MT08/wearzo/01/blog/3-home-default/lorem-ipsum-dolor.jpg",
    date_time: "09/01/2022 10:07:32",
  },
  {
    title: "lorem Ipsum something1",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quae incidunt, qui rerum facilis numquam atque suscipit adipisci molestiae praesentium exercitationem sapiente quo non pariatur, impedit fugit aliquid modi. Et!`,
    img_url:
      "https://prestashop.mahardhi.com/MT08/wearzo/01/blog/3-home-default/lorem-ipsum-dolor.jpg",
    date_time: "09/01/2022 10:07:32",
  },
  {
    title: "lorem Ipsum something2",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quae incidunt, qui rerum facilis numquam atque suscipit adipisci molestiae praesentium exercitationem sapiente quo non pariatur, impedit fugit aliquid modi. Et!`,
    img_url:
      "https://prestashop.mahardhi.com/MT08/wearzo/01/blog/3-home-default/lorem-ipsum-dolor.jpg",
    date_time: "09/01/2022 10:07:32",
  },
  {
    title: "lorem Ipsum something3",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quae incidunt, qui rerum facilis numquam atque suscipit adipisci molestiae praesentium exercitationem sapiente quo non pariatur, impedit fugit aliquid modi. Et!`,
    img_url:
      "https://prestashop.mahardhi.com/MT08/wearzo/01/blog/3-home-default/lorem-ipsum-dolor.jpg",
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
