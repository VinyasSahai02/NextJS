import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar /> <div> {children} </div>
    </>
  );
};

export default Layout;

//to add the navbar to every page we wrap it in a layout component
//as all the pages will come below the navbar
//the layout component takes the pages as a prop
//then renders them after the navbar