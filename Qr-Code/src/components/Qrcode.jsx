import React from "react";

const Qrcode = () => {
  return (
    <div class="bg-custom-blue h-[288px] aspect-square m-[16px] mb-[24px] rounded-[10px] flex items-center justify-center">
      <img
        src="/images/image-qr-code.png"
        alt="qr-code"
        class="rounded-[10px]"
      />
      {/* Public folder is accessible Everywhere */}
    </div>
  );
};

export default Qrcode;
