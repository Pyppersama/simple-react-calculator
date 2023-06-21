import { Link } from 'react-router-dom';

function Homepage (){
    
    return(
        <>
            <h1>Welcome to Our Homepage</h1>
            <h3>Click the Button below to access our Basic Calculator</h3>
            <Link to="/calculator-app" className="homepage-btn">
                Calculator
            </Link>
            {/* <Routes>
                <Route element={<Calculator/>}/>
            </Routes> */}
        </>
    );
}

export default Homepage;