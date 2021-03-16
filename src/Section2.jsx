import './css/Section2.css';

//세션2 컴포넌트
const Section2 = () => {
    return (
        <div className="section2">
            <div className="left">
            <img className="section2_img" src="/images/cat.png" alt="고양이"/>
            </div>
            <div className="right">
                <h2 className="section2_h2">신동현의 코는 진짜인가</h2>
                <p className="section2_p">신동현의 코는 진짜이다 신동현의 코는 진짜이다 신동현의 코는 진짜이다 신동현의 코는 진짜이다 신동현의 코는 진짜이다 신동현의 코는 진짜이다 신동현의 코는 진짜이다
                신동현의 코는 진짜이다 신동현의 코는 진짜이다 신동현의 코는 진짜이다 신동현의 코는 진짜이다 신동현의 코는 진짜이다 신동현의 코는 진짜이다</p>
                <div className="section2_box">
                    <div className="section2_btn1">
                        <a href="http://tarogoddess.co.kr/new/sub/about.html">타로여신</a>
                    </div>
                    <div className="section2_btn1">
                        <a href="http://tarogoddess.co.kr/new/sub/guide.html">이용안내</a>
                    </div>
                    <div className="section2_btn2">
                        <a href="http://tarogoddess.co.kr/taro/save_new.php">할인상담</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section2;