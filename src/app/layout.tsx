import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import { Container, Footer, NavigationBar } from '@/components';
import { StyledComponentsRegistry } from '@/libs';
import { ReactQueryProvider, StyledComponentsProvider } from '@/providers';

const notoSansKR = Noto_Sans_KR({
  variable: '--font-noto-sans-kr',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CERTICOS BOOKS',
  description: 'CDRI frontend test by Byungwook LEE',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKR.variable}>
        <StyledComponentsRegistry>
          <ReactQueryProvider>
            <StyledComponentsProvider>
              <NavigationBar />
              <Container>{children}</Container>
              <Footer />
            </StyledComponentsProvider>
          </ReactQueryProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
