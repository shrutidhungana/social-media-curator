import React from "react";

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%">
      <stop offset="0%" stopColor="#fdf497" />
      <stop offset="45%" stopColor="#fdf497" />
      <stop offset="60%" stopColor="#fd5949" />
      <stop offset="90%" stopColor="#d6249f" />
      <stop offset="100%" stopColor="#285AEB" />
    </radialGradient>
    <path
      fill="url(#ig-gradient)"
      d="M12 2.2c3.2 0 3.6.012 4.9.07 1.2.057 2 .248 2.46.418.62.24 1.06.526 1.52.983.46.46.74.9.98 1.52.17.46.36 1.26.42 2.46.06 1.3.07 1.7.07 4.9s-.01 3.6-.07 4.9c-.06 1.2-.25 2-.42 2.46-.24.62-.52 1.06-.98 1.52a3.83 3.83 0 0 1-1.52.98c-.46.17-1.26.36-2.46.42-1.3.06-1.7.07-4.9.07s-3.6-.01-4.9-.07c-1.2-.06-2-.25-2.46-.42a3.83 3.83 0 0 1-1.52-.98c-.46-.46-.74-.9-.98-1.52-.17-.46-.36-1.26-.42-2.46C2.21 15.6 2.2 15.2 2.2 12s.01-3.6.07-4.9c.06-1.2.25-2 .42-2.46.24-.62.52-1.06.98-1.52a3.83 3.83 0 0 1 1.52-.98c.46-.17 1.26-.36 2.46-.42C8.4 2.21 8.8 2.2 12 2.2ZM12 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8Zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.55a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z"
    />
  </svg>
);

export default InstagramIcon;
