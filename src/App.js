import './App.css'
import {useState} from "react";
import {motion, AnimatePresence, useAnimation} from "framer-motion";
//Components
import SoonPopUp from "./components/SoonPopUp";



function App() {
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const inputAnimation = useAnimation();
  const [inputError, setInputError] = useState("");
  const sendButtonVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      y: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.80,
        when: "beforeChildren",
        ease: "easeInOut"
      }
    },
    exit: {
      x: 100,
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.80
      }
    }
  }
  const successButtonVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.80,
        when: "beforeChildren",
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.80
      }
    }
  }

  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  }

  const [sentEmail, setSentEmail] = useState(false);

  const validator = (data, label) => {
    if(!data || data.length === 0) return `${label} is required!`
    if(data.length < 8) return `${label} must be at least 8 characters long!`
    if(!data.includes("@")) return `${label} is invalid!`
    return true;
  }

  return (
    <>
      <AnimatePresence>({message && (<SoonPopUp setMessage={setMessage} message={message}/>)}</AnimatePresence>
      <div className="container bg-white w-90 rounded-sm shadow-lg mx-auto mt-0 mt-md-5 mb-5 pb-4 pb-md-5 px-4 pt-5">
        <h5 className="text-center mb-2">Who are we ?</h5>
        <h2 className="mb-4 text-center">The only development agency you will ever need</h2>
        <h5 className="mx-auto w-50 mb-5 font-weigt-light" style={{color: "#162945"}}>We are responsible for everything, from UI/UX Design, Development and Maintenance to event Databases and Back-End Servers. That means you just need to focus on the more important thing.</h5>
      
        <div className="row mb-3 d-flex flex-md-row mx-0 justify-content-between">
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
        <div className="w-100 d-flex align-items-center">
          <button className="btn ml-4 mx-auto text-white font-weight-bold py-2 px-4" style={{background: "#EB1510"}} onClick={() => {
            setMessage("HEya");
          }}>Get started</button>
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

          
        <motion.div initial={{x: 0}} animate={inputAnimation} className="col-12 col-md-6 mt-5 mt-md-0" style={{overflow: "hidden"}}>
          <AnimatePresence exitBeforeEnter>
            {(inputError ? <motion.h6 key="errorLabel" initial={{y: -200, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: -200, opacity: 0}} transition={{duration: 2}} className="text-white text-center text-md-left rounded-lg font-weight-bold mb-3 px-4 py-3" style={{backgroundColor: "#EB1510"}}>{inputError}</motion.h6> : "")}
          </AnimatePresence> 
          <h6 className="font-weight-light text-white mb-1 header">Join us</h6>
          <h4 className="font-weight-bold text-white mb-4">Be informed about every step we make</h4>
          <div className="d-flex align-items-center justify-content-between">
              <input className="form-control p-2 mb-0 mr-4" name="email" id="email" placeholder="Email" style={{height: "100%"}} type="text" onChange={(e) => {setInputError(() => {if(sentEmail) {setSentEmail(false); setInputError("")}; setInputValue(e.target.value) })}}/>
              <button
              className="btn d-flex justify-content-center p-2 rounded-lg"
              style={{
                background: "#EB1510",
                color: "#ffffff",
                border: "none",
                overflow: "hidden",
                opacity: 1,
              }}

              //If the button was pressed disable the click event
              disabled={sentEmail}
              onClick={async () => {
                setSentEmail(true);

                if (validator(inputValue, "Email") !== true)
                {
                  setInputError(validator(inputValue, "Email"));
                  inputAnimation.start({
                    x: [-20, 0, 20, -20, 0, 20, 0, -10, 0, 10, -5, 0, 5, 0],
                    transition: {
                      delay: 0.5
                    }
                  });
                }
                else {        
                  setMessage({
                    delay: 2.8,
                    title: "Success",
                    body: "Thank you for subscribing to our newsletter, you will hear from us soon as we promised, with great news, informations and opportunities!"
                  })
                  setTimeout(() => {
                    setSentEmail(false);
                  }, 7000);
                }
              }}
            >
              <AnimatePresence exitBeforeEnter>
                {/* If there was an error caused either by the user or the back-end server, display it and animate the coresponding SVG */}
                {!inputError ? (
                  sentEmail ? (
                    <motion.svg
                      key="success"
                      variants={successButtonVariants}
                      exit="exit"
                      initial="hidden"
                      animate="visible"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.path
                        variants={pathVariants}
                        d="M1 7.5L9 15.5L17.5 1"
                        stroke="white"
                        strokeWidth="2.5"
                      />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="send"
                      variants={sendButtonVariants}
                      exit="exit"
                      initial="hidden"
                      animate="visible"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 172 172"
                    >
                      <g
                        fill="none"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                      >
                        <path d="M0,172v-172h172v172z" fill="#eb1510"></path>
                        <g fill="#ffffff">
                          <path d="M149.06667,17.2c-0.55025,0.00377 -1.09709,0.08674 -1.6237,0.24635c-0.15501,0.04207 -0.30818,0.09064 -0.45911,0.14557l-126.05495,40.08854v0.02239c-2.23962,0.83573 -3.72568,2.97333 -3.72891,5.3638c0.00425,2.00222 1.05271,3.85719 2.76589,4.89349l38.30807,30.39114l75.73151,-60.35677l-60.35677,75.73151l30.36875,38.28567c1.0349,1.7286 2.90117,2.78714 4.91589,2.78828c2.39047,-0.00322 4.52807,-1.48928 5.3638,-3.72891h0.02239l40.12214,-126.16692c0.041,-0.11449 0.07834,-0.23027 0.11198,-0.34714c0.15961,-0.52661 0.24258,-1.07345 0.24636,-1.6237c0,-3.16643 -2.5669,-5.73333 -5.73333,-5.73333z"></path>
                        </g>
                      </g>
                    </motion.svg>
                  ) ) :
                  
                  <motion.svg key="error" exit="exit" initial="hidden" animate="visible" variants={successButtonVariants}  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" fill="#EB1510"/>
                    <motion.path variants={pathVariants} d="M17 17.0158V4C17 2.89543 16.1046 2 15 2C13.8954 2 13 2.89543 13 4V17.0158C13 18.1204 13.8954 19.0158 15 19.0158C16.1046 19.0158 17 18.1204 17 17.0158Z" fill="white" stroke="white"/>
                    <circle cx="15" cy="25" r="2" fill="white" stroke="white"/>
                  </motion.svg>
                }
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default App;