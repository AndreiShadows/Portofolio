import React from 'react';
import "../App.css";
import { motion } from "framer-motion";

const SoonPopUp = ({setMessage, message}) => {
    const parentVariant = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                type: "tween",
                delay: message.delay,
            }
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            }
        },
    }
    const childrenVariant = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            y: -300,
        }
    }

    return (
        <motion.div variants={parentVariant} initial="hidden" animate="visible" exit="hidden" style={{background: "rgba(0,0,0, 0.9)", width: "100%", height: "100%", position: 'fixed', top: 0, left: 0, zIndex: 2}} key="1" onClick={() => {
            setMessage("");
        }}>
            <motion.div className="bg-white d-flex align-items-start justify-content-between rounded-lg w-50 mt-5 mx-auto p-4" variants={childrenVariant} key="2">
                <div className="mr-3">
                    <h6 className="font-weight-light text-dark mb-1 header mt-3">{message.title}</h6>
                    <h4 className="font-weight-bold text-dark mb-4 mt-2">{message.body}</h4>
                </div>
                <div className="ml-auto"><img src="https://img.icons8.com/windows/32/000000/macos-close.png" alt="close" onClick={() => {
                    setMessage("");
                }}/></div>
            </motion.div>
        </motion.div>
    )
}

export default SoonPopUp;