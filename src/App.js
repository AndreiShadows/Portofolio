import './App.css'


function App() {
  return (
    <div className="container bg-white w-90 mx-auto pt-4 rounded-lg shadow-lg pb-5 vertical-center">

      <h5 className="text-center mb-2">Who are we ?</h5>
      <h2 className="mb-4 text-center">The only developer agency you will ever need</h2>
      <h5 className="mx-auto w-50 mb-5 font-weigt-light" style={{color: "#162945"}}>We are responsible for everything, from UI/UX Design, Development and Maintenance to event Databases and Back-End Servers. That means you just need to focus on the more important thing.</h5>
    
      <div className="row mb-5 d-flex flex-md-row justify-content-around">
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
  );
}

export default App;
