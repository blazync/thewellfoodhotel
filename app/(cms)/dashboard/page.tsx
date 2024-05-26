import AdminLayout from "@/app/AdminLayout";
import { Protect } from "@clerk/nextjs";
import React from "react";

const Dashboard = () => {
  return (
    <div className="">
      <AdminLayout>
        <Protect>
          <h1 className="py-3 text-4xl">Welcome {"User"} </h1>
          <p className="text-yellow-600 text-[20px] pb-10">
            You are at best hotel at Ranchi.
          </p>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=en.indian%23holiday%40group.v.calendar.google.com&amp;color=%23125A12&amp;ctz=Asia%2FCalcutta"
            className="h-[800px] w-full"
            allowFullScreen
            title="Google Calendar"
          ></iframe>
        </Protect>
      </AdminLayout>
    </div>
  );
};

export default Dashboard;
