"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { User, columns } from "./columns";
import { DataTable } from "./data-table";
import AdminLayout from "@/app/AdminLayout";

const Users: React.FC = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from Clerk or your API endpoint
        const response = await axios.get("/api/users");
        const userData: User[] = response.data;
        setData(userData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <AdminLayout>
        <h1 className="text-2xl text-center font-bold pb-10">User Data</h1>
        <DataTable columns={columns} data={data} />
      </AdminLayout>
    </div>
  );
};

export default Users;
