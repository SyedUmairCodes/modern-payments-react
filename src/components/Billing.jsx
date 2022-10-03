import React from "react"
import {apple,bill, google} from "../assets"
import styles, {layout} from "../style.js";


const Billing = () => {
    return(
        <section id="product" className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
                <img src={bill} alt="billing" className="w-[100%]h-[100%] relative z-[5]"/>
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white-gradient"/>
                <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink-gradient"/>
            </div>
        {/*Section text*/}
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden"/>Billing and Invoicing.</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout.</p>
            {/* App store icons*/}
                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                    <img src={apple} alt="app_store" className="w-[128px] h-[24px] object-contain mr-5 cursor-pointer"/>
                    <img src={google} alt="play_store" className="w-[128px] h-[24px] object-contain cursor-pointer"/>
                </div>
            </div>
        </section>
    )
}

export default Billing