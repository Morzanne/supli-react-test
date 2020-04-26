import { Record, List, fromJS, Map } from 'immutable';

export const User = Record(
    {
        firstName: null,
        lastName: null,
        profilePic: null,
        profileResume: null,
        location: null,
        experienceResume: null,
        projects: new List() || null,
        skills: new List(),
        educations: new List(),
        connectionCount: null,
        messagesCount: null,
        dailyViewsCount: null,
        searchAppearanceCount: null,
        postsViewCount: null,
        visitors: new List() || Map(),
        experiences: new List() || null
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

export const Experience = Record(
    {
        title: null,
        employeer: null,
        location: null,
        employementDate: null,
        stillEmployed: null,
        description: null,
        image: null
    },
    'Experience'
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
        summary: null,
        image: null
    },
    'Education'
)

export const toUser = user => {
    return new User(
        fromJS({
            ...user,
            projects: user.projects ? new List(user.projects.map(project => new Project(project))) : undefined,
            skills: user.skills ? new List(user.skills.map(skill => new Skill(skill))) : null,
            educations: user.educations ? new List(user.educations.map(education => new Education(education))) : null,
            visitors: user.visitors ? new List(user.visitors.map(visitor => toUser(visitor))) : null,
            experiences: user.experiences ? new List(user.experiences.map(experience => new Experience(experience))) : null
        })
    );
}