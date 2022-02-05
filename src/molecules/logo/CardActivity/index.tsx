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

      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
    </S.Container>
  );
};

export default CardActivity;
