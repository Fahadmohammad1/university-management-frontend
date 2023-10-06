"use client";
import { Layout } from "antd";
import Sidebar from "../../components/ui/Sidebar";
import Contents from "../../components/ui/Contents";
import { isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, userLoggedIn]);

  if (!isLoading) {
    return <p>Loading........</p>;
  }
  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
