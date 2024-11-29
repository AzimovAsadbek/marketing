import ContactsPage from "../view/Contacts";
import HomePage from "../view/Home";

const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: <HomePage />,
    child: [
      {
        id: 1,
        title: "Creative Agency",
        path: "/home",
      },
      {
        id: 1,
        title: "Creative Agency",
        path: "/home",
      },
    ],
  },
  {
    id: 2,
    title: "Pages",
    path: "/pages",
    child: [
      {
        id: 1,
        title: "Creative Agency",
        path: "/home",
      },
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    path: "/portfolio",
    child: [
      {
        id: 1,
        title: "Creative Agency",
        path: "/home",
      },
    ],
  },
  {
    id: 4,
    title: "Block",
    path: "/block",
    child: [
      {
        id: 1,
        title: "Creative Agency",
        path: "/home",
      },
    ],
  },
  {
    id: 5,
    title: "Contacts",
    path: "/contacts",
    element: <ContactsPage />,
  },
];

export default navbar;
