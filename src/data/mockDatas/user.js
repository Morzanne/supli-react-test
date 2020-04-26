import { toUser } from "../models/User/user";
import format from 'date-fns/format';

export const mainUser = toUser(
    {
        firstName: "Dmitry",
        lastName: 'Kargaev',
        profilePic: null,
        profileResume: 'Freelance UX/UI designer, 80+ projects in web design, mobile app (IOS & android ) and creative projects. Open to offers.',
        location: 'Saint Petersburg, Russian Federation',
        experienceResume: 'I am more experienced in eCommerce web projects and mobile banking apps,, but also like to worth with creative projects, such as landing pages or unsual corporate websites.',
        projects: [
            {
                title: 'Zara redesign concept',
                image: null,
                description: 'UX/UI design',
                date: format(new Date('December 17, 1995 03:24:00'), 'dd-MM-yyyy'),
            },
            {
                title: 'SCTHON brand identity',
                image: null,
                description: 'Graphic design',
                date: format(new Date('December 17, 1995 03:24:00'), 'dd-MM-yyyy'),
            },
            {
                title: 'Drozd, Brand identity 2016',
                image: null,
                description: 'Graphic Design',
                date: format(new Date('December 17, 1995 03:24:00'), 'dd-MM-yyyy'),
            }
        ],
        skills: [
            {
                title: 'User experience (UX)',
                recommandationCount: 6
            },
            {
                title: 'User interface',
                recommandationCount: 7
            },
            {
                title: 'Brand identity',
                recommandationCount: 5
            }
        ],
        educations: [
            {
                location: 'Moscow State Linguistic University',
                degreeName: 'Bachelor degree Field Of StudyComputer and Information Systems',
                practicalDate: format(new Date('December 17, 1995 03:24:00'), 'yyyy-MM-dd'),
                summary: 'Additional English classes and UX profile courses'
            }
        ],
        connectionCount: 1043,
        messagesCount: 17,
        dailyViewsCount: 367,
        searchAppearanceCount: 9,
        postsViewCount: 15,
        visitors: [
            {
                firstName: "Darlène",
                lastName: 'Black',
                profilePic: null,
                profileResume: 'HR Manager, 10000 connections'
            },
            {
                firstName: "Theresa",
                lastName: 'Steward',
                profilePic: null,
                profileResume: 'IOS Developper'
            },
            {
                firstName: "Brandon",
                lastName: 'Wilson',
                profilePic: null,
                profileResume: 'Senior UX Designer'
            },
            {
                firstName: "Kyle",
                lastName: 'Fisher',
                profilePic: null,
                profileResume: 'Product designer at ComparateurAgricole'
            },
            {
                firstName: "Audrey",
                lastName: 'Alexander',
                profilePic: null,
                profileResume: 'Team lead at Google'
            }
        ],
        experiences : [
            {
                title: "Freelance UX/UI designer",
                employeer: "Self Employed",
                location: "Around the world",
                employementDate: "Jun 2016",
                stillEmployed: true,
                description: "Freelance UX/UI designer, 80+ projects in web design, mobile app (IOS & android ) and creative projects. Open to offers."
            },
            {
                title: "UX/UI designer",
                employeer: "Upwork",
                location: "International",
                employementDate: "Jun 2019",
                stillEmployed: true,
                description: "Freelance UX/UI designer, 80+ projects in web design, mobile app (IOS & android ) and creative projects. Open to offers."
            }
        ]
    }
)