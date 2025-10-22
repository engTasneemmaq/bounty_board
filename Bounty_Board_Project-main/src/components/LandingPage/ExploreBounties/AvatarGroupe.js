/** @format */

import { Avatar } from "antd";

const AvatarGroupe = ({ applicationList, size }) => {
  return (
    <Avatar.Group
      size=''
      max={{
        count: 5,
        style: { color: "#000", backgroundColor: "#CFD4D1", opacity: "0.8" },
      }}
    >
      {applicationList &&
        applicationList.map((data, index) => {
          return <Avatar style={data?.style} size={size} icon={data?.icon} />;
        })}
    </Avatar.Group>
  );
};

export default AvatarGroupe;
