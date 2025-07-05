import { Link } from "react-router-dom";


const NotFound = () => {
    return (
  <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - 페이지를 찾을 수 없습니다.</h1>
      <p>죄송합니다. 해당 페이지는 존재하지 않거나 이동되었습니다.</p>
      <Link to="/">홈으로 돌아가기</Link>
    </div>
  );
};

export default NotFound;