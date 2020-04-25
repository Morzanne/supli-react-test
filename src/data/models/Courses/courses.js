import { Record, List, fromJS } from 'immutable';

export const Course = Record(
    {
        id: null,
        video: null,
        title: null,
        viewerCount: null,
    },
    'Course'
)

export const CourseList = Record(
    {
        courses: new List()
    },
    'CourseList'
)

export const toCourseList = courseList =>
    new CourseList(
        fromJS({
            courses: new List(courseList.courses.map(course => new Course(course)))
        })
    )