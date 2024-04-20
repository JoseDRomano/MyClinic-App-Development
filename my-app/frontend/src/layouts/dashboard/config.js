import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import UserGroupIcon from '@heroicons/react/24/solid/UserGroupIcon';
import ClipboardDocumentListIcon from '@heroicons/react/24/solid/ClipboardDocumentListIcon';
import {SvgIcon} from '@mui/material';
import CircleStack from '@heroicons/react/24/solid/CircleStackIcon';
import ChartBarSquareIcon from '@heroicons/react/24/solid/ChartBarSquareIcon';
import CalendarDaysIcon from '@heroicons/react/24/solid/CalendarDaysIcon'
import {CpuChipIcon, UsersIcon} from "@heroicons/react/20/solid";
//import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';

export const items = [
    {
        title: 'Dashboard',
        path: '/',
        icon: (
            <SvgIcon fontSize="small">
                <ChartBarIcon/>
            </SvgIcon>
        )
    },
    {
        title: 'Consultas',
        path: '/workouts',
        icon: (
            <SvgIcon fontSize="small">
                <ClipboardDocumentListIcon/>
            </SvgIcon>
        )
    },
    {
        title: 'Equipamentos',
        path: '/workouts-history',
        icon: (
            <SvgIcon fontSize="small">
                <CpuChipIcon/>
            </SvgIcon>
        )
    },
    {
        title: 'Pacientes',
        path: '/students',
        icon: (
            <SvgIcon fontSize="small">
                <UserGroupIcon/>
            </SvgIcon>
        )
    },
    {
        title: 'Check-Ins',
        path: '/exercises',
        icon: (
            <SvgIcon fontSize="small">
                <CircleStack/>
            </SvgIcon>
        )
    },
    {
        title: 'Staff',
        path: '/stats',
        icon: (
            <SvgIcon fontSize="small">
                <UsersIcon/>
            </SvgIcon>
        )
    },
    {
        title: 'SUPOSTO GBO PAGE',
        path: '/clone1',
        icon: (
            <SvgIcon fontSize="small">
                <ChartBarSquareIcon/>
            </SvgIcon>
        )
    },
    {
        title: 'SUPOSTO PATIENT PAGE',
        path: '/clone2',
        icon: (
            <SvgIcon fontSize="small">
                <ChartBarSquareIcon/>
            </SvgIcon>
        )
    },
];
