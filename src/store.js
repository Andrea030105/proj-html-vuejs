import { reactive } from "vue";

export const store = reactive({
  menuHeaderArray: [
    {
      name: "Home",
      active: false,
    },
    {
      name: "Blog",
      active: false,
    },
    {
      name: "Pages",
      active: false,
      dropDown: true,
      subLink: ["service", "Our Work Folw", "Video Thubmnail type"],
    },
    {
      name: "About",
      active: false,
    },
    {
      name: "Contacts",
      active: false,
    },
    {
      name: "Gallery",
      active: false,
    },
    {
      name: "Shop",
      active: false,
      dropDown: true,
      subLink: ["Shop Page", "Product Type"],
    },
  ],
});
