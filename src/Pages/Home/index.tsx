import React from 'react';
import Header from '../../Components/Header'
import './styles.css'
import TableComponent from '../../Components/Table'
const Home: React.FC = () => {
    return (
        <div className='bg-dark' id='App'>
            <Header />
            <TableComponent />
        </div>
    );
}
export default Home;