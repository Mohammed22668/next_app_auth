import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/dashboard.svg",
    route: "/dashboard",
    label: "لوحة التحكم",
  },
  {
    imgURL: "/assets/icons/clinic.svg",
    route: "/clinic",
    label: "العيادات ",
  },
  {
    imgURL: "/assets/icons/calender.svg",
    route: "/bookings",
    label: "الحجوزات  ",
  },
  {
    imgURL: "/assets/icons/patient.svg",
    route: "/patients",
    label: "المراجعين ",
  },
  {
    imgURL: "/assets/icons/surgical.svg",
    route: "/surgical",
    label: "العمليات ",
  },

  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "الملف الشخصي",
  },
];

//  Admin Sidebar routes
export const adminSidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/dashboard.svg",
    route: "/dashboard",
    label: "لوحة التحكم",
  },
  {
    imgURL: "/assets/icons/clinic.svg",
    route: "/clinic",
    label: "العيادات ",
  },
  {
    imgURL: "/assets/icons/calender.svg",
    route: "/bookings",
    label: "الحجوزات  ",
  },
  {
    imgURL: "/assets/icons/patient.svg",
    route: "/patients",
    label: "المراجعين ",
  },
  {
    imgURL: "/assets/icons/surgical.svg",
    route: "/surgical",
    label: "العمليات ",
  },

  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "الملف الشخصي",
  },
];

//  Staff Sidebar routes
export const staffSidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/users.svg",
    route: "/categorymanage",
    label: "ادارة الفئات",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/subcategorymanage",
    label: "ادارة التصنيفات ",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/storiesmanage",
    label: "ادارة القصص",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/partsmanage",
    label: "ادارة الفصول",
  },

  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "الملف الشخصي",
  },
];

//  Editor Sidebar routes
export const editorSidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/star.svg",
    route: "/storiesmanage",
    label: "ادارة القصص",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/partsmanage",
    label: "ادارة الفصول",
  },

  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "الملف الشخصي",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};
