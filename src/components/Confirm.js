import {useRef, useState} from 'react';
import {motion, AnimatePresence} from "framer-motion";
import axios from 'axios';
import '../App.css'


const Confirm = ({email, validator, setEmail, backendUrl, clientUrl}) => {
    const refs = useRef({});
    let localEmail = "";
    const [errors, setErrors] = useState("NAN");

    const checkInputs = () => {
        if(refs.current['1'].value.length < 3 || refs.current['2'].value.length < 3) setErrors("All fields must have exactly 3 numbers!")
        if(!refs.current['1'].value || !refs.current['2'].value) setErrors("All fields are required!")

        return true;
    }

    const removeCharactersFromInput = (e) => {
        //If the value of the input is a letter, remove it
        if(!e.target.value.match(/[0-9]*/g)[0]) {
            e.target.value = "";
            return null;
        }

        //If the user has errors and is typing remove them
        setErrors("NAN");
        
        //Check if the user is typing in the last input
        if(e.target.name === "2" && e.target.value.length === 3) {
            checkInputs();
            return null;
        } 

        //If the user has completed the first input, move to the second one
        let selector = parseInt(e.target.name)+1;
        if(e.target.value.length === 3) refs.current[selector].focus();
    }

    return (
    <motion.div initial={{x: -300, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{stiffness: 300}} style={{background: "#F2F6F9", width: "100%", height: "100%", position: 'fixed', top: 0, left: 0, zIndex: 2}}>
        {email 
        ?         
                <div className="container rounde-lg d-flex flex-column align-items-center align-items-md-start px-5 py-4 center rounded-lg overflow-hidden" style={{background: "#162945"}}>
                    <AnimatePresence exitBeforeEnter>
                        {(errors && errors !== "NAN" ? <motion.h6 key="errorLabel" initial={{y: -200, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: -200, opacity: 0}} transition={{duration: 2}} className="text-white text-center text-md-left rounded-lg font-weight-bold mb-3 px-4 py-3" style={{backgroundColor: "#EB1510"}}>{errors}</motion.h6> : "")}
                    </AnimatePresence> 
                    <AnimatePresence exitBeforeEnter>
                        {(!errors ? <motion.h6 key="errorLabel" initial={{y: -200, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: -200, opacity: 0}} transition={{duration: 2}} className="text-white text-center text-md-left rounded-lg font-weight-bold mb-3 px-4 py-3" style={{backgroundColor: "#50c878"}}>You have succesfully activated your subscription! Thanks!</motion.h6> : "")}
                    </AnimatePresence> 
                    <div className="">
                        <h6 className="font-weight-light text-white mb-1 header">Check your email</h6>
                        <h4 className="font-weight-bold text-white mb-4">Enter the code we just sent to you:</h4>
                    </div>
                    <div className="w-75 row mx-auto d-flex justify-content-center align-items-center">
                        <input type="text" style={{width: "25%", border: "none", outline: "none"}} className="px-3 py-2 rounded-lg text-center font-weight-bold" onChange={(e) => {removeCharactersFromInput(e)}} ref={el => refs.current['1'] = el} maxLength="3" name="1"/>
                        <h1 className="text-light display-3">-</h1>
                        <input type="text" style={{width: "25%", border: "none", outline: "none"}} className="px-3 py-2 rounded-lg text-center font-weight-bold" onChange={(e) => {removeCharactersFromInput(e)}} ref={el => refs.current['2'] = el} maxLength="3" name="2"/>
                    </div>
                    <button className="btn mxa-auto p-2 rounded-lg font-weight-bold"
                    style={{
                    background: "#EB1510",
                    color: "#ffffff",
                    border: "none",
                    overflow: "hidden",
                    opacity: 1,
                    }} 
                    onClick={async () => {
                        if (checkInputs() !== true) return null;

                        let { data } = await axios.post(backendUrl+'/confirm', { email: email, confirmationCode: `${refs.current['1'].value}-${refs.current['2'].value}`})
                        console.log(data);
                        
                        if(data.message === 'Subscription activated succesfully!') {
                            setErrors("");
                            setTimeout(() => {
                                window.location.assign(clientUrl); 
                            }, 3000)
                        }
                        else setErrors(data.message);
                    }}>Confirm</button>
                </div> 
        :
            <div className="container rounde-lg d-flex flex-column align-items-center justify-content-center px-5 py-5 center rounded-lg overflow-hidden" style={{background: "#162945"}}>
                <AnimatePresence exitBeforeEnter>
                    {(errors && errors !== "NAN" ? <motion.h6 key="errorLabel" initial={{y: -200, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: -200, opacity: 0}} transition={{duration: 2}} className="text-white text-center text-md-left rounded-lg font-weight-bold mb-3 px-4 py-3" style={{backgroundColor: "#EB1510"}}>{errors}</motion.h6> : "")}
                </AnimatePresence> 
                <h4 className="font-weight-bold text-white mb-2">Enter your email adress you want to confirm:</h4>
                <input type="text" style={{width: "75%", border: "none", outline: "none"}} className="px-3 py-2 rounded-lg mb-4 mt-2" onChange={(e) => {localEmail = e.target.value}} name="email"/>
                <button className="btn p-2 rounded-lg font-weight-bold mt-4 mt-md-0"
                style={{
                background: "#EB1510",
                color: "#ffffff",
                border: "none",
                overflow: "hidden",
                opacity: 1,
                }} 
                onClick={() => {
                    if(validator(localEmail, "Email") !== true) {
                        setErrors(validator(localEmail, "Email"))
                    } else {
                        setEmail(localEmail);
                    }
                }}>Confirm</button>
            </div>
        }
    </motion.div>
    )
}

export default Confirm;