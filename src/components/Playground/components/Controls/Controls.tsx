import Button from "../../../UI/Button/Button"
import { PlayArrow, Pause } from "@mui/icons-material"
import styles from "./Controls.module.css"

export interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<IControlsProps> = ({
  isTimerActive,
  setIsTimerActive,
}) => {
  return (
    <div>
      <Button
        endIcon={<PlayArrow />}
        onClick={() => setIsTimerActive(true)}
        disabled={isTimerActive}
        className={styles.button}
      >
        play
      </Button>
      <Button
        endIcon={<Pause />}
        onClick={() => setIsTimerActive(false)}
        disabled={!isTimerActive}
        className={styles.button}
      >
        pause
      </Button>
    </div>
  )
}

export default Controls
