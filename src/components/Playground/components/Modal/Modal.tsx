import { useAppDispatch } from "../../../../app/hooks"
import Button from "../../../UI/Button/Button"
import { resetStore } from "../../store/slices"
import ResultMessage from "./ResultMessage/ResultMessage"
import cn from "classnames"
import { Modal as ModalMateial } from "@mui/material"

import styles from "./Modal.module.css"

export interface IModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
  isSuccessEndGame: boolean
}

const Modal: React.FC<IModalProps> = ({ setIsShowModal, isSuccessEndGame }) => {
  const dispatch = useAppDispatch()
  const handleClose = () => {
    setIsShowModal(false)
    dispatch(resetStore())
  }
  return (
    <ModalMateial open onClose={handleClose} className={styles.wrapper}>
      <div
        className={cn(
          styles.container,
          isSuccessEndGame ? styles.modalSuccess : styles.modalUnsuccess,
        )}
      >
        <ResultMessage isSuccessEndGame={isSuccessEndGame} />
        <Button className={styles.button} onClick={handleClose}>start new game</Button>
      </div>
    </ModalMateial>
  )
}

export default Modal
