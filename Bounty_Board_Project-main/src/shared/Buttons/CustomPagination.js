import { Pagination } from "antd";

const CustomPagination = ({
  align = "center",
  current = 1,
  total = 50,
  pageSize = 12,
  onChange = () => {},
}) => {
  return (
    <div className="mt-10">
      <Pagination 
        align={align} 
        current={current} 
        total={total}
        pageSize={pageSize}
        onChange={onChange}
        showSizeChanger={false}
      />
    </div>
  );
};

export default CustomPagination;
