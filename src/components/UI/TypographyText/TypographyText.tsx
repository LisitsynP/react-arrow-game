import cn from "classnames"
import {
  Typography as TypographyMaterial,
  TypographyProps as TypographyMaterialProps,
} from "@mui/material"
import styles from "./TypographyText.module.css"

export interface ITypographyTextProps extends TypographyMaterialProps {}

const TypographyText: React.FC<ITypographyTextProps> = props => {
  const { children, className = "" } = props

  return (
    <TypographyMaterial {...props} className={cn(styles.text, className)}>
      {children}
    </TypographyMaterial>
  )
}

export default TypographyText
