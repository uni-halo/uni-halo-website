import React, { useState } from "react";
import logo from "@/assets/logo.png";
import {
  Mail,
  ArrowUpRight,
  User,
  BookOpen,
  Smartphone,
  Zap,
  Code2,
  GitFork,
} from "lucide-react";

/**
 * 主页组件 - UNI HALO 即将上线页面
 */
export const Index = () => {
  const [toasts, setToasts] = useState<
    Array<{ id: number; message: string; type: "info" | "success" | "warning" }>
  >([]);
  const [toastId, setToastId] = useState(0);

  /**
   * 显示Toast消息
   * @param message 消息内容
   * @param type 消息类型
   */
  const showToast = (
    message: string,
    type: "info" | "success" | "warning" = "info",
  ) => {
    const newToast = { id: toastId, message, type };
    setToasts((prev) => [...prev, newToast]);
    setToastId((prev) => prev + 1);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== newToast.id));
    }, 3000);
  };
 
  return (
    <div className="min-h-screen bg-[#05080A] text-white overflow-hidden relative">
      {/* 背景网格 */}
      <div className="fixed inset-0 bg-grid pointer-events-none"></div>

      {/* 全局背景光晕 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* 中心荧光绿光晕 */}
        <div
          className="breathe absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(198,249,31,0.08) 0%, rgba(198,249,31,0.02) 40%, transparent 70%)",
          }}
        />
        {/* 左上角装饰光 */}
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(198,249,31,0.05) 0%, transparent 60%)",
          }}
        />
        {/* 右下角装饰光 */}
        <div
          className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(198,249,31,0.04) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* 导航栏 */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6"
        style={{
          background: "rgba(5,8,10,0.7)",
          backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 overflow-hidden flex items-center justify-center">
              <img
                src={logo}
                alt="UNI HALO"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-x-2">
              <div className="flex flex-col">
                <span
                  className="text-lg font-bold uppercase tracking-wide"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(198, 249, 31, 0.6) 30%, rgba(198, 249, 31, 1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  UNI HALO
                </span>
                <span className="text-[10px]">全新版本，即将发布</span>
              </div>

              <span
                className="hidden text-xs font-medium px-2.5 py-1 rounded-md"
                style={{
                  background: "rgba(198,249,31,0.1)",
                  color: "#c6f91f",
                  border: "1px solid rgba(198,249,31,0.15)",
                }}
              >
                v3.x
              </span>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-4">
            <span
                className="text-xs font-medium px-3 py-1 rounded-md"
                style={{
                  background: "rgba(198,249,31,0.1)",
                  color: "#c6f91f",
                  border: "1px solid rgba(198,249,31,0.15)",
                }}
              >
                v3.x
              </span>
            <a
              href="https://github.com/uni-halo"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              className="flex items-center justify-center gap-2 text-xs text-center text-white/50 hover:text-[#C6F91F] transition-colors duration-300 link-underline"
            >
              <GitFork className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://www.xiaoxiaomo.cn"
              target="_blank"
              rel="noopener"
              aria-label="联系作者"
              className="flex items-center gap-2 text-xs text-white/50 hover:text-[#C6F91F] transition-colors duration-300 link-underline"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">联系作者</span>
            </a>
          </div>
        </div>
      </nav>

      {/* 主内容 */}
      <main className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center px-6 pt-16">
        {/* 水波纹装饰 */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -30%)",
          }}
        >
          <div
            className="ripple-ring absolute rounded-full border border-[#C6F91F]/20"
            style={{
              width: "300px",
              height: "300px",
              top: "-150px",
              left: "-150px",
            }}
          ></div>
          <div
            className="ripple-ring ripple-ring-delay absolute rounded-full border border-[#C6F91F]/15"
            style={{
              width: "300px",
              height: "300px",
              top: "-150px",
              left: "-150px",
            }}
          ></div>
          <div
            className="ripple-ring ripple-ring-delay2 absolute rounded-full border border-[#C6F91F]/10"
            style={{
              width: "300px",
              height: "300px",
              top: "-150px",
              left: "-150px",
            }}
          ></div>
        </div>

        {/* 粒子装饰 */}
        <div
          className="absolute pointer-events-none"
          style={{ top: "30%", left: "20%" }}
        >
          <div className="particle" style={{ animationDelay: "0s" }}></div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{ top: "40%", left: "75%" }}
        >
          <div className="particle" style={{ animationDelay: "2s" }}></div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{ top: "55%", left: "30%" }}
        >
          <div className="particle" style={{ animationDelay: "4s" }}></div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{ top: "25%", left: "65%" }}
        >
          <div className="particle" style={{ animationDelay: "1s" }}></div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{ top: "60%", left: "80%" }}
        >
          <div className="particle" style={{ animationDelay: "3s" }}></div>
        </div>

        {/* Logo区域 */}
        <div className="fade-in-up relative mb-10">
          <div className="float-anim relative">
            {/* 文档站同款：Logo 背景双色流动渐变 + 大模糊光晕（叠加层） */}
            <div className="logo-aurora" aria-hidden="true">
              <div className="logo-aurora-blob" />
              <div className="logo-aurora-blob logo-aurora-blob--alt" />
            </div>

            {/* Logo容器（显式 z-10，确保压在光晕之上） */}
            <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40">
              <div className="bg-[#c6f91f] logo-halo absolute inset-0 overflow-hidden">
                <img
                  src={logo}
                  alt="UNI HALO"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 即将上线徽章 */}
        <div className="fade-in-up delay-1 mb-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase"
            style={{
              background: "rgba(198,249,31,0.1)",
              border: "1px solid rgba(198,249,31,0.2)",
              color: "#C6F91F",
              boxShadow: "0 0 20px rgba(198,249,31,0.08)",
            }}
            onClick={() => showToast('v3.x release 即将上线', 'info')}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6F91F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6F91F]"></span>
            </span>
            v3.x release
          </div>
        </div>

        {/* 主标题 */}
        <h1
          className="fade-in-up delay-2 text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tighter text-center leading-[1.05] mb-4"
          style={{
            background:
              "linear-gradient(to bottom, rgba(198, 249, 31, 0.3) 30%, rgba(198, 249, 31, 1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          UNI HALO
        </h1>

        {/* 版本号 */}
        <div className="fade-in-up delay-2 mb-8 flex items-center gap-3">
          <span className="text-xs text-white">全新版本，即将发布</span>
        </div>

        <div className="fade-in-up mb-6">
          <a
            href="https://uni-halo.ialley.cn"
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-medium transition-all duration-300"
            style={{
              background: "rgba(198,249,31,0.1)",
              border: "1px solid rgba(198,249,31,0.25)",
              color: "#C6F91F",
              boxShadow: "0 0 20px rgba(198,249,31,0.06)",
            }}
          >
            Halo 插件市场
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 描述 */}
        <p
          className="fade-in-up delay-3 max-w-xl text-center text-sm sm:text-base leading-relaxed mb-10"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          一款基于 <span className="text-[#2B9939] font-medium">UniApp</span> 与{" "}
          <span className="text-[#0A7FF3] font-medium">Halo</span>{" "}
          构建的多端开源博客/内容客户端，
          <br className="hidden sm:block" />
          优雅、轻量、跨平台，让你的内容触达每一个角落。
        </p>

        {/* 链接区域 */}
        <div className="fade-in-up delay-4 flex flex-wrap items-center justify-center gap-4 mb-16">
          {/* 仓库链接 */}
          <a
            href="https://github.com/uni-halo"
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-semibold transition-all duration-300"
            style={{
              background: "#C6F91F",
              color: "#05080A",
              boxShadow:
                "0 0 25px rgba(198,249,31,0.25), 0 4px 16px rgba(0,0,0,0.3)",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = "translateY(-2px) scale(1.02)";
              target.style.boxShadow =
                "0 0 45px rgba(198,249,31,0.45), 0 8px 24px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = "translateY(0) scale(1)";
              target.style.boxShadow =
                "0 0 25px rgba(198,249,31,0.25), 0 4px 16px rgba(0,0,0,0.3)";
            }}
          >
            <GitFork className="w-4 h-4" />
            访问仓库
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* 作者链接 */}
          <a
            href="https://www.xiaoxiaomo.cn"
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-medium transition-all duration-300"
            style={{
              background: "rgba(198,249,31,0.1)",
              border: "1px solid rgba(198,249,31,0.25)",
              color: "#C6F91F",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.background = "rgba(198,249,31,0.15)";
              target.style.transform = "translateY(-2px) scale(1.02)";
              target.style.boxShadow = "0 0 35px rgba(198,249,31,0.2)";
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.background = "rgba(198,249,31,0.1)";
              target.style.transform = "translateY(0) scale(1)";
              target.style.boxShadow = "none";
            }}
          >
            <User className="w-4 h-4" />
            作者主页
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* 文档链接 */}
          <a
            href="https://uni-halo-doc.ialley.cn"
            id="docsBtn"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-medium transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.7)",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.background = "rgba(198,249,31,0.08)";
              target.style.borderColor = "rgba(198,249,31,0.25)";
              target.style.color = "#C6F91F";
              target.style.transform = "translateY(-2px) scale(1.02)";
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.background = "rgba(255,255,255,0.05)";
              target.style.borderColor = "rgba(255,255,255,0.1)";
              target.style.color = "rgba(255,255,255,0.7)";
              target.style.transform = "translateY(0) scale(1)";
            }}
          >
            <BookOpen className="w-4 h-4" />
            开发文档
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 进度/状态条 */}
        <div className="hidden fade-in-up delay-5 w-full max-w-md mb-16">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase tracking-widest text-white/30 font-medium">
              开发进度
            </span>
            <span
              className="text-[10px] uppercase tracking-widest font-medium"
              style={{ color: "#C6F91F" }}
            >
              85%
            </span>
          </div>
          <div
            className="relative h-1 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: "85%",
                background:
                  "linear-gradient(90deg, #9BD61A, #C6F91F, #E4FF70)",
              }}
            ></div>
            <div
              className="absolute inset-y-0 left-0 rounded-full overflow-hidden"
              style={{ width: "85%" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  animation: "shimmer 2.5s infinite",
                }}
              ></div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[10px] text-white/20">最后更新：2025-01</span>
            <span className="text-[10px] text-white/20 cursor-blink">
              准备发布
            </span>
          </div>
        </div>

        {/* 特性卡片 */}
        <div className="hidden fade-in-up delay-6 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
          <div
            className="group p-5 rounded-xl transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.background = "rgba(255,255,255,0.04)";
              target.style.borderColor = "rgba(198,249,31,0.15)";
              target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.background = "rgba(255,255,255,0.02)";
              target.style.borderColor = "rgba(255,255,255,0.05)";
              target.style.transform = "translateY(0)";
            }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
              style={{
                background: "rgba(198,249,31,0.1)",
                border: "1px solid rgba(198,249,31,0.15)",
              }}
            >
              <Smartphone className="w-4 h-4" style={{ color: "#C6F91F" }} />
            </div>
            <h3 className="text-sm font-medium text-white/90 mb-1">跨平台</h3>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              一套代码，多端运行
              <br />
              iOS / Android / H5 / 小程序
            </p>
          </div>

          <div
            className="group p-5 rounded-xl transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.background = "rgba(255,255,255,0.04)";
              target.style.borderColor = "rgba(198,249,31,0.15)";
              target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.background = "rgba(255,255,255,0.02)";
              target.style.borderColor = "rgba(255,255,255,0.05)";
              target.style.transform = "translateY(0)";
            }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
              style={{
                background: "rgba(198,249,31,0.1)",
                border: "1px solid rgba(198,249,31,0.15)",
              }}
            >
              <Zap className="w-4 h-4" style={{ color: "#c6f91f" }} />
            </div>
            <h3 className="text-sm font-medium text-white/90 mb-1">轻量高效</h3>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              极致性能优化
              <br />
              秒级加载，流畅体验
            </p>
          </div>

          <div
            className="group p-5 rounded-xl transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.background = "rgba(255,255,255,0.04)";
              target.style.borderColor = "rgba(198,249,31,0.15)";
              target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.background = "rgba(255,255,255,0.02)";
              target.style.borderColor = "rgba(255,255,255,0.05)";
              target.style.transform = "translateY(0)";
            }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
              style={{
                background: "rgba(198,249,31,0.1)",
                border: "1px solid rgba(198,249,31,0.15)",
              }}
            >
              <Code2 className="w-4 h-4" style={{ color: "#C6F91F" }} />
            </div>
            <h3 className="text-sm font-medium text-white/90 mb-1">开源免费</h3>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              MIT 协议开源
              <br />
              自由使用，社区驱动
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 pb-8 pt-4">
        <div className="divider-gradient max-w-3xl mx-auto mb-6"></div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div
            className="flex items-center gap-4 text-[11px]"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            <span>小莫唐尼 © 2026 UNI HALO</span>
            <span>·</span>
            <span>All rights reserved</span>
          </div> 
        </div>
      </footer>

      {/* Toast容器 */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="toast-enter pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-medium"
            style={{
              background: "rgba(20,25,30,0.95)",
              border: "1px solid rgba(198,249,31,0.12)",
              backdropFilter: "blur(20px)",
              color: "rgba(255,255,255,0.8)",
              boxShadow:
                "0 10px 40px rgba(0,0,0,0.4), 0 0 20px rgba(198,249,31,0.05)",
              minWidth: "220px",
            }}
          >
            <span className="hidden">
              {toast.type === "info"
                ? "ℹ️"
                : toast.type === "success"
                  ? "✅"
                  : "⚠️"}
            </span>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

      {/* 全局样式 */}
      <style>{`
        body { font-family: 'Inter', sans-serif; background: #05080A; color: #fff; overflow-x: hidden; }

        /* 背景网格 */
        .bg-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* 水波纹动画 */
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 0.4; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .ripple-ring {
          animation: ripple 4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        .ripple-ring-delay { animation-delay: 1.3s; }
        .ripple-ring-delay2 { animation-delay: 2.6s; }

        /* 浮动动画 */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .float-anim { animation: float 5s ease-in-out infinite; }

        /* 呼吸光晕 */
        @keyframes breathe {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.08); }
        }
        .breathe { animation: breathe 4s ease-in-out infinite; }

        /* 渐入 */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); filter: blur(8px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .fade-in-up { animation: fadeInUp 0.9s ease-out both; }
        .delay-1 { animation-delay: 0.15s; }
        .delay-2 { animation-delay: 0.3s; }
        .delay-3 { animation-delay: 0.45s; }
        .delay-4 { animation-delay: 0.6s; }
        .delay-5 { animation-delay: 0.75s; }
        .delay-6 { animation-delay: 0.9s; }

        /* 光标闪烁 */
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor-blink::after {
          content: '|';
          animation: blink 1s step-end infinite;
          color: #C6F91F;
          margin-left: 2px;
          font-weight: 300;
        }

        /* 粒子 */
        @keyframes particle-float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-120px) translateX(30px); opacity: 0; }
        }
        .particle {
          position: absolute;
          width: 3px; height: 3px;
          background: rgba(198,249,31,0.6);
          border-radius: 50%;
          animation: particle-float 6s ease-in-out infinite;
        }

        /* 链接hover下划线 */
        .link-underline {
          position: relative;
        }
        .link-underline::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: #C6F91F;
          transition: width 0.3s ease;
        }
        .link-underline:hover::after { width: 100%; }

        /* 分隔线渐变 */
        .divider-gradient {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(198,249,31,0.3), transparent);
        }

        /* Logo光环 */
        @keyframes logo-halo {
          0%, 100% { box-shadow: 0 0 40px rgba(198,249,31,0.15), 0 0 80px rgba(198,249,31,0.08); }
          50% { box-shadow: 0 0 60px rgba(198,249,31,0.3), 0 0 120px rgba(198,249,31,0.12); }
        }
        .logo-halo { 
          animation: logo-halo 4s ease-in-out infinite;
          border-radius: 40px;
         }

        /* ===== Logo 背景效果：移植自文档站首页 hero logo ===== */
        /* 文档站：--vp-home-hero-image-background-image: linear-gradient(-45deg,
           var(--rainbow-prev) 30%, var(--rainbow-next));
           --vp-home-hero-image-filter: blur(120px);
           配合 rainbow.css 的 @keyframes rainbow，让两个色标每 8s 循环流转。
           此处按官网用色（柠檬绿 #c6f91f ↔ 深绿 #2b9939，与文档站一致）原样复刻。 */

        /* 注册色标动画属性：让浏览器在关键帧之间平滑插值（不支持时自动降级为逐帧跳变） */
        @property --rainbow-prev {
          syntax: '<color>';
          inherits: true;
          initial-value: #c6f91f;
        }
        @property --rainbow-next {
          syntax: '<color>';
          inherits: true;
          initial-value: #2b9939;
        }

        /* 品牌色标流动动画（对应文档站 rainbow.css 的 @keyframes rainbow） */
        @keyframes rainbow {
          0%    { --rainbow-prev: #c6f91f; --rainbow-next: #2b9939; }
          12.5% { --rainbow-prev: #bdf22a; --rainbow-next: #22a04b; }
          25%   { --rainbow-prev: #a8ea35; --rainbow-next: #1ba75e; }
          37.5% { --rainbow-prev: #8fe040; --rainbow-next: #17a872; }
          50%   { --rainbow-prev: #79d54a; --rainbow-next: #1aa585; }
          62.5% { --rainbow-prev: #8fdd42; --rainbow-next: #17a872; }
          75%   { --rainbow-prev: #a8ea35; --rainbow-next: #1ba75e; }
          87.5% { --rainbow-prev: #bdf22a; --rainbow-next: #22a04b; }
          100%  { --rainbow-prev: #c6f91f; --rainbow-next: #2b9939; }
        }

        /* 光晕容器：定位在 Logo 背后并向外扩散 */
        .logo-aurora {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          /* 让模糊光晕向外溢出，不被容器裁掉 */
          margin: -34%;
          border-radius: 9999px;
          animation: rainbow 8s linear infinite;
          /* 主光晕：文档站同款 -45° 双色渐变 + 大模糊 */
          background-image: linear-gradient(-45deg, var(--rainbow-prev) 30%, var(--rainbow-next));
          filter: blur(120px);
        }

        /* 第二层：同渐变反向旋转 + 呼吸，增加层次与冲击力 */
        .logo-aurora-blob {
          position: absolute;
          inset: 14%;
          border-radius: 9999px;
          background-image: linear-gradient(-45deg, var(--rainbow-next) 20%, var(--rainbow-prev));
          filter: blur(60px);
          opacity: 0.85;
        }
        .logo-aurora-blob--alt {
          inset: 22%;
          background-image: linear-gradient(135deg, var(--rainbow-prev) 10%, var(--rainbow-next) 90%);
          filter: blur(38px);
          animation: logo-aurora-pulse 6s ease-in-out infinite;
        }
        @keyframes logo-aurora-pulse {
          0%, 100% { opacity: 0.5; transform: scale(0.94); }
          50%      { opacity: 0.95; transform: scale(1.08); }
        }

        /* 小屏收敛：避免大模糊在窄屏溢出影响布局 */
        @media (max-width: 640px) {
          .logo-aurora { filter: blur(80px); margin: -28%; }
        }

        /* Safari / Firefox 对大面积渐变 + 滤镜性能较差（同文档站处理），降级为静态柔光 */
        @supports (-webkit-hyphens: none) or (-moz-appearance: none) {
          .logo-aurora,
          .logo-aurora-blob,
          .logo-aurora-blob--alt { filter: blur(40px); }
        }

        /* 进度条闪光 */
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* 滚动条 */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #05080A; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }

        /* Toast */
        @keyframes toast-in {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes toast-out {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to { opacity: 0; transform: translateY(-10px) scale(0.95); }
        }
        .toast-enter { animation: toast-in 0.3s ease-out both; }
        .toast-exit { animation: toast-out 0.25s ease-in both; }
      `}</style>
    </div>
  );
};
