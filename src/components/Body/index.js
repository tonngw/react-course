import { Input } from "antd";
import Course from "./Course";
import "./index.css";

const { Search } = Input;

function Body() {
  return (
    <div className="body">
      <Search
        placeholder="请输入课程名称查询"
        allowClear
        style={{ width: 300 }}
      />
      <Course></Course>
    </div>
  );
}

export default Body;