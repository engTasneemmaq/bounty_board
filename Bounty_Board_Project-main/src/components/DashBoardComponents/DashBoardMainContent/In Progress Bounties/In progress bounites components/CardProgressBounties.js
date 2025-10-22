import { SubTitleText } from "../../../../../shared/Texts/SubTitleText";
import { IconWithText } from "../../../../../shared/IconsWithText/IconWithText";
import { NotepadText, Calendar, Clock, Users, ChevronRight } from 'lucide-react';
import { Progress, Avatar } from "antd";
import { useNavigate } from "react-router";
import CreativeCard from "../../../../../shared/Cards/CreativeCard";
import CreativeButton from "../../../../../shared/Buttons/CreativeButton";
import CreativeBadge from "../../../../../shared/Badge/CreativeBadge";


export const CardProgressBounties = ({ data }) => {
    const navigate = useNavigate();
    const {
        id,
        name,
        image,
        milestones,
        milestonesDone,
        daysRemaining,
        progress,
        contributors,
        urgentDaysLeft
    } = data;


    const navigateToBountyOverView = () =>  {
        navigate(`/dashboard/bounty-name-overview/${data.id}`)
    }

    return (
        <CreativeCard 
            className="group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            onClick={navigateToBountyOverView}
        >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
                <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    src={image} 
                    alt={name} 
                />
                <div className="absolute top-4 right-4">
                    <CreativeBadge variant={urgentDaysLeft <= 3 ? "error" : "warning"}>
                        <Clock className="w-3 h-3 mr-1" />
                        {urgentDaysLeft} Days Left
                    </CreativeBadge>
                </div>
                <div className="absolute bottom-4 left-4">
                    <CreativeBadge variant="primary">
                        In Progress
                    </CreativeBadge>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-gradient group-hover:text-blue-600 transition-colors">
                    {name}
                </h3>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-100 rounded-lg p-2">
                            <NotepadText className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900">{milestones}</p>
                            <p className="text-xs text-gray-500">Milestones</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-green-100 rounded-lg p-2">
                            <Calendar className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900">{daysRemaining}</p>
                            <p className="text-xs text-gray-500">Days Left</p>
                        </div>
                    </div>
                </div>

                {/* Progress Section */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm font-bold text-blue-600">{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="text-xs text-gray-500">
                        {milestonesDone}/{milestones} milestones completed
                    </p>
                </div>

                {/* Contributors */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Contributors:</span>
                    </div>
                    <Avatar.Group maxCount={3} size="small">
                        {contributors.map((user, idx) => (
                            <Avatar key={idx} style={{ backgroundColor: user.color }}>
                                {user.name}
                            </Avatar>
                        ))}
                    </Avatar.Group>
                </div>

                {/* Action Button */}
                <CreativeButton
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-blue-50 group-hover:border-blue-300 transition-all duration-300"
                >
                    View Details
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </CreativeButton>
            </div>
        </CreativeCard>
    );
};
