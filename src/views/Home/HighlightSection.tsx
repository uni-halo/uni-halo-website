import { Heart, ShieldCheck, ArrowUpRight } from "lucide-react";

/**
 * 亮点功能展示 - 恋爱日记 / 登录管理
 *
 * 口径与插件 Welcome 页、各项目 README 保持一致。
 */
export const HighlightSection = () => {
  const cardHover = {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      const target = e.currentTarget as HTMLElement;
      target.style.background = "rgba(255,255,255,0.04)";
      target.style.borderColor = "rgba(198,249,31,0.2)";
      target.style.transform = "translateY(-2px)";
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      const target = e.currentTarget as HTMLElement;
      target.style.background = "rgba(255,255,255,0.02)";
      target.style.borderColor = "rgba(255,255,255,0.06)";
      target.style.transform = "translateY(0)";
    },
  };

  const highlights = [
    {
      icon: Heart,
      title: "恋爱日记",
      desc: "移动端与插件端双端管理，前台模板开箱即用。相册支持查看密码（页内解锁、服务端保证），记录只属于你们的故事。",
      color: "#EC4899",
      tags: ["恋爱相册 · 密码锁定", "恋爱清单", "我们的故事", "前台模板 · 主题可接管", "移动端直接管理"],
    },
    {
      icon: ShieldCheck,
      title: "登录管理",
      desc: "账号密码登录、注册、微信一键登录与绑定，登录后下发 Halo 原生 PAT 令牌，内置登录限流与 RBAC 权限控制。",
      color: "#C6F91F",
      tags: ["账号密码登录", "微信一键登录", "注册与绑定", "PAT 令牌", "RBAC 权限"],
      link: {
        label: "查看登录配置文档",
        href: "https://uni-halo-doc.ialley.cn/plugin/mobile-login",
      },
    },
  ];

  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-20 sm:pt-28">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          <span
            style={{
              background:
                "linear-gradient(to bottom, rgba(198, 249, 31, 0.4) 30%, rgba(198, 249, 31, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            亮点功能
          </span>
        </h2>
        <p
          className="mt-3 text-sm"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          为你的站点带来温度与安全感
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300 sm:p-8"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              {...cardHover}
            >
              {/* 右上角装饰光晕 */}
              <div
                className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl"
                style={{ background: `${item.color}1F` }}
                aria-hidden="true"
              />

              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  background: `${item.color}1A`,
                  border: `1px solid ${item.color}33`,
                }}
              >
                <Icon className="h-5 w-5" style={{ color: item.color }} />
              </div>

              <h3 className="mb-2 text-lg font-medium text-white/90">
                {item.title}
              </h3>
              <p
                className="mb-5 text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{ background: `${item.color}1A`, color: item.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {item.link && (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener"
                  className="group mt-5 inline-flex items-center gap-1 text-xs font-medium transition-colors duration-300"
                  style={{ color: item.color }}
                >
                  {item.link.label}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
