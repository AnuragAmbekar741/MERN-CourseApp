
import { FaChalkboardTeacher,FaUserEdit } from 'react-icons/fa';
import { BiSolidWidget } from 'react-icons/bi';
import { GiTeacher } from 'react-icons/gi';


export const adminAppbarlinks = [
    {
        name:'Profile',
        hash:'#Profile',
        icon:FaUserEdit
    },
    {
        name:'Add Course',
        hash:'Add Course',
        icon:GiTeacher
    },
    {
        name:'My Courses',
        hash:'My Courses',
        icon:FaChalkboardTeacher
    },
    {
        name:'All Courses',
        hash:'All Courses',
        icon:BiSolidWidget
    },
] as const