/** @format */

import React from "react";
import {
  Dropdown,
  Button,
  Checkbox,
  Radio,
  Badge,
} from "antd";
import {
  DownOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { Filter } from "lucide-react";
import CreativeButton from "../../../shared/Buttons/CreativeButton";

const AdvanceFilterDropdown = ({
  selectedLanguage,
  setSelectedLanguage,
  selectedSalary,
  setSelectedSalary,
  selectedDuration,
  setSelectedDuration,
  selectedPostedDate,
  setSelectedPostedDate,
  mobile = false,
}) => {

  // Calculate active filters count
  const activeFiltersCount = [
    selectedLanguage,
    selectedSalary,
    selectedDuration?.length > 0,
    selectedPostedDate,
  ].filter(Boolean).length;

  const handleClearAll = () => {
    setSelectedLanguage(null);
    setSelectedSalary(null);
    setSelectedDuration([]);
    setSelectedPostedDate(null);
  };

  const content = (
    <div className={`${mobile ? 'w-full' : ''}`}>
      <div className={`grid ${mobile ? 'grid-cols-1' : 'grid-cols-4'} gap-6 p-5 ${mobile ? 'w-full' : 'min-w-[800px]'} bg-white rounded-xl shadow-xl border border-gray-100`}>
        {/* Languages */}
        <div>
          <p className='font-bold text-base mb-3 flex items-center gap-2 text-gray-800'>
            Languages
          </p>
          <Radio.Group
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className='flex flex-col space-y-2'
          >
            {[
              "JavaScript",
              "TypeScript",
              "Python",
              "Java",
              "Kotlin",
              "Swift",
              "PHP",
              "C++",
            ].map((lang) => (
              <Radio key={lang} value={lang} className="text-sm hover:text-blue-600">
                {lang}
              </Radio>
            ))}
          </Radio.Group>
        </div>

        {/* Price */}
        <div>
          <p className='font-bold text-base mb-3 flex items-center gap-2 text-gray-800'>
            Price Range
          </p>
          <Radio.Group
            value={selectedSalary}
            onChange={(e) => setSelectedSalary(e.target.value)}
            className='flex flex-col space-y-2'
          >
            {[
              "$50 - $1000",
              "$1000 - $2000",
              "$2000 - $4000",
              "$4000 - $6000",
              "$6000 - $8000",
              "$8000 - $10000",
              "$10000 - $15000",
              "$15000+",
            ].map((range) => (
              <Radio key={range} value={range} className="text-sm hover:text-blue-600">
                {range}
              </Radio>
            ))}
          </Radio.Group>
        </div>

        {/* Duration */}
        <div>
          <p className='font-bold text-base mb-3 flex items-center gap-2 text-gray-800'>
            Duration
          </p>
          <Checkbox.Group
            value={selectedDuration}
            onChange={setSelectedDuration}
            className='flex flex-col space-y-2'
          >
            <Checkbox value='all' className="text-sm hover:text-blue-600">All</Checkbox>
            <Checkbox value='<1' className="text-sm hover:text-blue-600">{"< 1 week"}</Checkbox>
            <Checkbox value='1-2' className="text-sm hover:text-blue-600">1–2 weeks</Checkbox>
            <Checkbox value='1month' className="text-sm hover:text-blue-600">1 month</Checkbox>
            <Checkbox value='ongoing' className="text-sm hover:text-blue-600">Ongoing</Checkbox>
          </Checkbox.Group>
        </div>

        {/* Posted Date */}
        <div>
          <p className='font-bold text-base mb-3 flex items-center gap-2 text-gray-800'>
            Posted Date
          </p>
          <Radio.Group
            value={selectedPostedDate}
            onChange={(e) => setSelectedPostedDate(e.target.value)}
            className='flex flex-col space-y-2'
          >
            <Radio value='24h' className="text-sm hover:text-blue-600">Last 24 hours</Radio>
            <Radio value='week' className="text-sm hover:text-blue-600">This week</Radio>
            <Radio value='month' className="text-sm hover:text-blue-600">This month</Radio>
          </Radio.Group>
        </div>
      </div>
      
      {/* Clear Filters Button */}
      {activeFiltersCount > 0 && (
        <div className='p-4 border-t border-gray-200 flex justify-end bg-gray-50 rounded-b-xl'>
          <CreativeButton 
            variant='error' 
            size='sm'
            onClick={handleClearAll}
          >
            Clear All ({activeFiltersCount})
          </CreativeButton>
        </div>
      )}
    </div>
  );

  return (
    <Dropdown 
      overlay={content} 
      trigger={["click"]} 
      placement='bottomLeft'
      overlayClassName="filter-dropdown-overlay"
    >
      <Badge count={activeFiltersCount} size="small" offset={[-5, 5]}>
        <Button
          className='flex items-center justify-center gap-2 text-gray-700 font-medium hover:text-blue-600 hover:border-blue-600 transition-all px-4 rounded-lg border border-gray-300'
          type='text'
          style={{ height: '44px', fontSize: '15px' }}
        >
          <Filter size={16} />
          <span>Filters</span>
          <DownOutlined className="text-xs" />
        </Button>
      </Badge>
    </Dropdown>
  );
};

export default AdvanceFilterDropdown;
