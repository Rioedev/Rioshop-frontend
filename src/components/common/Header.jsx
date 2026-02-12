import { Layout, Menu } from "antd";

const Header = () => {
  return (
    <Layout.Header style={{ background: "#fff" }}>
      <div style={{ fontWeight: "bold", fontSize: 20 }}>RIOSHOP</div>
      <Menu
        mode="horizontal"
        items={[
          { key: "1", label: "Nam" },
          { key: "2", label: "Nữ" },
          { key: "3", label: "Sale" },
        ]}
      />
    </Layout.Header>
  );
};

export default Header;
