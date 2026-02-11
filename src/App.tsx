import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ExperiencePage from "./pages/ExperiencePage";
import ToolPage from "./pages/ToolPage";
import ContactPage from "./pages/ContactPage";
import ContentsPage from "./pages/ContentsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import ExperienceDetailsPage from "./pages/ExperienceDetailsPage";


const App = () => {
  return (
    
    <>
      <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectPage />} />
            <Route path='/projects-details/:id' element={<ProjectDetailsPage />} />
            <Route path='/experience' element={<ExperiencePage />} />
            <Route path='/experience-details/:id' element={<ExperienceDetailsPage />} />
            <Route path='/tools' element={<ToolPage />} />
            <Route path='/contents' element={<ContentsPage />} />
            <Route path='/contact' element={<ContactPage />} />
      </Routes> 
    </>      
         
    
  );
};

export default App;