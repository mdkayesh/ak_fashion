import { signOut } from "@/redux/features/authSlice";
import { Logout, Message, Projects, UserIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

const links = [
  {
    title: "My profile",
    url: "/my-account/dashboard/my-profile",
    icon: <UserIcon />,
  },
  {
    title: "Message",
    url: "/my-account/dashboard/message",
    icon: <Message />,
  },
  {
    title: "Projects",
    url: "/my-account/dashboard/projects",
    icon: <Projects />,
  },
];

const Profile = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="profile-header flex items-center px-5 py-4 gap-4 border-b">
        <Image
          src={user?.photoURL}
          width={80}
          height={80}
          className="w-14 h-14 rounded-full"
          alt="user"
        />
        <div className="flex-1">
          <h3 className="text-heading_color">{user?.displayName}</h3>
          <p className="text-sm mt-1 whitespace-pre-wrap">{user?.email}</p>
        </div>
      </div>
      <ul className="mt-3">
        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.url}
              className="w-full flex gap-4 items-center py-3 px-6 hover:bg-gray-100"
            >
              <span className="text-base">{link.icon}</span>
              <span className="text-sm">{link.title}</span>
            </Link>
          </li>
        ))}
        <li
          className="border-t flex gap-4 items-center py-3 px-6 hover:bg-gray-100 mt-3 cursor-pointer"
          onClick={() => dispatch(signOut())}
        >
          <span>{<Logout />}</span>
          <span>Log out</span>
        </li>
      </ul>
    </>
  );
};

export default Profile;
