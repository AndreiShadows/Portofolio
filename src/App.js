import './App.css'


function App() {
  return (
    <>
      <div className="container bg-white w-90 rounded-sm shadow-lg mx-auto mt-0 mt-md-5 mb-5 pb-3 px-4 pt-5">
        <h5 className="text-center mb-2">Who are we ?</h5>
        <h2 className="mb-4 text-center">The only developer agency you will ever need</h2>
        <h5 className="mx-auto w-50 mb-5 font-weigt-light" style={{color: "#162945"}}>We are responsible for everything, from UI/UX Design, Development and Maintenance to event Databases and Back-End Servers. That means you just need to focus on the more important thing.</h5>
      
        <div className="row mb-5 d-flex flex-md-row mx-0 justify-content-between">
          <div className="col-md-3  mx-4 mb-4 value rounded-lg pl-4 pr-3 py-4" style={{background: "#F2F6F9"}}>
            <img src="https://img.icons8.com/ios-filled/50/000000/bios.png"  alt="development" className="mb-3"/>
            <h5 className="font-weight-bold mb-3">Development</h5>
            <h6>A full-stack development, using the most efficient technologies for your project. </h6>
          </div>

          <div className="col-md-3 mx-4 mb-4 value rounded-lg pl-4 pr-3 py-4" style={{background: "#F2F6F9"}}>
            <img src="https://img.icons8.com/ios-filled/50/000000/database-restore.png" alt="servers" className="mb-3"/>
            <h5 className="font-weight-bold mb-3">Databases and Servers</h5>
            <h6>We make sure your client's data is safely stored and used, based on the most recent standards.</h6>
          </div>

          <div className=" col-md-3 mx-4 mb-4 value rounded-lg pl-4 pr-3 py-4" style={{background: "#F2F6F9"}}>
            <img src="https://img.icons8.com/fluent-systems-filled/50/000000/thor-hammer.png" alt="maintenance" className="mb-3"/>
            <h5 className="font-weight-bold mb-3">24/7 maintenance</h5>
            <h6>We continuously make sure your website is running seamlessly. If not I assure you it will be solved within hours.</h6>
          </div>
        </div>
      </div>

      <div className="container-fluid row d-flex align-items-center justify-content-between mx-auto py-4 px-5 shadow-lg mt-4" style={{background: "#162945"}}>
        <div className="col-12 col-md-6 mb-4 mt-4">
          <div className="text-white">
            <h5 className="font-weight-bold mb-3">Documentation</h5>
            <h6><a href="https://www.google.com/" className="text-white btn disabled p-0">About us</a></h6>
            <h6><a href="https://www.google.com/" className="text-white btn disabled p-0">How it works?</a></h6>
            <h6><a href="https://www.google.com/" className="text-white btn disabled p-0">Payments</a></h6>
            <h6><a href="https://www.google.com/" className="text-white btn disabled p-0">Get Help</a></h6>
          </div>
        </div>


        <div className="col-12 col-md-6 mt-5 mt-md-0">
          <h6 className="font-weight-light text-white mb-1 header">Join us</h6>
          <h4 className="font-weight-bold text-white mb-4">Be informed about every step we make</h4>
          <div className="d-flex align-items-center justify-content-between">
            <input type="text" className="form-control p-2 mb-0 mr-4" name="email" id="email" placeholder="Email" style={{height: "100%"}}/>
            <button className="btn font-weight-bold p-2 rounded-lg" style={{background: "#EB1510", color: "#ffffff", border: "none"}}>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
