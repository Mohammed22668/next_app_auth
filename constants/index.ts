import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "الرئيسية",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/about",
    label: "من نحن",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/categories",
    label: "الفئات",
  },

  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/library",
    label: "المكتبة",
  },
  {
    imgURL: "/assets/icons/document.svg",
    route: "/privacypolicy",
    label: "سياسة الخصوصية",
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
    imgURL: "/assets/icons/home.svg",
    route: "/users",
    label: "المستخدمين",
  },
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
