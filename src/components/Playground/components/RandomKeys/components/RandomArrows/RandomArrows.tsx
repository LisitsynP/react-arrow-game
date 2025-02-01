import { useAppSelector } from "../../../../../../app/hooks"
import { IMapArrowCodes, MAP_ARROW_CODES } from "../../../../constants"
import { IPlaygroundStepsState } from "../../../../store/types"
import cn from "classnames"

import stylesCommon from "../../RandomKeys.module.css"
import styles from "./RandomArrows.module.css"

const RandomArrows: React.FC = () => {
  const state = useAppSelector(state => state.playground)

  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    if (element.success && element.success !== null) {
      return cn(styles.iconSuccess, stylesCommon.icon)
    }
    if (!element.success && element.success !== null) {
      return cn(styles.iconUnsuccess, stylesCommon.icon)
    }
    return stylesCommon.icon
  }
  return (
    <div className={stylesCommon.wrapper}>
      {state.steps.map(value => (
        <span key={value.step} className={getStylesRandomKeys(value)}>
          {MAP_ARROW_CODES[value.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomArrows
