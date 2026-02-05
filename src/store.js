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
  menuFooterArray: [
    {
      title: "Contact Info",
      content: [
        "2/45 Tower Street. New York USA",
        "Call Us On 0800 840 1010",
        "Demo@Example.Com",
      ],
    },
    {
      title: "information",
      content: [
        "Product Support",
        "Checkout",
        "Report Abuse",
        "Redeem Voucher",
        "Order Status",
      ],
    },
    {
      title: "useful links",
      content: [
        "Policies & Rules",
        "Privacy Policy",
        "License Policy",
        "My Account",
        "Locality",
      ],
    },
    {
      title: "NEWSLETTER",
      content: [
        "Subscribe To Receive Inspiration",
        "Ideas & News In Your lnbox",
      ],
    },
  ],
});
