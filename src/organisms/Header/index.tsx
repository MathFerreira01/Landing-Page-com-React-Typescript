import * as S from "./styles"

import Logo from "../../molecules/logo"
import Menu from "../menu"
import Button from "../../atoms/button"


const Header = () => {
    return (
    
    <S.Box>
        <Logo/>
        <Menu/>
        <Button/>
    </S.Box>)
}

export default Header