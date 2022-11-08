import '../App.css';
import '../components/common/Button.css';
import '../components/common/Color.css';
import '../components/auth/AuthTemplateBlock.css';
function RegisterPage() {
  return (
    <>
      <div className="AuthtemplateBlock">
        <div className="whiteBox">
          <h1 className="LoginBlue">HAN-MI</h1>
          <h3 className="LoginBlue">학술 공유 사이트</h3>
          <form>
            <label>아이디 </label>
            <input className="Forminput" placeholder="ID"></input>
            <br />
            <br />
            <label>비밀번호 </label>
            <input className="Forminput" placeholder="Password"></input>
            <br />
            <br />
            <label>비밀번호 확인 </label>
            <input className="Forminput" placeholder="Password 확인"></input>
            <br />
            <br />
            <label>이름 </label>
            <input className="Forminput" placeholder="이름"></input>
            <br />
            <br />
            <label>이메일 </label>
            <input className="Forminput" placeholder="이메일"></input>
          </form>
          <br />
          <br />
          <button className="Button">회원가입</button>
          <button className="Button">이전으로</button>

          <footer className="Footer">
            <div> 로그인 </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
