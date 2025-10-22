import React, { useState } from "react";
import { Select, Input, Space } from "antd";
import {
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
  GithubOutlined,
  CloseCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

export const SocialRolesLinks = ({ condition }) => {

  const [socialLinks, setSocialLinks] = useState([
    { id: 1, platform: "Linkedin", url: "" },
  ]);

 
  const [roles, setRoles] = useState([
    { id: 1, role: "frontend", stack: [] }, // stack as array now
  ]);


  const platformOptions = [
    {
      value: "Linkedin",
      label: (
        <div className="flex gap-[8px] text-[14px] font-medium items-center">
          <LinkedinOutlined style={{ color: "#0A66C2" }} />
          Linkedin
        </div>
      ),
    },
    {
      value: "Facebook",
      label: (
        <span className="flex items-center gap-2">
          <FacebookOutlined style={{ color: "#0866FF" }} />
          Facebook
        </span>
      ),
    },
    {
      value: "Instagram",
      label: (
        <span className="flex items-center gap-2">
          <InstagramOutlined style={{ color: "#D407C6" }} />
          Instagram
        </span>
      ),
    },
    {
      value: "Github",
      label: (
        <span className="flex items-center gap-2">
          <GithubOutlined style={{ color: "#1F2328" }} />
          Github
        </span>
      ),
    },
  ];

  const rolesOption = [
    { value: "frontend", label: <div className="flex gap-[8px] text-[14px] font-medium items-center">frontend</div> },
    { value: "backend",  label: <div className="flex gap-[8px] text-[14px] font-medium items-center">backend</div> },
    { value: "fullstack",label: <div className="flex gap-[8px] text-[14px] font-medium items-center">fullstack</div> },
  ];

  const techOptions = [
    { value: "React",        label: "React" },
    { value: "Vue",          label: "Vue" },
    { value: "Angular",      label: "Angular" },
    { value: "TailwindCSS",  label: "TailwindCSS" },
    { value: "Bootstrap",    label: "Bootstrap" },
    { value: "Node.js",      label: "Node.js" },
    { value: "Express",      label: "Express" },
    { value: "NestJS",       label: "NestJS" },
    { value: "Firebase",     label: "Firebase" },
    { value: "Supabase",     label: "Supabase" },
    { value: "PostgreSQL",   label: "PostgreSQL" },
    { value: "MongoDB",      label: "MongoDB" },
    { value: "TypeScript",   label: "TypeScript" },
    { value: "Next.js",      label: "Next.js" },
  ];

  const handlePlatformChange = (id, value) => {
    setSocialLinks((links) =>
      links.map((link) =>
        link.id === id ? { ...link, platform: value } : link
      )
    );
  };

  const handleUrlChange = (id, value) => {
    setSocialLinks((links) =>
      links.map((link) => (link.id === id ? { ...link, url: value } : link))
    );
  };

  const addSocialLink = () => {
    setSocialLinks((links) => [
      ...links,
      { id: Date.now(), platform: "Linkedin", url: "" },
    ]);
  };

  const removeSocialLink = (id) => {
    setSocialLinks((links) =>
      links.length > 1 ? links.filter((l) => l.id !== id) : links
    );
  };

  const handleRoleChange = (id, value) => {
    setRoles((items) =>
      items.map((r) => (r.id === id ? { ...r, role: value } : r))
    );
  };

  const handleRoleStackChange = (id, valuesArray) => {
    setRoles((items) =>
      items.map((r) => (r.id === id ? { ...r, stack: valuesArray } : r))
    );
  };

  const addRole = () => {
    setRoles((items) => [
      ...items,
      { id: Date.now(), role: "frontend", stack: [] },
    ]);
  };

  const removeRole = (id) => {
    setRoles((items) =>
      items.length > 1 ? items.filter((r) => r.id !== id) : items
    );
  };

  const SocialRow = (link) => (
    <div key={link.id} className="flex items-center gap-[12px] w-full">
      <Space.Compact style={{ width: "100%" }}>
        <div className="grid w-full md:grid-cols-[230px_1fr]">
          <Select
            value={link.platform}
            style={{
              width: "100%",
              height: "100%",
              borderRight: "none",
              position: "relative",
            }}
            onChange={(value) => handlePlatformChange(link.id, value)}
            options={platformOptions}
            className="select-no-right-border select-with-divider"
          />
          <div className="relative before:content-[''] before:absolute before:bg-[#E4E5E8] before:left-0 before:top-[10px] before:w-px before:h-[30px] before:z-[99]">
            <Input
              placeholder="Profile link/url..."
              value={link.url}
              onChange={(e) => handleUrlChange(link.id, e.target.value)}
              className="w-full h-[50px] rounded-t-none border-t-none md:rounded-l-none md:border-l-0 input-with-divider"
            />
          </div>
        </div>
      </Space.Compact>

      <button
        className="w-[50px] h-[50px] bg-[#F1F2F4] flex items-center justify-center rounded-[5px] hover:bg-[#E5E7EB] transition-colors"
        onClick={() => removeSocialLink(link.id)}
        disabled={socialLinks.length === 1}
      >
        <CloseCircleOutlined
          className={socialLinks.length === 1 ? "text-gray-400" : "text-gray-600"}
        />
      </button>
    </div>
  );

  const RoleRow = (item) => (
    <div key={item.id} className="flex items-center gap-[12px] w-full">
      <Space.Compact style={{ width: "100%" }}>
        <div className="grid w-full md:grid-cols-[230px_1fr]">
          <Select
            value={item.role}
            style={{
              width: "100%",
              height: "100%",
              borderRight: "none",
              position: "relative",
            }}
            onChange={(value) => handleRoleChange(item.id, value)}
            options={rolesOption}
            className="select-no-right-border select-with-divider"
          />
          <div className="relative before:content-[''] before:absolute before:bg-[#E4E5E8] before:left-0 before:top-[10px] before:w-px before:h-[30px] before:z-[99]">
            <Select
              mode="multiple"
              value={item.stack}
              onChange={(vals) => handleRoleStackChange(item.id, vals)}
              options={techOptions}
              placeholder="e.g., React, TailwindCSS, Firebase"
              className="w-full h-[50px] rounded-t-none border-t-none md:rounded-l-none md:border-l-0 input-with-divider"
              allowClear
              maxTagCount="responsive"
            />
          </div>
        </div>
      </Space.Compact>

      <button
        className="w-[50px] h-[50px] bg-[#F1F2F4] flex items-center justify-center rounded-[5px] hover:bg-[#E5E7EB] transition-colors"
        onClick={() => removeRole(item.id)}
        disabled={roles.length === 1}
      >
        <CloseCircleOutlined
          className={roles.length === 1 ? "text-gray-400" : "text-gray-600"}
        />
      </button>
    </div>
  );

  const isRoleMode = condition === "role";

  return (
    <div className="flex flex-col gap-[18px]">
      <h2 className="text-lg font-semibold text-gray-800">
        {isRoleMode ? "" : "Social Links"}
      </h2>

      {isRoleMode ? roles.map(RoleRow) : socialLinks.map(SocialRow)}

      <div className="w-full rounded-[5px] h-[44px] flex items-center justify-center bg-[#F1F2F4] hover:bg-[#E5E7EB] transition-colors">
        <button
          className="flex items-center w-full justify-center gap-[15px]"
          onClick={isRoleMode ? addRole : addSocialLink}
        >
          <PlusCircleOutlined className="text-gray-600" />
          <span className="text-[14px] font-medium text-gray-700">
            {isRoleMode ? "Add New Role" : "Add New Social Link"}
          </span>
        </button>
      </div>

      <style>
        {`
          .select-no-right-border .ant-select-selector {
            border-right: none !important;
            border-top-right-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
            padding-left: 20px !important;
          }

          @media (max-width: 768px) {
            .select-no-right-border .ant-select-selector {
              border-right: 1px solid #d9d9d9 !important;
              border-top-right-radius: 5px !important;
              border-bottom-right-radius: 5px !important;
              height: 50px !important;
              border-bottom: none !important;
              border-bottom-left-radius: 0 !important;
              border-bottom-right-radius: 0 !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SocialRolesLinks;
