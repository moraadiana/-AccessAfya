import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Define the KeyIssue type
interface KeyIssue {
  issue: string;
  frequency: string;
}

// Define the component props type
interface IssuesProps {
  clinicId: number; 
}

// GraphQL query to fetch issues
const GET_ISSUES = gql`
  query GetIssues {
    keyIssues { 
      issue  
      frequency
    }
  }
`;

const Issues: React.FC<IssuesProps> = ({ clinicId }) => {
  const { loading, error, data } = useQuery<{ keyIssues: KeyIssue[] }>(GET_ISSUES);

  if (loading) return <p>Loading issues...</p>;
  if (error) return <p>Error loading issues: {error.message}</p>; 

  return (
    <div className="issues">
      <h2>Key Issues</h2>
      {data?.keyIssues && data.keyIssues.length > 0 ? (
        <ul>
          {data.keyIssues.map((issue) => (
            <li key={issue.issue}>{issue.issue} - Frequency: {issue.frequency}</li>
          ))}
        </ul>
      ) : (
        <p>No issues found for this clinic.</p>
      )}
    </div>
  );
};

export default Issues;
