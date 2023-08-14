import styles from "@/components/styles";
import { Message, Search, Time, User } from "@/utils/icons";
import { arrayRemove } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";

const blogCategories = [
  "Vape",
  "Shoes",
  "Fashion",
  "Jewelry",
  "Water",
  "Electronic",
  "Furniture",
  "KidStore",
  "Auto",
];

const blogs = [
  {
    title: "Consectetur Adipiscing",
    img_url: "/assets/blog.jpg",
  },
  {
    title: "amet consectetur adipisicing elit",
    img_url: "/assets/blog2.jpg",
  },
  {
    title: "Lorem Ipsum",
    img_url: "/assets/blog3.jpg",
  },
  {
    title: "voluptatibus qui optio",
    img_url: "/assets/blog4.jpg",
  },
  {
    title: "labore architecto quam",
    img_url: "/assets/blog5.jpg",
  },
  {
    title: "Dolores vitae ad natus ipsa",
    img_url: "/assets/blog.jpg",
  },
];

const Blog = () => {
  return (
    <div className={`${styles.paddingX} blog`}>
      <div className="container flex flex-col-reverse gap-y-10 gap-6 py-10 lg:flex-row">
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-6 gap-y-7 md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((item, index) => (
              <div key={index}>
                <Image
                  src={item.img_url}
                  alt={"blog"}
                  className="w-full"
                  width={400}
                  height={400}
                />
                <div className="content text-sm mt-4">
                  <div className="flex gap-2 items-center justify-center">
                    <div className="flex gap-1 items-center">
                      <User />
                      <span className="line-clamp-1">Person Name</span>
                    </div>
                    <div className="flex gap-1 items-center before:content-['|'] before:w-2 before:h-full">
                      <Message />
                      <span>8</span>
                      <span className="line-clamp-1">Comments</span>
                    </div>
                    <div className="flex gap-1 items-center before:content-['|'] before:w-2 before:h-full">
                      <Time />
                      <p className="line-clamp-1">
                        <span>June, 2023,</span>
                        <span> 2:20 am</span>
                      </p>
                    </div>
                  </div>
                  <Link
                    href={""}
                    className="mt-3 text-center mx-auto block w-fit text-lg font-semibold text-heading_color hover:text-primary transition-colors duration-300"
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:min-w-[220px] lg:max-w-[220px]">
          <div className="flex relative">
            <input
              type="search"
              name="blog-search"
              id="blog-search"
              placeholder="Search..."
              className="outline-none px-4 py-2 border-b border-black border-solid flex-1"
            />
            <span className="min-w-[30px] absolute top-1/2 -translate-y-1/2 right-0 text-black text-lg">
              <Search />
            </span>
          </div>

          <div className="catergory">
            <h3 className={`${styles.h3} mt-6`}>Category</h3>
            <ul>
              {blogCategories.map((item) => (
                <li className="flex justify-between items-center mt-5 text-subHeading_color">
                  <span>{item}</span>
                  <span>8</span>
                </li>
              ))}
            </ul>
          </div>

          {/* comments */}

          <div className="comments mt-8">
            <div className="py-2 px-4 bg-secondary text-white">
              <h3 className="text-base uppercase font-semibold">
                Latest Comments
              </h3>
            </div>
            {[...Array(3)].map((_, index) => (
              <div className="flex gap-2 mt-5 pb-3 border-b" key={index}>
                <img
                  src="http://prestashop.mahardhi.com/MT08/wearzo/01/modules//smartblog/images/avatar/avatar-author-default.jpg"
                  alt="author"
                  className="min-w-[40px] h-[40px] w-10 rounded-full object-cover"
                />
                <div>
                  <h5 className="userlink text-sm">user name</h5>
                  <article className="mt-2 line-clamp-2 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione, delectus?
                  </article>
                </div>
              </div>
            ))}
          </div>

          {/* articles */}

          <div className="article mt-8">
            <div className="py-2 px-4 bg-secondary text-white">
              <h3 className="text-base uppercase font-semibold">
                Popular Articles
              </h3>
            </div>
            {[...Array(3)].map((_, index) => (
              <div className="flex gap-2 mt-5 pb-3 border-b" key={index}>
                <img
                  src="https://prestashop.mahardhi.com/MT08/wearzo/01/blog/5-home-small/consectetur-adipiscing.jpg"
                  alt="author"
                  className="min-w-[56px] h-[40px] w-14 object-cover"
                />
                <div>
                  <h5 className="userlink text-sm">user name</h5>
                  <p className="text-xs">June, 2023</p>
                  <article className="mt-2 line-clamp-2 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione, delectus?
                  </article>
                </div>
              </div>
            ))}
          </div>

          <div className="article mt-8">
            <div className="py-2 px-4 bg-secondary text-white">
              <h3 className="text-base uppercase font-semibold">
                Recent Articles
              </h3>
            </div>
            {[...Array(3)].map((_, index) => (
              <div className="flex gap-2 mt-5 pb-3 border-b" key={index}>
                <img
                  src="https://prestashop.mahardhi.com/MT08/wearzo/01/blog/5-home-small/consectetur-adipiscing.jpg"
                  alt="author"
                  className="min-w-[56px] h-[40px] w-14 object-cover"
                />
                <div>
                  <h5 className="userlink text-sm">user name</h5>
                  <p className="text-xs">June, 2023</p>
                  <article className="mt-2 line-clamp-2 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione, delectus?
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
