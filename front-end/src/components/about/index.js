import logo from '../../logo.png';
import linh from '../../linh.jpg';
import minh from '../../minh.jpg';
import nghiem from '../../nghiem.jpg';
import './styles/about.css';

export default function About() {
    return (
        <>
            <p className='About_GenzTeam'>About AI Lab</p>
            <div className="About__Container" onClick={() => {
                window.open('https://www.facebook.com/page.ailab', "_blank");
            }}>
                <img className="About__Img" src={logo} alt='logo' />
                <div className='About__Content'>
                    <p className='About__Content_Header'>AI Lab</p>
                    <p className='About__Content_SubHeader'>Artificial Intelligence Laboratory</p>
                    <p className='About__Content_p'>AI Lab được thành lập với mục đích giúp các sinh viên khoa CNTT thuộc trường Đại Học Công Nghiệp TP.HCM - IUH học tập, tư duy về bộ môn trí tuệ nhân tạo và tiến sâu đến deep learning, từ đó phát triển những kĩ năng xây dựng các mô hình trí tuệ nhân tạo thông qua các dự án và cuộc thi thực tế.</p>
                </div>
            </div>
            <p className='About_GenzTeam'>Team Member</p>
            <div className="About__Container2">
                <div>
                    <img className="About__Avatar" src={linh} alt='logo' onClick={() => {
                        window.open('https://www.facebook.com/tranlinh264', "_blank");
                    }} />
                    <p className='About__Member'>Trần Mỹ Linh</p>
                </div>
                <div>
                    <img className="About__Avatar" src={minh} alt='logo' onClick={() => {
                        window.open('https://www.facebook.com/buiminh.k14/', "_blank");
                    }} />
                    <p className='About__Member'>Bùi Bình Minh</p>
                </div>
                <div>
                    <img className="About__Avatar" src={nghiem} alt='logo' onClick={() => {
                        window.open('https://www.facebook.com/nghiem.van.3133719', "_blank");
                    }} />
                    <p className='About__Member'>Đặng Văn Nghiêm</p>
                </div>

            </div>
        </>
    )
}