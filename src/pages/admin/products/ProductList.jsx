import { useEffect, useState } from "react";
import {
  Table,
  Button,
  Space,
  Popconfirm,
  message,
  Tag,
  Row,
  Col,
  Breadcrumb,
  Typography,
  Select,
  Input,
  Card,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import productAPI from "../../../api/productAPI";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await productAPI.getAll();
        let data = [];
        if (Array.isArray(res.data)) {
          data = res.data;
        } else if (Array.isArray(res.data.data)) {
          data = res.data.data;
        } else if (res.data._id) {
          data = [res.data];
        }
        setProducts(data);
      } catch {
        message.error("Lỗi tải sản phẩm");
      }
    };
    fetchProducts();
  }, []);

  // ===== FILTER LOGIC =====
  const filteredProducts = products.filter((p) => {
    const matchName = p.name?.toLowerCase().includes(searchText.toLowerCase());

    const matchStatus = statusFilter ? p.status === statusFilter : true;

    return matchName && matchStatus;
  });

  const columns = [
    {
      title: "Ảnh",
      dataIndex: ["images", "thumbnail"],
      render: (img) =>
        img ? (
          <img
            src={img}
            alt="thumb"
            style={{
              width: 60,
              height: 60,
              objectFit: "cover",
              borderRadius: 6,
            }}
          />
        ) : (
          "—"
        ),
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Giá",
      render: (_, record) => {
        if (!record.minPrice) return "—";

        if (record.minPrice === record.maxPrice) {
          return `${record.minPrice.toLocaleString()} đ`;
        }

        return `${record.minPrice.toLocaleString()} - ${record.maxPrice.toLocaleString()} đ`;
      },
    },
    {
      title: "Tồn kho",
      render: (_, record) => {
        const totalStock = record.variants?.reduce(
          (sum, v) => sum + (v.stock || 0),
          0,
        );
        return totalStock ?? 0;
      },
    },
    {
      title: "Đã bán",
      dataIndex: "soldCount",
      render: (sold) => sold ?? 0,
    },
    {
      title: "Rating",
      render: (_, record) =>
        record.ratingAvg
          ? `${record.ratingAvg} ⭐ (${record.ratingCount})`
          : "—",
    },
    {
      title: "Badge",
      dataIndex: "badges",
      render: (badges) =>
        badges?.map((b) => (
          <Tag color="blue" key={b}>
            {b}
          </Tag>
        )),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (status) =>
        status === "published" ? (
          <Tag color="green">Published</Tag>
        ) : (
          <Tag color="orange">Draft</Tag>
        ),
    },
    {
      title: "Hành động",
      render: (_, record) => (
        <Space>
          <Button
            icon={<EyeOutlined />}
            onClick={() => navigate(`/admin/products/${record._id}`)}
          />
          <Button
            icon={<EditOutlined />}
            onClick={() => navigate(`/admin/products/${record._id}/edit`)}
          />
          <Popconfirm title="Bạn có chắc muốn xóa?">
            <Button danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      {/* ===== BREADCRUMB ===== */}
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item>Master data</Breadcrumb.Item>
        <Breadcrumb.Item>Sản phẩm</Breadcrumb.Item>
      </Breadcrumb>

      {/* ===== HEADER ===== */}
      <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
        <Col>
          <Typography.Title level={3} style={{ margin: 0 }}>
            Sản phẩm
          </Typography.Title>
        </Col>

        <Col>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => navigate("/admin/products/addProduct")}
          >
            Thêm mới
          </Button>
        </Col>
      </Row>

      {/* ===== FILTER BAR ===== */}
      <Row
        gutter={16}
        style={{
          marginBottom: 16,
          background: "#fafafa",
          padding: 16,
          borderRadius: 8,
        }}
      >
        <Col>
          <Select
            placeholder="Trạng thái"
            allowClear
            style={{ width: 160 }}
            value={statusFilter}
            onChange={(value) => setStatusFilter(value)}
            options={[
              { label: "Published", value: "published" },
              { label: "Draft", value: "draft" },
            ]}
          />
        </Col>
        <Col>
          <Select
            placeholder="Danh mục"
            allowClear
            style={{ width: 160 }}
            value={statusFilter}
            // onChange={(value) => setStatusFilter(value)}
            // options={[
            //   { label: "Published", value: "published" },
            //   { label: "Draft", value: "draft" },
            // ]}
          />
        </Col>
        <Col>
          <Input
            placeholder="Tìm theo tên..."
            prefix={<SearchOutlined />}
            allowClear
            style={{ width: 220 }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Col>
      </Row>

      {/* ===== TABLE ===== */}
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={filteredProducts}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `Tổng ${total} sản phẩm`,
        }}
      />
    </div>
  );
}
