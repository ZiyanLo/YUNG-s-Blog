# Cloudflare Pages 自动部署指南

本指南将帮助您设置通过 GitHub 自动部署到 Cloudflare Pages 的完整流程。

## 📋 前置要求

- GitHub 账户
- Cloudflare 账户（免费账户即可）
- 本地 Git 仓库已初始化

## 🚀 方法一：使用 Cloudflare Pages 原生 GitHub 集成（推荐）

这是最简单且推荐的方法，无需任何配置文件。

### 步骤 1: 推送代码到 GitHub

```bash
# 如果还没有推送到 GitHub
./deploy.sh your-github-username cloudflare
```

### 步骤 2: 在 Cloudflare 创建 Pages 项目

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 在左侧菜单选择 **Workers & Pages**
3. 点击 **Create** → **Pages**
4. 选择 **Connect to Git**
5. 点击 **Connect GitHub** 进行授权
6. 选择您的 `yungs-blog` 仓库

### 步骤 3: 配置构建设置

在创建项目时，填写以下配置：

```
项目名称: yungs-blog
生产分支: main
构建命令: (留空)
构建输出目录: /
根目录: / (留空即可)
```

### 步骤 4: 部署

点击 **Save and Deploy**，Cloudflare 会：
1. 自动检测到这是一个静态网站
2. 部署所有文件
3. 分配一个 URL: `https://yungs-blog.pages.dev`

### 步骤 5: 验证自动部署

现在，每次您推送代码到 GitHub 的 `main` 分支时，Cloudflare 会自动重新部署！

**测试一下：**
```bash
# 修改一个文件
echo "测试自动部署" >> README.md

# 提交并推送
git add .
git commit -m "测试 Cloudflare Pages 自动部署"
git push origin main
```

几秒钟后，您的网站就会自动更新！✨

---

## 🔧 方法二：使用 GitHub Actions（可选）

如果您需要更多自定义控制，可以使用 GitHub Actions。

### 步骤 1: 获取 Cloudflare API 凭据

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 点击右上角头像 → **My Profile**
3. 在左侧选择 **API Tokens**
4. 点击 **Create Token**
5. 选择 **Create Custom Token**
6. 配置权限：
   - **Account** → **Cloudflare Pages** → **Edit**
   - 选择您的账户
   - 点击 **Continue to summary** → **Create Token**
7. **复制生成的 API Token**

8. 同时获取您的 **Account ID**：
   - 在 Workers & Pages 页面
   - 右侧可以看到 Account ID

### 步骤 2: 在 GitHub 设置 Secrets

1. 打开您的 GitHub 仓库
2. 进入 **Settings** → **Secrets and variables** → **Actions**
3. 点击 **New repository secret**
4. 添加以下 secrets：
   - `CLOUDFLARE_API_TOKEN`: (粘贴步骤1的 API Token)
   - `CLOUDFLARE_ACCOUNT_ID`: (粘贴您的 Account ID)

### 步骤 3: 启用 GitHub Actions

项目已包含 `.github/workflows/cloudflare-pages.yml`，只需推送代码：

```bash
git add .
git commit -m "添加 Cloudflare Pages GitHub Actions 工作流"
git push origin main
```

GitHub Actions 会自动运行并部署到 Cloudflare Pages。

---

## 📁 已创建的配置文件说明

### `_redirects` 文件
```bash
/*    /index.html   200
```
将所有路由重定向到 `index.html`，支持单页应用（SPA）路由。

### `_headers` 文件
设置安全头部和缓存策略：
- 安全头部（XSS 保护、内容类型嗅探保护等）
- 静态资源缓存（CSS、JS 缓存 24 小时）
- HTML 文件不缓存，确保总是获取最新版本

### `wrangler.toml` 文件（可选）
Cloudflare Workers 配置文件，如果需要使用 Cloudflare Workers 功能时使用。

---

## 🌐 自定义域名（可选）

### 在 Cloudflare Pages 绑定自定义域名

1. 在 Cloudflare Pages 项目中
2. 点击 **Custom domains**
3. 点击 **Set up a custom domain**
4. 输入您的域名（如 `blog.yourdomain.com`）
5. Cloudflare 会自动配置 DNS

### 在域名注册商设置 DNS

如果域名不在 Cloudflare：
1. 添加 CNAME 记录：
   ```
   类型: CNAME
   名称: blog (或您想要的子域名)
   值: yungs-blog.pages.dev
   TTL: 3600
   ```

---

## 🔄 部署流程总结

```
您本地修改代码
    ↓
git commit
    ↓
git push origin main
    ↓
GitHub 检测到推送
    ↓
Cloudflare 自动触发部署
    ↓
几秒钟后网站更新完成 ✨
```

---

## 🎯 常用命令

```bash
# 部署到 Cloudflare Pages
./deploy.sh your-github-username cloudflare

# 部署到 Vercel（如果需要）
./deploy.sh your-github-username vercel

# 查看部署状态
# 访问: https://dash.cloudflare.com/ → Workers & Pages → yungs-blog
```

---

## ❓ 常见问题

### Q: 为什么我的网站没有更新？
A:
1. 检查 GitHub 是否推送成功
2. 查看 Cloudflare Pages 的部署日志
3. 清除浏览器缓存（Ctrl/Cmd + Shift + R）

### Q: 如何回滚到之前的版本？
A:
1. 在 Cloudflare Pages 项目中
2. 进入 **Deployments**
3. 找到想要回滚的版本
4. 点击 **Rollback to this deployment**

### Q: 可以同时部署到多个平台吗？
A: 可以！您可以：
- 同时连接 Cloudflare Pages 和 Vercel
- 两者都会监听 GitHub 推送并自动部署

### Q: 如何查看部署历史？
A:
1. Cloudflare Dashboard → Workers & Pages → yungs-blog → Deployments
2. 查看每次部署的状态、时间、持续时间

---

## 📚 更多资源

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Cloudflare Pages GitHub 集成指南](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/)
- [自定义域名配置](https://developers.cloudflare.com/pages/platform/custom-domains/)

---

## ✅ 部署检查清单

- [ ] 代码已推送到 GitHub
- [ ] Cloudflare Pages 项目已创建
- [ ] GitHub 仓库已连接到 Cloudflare
- [ ] 构建设置已配置（构建命令为空，输出目录为 /）
- [ ] 首次部署成功
- [ ] 测试推送新代码，验证自动部署
- [ ] （可选）自定义域名已配置
- [ ] （可选）DNS 记录已正确设置

---

## 🎉 完成！

现在您可以专注于写代码，每次推送都会自动部署！

**祝您使用愉快！** 🚀
