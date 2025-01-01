import Headers from "../components/Headers";

export default function Profile() {
  return (
    <>
      <Headers />
      <main className="container pt-4">
        <div className="row align-items-start">
            <div className="col-md-4">

          {/* Profile Image */}
          <div className="col-auto">
            <img
              src="https://via.placeholder.com/150"
              className="img-fluid rounded-circle"
              alt="Profile"
              />
          </div>
              </div>
          {/* Profile Details */}
            <div className="col-md-8">
                <h5 className="fw-bold">John Doe</h5>
                <p className="text-muted">@john_doe</p>
                <p>Software Developer | Tech Enthusiast</p>
                <p>Followers: 1000</p>
                <p>Following: 500</p>
                <p>Posts: 50</p>
            </div>
        </div>
      </main>
    </>
  );
}
