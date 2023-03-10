import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignInUser from "./pages/Authorization/SignInUser";
import Books from "./pages/Books";
import ContactsPage from "./pages/ContactsPage";
import FAQ from "./pages/FAQ";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFound";
import PaidBooks from "./pages/PaidBooks";
import useToken from "./hooks/useToken";
import BookDetails from "./pages/BookDetails";

const App = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <SignInUser setToken={setToken} />;
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/paid-books" element={<PaidBooks />} />
          <Route path="/:id" element={<BookDetails />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
