import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Headers from "./components/Headers";

export default function App() {
  const posts = [
    {
      id: 1,
      username: "john_doe",
      imgUrl: "https://placehold.co/400x200?text=Hello+World",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      username: "jane_smith",
      imgUrl: "https://placehold.co/400x200?text=Smiling+Jane",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      username: "alice_wonder",
      imgUrl: "https://placehold.co/400x200?text=Alice+In+Wonder+Park",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <>
      <Headers />
      <main className="container mb-3">
        <h1 className="pt-3">Posts</h1>
        <div>
          <ul className="list-group">
            {posts.map((post) => (
              <li className="list-group-item" key={post.id}>
               <Link to={`/profile/${post.username}`}>                                  {/*imp  */}
                  <h5>{post.username}</h5></Link>
                  <img
                    src={post.imgUrl}
                    alt={`Post by ${post.username}`}
                    className="img-fluid rounded"
                  />
                  <p>{post.content}</p>
                
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
