import Link from "next/link";
import React from "react";
import palette from "../../themes/palette";

const SocialMediaIcon = () => {
  return (
    <div style={registerStyles.iconContainer}>
      <Link href="https://web.telegram.org/">
        <a>
          <img src="/images/telegram.png" alt="telegram" />
        </a>
      </Link>
      <Link href="https://web.facebook.com">
        <a>
          <img src="/images/facebook.png" alt="facebook" />
        </a>
      </Link>
      <Link href="https://web.facebook.com">
        <a>
          <img src="/images/twitter.png" alt="twitter" />
        </a>
      </Link>
      <Link href="https://www.google.com">
        <a>
          <img src="/images/google.png" alt="google" />
        </a>
      </Link>
    </div>
  );
};

const registerStyles = {
  iconContainer: {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "space-evenly",
    marginBlock: 10,
  },
};

export default SocialMediaIcon;
