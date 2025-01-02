import Footer from "../components/Footer";
import Header from "../components/Headers";

export default function About() {
  return (
    <>
      <Header />
      <main className="container py-3">
        <h1 className="py-3">About Todo</h1>
        <p>
          Microsoft To Do previously styled as Microsoft To-Do is a cloud-based
          task management application. It allows users to manage their tasks
          from a smartphone, tablet and computer. The technology is produced by
          the team behind Wunderlist, which was acquired by Microsoft, and the
          stand-alone apps feed into the existing Tasks feature of the Outlook
          product range.
        </p>
        <p>
          In September 2019, a major update to the app was unveiled, adopting a
          new user interface with a closer resemblance to Wunderlist. The name
          was also slightly updated by removing the hyphen from To-Do
        </p>
        <p>
          In May 2020, Microsoft officially closed the doors on Wunderlist,
          ending its active service in favor of improving and expanding
          Microsoft To Do.
        </p>
      </main>
      <Footer />
    </>
  );
}
