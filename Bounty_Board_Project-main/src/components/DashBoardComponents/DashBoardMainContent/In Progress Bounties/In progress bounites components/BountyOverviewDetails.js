import { Divider } from "antd";
import { BountyStats } from "../../../DashBoardSharedComponents/BountyStats";
import { SubTitleText } from "../../../../../shared/Texts/SubTitleText";
import { Globe, Download } from "lucide-react";
import { LanguagesAndSkills } from "../../../../../shared/LanguagesAndSkillsComponents/LanguagesAndSkills";
import { IconWithTitleAndSubTitle } from "../../../../../shared/IconsWithText/IconWithTitleAndSubTitle";
import { DownloadComponent } from "../../../../../shared/Download/Download";
import { useOutletContext } from 'react-router-dom';
import CreativeCard from "../../../../../shared/Cards/CreativeCard";


export const BountyOverviewDetails = () => {
    const bountyDetails = useOutletContext();

    return (
        <div className="space-y-8">
            <div className="flex flex-col lg:flex-row justify-between gap-6">
                <div className="w-full lg:w-[68%]">
                    <CreativeCard>
                        <h3 className="text-xl font-bold text-gradient mb-6">Bounty Overview</h3>
                        <BountyStats 
                            font={'semibold'} 
                            size={20} 
                            title={''} 
                            bountyData={bountyDetails}
                        />
                    </CreativeCard>
                </div>
                <div className="w-full lg:w-[30%] flex lg:justify-end">
                    <CreativeCard className="overflow-hidden group">
                        <img 
                            src="https://mxface.ai/AssetsNew/images/home/vehicle_detect.png" 
                            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" 
                            alt="Vehicle Detection" 
                        />
                    </CreativeCard>
                </div>
            </div>
            
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-gradient">Project Description</h3>
                <p className="text-gray-700 leading-relaxed">
                We are currently working on integrating libonnxruntime into our Unreal Engine 5.4 project targeting iOS. You can find the ONNX Runtime library here:
                🔗 https://github.com/microsoft/onnxruntime
                The integration appears to work correctly when running development builds, and the plugin loads and functions as expected. However, we are encountering a critical issue: the app crashes immediately in distribution (shipping) builds. We suspect the issue may be related to differences in symbol visibility, runtime linking, or build configurations between development and distribution modes on iOS. Our goal is to identify the root cause of the crash and ensure the plugin works reliably in production-ready (App Store) builds.
            </p>

            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gradient">Project Requirements</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700 leading-relaxed">
                    <li className="pl-2">Unreal Engine plugin development for iOS</li>
                    <li className="pl-2">ONNX Runtime or native libraries integration</li>
                    <li className="pl-2">iOS build pipelines and crash debugging</li>
                </ul>
            </div>
            
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gradient">Technical Details</h3>
                <p className="text-gray-700 leading-relaxed">
                    This bounty involves integrating the libonnxruntime library into an Unreal Engine 5.4 project targeting iOS. While the integration works correctly in development builds, the project crashes when compiled as a distribution (shipping) build. The ONNX Runtime is currently available in PyTorch format and needs to be converted to a format compatible with iOS deployment.

                    The core challenge lies in ensuring that the model, once converted to TFLite, can run without issues on iOS devices. The developer should have experience debugging iOS release build crashes, linking static libraries (.a files or .frameworks), and working with Xcode toolchains. Familiarity with integrating native libraries in Unreal Engine projects, especially those involving machine learning inference, will be crucial.

                    Success will be measured by delivering a working iOS build that includes the converted TFLite model and demonstrates that the model functions correctly within the app environment.
                </p>
            </div>
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-gradient">Languages & Skills</h3>
                
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Languages</h4>
                    <LanguagesAndSkills data={bountyDetails.languages} />
                </div>
                
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Skills & Technologies</h4>
                    <LanguagesAndSkills data={bountyDetails.skills} />
                </div>
            </div>

            <CreativeCard className="max-w-md">
                <h3 className="text-xl font-bold text-gradient mb-6">Project Resources</h3>
                
                <div className="flex items-start gap-3 mb-6">
                    <Globe size={24} className="mt-1 text-blue-600 flex-shrink-0" />
                    <div>
                        <div className="text-gray-600 font-medium mb-1">Link to Project</div>
                        <a
                            className="text-blue-600 hover:text-blue-700 font-medium break-all transition-colors"
                            href="https://github.com/microsoft/onnxruntime"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://github.com/microsoft/onnxruntime
                        </a>
                    </div>
                </div>
                
                <div className="h-px bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 my-6"></div>
                
                <DownloadComponent />
            </CreativeCard>
            </div>
        </div>
    )
}