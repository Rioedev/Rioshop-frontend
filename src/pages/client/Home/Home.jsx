import { Row, Col, Card } from "antd";
import MainLayout from "../../../layouts/ClientLayout";

const Home = () => {
  return (
    <MainLayout>
      <Row gutter={[24, 24]}>
        {[1, 2, 3, 4].map((item) => (
          <Col span={6} key={item}>
            <Card
              hoverable
              cover={<img src="https://via.placeholder.com/300" />}
            >
              <h3>Áo thun basic</h3>
              <p>199.000đ</p>
            </Card>
          </Col>
        ))}
      </Row>
    </MainLayout>
  );
};

export default Home;
