import { useEffect, useState } from 'react';

import RemoteGrid from '../layouts/RemoteGrid';
import LED from './LED';
import RemoteButton from './RemoteButton';
import styles from './RemoteHandset.module.css';

const RemoteHandset = () => {
    
    const [lit, setLit] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLit(false);
        }, 200)   
    }, [lit]);
    
    const clicked = () => {
        setLit(true);     
    }

    return <div className={styles.remote_handset}>
        <LED lit={lit}></LED>
        <RemoteGrid>            
                <RemoteButton clicked={clicked} text='1'></RemoteButton>
                <RemoteButton clicked={clicked} text='2'></RemoteButton>
                <RemoteButton clicked={clicked} text='3'></RemoteButton>
                <RemoteButton clicked={clicked} text='4'></RemoteButton>
                <RemoteButton clicked={clicked} text='5'></RemoteButton>
                <RemoteButton clicked={clicked} text='6'></RemoteButton>
                <RemoteButton clicked={clicked} text='7'></RemoteButton>
                <RemoteButton clicked={clicked} text='8'></RemoteButton>
                <RemoteButton clicked={clicked} text='9'></RemoteButton>
                <RemoteButton clicked={clicked} text='HOME'></RemoteButton>
                <RemoteButton clicked={clicked} text='0'></RemoteButton>
                <RemoteButton clicked={clicked} text='@'></RemoteButton>
                <RemoteButton clicked={clicked} text='OPTS'></RemoteButton>
                <RemoteButton clicked={clicked} icon='arrow_upward'></RemoteButton>
                <RemoteButton clicked={clicked} text='INFO'></RemoteButton>
                <RemoteButton clicked={clicked} icon='arrow_back'></RemoteButton>
                <RemoteButton clicked={clicked} icon='play_arrow'></RemoteButton>
                <RemoteButton clicked={clicked} icon='arrow_forward'></RemoteButton>
                <RemoteButton clicked={clicked} text='BACK'></RemoteButton>
                <RemoteButton clicked={clicked} icon='arrow_downward'></RemoteButton>
                <RemoteButton clicked={clicked} text='EXIT'></RemoteButton>
            </RemoteGrid>
    </div>
}

export default RemoteHandset;