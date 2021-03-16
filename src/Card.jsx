import './css/Card.css';

//카드 컴포넌트
const Card = () => {
    return (
        <div className="card">
            <div className="list">
                <button>
                    <img className="human" src="/images/cat.png" alt="고양이"/>
                    <ul className="text_box flex-between">
                        <div className="left-text">
                            <p className="job">신점타로, 수비학, 애정운전문</p>
                            <span className="good">상담후기 10</span>
                        </div>
                        <li className="number">상담번호 <span>24</span></li>
                    </ul>
                </button>
            </div>
        </div>
    )
}

export default Card;