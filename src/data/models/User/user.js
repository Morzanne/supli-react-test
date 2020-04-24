import { Record, List, fromJS } from 'immutable';

export const User = Record(
    {
        firstName: null,
        lastName: null,
        profileResume: null,
        location: null,
        experienceResume: null,
        projects: new List(),
        skills: new List(),
        educations: new List(),
        connectionCount: null,
        messagesCount: null,
        dailyViewsCount: null,
        searchAppearanceCount: null,
        visitors: new List()
    },
    'User'
)

export const Project = Record(
    {
        title: null,
        image: null,
        description: null,
        date: null
    },
    'Project'
)

export const Skill = Record(
    {
        title: null,
        recommandationCount: null
    },
    'Skill'
)

export const Education = Record(
    {
        location: null,
        degreeName: null,
        practicalDate: null,
        summary: null
    },
    'Education'
)

export const toUser = user =>
    new User(
        fromJS({
            ...user,
            projects: new List(user.projects.map(project => new Project(project))) || null,
            skills: new List(user.skills.map(skill => new Skill(skill))) || null,
            educations: new List(user.educations.map(education => new Education(education))) || null,
            visitors: new List(user.visitors.map(visitor => new User(visitor))) || null
        })
    )