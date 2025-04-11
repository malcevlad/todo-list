import React, {FC} from 'react';
import styles from './Modal.module.scss';

type ModalProps = {
    children: React.ReactNode;
    isOpened: boolean;
    setIsOpened: (isOpened: boolean) => void;
}

const Modal: FC<ModalProps> = ({children, isOpened, setIsOpened}) => {
    return (
        <div className={`${styles.modalOverlay} ${isOpened && styles.opened}`}>
            <div className={styles.modal}>
                <button
                    onClick={() => setIsOpened(false)}
                    className={styles.closeButton}
                >X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;