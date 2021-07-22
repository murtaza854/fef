import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import './ChildTable.scss'

function ChildTable(props) {
    return (
        <Container fluid className="childTable">
            <Row className="justify-content-center">
                <Col md={10}>
                    <p className='Heading1 margin-top-work'>
                        Recommended Food and Portion Sizes for Children in Pakistan (3 – 19 years)
                    </p>
                    <table class="tg">
                        <thead>
                            <tr>
                                <th class="tg-lboi"></th>
                                <th class="tg-fymr" colspan="2">No. of Servings/day</th>
                                <th class="tg-fymr" colspan="4" rowspan="2">Portion size and description</th>
                            </tr>
                            <tr>
                                <td class="tg-fymr">Food Group</td>
                                <td class="tg-fymr">3 - 10 Years</td>
                                <td class="tg-fymr">10 – 19 Years</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="tg-0pky">Milk and milk Products</td>
                                <td class="tg-0pky">2 - 3</td>
                                <td class="tg-0pky">3 - 4</td>
                                <td class="tg-0pky" colspan="4">1 serving=1cup of milk or 1 cup of yogurt or 1 slice of cheese or 1 cup of kheer or feerni or other milk-based products equivalent to nutrients supplied by 1 cup of milk. 1 cup of whole milk will provide 15 g carbohydrates, 6 g protein, 8 g fat and 150 calories.</td>
                            </tr>
                            <tr>
                                <td class="tg-0pky">Cereals</td>
                                <td class="tg-0pky">2 - 4</td>
                                <td class="tg-0pky">5 - 6</td>
                                <td class="tg-0pky" colspan="4">1 serving= 2 slices of bread (toast) or 1 chapatti or 1 cup of cooked rice or 1 cup of cereals equivalent to nutrients supplied by 2 slices of bread. One serving of cereals bread(2 toast x 28 g=56 g) shall provide 30 g carbohydrates, 6 g protein, 0-2 g fat and 160 calories.</td>
                            </tr>
                            <tr>
                                <td class="tg-0pky">Vegetables</td>
                                <td class="tg-0pky">1 - 2</td>
                                <td class="tg-0pky">2 - 3</td>
                                <td class="tg-0pky" colspan="4">1 serving= ½ cup of cooked non-starchy vegetables or ½ cup of vegetables juice/soup or 1 cup of fresh vegetables/salad. One serving of vegetables will provide 5 g carbohydrates, 2 g protein and 25 calories. One serving of starchy vegetables (1 potato (100 g) or maize (1/2 cup) or peas green ½ cup) will provide15 g carbohydrates, 3 g protein, 0-1 g fat and 80 calories.</td>
                            </tr>
                            <tr>
                                <td class="tg-0pky">Fruits</td>
                                <td class="tg-0pky">1 - 2</td>
                                <td class="tg-0pky">2 - 3</td>
                                <td class="tg-0pky" colspan="4">1 serving=1 medium size banana or 1 apple or 1 peach or 2-3 plums or 3-4 apricots. Each serving will provide 20 g carbohydrates and 80 calories.</td>
                            </tr>
                            <tr>
                                <td class="tg-0pky">Meats &amp; Pulses</td>
                                <td class="tg-0pky">1 - 2</td>
                                <td class="tg-0pky">2 - 3</td>
                                <td class="tg-0pky" colspan="4">1 serving of meat (28 g lean meat=2-3 small pieces of meat or 1-2 pieces of fish or 1 egg, or ½ cup of cooked pulses). One serving of lean meat will provide 7 g protein, 3 g fat and 55 calories. One serving of meat with medium fat will provide7 g protein, 5 g fat and 75 calories. One serving of meat with high fat will provide 7 g protein, 8 g fat and 100 calories.</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
}

export default ChildTable;