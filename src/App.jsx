import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
// Importing Pages and Components
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";

// Admin
import AdminLogin from "./components/pages/Admin/AdminLogin";
import AdminDashboard from "./components/pages/Admin/AdminDashboard";
import AdminHeader from "./components/pages/Admin/AdminHeader";

// Landlord
import LandlordLogin from "./components/pages/Landlord/LandlordLogin";
import LandlordSignup from "./components/pages/Landlord/LandlordSignup";
import LandlordDashboard from "./components/pages/Landlord/LandlordDashboard";
import LandlordHeader from "./components/pages/Landlord/LandlordHeader";

// Tenant
import TenantLogin from "./components/pages/Tenant/TenantLogin";
import TenantSignup from "./components/pages/Tenant/TenantSignup";
import TenantDashboard from "./components/pages/Tenant/TenantDashboard";
import TenantHeader from './components/pages/Tenant/TenantHeader';
import TenantPayments from './components/pages/Tenant/TenantPayments';

// Common
import CommonHeader from "./components/CommonHeader";
import Footer from "./components/Footer";
import ManageLandlords from "./components/pages/Admin/ManageLandlords";
import ManageTenants from "./components/pages/Admin/ManageTenants";
import ManageProperties from "./components/pages/Admin/ManageProperties";
import ManageComplaints from "./components/pages/Admin/ManageComplaints";
import ManageBookings from "./components/pages/Admin/ManageBookings";
import AddProperty from "./components/pages/Landlord/AddProperty";
import MyProperties from "./components/pages/Landlord/MyProperties";
import LandlordBookings from "./components/pages/Landlord/LandlordBookings";
import ConfirmedBookings from "./components/pages/Landlord/ConfirmedBookings";
import LandlordComplaints from "./components/pages/Landlord/LandlordComplaints";
import ViewProperties from "./components/pages/Tenant/ViewProperties";
import MyBookings from "./components/pages/Tenant/MyBookings";
import MyComplaints from "./components/pages/Tenant/MyComplaints";
import SubmitComplaint from "./components/pages/Tenant/SubmitComplaint";
import TenantProfile from "./components/pages/Tenant/TenantProfile";
import LandlordProfile from "./components/pages/Landlord/LandlordProfile";
import BookProperty from "./components/pages/Tenant/BookProperty";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page with Common Header */}
        <Route path="/" element={
          <>
            <CommonHeader />
            <Home />
            <Footer />
          </>
        } />

        {/* Common Signup/Login Pages with Common Header */}
        <Route path="/signup" element={
          <>
            <CommonHeader />
            <Signup />
            <Footer />
          </>
        } />
        <Route path="/login" element={
          <>
            <CommonHeader />
            <Login />
            <Footer />
          </>
        } />

        {/* Admin Routes */}
        <Route path="/admin/login" element={
          <>
            <CommonHeader />
            <AdminLogin />
            <Footer />
          </>
        } />
        <Route path="/admin/dashboard" element={
          <>
            <AdminHeader />
            <AdminDashboard />
            <Footer />
          </>
        } />

        {/* Landlord Routes */}
        <Route path="/landlord/login" element={
          <>
            <CommonHeader />
            <LandlordLogin />
            <Footer />
          </>
        } />
        <Route path="/landlord/signup" element={
          <>
            <CommonHeader />
            <LandlordSignup />
            <Footer />
          </>
        } />
        <Route path="/landlord/dashboard" element={
          <>
            <LandlordHeader />
            <LandlordDashboard />
            <Footer />
          </>
        } />

        {/* Tenant Routes */}
        <Route path="/tenant/login" element={
          <>
            <CommonHeader />
            <TenantLogin />
            <Footer />
          </>
        } />
        <Route path="/tenant/signup" element={
          <>
            <CommonHeader />
            <TenantSignup />
            <Footer />
          </>
        } />
        <Route path="/tenant/dashboard" element={
          <>
            <TenantHeader />
            <TenantDashboard />
            <Footer />
          </>
        } />
        <Route path="/admin/manage-landlords" element={
          <>
            <AdminHeader />
            <ManageLandlords />
            <Footer />
          </>
        } />
        <Route path="/admin/manage-tenants" element={
          <>
            <AdminHeader />
            <ManageTenants />
            <Footer />
          </>
        } />
        <Route path="/admin/manage-properties" element={
          <>
            <AdminHeader />
            <ManageProperties />
            <Footer />
          </>
        } />
        <Route path="/admin/complaints" element={
          <>
            <AdminHeader />
            <ManageComplaints />
            <Footer />
          </>
        } />
        <Route path="/admin/bookings" element={
          <>
            <AdminHeader />
            <ManageBookings />
            <Footer />
          </>
        } />
        <Route path="/landlord/add-property" element={
          <>
            <LandlordHeader />
            <AddProperty />
            <Footer />
          </>
        } />
        <Route path="/landlord/properties" element={
          <>
            <LandlordHeader />
            <MyProperties />
            <Footer />
          </>
        } />
        <Route path="/landlord/bookings" element={
          <>
            <LandlordHeader />
            <LandlordBookings />
            <Footer />
          </>
        } />
        <Route path="/landlord/confirmed-bookings" element={
          <>
            <LandlordHeader />
            <ConfirmedBookings />
            <Footer />
          </>
        } />
        <Route path="/landlord/complaints" element={
          <>
            <LandlordHeader />
            <LandlordComplaints />
            <Footer />
          </>
        } />
        <Route path="/tenant/view-properties" element={
          <>
            <TenantHeader />
            <ViewProperties />
            <Footer />
          </>
        } />
        <Route path="/tenant/bookings" element={
          <>
            <TenantHeader />
            <MyBookings />
            <Footer />
          </>
        } />
        <Route path="/tenant/my-complaints" element={
          <>
            <TenantHeader />
            <MyComplaints />
            <Footer />
          </>
        } />
        <Route path="/tenant/add-complaints" element={
          <>
            <TenantHeader />
            <SubmitComplaint />
            <Footer />
          </>
        } />
        <Route path="/tenant/payments" element={
          <>
            <TenantHeader />
            <TenantPayments />
            <Footer />
          </>
        } />
        <Route path="/tenant/tenant-profile" element={
          <>
            <TenantHeader />
            <TenantProfile />
            <Footer />
          </>
        } />
        <Route path="/landlord/landlord-profile" element={
          <>
            <LandlordHeader />
            <LandlordProfile />
            <Footer />
          </>
        } />
        <Route path="/tenant/book-property" element={
          <>
            <TenantHeader />
            <BookProperty />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
