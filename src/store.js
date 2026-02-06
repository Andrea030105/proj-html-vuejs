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
        {
          img: "footer-location-dot-solid",
          text: "2/45 Tower Street. New York USA",
        },
        {
          img: "footer-phone-solid",
          text: "Call Us On 0800 840 1010",
        },
        {
          img: "footer-envelope-soli",
          text: "Demo@Example.Com",
        },
      ],
    },
    {
      title: "information",
      content: [
        {
          text: "Product Support",
        },
        {
          text: "Checkout",
        },
        {
          text: "Report Abuse",
        },
        {
          text: "Redeem Voucher",
        },
        {
          text: "Order Status",
        },
      ],
    },
    {
      title: "useful links",
      content: [
        {
          text: "Policies & Rules",
        },
        {
          text: "Privacy Policy",
        },
        {
          text: "License Policy",
        },
        {
          text: "My Account",
        },
        {
          text: "Locality",
        },
      ],
    },
    {
      title: "NEWSLETTER",
      content: [
        {
          text: "Subscribe To Receive Inspiration",
        },
        {
          text: "Ideas & News In Your lnbox",
        },
        {
          hasForm: true,
          hasBtn: true,
        },
      ],
    },
  ],
});
