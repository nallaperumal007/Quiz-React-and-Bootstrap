import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Start = () => {
    const {startQuiz, showStart} = useContext(DataContext);
    return (
        <section className='text-white text-center bg-dark' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="container">
               <div className=" row vh-100 align-items-center justify-content-center">
                    <div className='col-lg-8'>
                        <h1 className='fw-bold mb-4'>Basic React JS Quiz</h1>
                        <button onClick={startQuiz} className="btn-lg bg-danger text-white fw-bold">Start Quiz</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;