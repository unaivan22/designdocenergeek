// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started",
    items: [
      { title: "Introduction", href: "/introduction" },
      // { title: "Installation", href: "/installation" },
      // { title: "Quick Start Guide", href: "/quick-start-guide" },
      // { title: "Project Structure", href: "/project-structure" },
      // { title: "Changelog", href: "/changelog" },
      // { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Web Design",
    href: "web-design",
    items: [
      { title: "Quick Start", href: "/quick-start" },
      { title: "Badge", href: "/badge" },
      { title: "Button", href: "/button" },
      { title: "Color", href: "/color" },
      { title: "Input Form", href: "/input-form" },
      { title: "Radio", href: "/radio" },
      { title: "Switch", href: "/switch" },
      { title: "Typography", href: "/typography" },
      // { title: "Quick Start Guide", href: "/quick-start-guide" },
      // { title: "Project Structure", href: "/project-structure" },
      // { title: "Changelog", href: "/changelog" },
      // { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Mobile Design",
    href: "mobile-design",
    items: [
      { title: "Quick Start", href: "/quick-start" },
      { title: "Button", href: "/button" },
      { title: "Chips", href: "/chips" },
      { title: "Date/Time Picker", href: "/date-time-picker" },
      { title: "Dialog", href: "/dialog" },
      { title: "Radio", href: "/radio" },
      { title: "Segmented Button", href: "/segmented-button" },
      { title: "Switch", href: "/switch" },
      { title: "Typography", href: "/typography" },
    ],
  },
  // {
  //   title: "Server Actions",
  //   href: "server-actions",
  //   items: [
  //     { title: "getSession", href: "/getSession" },
  //     { title: "getToken", href: "/getToken" },
  //     { title: "getRole", href: "/getRole" },
  //   ],
  // },
  // {
  //   title: "React Hooks",
  //   href: "react-hooks",
  //   items: [
  //     { title: "useSession", href: "/use-session" },

  //     { title: "useFetch", href: "/use-fetch" },
  //     { title: "useAuth", href: "/use-auth" },
  //     { title: "useProduct", href: "/use-product" },
  //     { title: "useOrder", href: "/use-order" },
  //     { title: "useCart", href: "/use-cart" },
  //     { title: "usePayment", href: "/use-payment" },
  //     { title: "useShipping", href: "/use-shipping" },
  //     { title: "useNotification", href: "/use-notification" },
  //     { title: "useReview", href: "/use-review" },
  //     { title: "useInventory", href: "/use-inventory" },
  //     { title: "useUser", href: "/use-user" },
  //     { title: "useSettings", href: "/use-settings" },
  //     { title: "useAnalytics", href: "/use-analytics" },
  //     { title: "useTheme", href: "/use-theme" },
  //     { title: "useRouter", href: "/use-router" },
  //     { title: "useData", href: "/use-data" },
  //   ],
  // },
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
