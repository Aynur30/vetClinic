import { createBrowserRouter, Route, Routes } from "react-router-dom";
import App from "./app/App";
import Landing from "./features/Landing/Landing";
import RequireAuth from "./hok/RequireAuth";
import DoctorPage from "./features/User/DoctorPage/DoctorPage";
import ClientPage from "./features/User/ClientPage/ClientPage";
import ManagerPage from "./features/User/ManagerPage/ManagerPage";
import ProfilePage from "./features/User/ProfilePage/ProfilePage";
import FormWrapper from "./widgets/Forms/FormWrapper";
import SignUpPage from "./view/SignUpPage";
import SignInPage from "./view/SignInPage/SignInPage";
import ForumWrapper from "./widgets/Forum/ForumWrapper/ForumWrapper";
import TopicPage from "./view/TopicPage/TopicPage";
import AdminPageLayout from "./layout/AdminPageLayout/AdminPageLayout";

const MainRoutes = createBrowserRouter([
  {
    path: "*",
    element: (
      <Routes>
        <Route path="/" element={<App />}>   
        <Route
            path="sign-in"
            element={
              <FormWrapper
                children={<SignInPage />}
                text={{ title: "Don't have an account?", linkText: "Sign Up" }}
                link="/sign-up"
              />
            }
          />
          
          <Route index element={<Landing />} />
          <Route
            path="sign-up"
            element={
              <FormWrapper
                children={<SignUpPage />}
                text={{ title: "Already have an account?", linkText: "Log in" }}
                link="/sign-in"
              />
            }
          />
          <Route
            path="admin/*"
            element={<RequireAuth><AdminPageLayout /></RequireAuth>}>
              <Route index element={<div>START</div>} />
              <Route path="home" element={<div>HOME</div>} />
              <Route path="users" element={<div>USERS</div>} />
              <Route path="notification" element={<div>notification</div>} />
              <Route path="history" element={<div>history</div>} />
              <Route path="topic" element={<div>topic</div>} />
              <Route path="comments" element={<div>comments</div>} />
              <Route path="settings" element={<div>settings</div>} />
              <Route path="support" element={<div>support</div>} />
              <Route path="privacy" element={<div>privacy</div>} />
              <Route path="profile" element={<ProfilePage />} />
      </Route>
          <Route
            path="doctor/*"
            element={
              <RequireAuth>
                <Routes>
                  <Route index element={<DoctorPage />} />
                  <Route path="profile" element={<ProfilePage />} />
                </Routes>
              </RequireAuth>
            }
          />
          <Route
            path="client/*"
            element={
              <RequireAuth>
                <Routes>
                  <Route index element={<ClientPage />} />
                  <Route path="profile" element={<ProfilePage />} />
                </Routes>
              </RequireAuth>
            }
          />
          <Route
            path="manager/*"
            element={
              <RequireAuth><ManagerPage /></RequireAuth>
            }
          >
                  <Route path="profile" element={<ProfilePage />} />
                  <Route path="category" element={<div>Категории</div>} />
                  <Route path="news" element={<div>Новости</div>} />
                  <Route path="medicines" element={<div>Лекарства</div>} />
          </Route>
           <Route path="forum" element={<ForumWrapper />} />
           <Route path="forum/:id" element={<TopicPage />} />
        </Route>
      </Routes>
    ),
  },
]);

export default MainRoutes;
