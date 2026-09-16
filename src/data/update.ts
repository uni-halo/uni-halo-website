import {
  UpdateNoteType,
  UpdateInfo,
  UpdateItemColorClassNames,
} from "@/types/update";

export const updateInfoList: UpdateInfo[] = [
    {
    title: "来看看这次都更新了什么",
    version: "3.0.0",
    date: "2026-09-17",
    notes: [
      {
        type: UpdateNoteType.新增,
        title: "登录体系",
        content: "新增账号密码登录、注册、微信一键登录与微信绑定，登录后获得站点个人访问令牌（PAT）。",
        className: UpdateItemColorClassNames[UpdateNoteType.新增],
      },
      {
        type: UpdateNoteType.新增,
        title: "移动端内容管理",
        content: "管理员可在移动端直接管理恋爱相册（支持查看密码锁定）、恋爱清单、恋爱故事与瞬间内容。",
        className: UpdateItemColorClassNames[UpdateNoteType.新增],
      },
      {
        type: UpdateNoteType.新增,
        title: "恋爱日记前台模板",
        content: "插件内置恋爱日记前台模板，任何主题装上插件即可展示恋爱日记页面，支持主题整页接管或覆盖页头页脚。",
        className: UpdateItemColorClassNames[UpdateNoteType.新增],
      },
      {
        type: UpdateNoteType.新增,
        title: "维护模式",
        content: "新增站点维护模式页，维护期间统一展示维护提示。",
        className: UpdateItemColorClassNames[UpdateNoteType.新增],
      },
      {
        type: UpdateNoteType.新增,
        title: "权限控制",
        content: "基于角色返回 RBAC 权限列表，菜单与按钮按权限显隐。",
        className: UpdateItemColorClassNames[UpdateNoteType.新增],
      },
      {
        type: UpdateNoteType.优化,
        title: "页面整理",
        content: "注册页面总数达到 41 个，页面清单与分组在官网完整展示。",
        className: UpdateItemColorClassNames[UpdateNoteType.优化],
      }
    ],
  },
  {
    title: "来看看这次都更新了什么",
    version: "1.0.1",
    date: "2026-04-05",
    notes: [
      {
        type: UpdateNoteType.新增,
        title: "新增功能",
        content: "新增了新的功能",
        className: UpdateItemColorClassNames[UpdateNoteType.新增],
      },
      {
        type: UpdateNoteType.修复,
        title: "修复问题",
        content: "修复了已知问题",
        className: UpdateItemColorClassNames[UpdateNoteType.修复],
      },
      {
        type: UpdateNoteType.优化,
        title: "优化性能",
        content: "优化了性能",
        className: UpdateItemColorClassNames[UpdateNoteType.优化],
      },
      {
        type: UpdateNoteType.删除,
        title: "删除功能",
        content: "删除了已不需要的功能",
        className: UpdateItemColorClassNames[UpdateNoteType.删除],
      },
      {
        type: UpdateNoteType.其他,
        title: "其他",
        content: "其他更新",
        className: UpdateItemColorClassNames[UpdateNoteType.其他],
      },
    ],
  },
];
