import React from 'react';
import { Home, RequestForm } from './components';
import { Route } from "react-router-dom";
import {
  RegistryContainer, RequestContainer,
  SuccessContainer, LoginContainer,
  StatisticsContainer, HeaderContainer,
  AdminContainer
} from "./containers";
import { DATA } from "./constains";

const App = () => {
  React.useEffect(() => {
    localStorage.setItem('registry', JSON.stringify(DATA))
  }, [])
  return (
    <>
      <HeaderContainer />
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/requestForm" component={RequestForm} />
        <Route path="/success/:status" component={SuccessContainer} />
        <Route path="/registry" component={RegistryContainer} />
        <Route path="/request/:id" component={RequestContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/statistics" component={StatisticsContainer} />
        <Route path="/admin" component={AdminContainer} />
      </main>
    </>
  );
};

export default App;
