import cn from "classnames"
import {
  Typography as TypographyMaterial,
  TypographyProps as TypographyMaterialProps,
} from "@mui/material"
import styles from "./TypographyHeader.module.css"

export interface ITypographyHeaderProps extends TypographyMaterialProps {}

const TypographyHeader: React.FC<ITypographyHeaderProps> = props => {
  const { children, className = "" } = props

  return (
    <TypographyMaterial
      variant="h3"
      {...props}
      className={cn(styles.text, className)}
    >
      {children}
    </TypographyMaterial>
  )
}

export default TypographyHeader
