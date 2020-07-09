import React from 'react';
import { MyNavbar } from '../components/MyNavbar';
import { MyFooter } from '../components/MyFooter';

export const CoursesView = () => {
    return(
        <div className="container-fluid">
            <MyNavbar />
            <h2>Courses</h2>
            <MyFooter />
        </div>
    )
}