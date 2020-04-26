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

export const toCourseList = courseList => {
    return new CourseList(
        fromJS({
            ...courseList,
            courses: courseList ? new List(courseList.map(course => new Course(course))) : new Map()
        })
    )
}