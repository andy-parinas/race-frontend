import { HomeIcon, TrophyIcon, UserIcon } from "@heroicons/vue/24/outline";
import {
    HomeIcon as HomeIconSolid,
    TrophyIcon as TrophyIconSolid,
    UserIcon as UserIconSolid,
} from "@heroicons/vue/24/solid";

export const navigations = [
    {
        title: "MI4ORM",
        name: "races-next",
        href: "/races/next",
        icon: HomeIcon,
        activeIcon: HomeIconSolid,
    },
    {
        title: "Races",
        href: "/races/all",
        name: "races-all",
        icon: TrophyIcon,
        activeIcon: TrophyIconSolid,
    },
    {
        title: "My Profile",
        href: "/users/profile",
        name: "user-profiles",
        icon: UserIcon,
        activeIcon: UserIconSolid,
    },
];
