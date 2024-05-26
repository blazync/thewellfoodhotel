"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Contacts, columns } from "./columns";
import { DataTable } from "./data-table";
import AdminLayout from "@/app/AdminLayout";

const ContactData: React.FC = () => {
  const [data, setData] = useState<Contacts[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from Clerk or your API endpoint
        const response = await axios.get("/api/contacts");
        const userData: Contacts[] = response.data;
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
        <h1 className="text-2xl text-center font-bold pb-10">Contacts Data</h1>
        <DataTable columns={columns} data={data} />
      </AdminLayout>
    </div>
  );
};

export default ContactData;
