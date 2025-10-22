
import { SubTitleText } from "../../../shared/Texts/SubTitleText";
import { Button } from "antd";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useEffect } from "react";

export const ModalForPostBounty = ({ bountyData, milestones }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    // Save bounty to localStorage when modal opens
    if (bountyData) {
      const newBounty = {
        id: Date.now().toString(),
        key: Date.now().toString(),
        title: bountyData.projectTitle,
        posted: new Date().toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric' 
        }),
        expirationDate: bountyData.expirationDate,
        remaining: calculateRemaining(bountyData.expirationDate),
        statusKey: 'active',
        status: 'Active',
        applications: '0 Applications',
        category: bountyData.category,
        salary: bountyData.salary,
        languages: bountyData.languages,
        projectLink: bountyData.projectLink,
        description: bountyData.description,
        requirements: bountyData.requirements,
        technical: bountyData.technical,
        coverImage: bountyData.coverImage,
        milestones: milestones || [],
        userId: user?.id || 'guest',
        createdAt: new Date().toISOString(),
        application: [] // Empty array for applications
      };

      console.log("=== Saving New Bounty ===");
      console.log("User:", user);
      console.log("User ID:", user?.id);
      console.log("New Bounty:", newBounty);

      // Get existing bounties from localStorage
      const existingBounties = JSON.parse(localStorage.getItem("postedBounties") || "[]");
      
      // Add new bounty
      existingBounties.push(newBounty);
      
      // Save back to localStorage
      localStorage.setItem("postedBounties", JSON.stringify(existingBounties));
      
      console.log('✅ Bounty saved successfully with userId:', newBounty.userId);
    }
  }, [bountyData, milestones, user]);

  const calculateRemaining = (expirationDate) => {
    if (!expirationDate) return 'No expiration';
    
    const expDate = new Date(expirationDate);
    const today = new Date();
    const diffTime = expDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
      return 'Expired';
    } else if (diffDays === 0) {
      return 'Today';
    } else {
      return `${diffDays} days remaining`;
    }
  };

  const navigateToPostedBounties = () => {
    navigate("/dashboard/posted-bounties");
  };

  return (
    <div className='mt-[20px] gap-[20px] flex flex-col relative'>
      <SubTitleText
        text={"🎯 Bounty Submitted Successfully!"}
        font={"medium"}
        size={18}
        color={"#18191C"}
      />
      <SubTitleText
        text={
          "Your bounty has been posted and is now live. You can view and manage applications from your Posted Bounties page."
        }
        color={"#767F8C"}
        font={"normal"}
        size={16}
      />
      <div className="flex gap-3">
        <Button
          className='w-[200px] border-[#0A65CC] text-[#0A65CC] h-[48px]'
          onClick={() => navigate("/dashboard")}
        >
          <MoveLeft />
          <SubTitleText text={"Back to Dashboard"} />
        </Button>
        <Button
          className='w-[200px] bg-[#0A65CC] text-white h-[48px]'
          onClick={navigateToPostedBounties}
        >
          <SubTitleText text={"View Posted Bounties"} />
        </Button>
      </div>
    </div>
  );
};
