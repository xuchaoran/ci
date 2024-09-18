import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cn } from "@/lib/utils";
import Header from "./_components/header";
import Footer from "./_components/footer";

import { Toaster } from "@/components/ui/sonner";
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
  title: "词语新解 | Facto",
  description: "对词语进行全新的解释",
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
        {children}
        <Footer />
        <ToastContainer />
        <Toaster richColors position="top-right" />
<!-- Wechat -->	
<script src="https://cdn.facto.com.cn/jquery.min.js"></script>
<script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
<script>
    var  url=location.href;
    $.ajax({
        type : "get",
        url : "https://www.facto.com.cn/jssdk.php?url="+url,
        dataType : "jsonp",
        jsonp: "callback",
        jsonpCallback:"success_jsonpCallback",
        success : function(data){
            console.log(data)
            wx.config({
                debug: false,
                appId: data.appId,
                timestamp: data.timestamp,
                nonceStr: data.nonceStr,
                signature: data.signature,
                jsApiList: [
                    'updateAppMessageShareData',
                    'updateTimelineShareData',
                ]
            });
        },
        error:function(data){
            alert("连接失败！");
        }
    });
    wx.ready(function () {
     wx.updateTimelineShareData({
       title: 'Facto - 独立站，大有可为 | 轻松布局独立站, 摆脱同质化竞争。',
       link: url,
       imgUrl: 'https://cdn.facto.com.cn/wx.png',
       success: function (res) {
       }
     })
     wx.updateAppMessageShareData({
       title: 'Facto - 独立站，大有可为',
       desc: '轻松布局独立站, 摆脱同质化竞争。',
       link: url,
       imgUrl: 'https://cdn.facto.com.cn/wx.png',
       success: function (res) {
       }
     })
    });
    wx.error(function (res) {
        alert(res);
    });
</script>
        
      </body>
    </html>
  );
}
