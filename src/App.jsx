import React from 'react'
import styles from './style.js'
import {Hero, Navbar, Stats, Business} from "../src/components/index.js"

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Navbar/>
          </div>
      </div>

        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero/>
            </div>
        </div>

        <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
            <div className={`${styles.boxWidth}`}>
                <Stats/>
                <Business/>
                Billing
                Card
                Testimonial
                Clients
                CTS
                Footer
            </div>
        </div>
    </div>
)

export default App
