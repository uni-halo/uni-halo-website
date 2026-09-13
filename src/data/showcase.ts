import type { ShowcaseModule } from "@/types/showcase";

/**
 * 功能模块展示数据
 *
 * 数据来源：
 * - 模块与页面清单：uni-halo 应用 src/pages.json 的真实注册页面（共 33 个）
 * - 截图：uni-halo-static 仓库 screenshots/app/v3.x/{key}.png（走 jsDelivr CDN）
 *
 * 补图约定：按页面 key 命名放入 v3.x 目录即可自动生效，无需改动代码。
 */

/** 截图资源基址（jsDelivr CDN），按页面 key 拼接文件名 */
export const SHOWCASE_CDN_BASE =
  "https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static@latest/screenshots/app/v3.x/";

export const showcaseModules: ShowcaseModule[] = [
  {
    id: "home",
    name: "首页",
    icon: "home",
    isTab: true,
    desc: "轮播图 · 快捷导航 · 分类入口 · 公告",
    pages: [
      {
        key: "home",
        name: "首页",
        desc: "轮播图 · 快捷导航 · 分类入口 · 公告",
        path: "pages/tabbar/home/home",
        icon: "home",
      },
      {
        key: "banner-detail",
        name: "轮播详情",
        desc: "首页轮播点击后的落地页",
        path: "pages-blog/banner-detail/banner-detail",
        icon: "image",
      },
      {
        key: "moment-detail",
        name: "瞬间详情",
        desc: "单条瞬间的大图与详情",
        path: "pages-blog/moment-detail/moment-detail",
        icon: "spark",
      },
      {
        key: "search",
        name: "内容搜索",
        desc: "关键词搜索文章 / 瞬间 / 图库",
        path: "pages-blog/search/search",
        icon: "search",
      },
      {
        key: "notice",
        name: "公告中心",
        desc: "站点公告列表",
        path: "pages-blog/notice/notice",
        icon: "bell",
      },
    ],
  },
  {
    id: "category",
    name: "分类",
    icon: "grid",
    isTab: true,
    desc: "全部分类聚合，支持筛选与订阅",
    pages: [
      {
        key: "category",
        name: "分类",
        desc: "全部分类聚合，支持筛选与订阅",
        path: "pages/tabbar/category/category",
        icon: "grid",
      },
      {
        key: "category-articles",
        name: "分类详情",
        desc: "某分类下的文章聚合",
        path: "pages-blog/category-articles/category-articles",
        icon: "grid",
      },
      {
        key: "articles",
        name: "文章列表",
        desc: "卡片流布局，封面 / 摘要 / 标签",
        path: "pages-blog/articles/articles",
        icon: "doc",
      },
      {
        key: "article-detail",
        name: "内容详情",
        desc: "富文本渲染 · 版权声明 · 评论 · 投票",
        path: "pages-blog/article-detail/article-detail",
        icon: "doc",
      },
      {
        key: "archives",
        name: "归档",
        desc: "按时间轴归档，快速定位",
        path: "pages-blog/archives/archives",
        icon: "clock",
      },
      {
        key: "tags",
        name: "标签",
        desc: "全部标签云聚合",
        path: "pages-blog/tags/tags",
        icon: "tag",
      },
      {
        key: "tag-detail",
        name: "标签详情",
        desc: "某标签下的文章列表",
        path: "pages-blog/tag-detail/tag-detail",
        icon: "tag",
      },
    ],
  },
  {
    id: "gallery",
    name: "图库",
    icon: "image",
    isTab: true,
    desc: "瀑布流相册，支持查看大图",
    pages: [
      {
        key: "gallery",
        name: "图库",
        desc: "瀑布流相册，支持查看大图",
        path: "pages/tabbar/gallery/gallery",
        icon: "image",
      },
      {
        key: "favorites",
        name: "我的收藏",
        desc: "收藏的文章 / 瞬间 / 图集",
        path: "pages-blog/favorites/favorites",
        icon: "star",
      },
    ],
  },
  {
    id: "moments",
    name: "瞬间",
    icon: "spark",
    isTab: true,
    desc: "说说式动态流，图文混排",
    pages: [
      {
        key: "moments",
        name: "瞬间",
        desc: "说说式动态流，图文混排",
        path: "pages/tabbar/moments/moments",
        icon: "spark",
      },
      {
        key: "notice-detail",
        name: "公告详情",
        desc: "单条公告的正文内容",
        path: "pages-blog/notice/detail",
        icon: "bell",
      },
    ],
  },
  {
    id: "mine",
    name: "关于",
    icon: "user",
    isTab: true,
    desc: "博主信息 · 社交入口 · 偏好设置",
    pages: [
      {
        key: "mine",
        name: "关于",
        desc: "博主信息 · 社交入口 · 偏好设置",
        path: "pages/tabbar/mine/mine",
        icon: "user",
      },
      {
        key: "about",
        name: "关于项目",
        desc: "项目介绍与技术栈",
        path: "pages-blog/about/about",
        icon: "book",
      },
      {
        key: "setting",
        name: "偏好设置",
        desc: "主题 / 字号 / 缓存等本地偏好",
        path: "pages-blog/setting/setting",
        icon: "settings",
      },
      {
        key: "contact",
        name: "联系博主",
        desc: "联系方式与留言入口",
        path: "pages-blog/contact/contact",
        icon: "mail",
      },
      {
        key: "friend-links",
        name: "友情链接",
        desc: "友链列表与申请入口",
        path: "pages-blog/friend-links/friend-links",
        icon: "link",
      },
      {
        key: "website",
        name: "内嵌网页",
        desc: "web-view 承载外部页面",
        path: "pages-blog/website/website",
        icon: "globe",
      },
    ],
  },
  {
    id: "interact",
    name: "互动与发现",
    icon: "heart",
    isTab: false,
    desc: "恋爱日记、投票、数据看板等内容型模块",
    pages: [
      {
        key: "love",
        name: "恋爱日记",
        desc: "日记入口与时间流",
        path: "pages-blog/love/love",
        icon: "heart",
      },
      {
        key: "love-album",
        name: "恋爱相册",
        desc: "情侣合照墙",
        path: "pages-blog/love/album",
        icon: "image",
      },
      {
        key: "love-list",
        name: "恋爱清单",
        desc: "一起想做的事清单",
        path: "pages-blog/love/list",
        icon: "star",
      },
      {
        key: "love-stories",
        name: "恋爱故事",
        desc: "长文故事连载",
        path: "pages-blog/love/stories",
        icon: "book",
      },
      {
        key: "votes",
        name: "投票中心",
        desc: "全部投票活动列表",
        path: "pages-blog/votes/votes",
        icon: "vote",
      },
      {
        key: "vote-detail",
        name: "投票详情",
        desc: "选项投票与实时结果",
        path: "pages-blog/vote-detail/vote-detail",
        icon: "vote",
      },
      {
        key: "data-visual",
        name: "数据看板",
        desc: "站点数据可视化图表",
        path: "pages-blog/data-visual/data-visual",
        icon: "chart",
      },
    ],
  },
  {
    id: "system",
    name: "账号与系统",
    icon: "settings",
    isTab: false,
    desc: "登录注册、免责声明、维护页等系统页",
    pages: [
      {
        key: "login",
        name: "登录",
        desc: "账号登录",
        path: "pages/auth/login",
        icon: "user",
      },
      {
        key: "register",
        name: "注册",
        desc: "账号注册",
        path: "pages/auth/register",
        icon: "user",
      },
      {
        key: "disclaimers",
        name: "免责声明",
        desc: "站点免责条款",
        path: "pages-blog/disclaimers/disclaimers",
        icon: "shield",
      },
      {
        key: "maintenance",
        name: "维护中",
        desc: "站点维护提示页",
        path: "pages-blog/maintenance/maintenance",
        icon: "tool",
      },
    ],
  },
];
