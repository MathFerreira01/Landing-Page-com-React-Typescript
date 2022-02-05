import ButtonContact from '../atoms/ButtonContact'
import Frontend from '../tamplates/Frontend'

import HeroHeaderImage from '../assets/HeroHeaderImage.png'

import * as S from './styles'
import CardActivity from '../molecules/logo/CardActivity'

function Main() {

  return (
      <Frontend>
        <S.Container>
          <div>
            <h1>Design driven development of your web product</h1>
            <h6>We are a full service digital agency that builds immesive user experience.</h6>

            <ButtonContact></ButtonContact>
          </div>         
            <S.ColumnImage>
              <CardActivity/>

              <img src={HeroHeaderImage} alt='mulher fazendo pesquisa'/>
            </S.ColumnImage>     
        </S.Container>
      </Frontend>
  )
}

export default Main
