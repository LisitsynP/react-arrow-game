import TypographyText from "../../../../UI/TypographyText/TypographyText"
import styles from "./ResultMessage.module.css"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = ({ isSuccessEndGame }) => {
  return (
    <div className={styles.wrapper}>
      {isSuccessEndGame && (
        <TypographyText className={styles.text}>
          Grac <br /> You WIN!
        </TypographyText>
      )}
      {!isSuccessEndGame && (
        <TypographyText className={styles.text}>
          Ups <br /> You Lose
        </TypographyText>
      )}
    </div>
  )
}

export default ResultMessage
