import React from "react";
import Banner from "../Components/Banner";
import blogbanner from "../image/blog-banner.jpg";

const Blog = () => {
  return (
    <main className="">
      <Banner bannerImage={blogbanner} header={"Blog"} />
    </main>
  );
};

export default Blog;
