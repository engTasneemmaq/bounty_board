/** @format */

import {
  AppstoreOutlined,
  DownOutlined,
  SearchOutlined,
  UserOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Input, Select, Space, Tag } from "antd";
import { useState, useEffect, useMemo } from "react";
import EmptyImg from "../../../assets/LandingPage/EmptyImg.svg";
import { ArrowLeft } from "../../../assets/LandingPage/HeroSection";
import ArrowButton from "../../../shared/Buttons/ArrowButton";
import CustomPagination from "../../../shared/Buttons/CustomPagination";
import StanderButton from "../../../shared/Buttons/StanderButton";
import CustomDrawer from "../../../shared/CustomDrawer";
import DetailsDrawer from "../HowBountyBoardWork/DetailsDrawer";
import AdvanceFilterDropdown from "./AdvanceFilter";
import BountiesCard from "./BountiesCard";
import { useNavigate, useLocation } from "react-router";
import Viewa from "./View";
import { bountiesCardData } from "../../../MockData/bountiesCardData";
import CreativeButton from "../../../shared/Buttons/CreativeButton";
import CreativeCard from "../../../shared/Cards/CreativeCard";
import CreativeBadge from "../../../shared/Badge/CreativeBadge";

const { Option } = Select;

const Index = () => {
  const location = useLocation();
  // Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedSalary, setSelectedSalary] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState([]);
  const [selectedPostedDate, setSelectedPostedDate] = useState(null);
  
  // Sorting and Pagination States
  const [sortBy, setSortBy] = useState("latest");
  const [perPage, setPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  
  // UI States
  const [open, setOpen] = useState(false);
  const [selectedBounty, setSelectedBounty] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  // Helper function to extract salary value
  const extractSalaryValue = (salaryString) => {
    const match = salaryString.match(/\$(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };

  // Helper function to calculate days since posted
  const getDaysSincePosted = (postedDate) => {
    const posted = new Date(postedDate);
    const today = new Date();
    const diffTime = Math.abs(today - posted);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Read search query from URL on component mount
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      setSearchTerm(searchQuery);
      setTimeout(() => {
        const exploreBountiesSection = document.getElementById('explore-bounties');
        if (exploreBountiesSection) {
          exploreBountiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.search]);

  // Filter bounties based on all criteria
  const filteredBounties = useMemo(() => {
    let filtered = [...bountiesCardData];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter((bounty) =>
        bounty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bounty.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bounty.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Category filter (based on skills)
    if (selectedCategory) {
      const categoryMap = {
        design: ["UI/UX", "Design", "Frontend"],
        dev: ["Developer", "Backend", "Frontend", "Full Stack"],
        marketing: ["Marketing", "Social Media"]
      };
      
      if (categoryMap[selectedCategory]) {
        filtered = filtered.filter((bounty) =>
          bounty.skills.some(skill =>
            categoryMap[selectedCategory].some(cat =>
              skill.toLowerCase().includes(cat.toLowerCase())
            )
          )
        );
      }
    }

    // Language filter
    if (selectedLanguage) {
      filtered = filtered.filter((bounty) =>
        bounty.languages.includes(selectedLanguage)
      );
    }

    // Salary filter
    if (selectedSalary) {
      filtered = filtered.filter((bounty) => {
        const bountyValue = extractSalaryValue(bounty.details.bountyReward);
        
        if (selectedSalary === "$50 - $1000") return bountyValue >= 50 && bountyValue <= 1000;
        if (selectedSalary === "$1000 - $2000") return bountyValue > 1000 && bountyValue <= 2000;
        if (selectedSalary === "$2000 - $4000") return bountyValue > 2000 && bountyValue <= 4000;
        if (selectedSalary === "$4000 - $6000") return bountyValue > 4000 && bountyValue <= 6000;
        if (selectedSalary === "$6000 - $8000") return bountyValue > 6000 && bountyValue <= 8000;
        if (selectedSalary === "$8000 - $10000") return bountyValue > 8000 && bountyValue <= 10000;
        if (selectedSalary === "$10000 - $15000") return bountyValue > 10000 && bountyValue <= 15000;
        if (selectedSalary === "$15000+") return bountyValue > 15000;
        
        return true;
      });
    }

    // Duration filter
    if (selectedDuration && selectedDuration.length > 0) {
      filtered = filtered.filter((bounty) => {
        const days = bounty.daysRemaining;
        
        return selectedDuration.some(duration => {
          if (duration === "all") return true;
          if (duration === "<1") return days < 7;
          if (duration === "1-2") return days >= 7 && days <= 14;
          if (duration === "1month") return days > 14 && days <= 31;
          if (duration === "ongoing") return days > 31;
          return false;
        });
      });
    }

    // Posted Date filter
    if (selectedPostedDate) {
      filtered = filtered.filter((bounty) => {
        const daysSince = getDaysSincePosted(bounty.details.postedDate);
        
        if (selectedPostedDate === "24h") return daysSince <= 1;
        if (selectedPostedDate === "week") return daysSince <= 7;
        if (selectedPostedDate === "month") return daysSince <= 30;
        
        return true;
      });
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedLanguage, selectedSalary, selectedDuration, selectedPostedDate]);

  // Sort bounties
  const sortedBounties = useMemo(() => {
    let sorted = [...filteredBounties];

    switch (sortBy) {
      case "latest":
        sorted.sort((a, b) => 
          new Date(b.details.postedDate) - new Date(a.details.postedDate)
        );
        break;
      case "popular":
        sorted.sort((a, b) => b.contributors.length - a.contributors.length);
        break;
      case "priceLow":
        sorted.sort((a, b) => 
          extractSalaryValue(a.details.bountyReward) - extractSalaryValue(b.details.bountyReward)
        );
        break;
      case "priceHigh":
        sorted.sort((a, b) => 
          extractSalaryValue(b.details.bountyReward) - extractSalaryValue(a.details.bountyReward)
        );
        break;
      default:
        break;
    }

    return sorted;
  }, [filteredBounties, sortBy]);

  // Paginate bounties
  const paginatedBounties = useMemo(() => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    return sortedBounties.slice(startIndex, endIndex);
  }, [sortedBounties, currentPage, perPage]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedLanguage, selectedSalary, selectedDuration, selectedPostedDate]);

  const handleFilterApply = () => {
    // Trigger re-render with current filters
    setCurrentPage(1);
  };

  const handleClickDetails = () => {
    if (selectedBounty) {
      // Navigate to bounty details page with bounty ID
      navigate(`/details/${selectedBounty.id}`, {
        state: { bountyData: selectedBounty }
      });
    } else {
      navigate("/details");
    }
  };

  const showDrawer = (bounty) => {
    setSelectedBounty(bounty);
    setOpen(true);
  };
  
  const onClose = () => {
    setOpen(false);
    setSelectedBounty(null);
  };

  return (
    <div id='explore-bounties' className='my-5 md:my-10'>
      <div className='max-w-[100rem] w-full px-4 sm:px-6 lg:w-[90%] xl:w-[70%] m-auto py-3 md:py-5'>
        {/* Header */}
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2 animate-slide-in-left'>
          Explore <span className='text-gradient'>Active Bounties</span>
        </h2>
        <p className='text-gray-600 text-lg mb-6 animate-fade-in'>
          Find your next opportunity
        </p>

        {/* Search and Filter Section */}
        <CreativeCard className='flex flex-col sm:flex-row justify-between p-0 overflow-hidden animate-scale-in'>
          <div className='flex flex-col sm:flex-row p-3 sm:p-4 space-y-2 sm:space-y-0 sm:space-x-3 w-full items-center'>
            {/* Search Input */}
            <div className='flex items-center border-b sm:border-b-0 sm:border-r pr-0 sm:pr-4 w-full h-11'>
              <SearchOutlined className='text-blue-600 mr-2 text-lg' />
              <Input
                bordered={false}
                placeholder='Bounty title, Keyword...'
                className='w-full placeholder-gray-400 h-full text-base'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ fontSize: '15px' }}
              />
            </div>

            {/* Category Select */}
            <div className='flex items-center border-b sm:border-b-0 sm:border-r pr-0 sm:pr-4 h-11'>
              <AppstoreOutlined className='text-blue-600 mr-2 text-lg' />
              <Select
                bordered={false}
                placeholder='Category'
                className='w-full sm:w-40 h-full'
                suffixIcon={<DownOutlined className='text-xs' />}
                dropdownMatchSelectWidth={false}
                value={selectedCategory}
                onChange={setSelectedCategory}
                allowClear
                style={{ fontSize: '15px' }}
              >
                <Option value='design'>Design</Option>
                <Option value='dev'>Development</Option>
                <Option value='marketing'>Marketing</Option>
              </Select>
            </div>

            {/* Filters - Mobile */}
            <div className='sm:hidden w-full'>
              <AdvanceFilterDropdown 
                mobile 
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
                selectedSalary={selectedSalary}
                setSelectedSalary={setSelectedSalary}
                selectedDuration={selectedDuration}
                setSelectedDuration={setSelectedDuration}
                selectedPostedDate={selectedPostedDate}
                setSelectedPostedDate={setSelectedPostedDate}
              />
            </div>
            
            {/* Filters - Desktop */}
            <div className='hidden sm:flex items-center h-11'>
              <AdvanceFilterDropdown 
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
                selectedSalary={selectedSalary}
                setSelectedSalary={setSelectedSalary}
                selectedDuration={selectedDuration}
                setSelectedDuration={setSelectedDuration}
                selectedPostedDate={selectedPostedDate}
                setSelectedPostedDate={setSelectedPostedDate}
              />
            </div>
          </div>

          {/* Find Bounty Button */}
          <div className='p-3 sm:p-4 flex items-center justify-end sm:justify-start border-t sm:border-t-0 sm:border-l'>
            <CreativeButton
              variant='primary'
              size='md'
              onClick={handleFilterApply}
              className='w-full sm:w-auto h-11 whitespace-nowrap px-6'
              style={{ minWidth: '140px' }}
            >
              Find Bounty
            </CreativeButton>
          </div>
        </CreativeCard>

        {/* Active Filters Display */}
        {(searchTerm || selectedCategory || selectedLanguage || selectedSalary || selectedDuration.length > 0 || selectedPostedDate) && (
          <div className='mt-4 flex flex-wrap gap-2 items-center animate-slide-in-bottom'>
            <span className='text-gray-600 font-semibold text-sm'>Active Filters:</span>
            {searchTerm && (
              <CreativeBadge variant='info' closable onClose={() => setSearchTerm("")}>
                Search: {searchTerm}
              </CreativeBadge>
            )}
            {selectedCategory && (
              <CreativeBadge variant='primary' closable onClose={() => setSelectedCategory(null)}>
                {selectedCategory}
              </CreativeBadge>
            )}
            {selectedLanguage && (
              <CreativeBadge variant='success' closable onClose={() => setSelectedLanguage(null)}>
                {selectedLanguage}
              </CreativeBadge>
            )}
            {selectedSalary && (
              <CreativeBadge variant='warning' closable onClose={() => setSelectedSalary(null)}>
                {selectedSalary}
              </CreativeBadge>
            )}
            {selectedDuration.length > 0 && (
              <CreativeBadge variant='primary' closable onClose={() => setSelectedDuration([])}>
                {selectedDuration.length} duration(s)
              </CreativeBadge>
            )}
            {selectedPostedDate && (
              <CreativeBadge variant='info' closable onClose={() => setSelectedPostedDate(null)}>
                {selectedPostedDate === '24h' ? 'Last 24h' : selectedPostedDate === 'week' ? 'This Week' : 'This Month'}
              </CreativeBadge>
            )}
          </div>
        )}

        {/* View Toggle and Results Count */}
        <div className='flex justify-between items-center mt-5 sm:mt-6'>
          <div className='text-gray-700'>
            <span className='font-bold text-xl text-gradient'>{filteredBounties.length}</span>
            <span className='ml-2 text-gray-600'>Bounties Found </span>
          </div>
          <Viewa 
            sortBy={sortBy}
            setSortBy={setSortBy}
            perPage={perPage}
            setPerPage={setPerPage}
          />
        </div>
      </div>

      {/* Bounties Cards */}
      <div className='max-w-[100rem] w-full px-4 sm:px-6 lg:w-[90%] xl:w-[70%] m-auto'>
        {paginatedBounties.length > 0 ? (
          paginatedBounties.map((bounty) => (
            <BountiesCard
              key={bounty.id}
              cardImg={bounty.image}
              title={bounty.name}
              status='Open'
              viewDetails={() => showDrawer(bounty)}
              application={`${bounty.contributors.length} Applicants`}
              pricerange={bounty.details.bountyReward}
              dayesRemaining={`${bounty.daysRemaining} Days Remaining`}
              discription={bounty.description}
              owner={{ 
                name: bounty.contributors[0]?.name || "Unknown", 
                icon: <UserOutlined /> 
              }}
              date={`Posted ${getDaysSincePosted(bounty.details.postedDate)} days ago`}
              applicationList={bounty.contributors.map((contributor) => ({
                name: contributor.name,
                icon: <UserOutlined />,
                style: { backgroundColor: contributor.color },
              }))}
            />
          ))
        ) : (
          <CreativeCard className='text-center py-16 animate-scale-in'>
            <img src={EmptyImg} alt='No results' className='mx-auto mb-6 w-64 opacity-80 animate-float' />
            <h3 className='text-2xl font-bold mb-3'>
              <span className='text-gradient'>No Bounties Found</span> 
            </h3>
            <p className='text-gray-600 text-lg mb-6'>
              Try adjusting your filters to see more results
            </p>
            <CreativeButton 
              variant='outline' 
              size='lg'
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory(null);
                setSelectedLanguage(null);
                setSelectedSalary(null);
                setSelectedDuration([]);
                setSelectedPostedDate(null);
              }}
            >
               Clear All Filters
            </CreativeButton>
          </CreativeCard>
        )}
      </div>

      {/* Pagination */}
      {paginatedBounties.length > 0 && (
        <div className='max-w-[100rem] w-full px-4 sm:px-6 lg:w-[90%] xl:w-[70%] m-auto py-5'>
          <CustomPagination 
            current={currentPage}
            total={sortedBounties.length}
            pageSize={perPage}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
      )}

      {/* Drawer */}
      <CustomDrawer
        width={window.innerWidth > 768 ? 540 : "100%"}
        open={open}
        onClose={onClose}
        Children={<DetailsDrawer bountyId={selectedBounty?.id} bountyData={selectedBounty} />}
        closeIcon={
          <ArrowButton text='' onClick={onClose} icon={<ArrowLeft />} />
        }
        extra={
          <div>
            <Space>
              <StanderButton onClick={handleClickDetails} text='Details' />
            </Space>
          </div>
        }
      />
    </div>
  );
};

export default Index;
