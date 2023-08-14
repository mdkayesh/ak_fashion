import styles from "@/components/styles";

const About = () => {
  return (
    <div className={`${styles.paddingX} container`}>
      <div className="flex flex-col gap-6 py-10 lg:flex-row">
        <div className="flex-1 border p-3">
          <img
            src="https://www.mahardhi.com/prestashop/images/cms-img.jpg"
            alt="img"
            className="w-full"
          />

          <div className="grid gap-4 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7">
            <div className="leading-relaxed text-sm">
              <h3 className={`${styles.h3} mb-3`}>Our company</h3>
              <b className="text-black">
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididun.
              </b>
              <p className="mt-3">
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur
                adipisicing elit.
              </p>
              <ul className="mt-5">
                <li>Top quality products</li>
                <li>Best customer service</li>
                <li>30-days money back guarantee</li>
              </ul>
            </div>
            <div className="leading-relaxed text-sm">
              <h3 className={`${styles.h3} mb-3`}>Our team</h3>
              <b className="text-black">
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididun.
              </b>
              <p className="mt-3">
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur
                adipisicing elit.
              </p>
              <ul className="mt-5">
                <li>Top quality products</li>
                <li>Best customer service</li>
                <li>30-days money back guarantee</li>
              </ul>
            </div>
            <div className="leading-relaxed text-sm">
              <h3 className={`${styles.h3} mb-3`}>Tesimonials</h3>
              <b className="text-black">
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididun.
              </b>
              <p className="mt-3">
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur
                adipisicing elit.
              </p>
              <ul className="mt-5">
                <li>Top quality products</li>
                <li>Best customer service</li>
                <li>30-days money back guarantee</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="min-w-[220px] max-w-[220px]">
          <div className="img overflow-hidden">
            <img
              src="https://prestashop.mahardhi.com/MT08/wearzo/01/modules/mt_banner/img/sidebar_banner.jpg"
              alt="banner"
              className="hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
