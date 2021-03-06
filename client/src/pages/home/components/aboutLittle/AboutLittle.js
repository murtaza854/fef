import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./AboutLittle.scss";
// import founder from '../../../../assets/client/NaveedGilani.jpg';
import { Heading2, CustomButton1 } from '../../../../components'
import api from '../../../../api';

function AboutLittle(props) {
    const [aboutLittleText, setAboutLittleText] = React.useState([]);
    const [image, setImage] = React.useState('');

    React.useEffect(() => {
        async function getAboutUs() {
            try {
                const response = await fetch(`${api}/admin/get-small-about-us`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-store'
                    },
                });
                const data = await response.json();
                const aboutUs = data.smallAboutUsText.split('\n');
                setAboutLittleText(aboutUs);
                setImage(data.aboutUsImagePath);
                // setSmallAboutUsText(prevState => ({ ...prevState, value: data.smallAboutUsText }));
                // setImage({ picturePreview: '', imgURl: data.aboutUsImagePath });
            } catch (error) {
            }
        }
        getAboutUs();
    }, []);

    return (
        <div className="AboutLittle">
            <Container>
                <Row>
                    <Col lg={4} className="img-container">
                        {/* <img src="/homeAbout.jpg" alt='Children' /> */}
                        <img src={image} alt='Children' />
                    </Col>
                    <Col>
                        {/* <h2 className="small-heading">Message from the Founder</h2> */}
                        <Heading2 first="About Us" textTransform="uppercase" color="#e3aa58"></Heading2>
                        <p className="content-read">
                            {/* The <strong>Fortify Education Foundation (FEF)</strong> is a not-for-profit organization based in Karachi. We, at FEF, have set out to work for the economically disadvantaged Children in Pakistan. It is our goal to contribute towards ensuring mental and physical growth of our children in schools to enable them to protect their own and their family???s future. Through our <strong>School Meal Program (SMP)</strong>, we have set out to provide nutrition sensitive meals for the children who are in school to learn and achieve. */}
                            {
                                aboutLittleText.map((text, index) => {
                                    return <span key={index}>{text}<br /></span>
                                })
                            }
                        </p>
                        <CustomButton1 text="Read More" to="profile" classes="btn center-992 transparent-btn"></CustomButton1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutLittle;