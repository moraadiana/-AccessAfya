import React, { useState } from "react";
import Clinics from "./Clinics";
import Issues from "./Issues";
import KeyIssuesChart from "./KeyIssuesChart";
import Staff from "./Staff";
import { useQuery, gql } from "@apollo/client";

// GraphQL query to fetch issues
const GET_ISSUES = gql`
  query GetIssues {
    keyIssues {
      issue
      frequency
    }
  }
`;

// Dashboard component
const Dashboard: React.FC = () => {
  const [selectedClinicId, setSelectedClinicId] = useState<number | null>(null); 

  const { loading, error, data } = useQuery(GET_ISSUES);

  return (
    <div className="dashboard">
      <h1>Access Afya Analytics</h1>
      <div className="container">
        <Clinics onClinicSelect={setSelectedClinicId} />
        {loading && <p>Loading issues...</p>}
        {error && <p>Error loading issues: {error.message}</p>}

        {data?.keyIssues && data.keyIssues.length > 0 && (
          <div className="chart-container">
            <KeyIssuesChart issues={data.keyIssues} />{" "}
            {/* Render KeyIssuesChart with issues */}
          </div>
        )}
        <Staff />
      </div>
    </div>
  );
};

export default Dashboard;
