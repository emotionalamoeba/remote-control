import styles from './RemoteButton.module.css';

interface IProps {
    icon?: string;
    text?: string;
    clicked(): void;
}

const RemoteButton = (props: IProps) =>  {

    return <div className={styles.remote_button} onClick={() => props.clicked()}>
        {props.icon && <span className="material-icons">{props.icon}</span>}
        {props.text && <span className={styles.remote_button_text}>{props.text}</span>}       
    </div>
}

export default RemoteButton;