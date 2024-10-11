import React from 'react';
import { useQuery, gql } from '@apollo/client';

interface StaffPerformance {
  id: string; 
  name: string;
  efficiencyDelta: number;
  npsDelta: number;
}

// GraphQL query to fetch staff performance data
const GET_STAFF = gql`
  query GetStaff {
    staffPerformance {
      id
      name
      efficiencyDelta
      npsDelta
    }
  }
`;

//  Staff component
const Staff: React.FC = () => {
  const { loading, error, data } = useQuery<{ staffPerformance: StaffPerformance[] }>(GET_STAFF);

  if (loading) return <p>Loading staff...</p>;
  if (error) return <p>Error loading staff: {error.message}</p>; 
  return (
    <div className="staff">
      <h2>Staff Performance</h2>
      {data?.staffPerformance && data.staffPerformance.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Efficiency Delta</th>
              <th>NPS Delta</th>
            </tr>
          </thead>
          <tbody>
            {data.staffPerformance.map((staff) => (
              <tr key={staff.id}>
                <td>{staff.name}</td>
                <td>{staff.efficiencyDelta.toFixed(2)}</td>
                <td>{staff.npsDelta.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No staff data available.</p>
      )}
    </div>
  );
};

export default Staff;
