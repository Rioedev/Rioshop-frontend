import { Layout, Row, Col } from "antd";

const Footer = () => {
  return (
    <Layout.Footer style={{ background: "#111", color: "#fff", padding: "40px 80px" }}>
      <Row gutter={[32, 32]}>
        {/* Cột 1 */}
        <Col xs={24} md={6}>
          <h3 style={{ color: "#fff" }}>RIOSHOP</h3>
          <p style={{ color: "#ccc" }}>
            Thời trang tối giản – thoải mái mỗi ngày.
          </p>
        </Col>

        {/* Cột 2 */}
        <Col xs={24} md={6}>
          <h4 style={{ color: "#fff" }}>Về Rioshop</h4>
          <p style={{ color: "#ccc" }}>Giới thiệu</p>
          <p style={{ color: "#ccc" }}>Tuyển dụng</p>
          <p style={{ color: "#ccc" }}>Liên hệ</p>
        </Col>

        {/* Cột 3 */}
        <Col xs={24} md={6}>
          <h4 style={{ color: "#fff" }}>Hỗ trợ khách hàng</h4>
          <p style={{ color: "#ccc" }}>Hướng dẫn mua hàng</p>
          <p style={{ color: "#ccc" }}>Chính sách đổi trả</p>
          <p style={{ color: "#ccc" }}>Chính sách bảo mật</p>
        </Col>

        {/* Cột 4 */}
        <Col xs={24} md={6}>
          <h4 style={{ color: "#fff" }}>Liên hệ</h4>
          <p style={{ color: "#ccc" }}>Email: support@rioshop.vn</p>
          <p style={{ color: "#ccc" }}>Hotline: 1900 9999</p>
        </Col>
      </Row>

      <div
        style={{
          borderTop: "1px solid #333",
          marginTop: 32,
          paddingTop: 16,
          textAlign: "center",
          color: "#aaa"
        }}
      >
        © {new Date().getFullYear()} Rioshop. All rights reserved.
      </div>
    </Layout.Footer>
  );
};

export default Footer;
