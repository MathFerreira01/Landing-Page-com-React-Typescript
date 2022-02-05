import { FiArrowUp } from "react-icons/fi";
import * as S from "./styles";

const CardActivity = () => {
  return (
    <S.Container>
      <small>Activity</small>
      <article>
        <span>18</span>
        <FiArrowUp size={25} color="#fff" />
      </article>

      <div className="circle1"/>
      <div className="circle2"/>
      <div className="circle3"/>
    </S.Container>
  );
};

export default CardActivity;
