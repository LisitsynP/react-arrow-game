import cn from "classnames"
import {
  Button as ButtonMaterial,
  ButtonProps as ButtonMaterialProps,
} from "@mui/material"
import styles from "./Button.module.css"
export interface IButtonProps extends ButtonMaterialProps {}

const Button: React.FC<IButtonProps> = props => {
  const { children, className = "" } = props
  return (
    <ButtonMaterial
      variant="contained"
      size="small"
      {...props}
      className={cn(styles.button, className)}
    >
      {children}
    </ButtonMaterial>
  )
}

export default Button
