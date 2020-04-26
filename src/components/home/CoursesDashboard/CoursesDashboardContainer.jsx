import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mainCourses } from '../../../data/mockDatas/courses'
import { fetchCoursesActionRequest } from '../../../actions/courses/courses'
import { getCourses } from '../../../selectors/courses/courses';
import CoursesDashboard from '.';

export const CoursesDashboardContainer = () => {

    const dispatch = useDispatch();

    const fetchCourses = useCallback(async () => {
        const courses = await new Promise(resolve => {
            setTimeout(() => {
                resolve(mainCourses)
            })
        }, 3000);

        dispatch(fetchCoursesActionRequest(courses))
    }, [dispatch])

    const courses = useSelector(state => {
        return getCourses(state)
    })

    useEffect(() => {
        fetchCourses()
    }, [fetchCourses])

    return <CoursesDashboard courses={courses} />

}