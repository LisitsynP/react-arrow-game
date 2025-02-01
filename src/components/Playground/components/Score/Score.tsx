import { useAppSelector } from "../../../../app/hooks"
import TypographyHeader from "../../../UI/TypographyHeader/TypographyHeader"
import TypographyText from "../../../UI/TypographyText/TypographyText"
import { Chip, Stack } from "@mui/material"
import styles from "./Score.module.css"

const Score: React.FC = () => {
  const state = useAppSelector(state => state.playground)
  return (
    <>
      <TypographyHeader>Score</TypographyHeader>
      <TypographyText>
        On error, the "Consecutive successful hits" value is reset to zero
      </TypographyText>
      <Stack direction="row" spacing={1}>
        <Chip
          className={styles.chipUnsuccess}
          variant="outlined"
          label={<span>Errors: {state.totalUnsuccessful}</span>}
        />

        <Chip
          className={styles.chipSuccess}
          variant="outlined"
          label={<span> Successful: {state.totalSuccessful}</span>}
        />
      </Stack>
    </>
  )
}

export default Score
