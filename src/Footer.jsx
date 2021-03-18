import './css/Footer.css';

//푸터 컴포넌트
const Footer = () => {
    return (
        <div className="footer">
            <ul className="menu_box">
                <li className="menu"><a href="http://tarogoddess.co.kr/new/sub/about.html">타로여신 소개</a></li>
                <li className="menu"><a href="http://tarogoddess.co.kr/new/sub/guide.html">이용안내</a></li>
                <li className="menu"><a href="http://tarogoddess.co.kr/taro/bbs/board.php?bo_table=notice">공지사항</a></li>
                <li className="menu"><a href="http://tarogoddess.co.kr/taro/bbs/board.php?bo_table=member">상담사소개</a></li>
                <li className="menu"><a href="http://tarogoddess.co.kr/taro/bbs/board.php?bo_table=qna">문의게시판</a></li>
                <li className="menu"><a href="http://tarogoddess.co.kr/taro/save_new.php">할인상담</a></li>
            </ul>
        </div>
    )
}

export default Footer;