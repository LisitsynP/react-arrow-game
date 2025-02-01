import TypographyText from "../../../../../UI/TypographyText/TypographyText"
import icon from "./img/loader.svg"

import stylesCommon from "../../RandomKeys.module.css"
import styles from "./WelclomeText.module.css"

export interface IWelclomeTextProps {
  isTimerActive: boolean
}

const WelclomeText: React.FC<IWelclomeTextProps> = ({ isTimerActive }) => {
  if (isTimerActive) {
    return (
      <div className={stylesCommon.wrapper}>
        <span className={stylesCommon.icon}>
          <img className={styles.loader} src={icon} alt="Loader" />
        </span>
      </div>
    )
  }
  return (
    <TypographyText>
      Press "Play" to start the game and wait for the first arrow to appear
    </TypographyText>
  )
}

export default WelclomeText
