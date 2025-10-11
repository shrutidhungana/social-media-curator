import { GoogleIcon, FacebookIcon, InstagramIcon, TiktokIcon } from "@/icons";

import { Provider } from "@/types/providerTypes";

export const SOCIAL_PROVIDERS: Provider[] = [
  {
    id: "google",
    label: "Continue with Google",
    LogoComponent: GoogleIcon,
  },
  {
    id: "facebook",
    label: "Continue with Facebook",
    LogoComponent: FacebookIcon,
  },
  {
    id: "instagram",
    label: "Continue with Instagram",
    LogoComponent: InstagramIcon,
  },
  {
    id: "tiktok",
    label: "Continue with TikTok",
    LogoComponent: TiktokIcon,
  },
];
