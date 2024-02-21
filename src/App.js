import logo from "./logo.svg";
import "./App.css";
import { Sidebar } from "./component/Sidebar";
import { Route, Routes } from "react-router-dom";
import { Login } from "./component/Login";
import { ServiceProviderDashboard } from "./component/serviceprovider/ServiceProviderDashboard";
import { UserDashboard } from "./component/user/UserDashboard";
import { AddService } from "./component/serviceprovider/AddService";
import { ServiceList } from "./component/serviceprovider/ServiceList";
import { checkLogin } from "./hooks/CheckLogin";
import { ProtectedRoutes } from "./hooks/ProtectedRoutes";

function App() {
  const path = window.location.pathname;
  console.log(path);

  return (
    <body>
      <div className="wrapper">
        {path === "/" || path === "/login" || path === "" ? null : <Sidebar />}

        <div className="main-panel">
          <div className="content">
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route element = {<ProtectedRoutes/>}>
                <Route  path = "/serviceprovider/dashboard" element = {<ServiceProviderDashboard/>} ></Route>
                <Route path = "/serviceprovider/addservice" element = {<AddService/>}></Route>
                <Route path = "/serviceprovider/servicelist" element = {<ServiceList/>}></Route>
                <Route path ="/user/dashboard" element = {<UserDashboard/>}></Route>
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
