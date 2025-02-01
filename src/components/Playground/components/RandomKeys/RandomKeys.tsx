import { useAppSelector } from "../../../../app/hooks"
import TypographyHeader from "../../../UI/TypographyHeader/TypographyHeader"
import RandomArrows from "./components/RandomArrows/RandomArrows"
import WelclomeText from "./components/WelclomeText/WelclomeText"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = ({ isTimerActive }) => {
  const state = useAppSelector(state => state.playground)

  return (
    <div>
      <TypographyHeader>Random keys</TypographyHeader>

      {state.steps.length === 0 && (
        <WelclomeText isTimerActive={isTimerActive} />
      )}
      {state.steps.length !== 0 && <RandomArrows />}
    </div>
  )
}

export default RandomKeys
