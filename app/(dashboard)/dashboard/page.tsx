import React from "react";
import { getSession } from "@/lib/session";

async function Dashboard() {
  const session = await getSession();

  return <>{session?.user ? <h2>Logged In</h2> : <h2>Logged Out</h2>}</>;
}

export default Dashboard;
