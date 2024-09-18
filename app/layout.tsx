import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cn } from "@/lib/utils";
import Header from "./_components/header";
import Footer from "./_components/footer";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script"; // 引入Script组件

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "词语新解｜Facto",
  description: "给词语一个全新角度的解释",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",
          `${geistSans.variable} ${geistMono.variable} antialiased text-gray-800`
        )}
      >
        <Header />
{/* 加载外部脚本 */}
        <Script src="https://cdn.facto.com.cn/jquery.min.js" strategy="beforeInteractive" />
        <Script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js" strategy="beforeInteractive" />

        {/* 微信分享的配置代码 */}
        <Script id="wechat-share-config" strategy="lazyOnload">
          {`
            var url = window.location.href;
            $.ajax({
                type: "get",
                url: "https://www.facto.com.cn/jssdk.php?url=" + url,
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "success_jsonpCallback",
                success: function(data) {
                    wx.config({
                        debug: false,
                        appId: data.appId,
                        timestamp: data.timestamp,
                        nonceStr: data.nonceStr,
                        signature: data.signature,
                        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData']
                    });
                },
                error: function(data) {
                    alert("连接失败！");
                }
            });

            wx.ready(function () {
                wx.updateTimelineShareData({
                    title: '词语新解｜给词语一个全新角度的解释',
                    link: url,
                    imgUrl: 'https://cy.facto.com.cn/logo.png',
                    success: function (res) {}
                });
                wx.updateAppMessageShareData({
                    title: '词语新解',
                    desc: '给词语一个全新角度的解释',
                    link: url,
                    imgUrl: 'https://cy.facto.com.cn/logo.png',
                    success: function (res) {}
                });
            });

            wx.error(function (res) {
                alert(res);
            });
          `}
        </Script>
        
        {children}
        <Footer />
        <ToastContainer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
