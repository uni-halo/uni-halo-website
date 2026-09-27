import { useState } from "react";

/** 与文档站 CustomUiPreview 保持一致的截图数据（CDN：uni-halo-static/screenshots） */
const CDN_BASE =
  "https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static/screenshots";

interface PreviewItem {
  name: string;
  file: string;
  /** 所在目录，默认 app/v3.x */
  dir?: string;
}

interface PreviewGroup {
  key: string;
  label: string;
  items: PreviewItem[];
}

const groups: PreviewGroup[] = [
  {
    key: "main",
    label: "主界面",
    items: [
      { name: "首页", file: "首页.png" },
      { name: "分类", file: "分类.png" },
      { name: "图库", file: "图库.png" },
      { name: "瞬间", file: "瞬间.png" },
      { name: "博主", file: "博主.png" },
    ],
  },
  {
    key: "love",
    label: "特色功能",
    items: [
      { name: "恋爱主页", file: "恋爱日记.png" },
      { name: "恋爱相册", file: "恋爱相册.png" },
      { name: "恋爱清单", file: "恋爱清单.png" },
      { name: "我们的故事", file: "恋爱故事.png" },
    ],
  },
  {
    key: "template",
    label: "主题模板",
    items: [
      { name: "恋爱日记主页", file: "前台模板.png", dir: "plugin/v3.x" },
      { name: "恋爱相册", file: "前台模板-恋爱相册.png", dir: "plugin/v3.x" },
      { name: "恋爱清单", file: "前台模板-恋爱清单.png", dir: "plugin/v3.x" },
      { name: "我们的故事", file: "前台模板-恋爱故事.png", dir: "plugin/v3.x" },
    ],
  },
];

/**
 * 界面预览
 *
 * 移植自文档站首页的 CustomUiPreview：分段器 + 截图网格，样式适配官网深色主题。
 */
export const UiPreviewSection = () => {
  const [activeKey, setActiveKey] = useState(groups[0]?.key ?? "");
  const activeGroup = groups.find((g) => g.key === activeKey) ?? groups[0];

  return (
    <section className="relative z-10 px-6 pb-24">
      <div className="max-w-[1150px] mx-auto">
        {/* 标题区（居中，样式与「亮点功能」一致） */}
        <div className="text-center mb-8">
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
              界面预览
            </span>
          </h2>
          <p
            className="mt-3 text-sm"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            主界面 / 特色功能 / 主题模板，一览 uni-halo 的界面设计
          </p>
        </div>

        {/* 分段器 */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {groups.map((group) => (
            <button
              key={group.key}
              type="button"
              onClick={() => setActiveKey(group.key)}
              className="px-[18px] py-1.5 rounded-full text-sm transition-all duration-200 cursor-pointer"
              style={
                activeKey === group.key
                  ? {
                      background: "#C6F91F",
                      borderColor: "#C6F91F",
                      color: "#05080A",
                      border: "1px solid #C6F91F",
                      fontWeight: 600,
                    }
                  : {
                      border: "1px solid rgba(255,255,255,0.14)",
                      background: "rgba(255,255,255,0.02)",
                      color: "rgba(255,255,255,0.6)",
                    }
              }
            >
              {group.label}
            </button>
          ))}
        </div>

        {/* 截图网格 */}
        <div
          className={`grid gap-4 ${
            activeGroup.items.length % 2 === 0
              ? "grid-cols-2 sm:grid-cols-4"
              : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
          }`}
        >
          {activeGroup.items.map((item) => (
            <figure key={item.name} className="flex flex-col items-center gap-2">
              <img
                className="w-full rounded-xl transition-all duration-200"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
                }}
                src={`${CDN_BASE}/${item.dir || "app/v3.x"}/${encodeURIComponent(item.file)}`}
                alt={item.name}
                loading="lazy"
              />
              <figcaption
                className="text-[13px]"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* 底部链接 */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://uni-halo-doc.ialley.cn/design/pages"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: "#C6F91F", color: "#05080A" }}
          >
            查看全部界面预览 →
          </a>
        </div>
      </div>
    </section>
  );
};
