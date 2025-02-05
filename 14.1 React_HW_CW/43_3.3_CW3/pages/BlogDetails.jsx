import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogDetails = () => {
  const blogId = useParams(); //hook  return an object  of key /object value pair of dyanamuc oparams 
  const blogs = [
    {
      id: 1,
      title: "blog 1",
      content: "jdjddddddddddddddd",
      datePosted: "Jan 2024",
    },
    {
      id: 2,
      title: "blog 2",
      content: "jdjddddddddddddddd",
      datePosted: "feb 2024",
    },
    {
      id: 3,
      title: "blog 3",
      content: "jdjddddddddddddddd",
      datePosted: "march 2024",
    },
  ];

  const blogData = blogs.find((blog) => blog.id == blogId.blogId);

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>{blogData.title}</h1>
        <small>Posted on {blogData.datePosted}</small>
        <p className="pt-3">{blogData.content}</p>
      </main>
      <Footer />
    </>
  );
};
export default BlogDetails;
