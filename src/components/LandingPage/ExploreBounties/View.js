import { Select, Space } from "antd";
import { ArrowUpNarrowWide, LayoutGrid } from "lucide-react";

const { Option } = Select;

const FilterBar = ({ sortBy, setSortBy, perPage, setPerPage }) => {
  return (
    <Space size="middle" align="center" className="animate-fade-in">
      {/* Sort By */}
      <div className="flex items-center gap-2">
        <ArrowUpNarrowWide size={18} className="text-blue-600" />
        <Select 
          value={sortBy} 
          onChange={setSortBy} 
          style={{ width: 160 }}
          className="custom-select"
        >
          <Option value="latest">Latest</Option>
          <Option value="popular">Popular</Option>
          <Option value="priceLow">Price: Low to High</Option>
          <Option value="priceHigh">Price: High to Low</Option>
        </Select>
      </div>

      {/* Per Page */}
      <div className="flex items-center gap-2">
        <LayoutGrid size={18} className="text-blue-600" />
        <Select 
          value={perPage} 
          onChange={setPerPage} 
          style={{ width: 130 }}
          className="custom-select"
        >
          <Option value={12}>12 per page</Option>
          <Option value={24}>24 per page</Option>
          <Option value={48}>48 per page</Option>
        </Select>
      </div>
    </Space>
  );
};

export default FilterBar;
