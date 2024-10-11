import React from "react";
import { useQuery, gql } from "@apollo/client";

// GraphQL query to get clinics
const GET_CLINICS = gql`
  query GetClinics {
    clinics {
      id
      name
      visits
    }
  }
`;

interface ClinicsProps {
  onClinicSelect: (clinicId: number) => void; 
}

const Clinics: React.FC<ClinicsProps> = ({ onClinicSelect }) => {
  const { loading, error, data } = useQuery(GET_CLINICS);

  if (loading) return <p>Loading clinics...</p>;
  if (error) return <p>Error loading clinics</p>;

  return (
    <div className="clinics">
      <h2>Clinics</h2>
      <ul>
        {data.clinics.map(
          (clinic: { id: number; name: string; visits: number }) => (
            <li key={clinic.id} onClick={() => onClinicSelect(clinic.id)}>
              {clinic.name} ({clinic.visits} visits)
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Clinics;
