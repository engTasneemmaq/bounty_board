// InProgressBounties.jsx

import { Select } from "antd";
import { SectionHeader } from "../../DashBoardSharedComponents/SectionHeader";
import { CardProgressBounties } from "./In progress bounites components/CardProgressBounties";
import { bountiesCardData } from "../../../../MockData/bountiesCardData";
import { useState, useMemo } from "react";
import { TrendingUp, ChevronDown } from "lucide-react";
import CreativeCard from "../../../../shared/Cards/CreativeCard";
import CreativeButton from "../../../../shared/Buttons/CreativeButton";

export const InProgressBounties = () => {
    const [sortBy, setSortBy] = useState('newest');

    // Sort bounties based on selected option
    const sortedBounties = useMemo(() => {
        let sorted = [...bountiesCardData];
        
        if (sortBy === 'newest') {
            // Assuming newer bounties have higher IDs
            sorted.sort((a, b) => b.id.localeCompare(a.id));
        } else if (sortBy === 'earliest') {
            sorted.sort((a, b) => a.id.localeCompare(b.id));
        }
        
        return sorted;
    }, [sortBy]);

    const handleChange = value => {
        setSortBy(value);
    };

    return (
        <div className="space-y-6">
            {/* Header with Creative Design */}
            <CreativeCard className="p-6">
                <div className="flex justify-between flex-wrap flex-row items-center">
                    <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-3 shadow-lg">
                            <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gradient">
                                In Progress Bounties
                            </h2>
                            <p className="text-gray-600 mt-1">
                                Track your active bounties and milestones
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-600 font-medium">Sort by:</span>
                        <Select
                            placeholder="Sort by"
                            value={sortBy}
                            style={{ 
                                width: 140, 
                                height: 48, 
                                borderRadius: '12px',
                                border: '2px solid #e5e7eb'
                            }}
                            onChange={handleChange}
                            options={[
                                { value: 'newest', label: 'Newest' },
                                { value: 'earliest', label: 'Earliest' },
                            ]}
                            className="creative-select"
                            suffixIcon={<ChevronDown className="w-4 h-4 text-gray-500" />}
                        />
                    </div>
                </div>
                
                {/* Stats */}
                <div className="mt-6 flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                            {sortedBounties.length} Active Bounties
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                            {sortedBounties.reduce((acc, bounty) => acc + (bounty.milestonesDone || 0), 0)} Completed Milestones
                        </span>
                    </div>
                </div>
            </CreativeCard>

            {/* Bounties Grid */}
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {sortedBounties.map((item) => (
                    <CardProgressBounties key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};
