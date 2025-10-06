export const contactUsPage = {
  htmlDescription: `<p>Get in touch <i>with us</i></p>`,
  description: "We're here to help with any questions or feedback,",
  image: "/app-images/contact.png",
  email: "info@mylandlordlogic.com",
  phone: "+1 (234) 567-890",
};
export default contactUsPage;

import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

export const contactForm = (data) => {
  return [
    {
      label: "Email",
      value: data?.email,
      icon: <MdOutlineMail size={18} />,
    },
    {
      label: "Phone", 
      value: data?.phone,
      icon: <IoCallOutline size={18} />
    }
  ];
};