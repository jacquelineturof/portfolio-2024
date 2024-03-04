import "./globals.css";

import Layout from "@/components/Layout";

export const metadata = {
  title: "Jackie Software Developer",
  description: "A site for a software developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
