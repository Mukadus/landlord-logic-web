"use client";

// import RenderToast from "@/components/molecules/RenderToast";
// import { useMobileViewHook } from "@/resources/hooks/useMobileViewHook";
// import { clearAllCookies } from "@/resources/utils/cookie";
// import { signOutRequest } from "@/store/auth/authSlice";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import MobileHeader from "./MobileHeader/MobileHeader";
import Header from "@/components/molecules/Header/Header";

const WebsiteHeader = () => {
  // const router = useRouter();
  // const dispatch = useDispatch();
  // const pathName = usePathname();

  // const { isMobile } = useMobileViewHook(992);


  return (
    <>
      {/* {isMobile ? (
        <MobileHeader/>
      ) : (
        <> */}
          <Header />
        {/* </>
      )} */}
    </>
  );
};

export default WebsiteHeader;
