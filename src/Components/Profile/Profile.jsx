import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 ">
            <div className="container main text-center    mt-5   rounded-4 ">
              <div className="row">
                <div className="img-container mt-5 ">
                  <img
                    className="rounded-circle"
                    src="https://www.blackbeautyandhair.com/wp-content/uploads/2023/05/good-faces-xmSWVeGEnJw-unsplash.webp"
                    alt=""
                    style={{ height: "8rem", width: "8rem" }}
                  />
                  <div className="hero-name text-white mt-5 mb-4 text-center ">
                    <h3 className="fw-bold">Jessica Randall</h3>
                    <p className="states fw-bold">London, United Kingdom</p>
                    <p> &quot;Front-end developer and avid reader&quot;</p>
                  </div>
                  <div className="buttons d-flex flex-column ">
                    <button className="btn text-white mb-3">GitHub</button>
                    <button className="btn text-white mb-3">
                      FrontEnd Mentor
                    </button>
                    <button className="btn text-white mb-3">LinkedIn</button>
                    <button className="btn text-white mb-3">Twitter</button>
                    <button className="btn text-white mb-3">Instagram</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
        row
      </div>
    </div>
  );
};

export default Profile;
