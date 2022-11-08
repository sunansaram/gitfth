import React, { useState } from 'react';
import MainPage from './MainPage';
function LoginPage() {
  const [LoginTogle, setLoginTogle] = useState(false);
  const [forceRender, setForceRender] = useState({ RenderToggle: null });
  console.log(LoginTogle);
  const LoginHandler = (e) => {
    e.preventDefault();
    setLoginTogle(true);
    console.log('로그인');
    setForceRender({ ...forceRender, RenderToggle: 'Rendering' });
  };
  return (
    <>
      {LoginTogle ? (
        <MainPage></MainPage>
      ) : (
        <div className="AuthtemplateBlock">
          <div className="whiteBox">
            <h1 className="LoginBlue">HAN-MI</h1>
            <h3 className="LoginBlue">학술 공유 사이트</h3>
            <form>
              <input className="Forminput" placeholder="ID"></input>
              <br />
              <br />
              <input className="Forminput" placeholder="Password"></input>
            </form>
            <br />
            <button className="Button" onClick={LoginHandler}>
              로그인
            </button>
            <footer className="Footer">
              <div>회원가입</div>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginPage;
