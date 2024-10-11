// src/App.tsx
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient'; // Ensure you have an apolloClient setup
import Clinics from './Components/Clinics';
import Issues from './Components/Issues';
import Staff from './Components/Staff';

import './App.css';
import KeyIssuesChart from './Components/KeyIssuesChart';


const App: React.FC = () => {
  return (
    
    <ApolloProvider client={client}>
      <h1> Access Afya Analytics </h1>
      <div className="container">
        
        <Clinics  onClinicSelect={clinicId => console.log(clinicId)} />
        <Issues clinicId={1} /> {/* Replace with appropriate logic to get clinicId */}
        <Staff />
        <KeyIssuesChart issues={[]} />
      </div>
    </ApolloProvider>
  );
};

export default App;
