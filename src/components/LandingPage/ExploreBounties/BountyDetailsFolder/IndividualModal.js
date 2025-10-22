import { ArrowRightOutlined, CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import { useState } from "react";
import CustomModal from "../../../../shared/CustomModal";
import DropDown from "../../../../shared/Inputs/DropDown";

const IndividualModal = ({
  isIndividualModalOpen,
  handleCancelIndividualModal,
  setIsIndividualModalOpen,
}) => {
  const [role, setRole] = useState(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleApply = () => {
    console.log("Role:", role);
    console.log("Notes (raw):", editorState.getCurrentContent().getPlainText());
    setIsIndividualModalOpen(false);
  };

  return (
    <CustomModal
      title={
        <span className="text-lg font-medium">Apply Bounty: Bounty name</span>
      }
      open={isIndividualModalOpen}
      onCancel={handleCancelIndividualModal}
      width={700}
      footer={null}
      closeIcon={
        <div className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100">
          <CloseOutlined />
        </div>
      }
      children={
        <div className="space-y-5">
          <div>
            <label className="block font-medium mb-1">Choose a Role</label>

            <DropDown
              placeholder="Select..."
              className="w-full"
              onChange={(value) => setRole(value)}
              value={role}
              options={[
                { value: "frontend", label: "Frontend Developer" },
                { value: "backend", label: "Backend Developer" },
                { value: "ml", label: "ML Engineer" },
              ]}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Notes (optional)</label>
            <div className="min-h-[120px] border rounded-md p-3 bg-white cursor-text">
              <Editor
                editorState={editorState}
                onChange={setEditorState}
                placeholder="Notes..."
              />
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <Button
              onClick={handleCancelIndividualModal}
              className="bg-blue-50 text-blue-600 border-blue-100"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              icon={<ArrowRightOutlined />}
              onClick={handleApply}
              disabled={!role}
            >
              Apply Now
            </Button>
          </div>
        </div>
      }
    />
  );
};

export default IndividualModal;
