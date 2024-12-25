import "./App.css";

const Header = () => {
  return (
    <header>
      <h1>Welcome to Our Website</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const BlogDetail = ({ blog }) => {
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>Author: {blog.author}</p>
      <p>Date: {blog.date}</p>
      <p>{blog.tet}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>Copyright © 2024 Our Company All right Reserved</p>
    </footer>
  );
};

export default function App() {
  const blog = {
    title: "The Importance of Learning React",
    author: "Jane Doe",
    date: "March 1,2024",
    tet: "jj hysd dsjdkjsd dksdsyd",
  };
  return (
    <>
      <Header />
      <main>
        <BlogDetail blog={blog} />
      </main>
      <Footer />
    </>
  );
}
