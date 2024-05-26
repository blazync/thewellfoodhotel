"use client";
import { useUser } from "@clerk/nextjs";
import AdminSidebar from "../components/AdminSidebar";
import AuthorizationError from "../components/AuthorizationError";
import UserSidebar from "../components/UserSidebar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { User } from "lucide-react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();

  if (!user)
    return (
      <>
        <AuthorizationError />
      </>
    );
  return (
    <div>
      {/* <div className="grid grid-cols-2 md:grid-cols-2 gap-4 bg-purple-500 p-4 rounded-lg px-10">
        <div className="">
          {user?.id && isAdmin ? (
            <>
              <AdminSidebar />
            </>
          ) : (
            <>
              <UserSidebar />
            </>
          )}
        </div>

        <div className=" flex justify-end">
          <Menubar className="justify-right">
            <MenubarMenu>
              <MenubarTrigger>
                <User />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>My Profile</MenubarItem>
                <MenubarItem>Change Password</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Support</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Logout</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div> */}
      <div className="pt-10">{children}</div>
    </div>
  );
};

export default AdminLayout;
