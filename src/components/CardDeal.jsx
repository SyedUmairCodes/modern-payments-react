import React from "react"
import styles, {layout} from "../style.js";
import Button from "./Button.jsx";
import { card } from "../assets"

const CardDeal = () => {
    return(
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> in a few easy steps.</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout.</p>
                <Button styles="mt-10"/>
            </div>

        {/* Section image*/}
            <div className={layout.sectionImg}>
                <img src={card} alt="card" className="w-[100%] h-[100%]"/>
            </div>
        </section>
    )
}

export default CardDeal