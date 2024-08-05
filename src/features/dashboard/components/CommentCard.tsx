import { Avatar } from "antd";
import { UserRounded } from "solar-icon-set";
import { BiSolidStar } from "react-icons/bi";

const CommentCard = () => {
  return (
    <div className="space-y-2 border-b-[1px] border-gray-700 py-4">
      <div className="flex items-center gap-2 font-semibold">
        <Avatar size={34} icon={<UserRounded />} />
        <span>Jenny Wilson</span>
      </div>
      <div className="flex items-center gap-1 text-yellow-400 text-md">
        <BiSolidStar />
        <BiSolidStar />
        <BiSolidStar />
        <BiSolidStar />
        <BiSolidStar color="white" />
      </div>
      <p className="text-gray-400">
        The food was excelent and so was the service. I had the mushrroom
        risotta with scatloops which was awesome. I had a burger over green
        gluten free which was also very good. They were very conscientous about
        gluten alerigies.
      </p>
    </div>
  );
};

export default CommentCard;
