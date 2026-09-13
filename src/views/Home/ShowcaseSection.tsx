import { useMemo, useState } from "react";
import {
  SHOWCASE_CDN_BASE,
  showcaseModules,
} from "@/data/showcase";
import type { ShowcaseIconName, ShowcaseModule, ShowcasePage } from "@/types/showcase";

/** 内联线性图标集合：避免为图标额外引入依赖，同时保证描边风格统一 */
const ICON_PATHS: Record<ShowcaseIconName, React.ReactNode> = {
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </>
  ),
  spark: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8M12 8v8" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
    </>
  ),
  heart: <path d="M12 20.3 4.6 13a4.6 4.6 0 0 1 6.5-6.5l.9.9.9-.9A4.6 4.6 0 0 1 19.4 13z" />,
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  doc: (
    <>
      <path d="M4 4h16v16H4z" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12V4h8l10 10-8 8z" />
      <circle cx="7.5" cy="7.5" r="1" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.6-3.6" />
    </>
  ),
  star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />,
  bell: (
    <>
      <path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </>
  ),
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" />
      <path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" />
    </>
  ),
  shield: <path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18" />
    </>
  ),
  vote: (
    <>
      <path d="M6 9h12v11H6z" />
      <path d="M9 9V5h6v4" />
      <path d="m9.5 14.5 2 2 3.5-3.5" />
    </>
  ),
  book: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2z" />
      <path d="M4 19h15" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
    </>
  ),
  box: (
    <>
      <path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5z" />
      <path d="M3 7.5 12 12l9-4.5M12 12v9" />
    </>
  ),
  tool: (
    <>
      <path d="M14.7 6.3a4 4 0 0 1 5 5l-9 9-5-5z" />
      <path d="M3.5 20.5 7 17" />
    </>
  ),
};

/** 统一的线性图标渲染 */
const Icon = ({ name, size = 18 }: { name: ShowcaseIconName; size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {ICON_PATHS[name]}
  </svg>
);

/** TAB 徽标 */
const TabBadge = () => (
  <span
    className="text-[8.5px] font-bold tracking-[0.09em] px-[5px] py-[1.5px] rounded"
    style={{
      background: "rgba(198,249,31,0.2)",
      color: "#C6F91F",
      border: "1px solid rgba(198,249,31,0.4)",
    }}
  >
    TAB
  </span>
);

/** 截图：加载失败时回退到「图标 + 名称 + 描述」占位 */
const Shot = ({
  page,
  className,
  imgClassName,
}: {
  page: ShowcasePage;
  className?: string;
  imgClassName?: string;
}) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <Placeholder page={page} className={className} />;
  }

  return (
    <img
      src={`${SHOWCASE_CDN_BASE}${page.key}.png`}
      alt={page.name}
      loading="lazy"
      className={imgClassName}
      onError={() => setFailed(true)}
    />
  );
};

/** 占位：仅展示「图标 + 名称 + 描述」，不做骨架模拟 */
export const Placeholder = ({
  page,
  className = "",
}: {
  page: ShowcasePage;
  module?: ShowcaseModule;
  className?: string;
}) => (
  <div
    className={`flex flex-col items-center justify-center text-center px-7 ${className}`}
  >
    <span
      className="w-[68px] h-[68px] rounded-[20px] flex items-center justify-center mb-4"
      style={{
        color: "#C6F91F",
        background:
          "linear-gradient(135deg, rgba(198,249,31,0.16), rgba(43,153,57,0.1))",
        border: "1px solid rgba(198,249,31,0.28)",
        boxShadow: "0 0 34px -10px rgba(198,249,31,0.4)",
      }}
    >
      <Icon name={page.icon} size={30} />
    </span>
    <span className="text-[15.5px] font-semibold text-white/90 mb-2">
      {page.name}
    </span>
    <span
      className="text-[11.5px] leading-relaxed max-w-[220px]"
      style={{ color: "rgba(255,255,255,0.4)" }}
    >
      {page.desc}
    </span>
  </div>
);

/** 手机样机：展示当前选中页面 */
const PhonePreview = ({ page }: { page: ShowcasePage }) => (
  <div
    className="relative w-[322px] h-[660px] rounded-[44px] p-[11px] flex-none"
    style={{
      background: "#0B0F11",
      border: "1px solid rgba(255,255,255,0.1)",
      boxShadow:
        "0 0 0 10px #14191C, 0 0 0 11px rgba(255,255,255,0.06), 0 34px 74px -22px rgba(0,0,0,0.9), 0 0 74px -26px rgba(198,249,31,0.42)",
    }}
  >
    {/* 灵动岛 */}
    <div
      className="absolute left-1/2 top-[20px] -translate-x-1/2 w-[96px] h-[6px] rounded-full z-[6]"
      style={{ background: "rgba(255,255,255,0.1)" }}
    />
    <div
      className="relative w-full h-full rounded-[34px] overflow-hidden flex flex-col"
      style={{ background: "#0A0D0F" }}
    >
      {/* 状态栏 */}
      <div className="flex items-center justify-between px-5 pt-[13px] pb-[6px] text-[11px] flex-none z-[5]"
        style={{ color: "rgba(255,255,255,0.62)" }}
      >
        <span className="tabular-nums">9:41</span>
        <span className="flex items-center gap-[5px]">
          <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
            <rect x="0" y="7" width="2.6" height="4" rx=".6" />
            <rect x="4" y="5" width="2.6" height="6" rx=".6" />
            <rect x="8" y="2.5" width="2.6" height="8.5" rx=".6" />
            <rect x="12" y="0" width="2.6" height="11" rx=".6" opacity=".35" />
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none" stroke="currentColor" strokeWidth="1.3">
            <path d="M1 4.2a9 9 0 0 1 13 0" />
            <path d="M3.4 6.8a5.6 5.6 0 0 1 8.2 0" />
            <circle cx="7.5" cy="9.6" r=".9" fill="currentColor" stroke="none" />
          </svg>
          <svg width="21" height="11" viewBox="0 0 21 11" fill="none">
            <rect x=".6" y=".6" width="17" height="9.8" rx="2.6" stroke="currentColor" strokeOpacity=".45" />
            <rect x="2.2" y="2.2" width="12" height="6.6" rx="1.4" fill="currentColor" />
            <path d="M19.4 4v3" stroke="currentColor" strokeOpacity=".45" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </div>

      {/* 页面内容 */}
      <div className="relative flex-1 min-h-0 overflow-hidden">
        <Shot
          page={page}
          imgClassName="w-full h-full object-cover object-top block"
          className="absolute inset-0"
        />
      </div>
    </div>
  </div>
);

/**
 * 功能模块展示
 *
 * 左侧手机样机展示当前选中的页面，右侧把全部页面按模块分组平铺，
 * 点击任意页面即可切换左侧预览。
 */
export const ShowcaseSection = () => {
  // 当前选中页面用「模块下标 + 页内下标」定位
  const [active, setActive] = useState({ m: 0, p: 0 });

  const currentModule = showcaseModules[active.m];
  const currentPage = currentModule.pages[active.p];

  const totalPages = useMemo(
    () => showcaseModules.reduce((sum, m) => sum + m.pages.length, 0),
    []
  );

  return (
    <section className="relative z-10 px-6 pb-24">
      <div className="max-w-[1340px] mx-auto">
        {/* 标题 */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-5"
            style={{
              background: "rgba(198,249,31,0.1)",
              border: "1px solid rgba(198,249,31,0.2)",
              color: "#C6F91F",
            }}
          >
            功能预览
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white/95 mb-3 tracking-tight">
            {totalPages} 个页面，
            <span style={{ color: "#C6F91F" }}>覆盖完整功能</span>
          </h2>
          <p
            className="text-sm leading-relaxed max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            从底部导航到每一个子页面，点击右侧任意页面即可预览。
          </p>
        </div>

        {/* 主舞台：左预览 + 右全部页面 */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_428px] gap-[26px] items-start p-12 rounded-[20px]"
          style={{
            border: "1px solid rgba(198,249,31,0.14)",
            background:
              "radial-gradient(120% 80% at 50% 0%, rgba(198,249,31,0.045) 0%, transparent 60%), rgba(255,255,255,0.014)",
          }}
        >
          {/* 左：手机样机 */}
          <div className="flex flex-col items-center gap-[18px] lg:sticky lg:top-6">
            <PhonePreview page={currentPage} />
            <div className="text-center max-w-[340px]">
              <div className="text-base font-semibold text-white/90 mb-1.5 flex items-center justify-center gap-2">
                {currentPage.name}
                {currentModule.isTab && <TabBadge />}
              </div>
              <div
                className="text-xs leading-relaxed mb-2"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {currentPage.desc}
              </div>
              <div
                className="text-[10.5px] font-mono"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                {currentPage.path}
              </div>
            </div>
          </div>

          {/* 右：全部页面（按模块分组平铺） */}
          <div
            className="flex flex-col min-w-0 rounded-[14px] overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.012)" }}
          >
            <div
              className="px-3.5 py-3 flex items-center gap-2.5 flex-none"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.055)", background: "rgba(198,249,31,0.026)" }}
            >
              <span
                className="w-[26px] h-[26px] rounded-lg flex items-center justify-center flex-none"
                style={{
                  color: "#C6F91F",
                  background: "rgba(198,249,31,0.1)",
                  border: "1px solid rgba(198,249,31,0.2)",
                }}
              >
                <Icon name="grid" size={15} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="text-xs font-semibold text-white/90">全部页面</span>
                <span className="block text-[10.5px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {showcaseModules.length} 个模块 · {totalPages} 个页面
                </span>
              </span>
            </div>

            <div className="max-h-[560px] overflow-y-auto p-[7px] showcase-scroll">
              {showcaseModules.map((m, mi) => (
                <div key={m.id} className="mb-1.5 last:mb-0">
                  {/* 分组标题 */}
                  <div className="flex items-center gap-2 px-2.5 pt-2.5 pb-1.5">
                    <span
                      className="w-[3px] h-[13px] rounded-sm flex-none"
                      style={{ background: "#C6F91F" }}
                    />
                    <span
                      className="w-[22px] h-[22px] rounded-md flex items-center justify-center flex-none"
                      style={{ color: "#C6F91F", background: "rgba(198,249,31,0.1)" }}
                    >
                      <Icon name={m.icon} size={13} />
                    </span>
                    <span className="text-[11.5px] font-semibold text-white/80 flex items-center gap-1.5 flex-wrap flex-1 min-w-0">
                      {m.name}
                      {m.isTab && <TabBadge />}
                    </span>
                    <span
                      className="text-[9.5px] tabular-nums flex-none rounded-full px-2 py-[1px]"
                      style={{ color: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.04)" }}
                    >
                      {m.pages.length}
                    </span>
                  </div>

                  {/* 该模块下的页面 */}
                  {m.pages.map((p, pi) => {
                    const isOn = mi === active.m && pi === active.p;
                    return (
                      <button
                        key={p.key}
                        type="button"
                        onClick={() => setActive({ m: mi, p: pi })}
                        className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-[10px] cursor-pointer transition-all duration-200 text-left"
                        style={{
                          border: `1px solid ${isOn ? "rgba(198,249,31,0.3)" : "transparent"}`,
                          background: isOn ? "rgba(198,249,31,0.095)" : "transparent",
                        }}
                        onMouseEnter={(e) => {
                          if (!isOn) {
                            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.035)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isOn) {
                            (e.currentTarget as HTMLElement).style.background = "transparent";
                          }
                        }}
                      >
                        <span
                          className="w-9 h-9 rounded-[9px] flex-none flex items-center justify-center"
                          style={{
                            color: isOn ? "#C6F91F" : "rgba(198,249,31,0.55)",
                            background: isOn
                              ? "rgba(198,249,31,0.14)"
                              : "rgba(198,249,31,0.06)",
                            border: `1px solid ${isOn ? "rgba(198,249,31,0.4)" : "rgba(198,249,31,0.14)"}`,
                            boxShadow: isOn ? "0 0 18px -6px rgba(198,249,31,0.5)" : "none",
                          }}
                        >
                          <Icon name={p.icon} size={17} />
                        </span>
                        <span className="flex-1 min-w-0">
                          <span
                            className="text-xs font-medium block truncate"
                            style={{ color: isOn ? "#E8F5E9" : "#C9D6D1" }}
                          >
                            {p.name}
                          </span>
                          <span
                            className="block text-[10.5px] mt-0.5 truncate"
                            style={{ color: "rgba(255,255,255,0.35)" }}
                          >
                            {p.desc}
                          </span>
                        </span>
                        <span
                          className="text-[9.5px] font-mono tabular-nums flex-none"
                          style={{ color: isOn ? "rgba(198,249,31,0.6)" : "rgba(255,255,255,0.2)" }}
                        >
                          {String(pi + 1).padStart(2, "0")}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            <div
              className="px-3.5 py-2.5 text-[10px] flex items-center gap-2 flex-none"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.3)" }}
            >
              <span
                className="w-[5px] h-[5px] rounded-full flex-none"
                style={{ background: "#C6F91F", boxShadow: "0 0 7px 1px rgba(198,249,31,0.7)" }}
              />
              当前：{currentModule.name} / {currentPage.name} · 点击列表项切换预览
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
