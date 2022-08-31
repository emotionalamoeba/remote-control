import styles from './RemoteGrid.module.css';

const RemoteGrid = (props: {children: JSX.Element[]}) => {

    return <div className={styles.remote_grid_row}>
        {props.children}
    </div>
}

export default RemoteGrid;