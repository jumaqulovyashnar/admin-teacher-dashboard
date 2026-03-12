import { Icon } from "@/components/icon";
import type { NavProps } from "@/components/nav";
export const teacherNavData: NavProps["data"] = [
  {
    name: "Portfolio",
    items: [
      {
        title: "Bosh sahifa",
        path: "/teacher-dashboard",
        icon: <Icon icon="lucide:layout-dashboard" size={24} />,
      },
    ],
  },
  {
    name: "Boshqaruv",
    items: [
      {
        title: "Profilim",
        path: "/teacher-dashboard/profilepage",
        icon: <Icon icon="lucide:building-2" size={24} />,
      },
      {
        title: "Tadqiqotlarim",
        path: "/teacher-dashboard/tadqiqotpage",
        icon: <Icon icon="lucide:layers" size={24} color="#637281" />,
      },
      {
        title: "Nashrlarim",
        path: "/teacher-dashboard/nashr",
        icon: <Icon icon="lucide:graduation-cap" size={24} />,
      },
      {
        title: "Mukofotlarim",
        path: "/teacher-dashboard/mukofot",
        icon: <Icon icon="lucide:briefcase" size={24} />,
      },
    ],
  },
];