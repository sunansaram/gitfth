import '../App.css';
import '../components/common/Button.css';
import '../components/common/Color.css';
import '../components/common/MainTemplate.css';
import '../components/auth/AuthTemplateBlock.css';
function Header() {
  return (
    <>
      <header>
        <h1>Han-Mi 학술 공유</h1>
        <nav>
          <span>로그아웃</span>
          <span>마이페이지</span>
          <span>고객센터</span>
        </nav>
      </header>
      <div>
        <ul>
          <li>게시판</li>
          <li>마이페이지</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
