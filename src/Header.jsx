import './App.css';
import './css/Header.css';

// 헤더 컴포넌트
const Header = () => {
    return (
    <div className="App">
        <header className="header">
          <ul>
            <li><a href="#">타로여신 소개</a></li>
            <li><a href="#">이용안내</a></li>
            <li><a href="#">공지사항</a></li>

          </ul>
          <h1>
            <img src="/images/logo1.png" alt="로고"/>
          </h1>
          <ul>
            <li><a href="#">상담사 소개</a></li>
            <li><a href="#">문의게시판</a></li>
            <li><a href="#">할인상담</a></li>
          </ul>
        </header>
      </div>
    );
}
export default Header;