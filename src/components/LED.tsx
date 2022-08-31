import React from "react";
import styles from './LED.module.css';

const LED = (props: {lit: boolean}) => {

    let colour = props.lit ? 'red' : 'maroon';
    return <div className={styles.led_shape} style={{ backgroundColor: colour }}>                
    </div>
}

export default LED;