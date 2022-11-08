import '../App.css';
import '../components/common/Button.css';
import '../components/common/Color.css';
import '../components/common/MainTemplate.css';
import '../components/auth/AuthTemplateBlock.css';
function MainPage() {
  return (
    <>
      <header>
        <h1>Han-Mi 학술 공유</h1>
        <nav>
          <span>로그아웃</span>
          <span>고객센터</span>
        </nav>
      </header>
      <nav>
        <span>글목록</span>
        <span>글쓰기</span>
        <span>마이페이지</span>
      </nav>
    </>
  );
}

export default MainPage;
