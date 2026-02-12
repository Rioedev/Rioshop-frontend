import { Layout } from "antd";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const { Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content style={{ minHeight: "80vh", padding: "40px" }}>
        {children}
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
