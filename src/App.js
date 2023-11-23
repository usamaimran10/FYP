import React from "react";

import NavBar from "./SignUpSection/Navbar/Navbar";
import Signup from "./SignUpSection/SignUp/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Form from "./SignUpSection/SignUp/Form";
import Signin from "./SignUpSection/SignUp/Signin";
import Homepage from "./Homepage";
import MainPage from "./ProductPage/MainPage";
import CategoriesPage from "./Categories/CategoriesPage";
import ProfessionalPage from "./Professional/ProfessionalPage";
import LandingPage from "./LandingPage/LandingPage";
import BidMain from "./BidPage/BidMain";
import Cart from "./ProductPage/Cart/Cart";
import AdresPage from "./AddressPage/AdresPage";
import MainTab from "./Categories/MainTab";
import Dashboard from "./AllDashboards/CustomerDashboard/Dashboard";
import VerifyEmail from "./SignUpSection/ForgotPassword/VerifyEmail";

import SellerDashboard from "./AllDashboards/Seller Dashboard/SellerDashboard";
import UploadSeller from "./AllDashboards/Seller Dashboard/UploadSeller";
// import ForgotPass from "./SignUpSection/ForgotPassword/ForgotPass";
import ForgotPassword from "./SignUpSection/ForgotPassword/forgotPass";
import Test from "./Test";
import Contact from "./ContactUs.js/Contact";
import OrderList from "./OrderList/OrderList";
import MainPageProfessional from "./ViewProfessional/MainPageProfessional";
import SpecificProduct from "./ProductPage/SingleProductPage/SpecificProduct";
import Thankyou from "./Thankyou";
import AdminDashboard from "./AllDashboards/AdminDashboard/AdminDashboard";
import Allbids from "./AllBids/Allbids";
import SpecificProfs from "./ViewProfessional/SingleProfessional/SpecificProfs";
import ProfessionalDashboard from "./AllDashboards/Professional Dashboard/ProfessionalDashboard";
import ProfsBids from "./AllDashboards/Professional Dashboard/ProfsBids";
import BidProf from "./AllBids/BidProf";
import UpdateSellerProfile from "./UpdateFolder/UpdateCustProfile/UpdateSellerProfile";
import UpdateProfessionalProfiel from "./UpdateFolder/UpdateCustProfile/UpdateProfessionalProfiel";
import UpdateCustomerProfile from "./UpdateFolder/UpdateCustProfile/UpdateCustomerProfile";
import UpdateSoloLabor from "./UpdateFolder/UpdateCustProfile/UpdateSoloLabor";
import SoloDashboard from "./AllDashboards/Solo Labor Dashboard/SoloDashboard";
import SpecificSoloLabor from "./ViewSoloLabor/SingleProfessional/SpecificSoloLabor";
import SoloLaborPage from "./SoloLabor/SoloLaborPage";
import MainPageSoloLabor from "./ViewSoloLabor/MainPageSoloLabor";
import Services from "./OurServices/Services";
import ProfsBiddedReq from "./AllBids/ProfsBiddedReq";
import BidOnRequest from "./AllBids/BidOnRequest";
import ViewCustReq from "./AllBids/ViewCustReq";
import BiddedOffers from "./AllBids/BiddedOffers";
import CreateGig from "./AllDashboards/Solo Labor Dashboard/CreateGig";
import SuccessHired from "./AllBids/SuccessHired";
import ViewReqonBid from "./AllBids/ViewReqOnBid";
import HiredBids from "./AllBids/HiredBids";
import SpecificProfBid from "./AllBids/SpecificProfBid";
import InProgressBidsProf from "./AllBids/InProgressBidsProf";
import ViewAllUsers from "./AllDashboards/AdminDashboard/ViewAllUsers";
import EditUsers from "./AllDashboards/AdminDashboard/EditUsers";
import NewPassword from "./SignUpSection/ForgotPassword/NewPassword";
import Chat from "./Chat/Chat";
import {} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            {/* Set the default route to redirect to /landingpage */}
            <Redirect exact from="/" to="/landingpage" />
            <Route exact path="/landingpage" component={LandingPage} />
            <Route exact path="/cp_admin" component={AdminDashboard} />
            <Route exact path="/inbox/:chatid" component={Chat} />
            <Route exact path="/registeruser" component={Form} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/homepage/:role" component={Homepage} />
            <Route exact path="/GuestHomepage" component={Homepage} />
            <Route exact path="/productpage" component={MainPage} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/cutomerDash" component={Dashboard} />
            <Route exact path="/custDashboard" component={SellerDashboard} />
            <Route exact path="/SoloDashboard" component={SoloDashboard} />
            <Route exact path="/biddedOffers" component={BiddedOffers} />
            <Route exact path="/address" component={AdresPage} />
            <Route exact path="/sololaborGig" component={CreateGig} />
            <Route exact path="/hiredsuccess" component={SuccessHired} />
            <Route exact path="/viewReqonBid" component={ViewReqonBid} />
            <Route exact path="/AllUsers" component={ViewAllUsers} />
            <Route exact path="/DeleteUser" component={EditUsers} />
            <Route exact path="/forgotPass" component={ForgotPassword} />
            <Route exact path="/verifyEmail" component={VerifyEmail} />
            <Route exact path="/gotoNewPass" component={NewPassword} />
            <Route
              exact
              path="/ProfDashboard"
              component={ProfessionalDashboard}
            />

            <Route exact path="/categoriesPage" component={CategoriesPage} />
            <Route
              exact
              path="/professionalCateg"
              component={ProfessionalPage}
            />
            <Route exact path="/SoloCateg" component={SoloLaborPage} />
            <Route exact path="/bid" component={BidMain} />
            <Route exact path="/uploadProduct" component={UploadSeller} />
            <Route exact path="/AllProductsPage" component={MainPage} />
            <Route exact path="/profBiddedReq" component={ProfsBiddedReq} />
            <Route exact path="/gotoViewReq" component={ViewCustReq} />
            <Route exact path="/specificProfbid" component={SpecificProfBid} />
            <Route exact path="/hiredProfs" component={HiredBids} />
            <Route
              exact
              path="/inProgressBidProf"
              component={InProgressBidsProf}
            />
            <Route
              exact
              path="/specificProduct/:id"
              component={SpecificProduct}
            />
            <Route
              exact
              path="/AllProfessionalPage"
              component={MainPageProfessional}
            />
            <Route exact path="/AllSoloLabor" component={MainPageSoloLabor} />

            <Route exact path="/allOffers" component={Allbids} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/contactpage" component={Contact} />
            <Route exact path="/orderlist" component={OrderList} />
            <Route exact path="/thankyou" component={Thankyou} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/singleProfs/:id" component={SpecificProfs} />
            <Route exact path="/bidonReq" component={BidOnRequest} />
            <Route
              exact
              path="/singleSoloLabor/:id"
              component={SpecificSoloLabor}
            />
            <Route exact path="/bidForProf" component={BidProf} />
            <Route
              exact
              path="/updateSellerProfile"
              component={UpdateSellerProfile}
            />
            <Route
              exact
              path="/updateCustomerProfile"
              component={UpdateCustomerProfile}
            />
            <Route
              exact
              path="/updateSoloLaborProfile"
              component={UpdateSoloLabor}
            />
            <Route
              exact
              path="/updateProfessionalProfile"
              component={UpdateProfessionalProfiel}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
