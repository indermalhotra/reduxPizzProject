import styles from "./Message.module.css";

function Message({textData}) {
    return (
        <div className={styles.message}>
          {textData}
        </div>
    )
}

export default Message
