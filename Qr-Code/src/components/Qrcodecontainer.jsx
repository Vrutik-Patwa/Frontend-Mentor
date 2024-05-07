import React from "react";
import Qrcode from "./Qrcode";
import Text from "./Text";
const Qrcodecontainer = () => {
  return (
    <div class="h-[497px] w-[320px] bg-white rounded-[20px] flex-row justify-center">
      <Qrcode />
      <Text />
    </div>
  );
};

export default Qrcodecontainer;
