import { Input, Space } from "antd";
const { Search } = Input;
import "./header.css";

const onSearch = (value) => console.log(value);
const App = () => (
  <Space direction="vertical" className="search_input">
    <Search
      className="input"
      placeholder="input search text"
      onSearch={onSearch}
      style={{
        width: 600,
      }}
    />
  </Space>
);
export default App;
