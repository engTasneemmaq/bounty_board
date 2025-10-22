import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import './styles/toast.css';
import './styles/design-system.css';
import './styles/global-enhancements.css';
import Login from './pages/Login';
import VerifyEmail from "./pages/VerifyEmail";
import ResetPassword from "./pages/ResetPassword";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import AccountSettings from "./components/DashBoardComponents/DashBoardMainContent/AccountSettings";
import BountyDetails from "./components/LandingPage/ExploreBounties/BountyDetailsFolder/BountyDetails";
import { ProfileProvider } from "context/ProfileContext";
import PagesThatContainFooter from "./rootlayout/PagesThatContainFooter";
import Theme from "./Theme/Theme";
import DashBoard from "./pages/DashBoard";
import ProtectedRoute from "./shared/ProtectedRoute";
import NotFound from "./pages/NotFound";
import Logout from "./pages/Logout";
import { DashboardProvider } from "./context/DashBoardContext";
import { AuthProvider } from "./context/AuthContext";
import { Overview } from "./components/DashBoardComponents/DashBoardMainContent/Overview/OverView";
import { PostBounty } from "./components/DashBoardComponents/DashBoardMainContent/PostBounty/PostBounty";
import { PostedBounties } from "./components/DashBoardComponents/DashBoardMainContent/Posted bounties/PostedBounties";
import { Applications } from "./components/DashBoardComponents/DashBoardMainContent/Posted bounties/PostedBountiesComponents/Applications";
import { InProgressBounties } from "./components/DashBoardComponents/DashBoardMainContent/In Progress Bounties/InProgressBounties";
import { BountyOverView } from "./components/DashBoardComponents/DashBoardMainContent/In Progress Bounties/In progress bounites components/BountyOverView";
import { BountyMilestonesDetails } from "./components/DashBoardComponents/DashBoardMainContent/In Progress Bounties/In progress bounites components/BountyMilestonesDetails";
import { BountyFilesDetails } from "./components/DashBoardComponents/DashBoardMainContent/In Progress Bounties/In progress bounites components/BountyFilesDetails";
import { BountyUserDetails } from "./components/DashBoardComponents/DashBoardMainContent/In Progress Bounties/In progress bounites components/BountyUserDetails";
import { BountyOverviewDetails } from "./components/DashBoardComponents/DashBoardMainContent/In Progress Bounties/In progress bounites components/BountyOverviewDetails";
import { Wallet } from "./components/DashBoardComponents/DashBoardMainContent/Wallet/Wallet";
import { MyTeam } from "./components/DashBoardComponents/DashBoardMainContent/MyTeam/MyTeam";
import Account from './pages/Account';
import ResetPasswordSuccess from "components/Login/ResetPasswordSuccess";

// Tasneem – works
import CompletedWork from "./components/DashBoardComponents/DashBoardMainContent/CompletedWork/CompletedWork";
import CompletedMilestone from "./components/DashBoardComponents/DashBoardMainContent/CompletedWork/CompletedMilestone";
import PendingBounties from "components/DashBoardComponents/DashBoardMainContent/PendingBounties/PendingBounties";
import PendingBountyDetails from "components/DashBoardComponents/DashBoardMainContent/PendingBounties/PendingBountyDetails";
import AssignedToMe from "./components/DashBoardComponents/DashBoardMainContent/AssignedToMe/AssignedToMe";

// NEW: pages for milestone states
import MilestoneSubmit from "components/DashBoardComponents/DashBoardMainContent/AssignedToMe/MilestoneSubmit";
import MilestoneReview from "components/DashBoardComponents/DashBoardMainContent/AssignedToMe/MilestoneReview";
import MilestoneResubmit from "components/DashBoardComponents/DashBoardMainContent/AssignedToMe/MilestoneResubmit";
import MilestoneAwaitingReview from "components/DashBoardComponents/DashBoardMainContent/AssignedToMe/MilestoneAwaitingReview";
import PendingApplications from "components/DashBoardComponents/DashBoardMainContent/PendingApplications/PendingApplications";
import AfterApplication from "components/DashBoardComponents/DashBoardMainContent/PendingApplications/AfterApplication";
import ApplicationDetails from "components/DashBoardComponents/DashBoardMainContent/PendingApplications/ApplicationDetails";
import WaitingApplicationDetails from "components/DashBoardComponents/DashBoardMainContent/PendingApplications/WaitingApplicationDetails";
import AboutUs from "components/LandingPage/FooterSection/AboutUs";
import Contact from "components/LandingPage/FooterSection/Contact";
import FAQ from "components/LandingPage/FooterSection/FAQ";
import PrivacyPolicy from "components/LandingPage/FooterSection/PrivacyPolicy";
import Terms from "components/LandingPage/FooterSection/Terms";
import PublicProfile from "./pages/PublicProfile";
import AccountSetupGuard from "./pages/AccountSetupGuard";
import UserProfilePage from "./pages/UserProfilePage";

// Admin
import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminOverview from "./pages/admin/Overview";
import AdminUsers from "./pages/admin/Users";
import AdminBounties from "./pages/admin/Bounties";
import UserProfile from "pages/admin/UserProfile";
import Teams from "pages/admin/Teams";
import TeamProfile from "pages/admin/TeamProfile";

// Admin Bounty Details 
import AdminBountyLayout from "./pages/admin/bounty-details/AdminBountyLayout";
import AdminBountyOverview from "./pages/admin/bounty-details/Overview";
import AdminBountyMilestones from "./pages/admin/bounty-details/Milestones";
import AdminBountyUsers from "./pages/admin/bounty-details/Users";
import AdminBountyFiles from "./pages/admin/bounty-details/Files";

//  NEW Admin Pending Bounties
import PendingBountiesPage from "./pages/admin/pending-bounties/PendingBountiesPage";
import PendingBountyDetailsPage from "./pages/admin/pending-bounties/PendingBountyDetailsPage";

//  Context Provider
import { AdminBountiesProvider } from "./context/AdminBountiesContext";

function App() {
  return (
    <Theme>
      <AuthProvider>
        <ProfileProvider>
          <DashboardProvider>
            <Toaster 
              position="top-center"
              reverseOrder={false}
              gutter={8}
              toastOptions={{
                duration: 3000,
              }}
            />
            <Router>
              <Routes>
              {/* ===== User Auth ===== */}
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<Login />} />
              <Route path="/verifyEmail" element={<VerifyEmail />} />
              <Route path="/reset-Password" element={<ResetPassword />} />
                <Route path="/reset-password-success" element={<ResetPasswordSuccess />} />
              <Route path="/register" element={<Register />} />

              {/* ===== Admin Auth (standalone) ===== */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/verify-email" element={<VerifyEmail />} />
              <Route path="/admin/reset-password" element={<ResetPassword />} />

              {/* Bounty Details (standalone with custom header) */}
              <Route path="/details/:bountyId" element={<BountyDetails />} />
              <Route path="/details" element={<BountyDetails />} />

              {/* Public (with footer) */}
              <Route element={<PagesThatContainFooter />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faqs" element={<FAQ />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/profile/:userId" element={<PublicProfile />} />
                <Route path="/profile" element={<PublicProfile />} />
              </Route>

              {/* ===== User Dashboard ===== */}
              <Route path="/dashboard" element={<DashBoard />}>
                <Route index element={<Overview />} />
                <Route path="settings" element={<AccountSettings />} />
                <Route path="MyTeam" element={<MyTeam />} />
                <Route path="wallet" element={<Wallet />} />
                <Route path="logout" element={<Logout />} />
                <Route path="user-profile/:userId" element={<UserProfilePage />} />

                <Route path="completed" element={<CompletedWork />} />
                <Route path="completed/:id" element={<CompletedMilestone />} />
                <Route path="pending-applications" element={<PendingApplications />} />
                <Route path="applications/after/:id" element={<AfterApplication />} />
                <Route path="pending/:id" element={<ApplicationDetails />} />
                <Route path="waiting/:id" element={<WaitingApplicationDetails />} />
                <Route path="after-application/:id" element={<AfterApplication />} />

                <Route path="post-bounty" element={<PostBounty />} />
                <Route path="posted-bounties" element={<PostedBounties />} />
                <Route path="pending-bounties" element={<PendingBounties />} />
                <Route path="pending-bounties/:id" element={<PendingBountyDetails />} />

                <Route path="assigned" element={<AssignedToMe />} />
                <Route path="assigned/milestone/:id" element={<MilestoneSubmit />} />
                <Route path="assigned/milestone/:id/review" element={<MilestoneReview />} />
                <Route path="assigned/milestone/:id/resubmit" element={<MilestoneResubmit />} />
                <Route path="assigned/milestone/:id/awaiting" element={<MilestoneAwaitingReview />} />
                <Route path="application/:id" element={<Applications />} />

                <Route path="in-progress" element={<InProgressBounties />} />
                <Route path="bounty-name-overview/:id" element={<BountyOverView />}>
                  <Route index element={<BountyOverviewDetails />} />
                  <Route path="milestones" element={<BountyMilestonesDetails />} />
                  <Route path="files" element={<BountyFilesDetails />} />
                  <Route path="users" element={<BountyUserDetails />} />
                </Route>
              </Route>

              {/* ===== Admin Dashboard ===== */}
              <Route
                path="/admin"
                element={
                  <AdminBountiesProvider>
                    <AdminLayout />
                  </AdminBountiesProvider>
                }
              >
                <Route index element={<AdminOverview />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="users/:id" element={<UserProfile />} />
                <Route path="bounties" element={<AdminBounties />} />
                <Route path="bounties/:id" element={<AdminBountyLayout />}>
                  <Route index element={<AdminBountyOverview />} />
                  <Route path="milestones" element={<AdminBountyMilestones />} />
                  <Route path="users" element={<AdminBountyUsers />} />
                  <Route path="files" element={<AdminBountyFiles />} />
                </Route>
                <Route path="teams" element={<Teams />} />
                <Route path="teams/:id" element={<TeamProfile />} />
                <Route path="settings" element={<AccountSettings />} />

                <Route path="pending-bounties" element={<PendingBountiesPage />} />
                <Route path="pending-bounties/:id" element={<PendingBountyDetailsPage />} />
              </Route>
              

              <Route path="/account" element={
                <AccountSetupGuard>
                  <Account />
                </AccountSetupGuard>
              } />
              <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </DashboardProvider>
        </ProfileProvider>
      </AuthProvider>
    </Theme>
  );
}

export default App;
