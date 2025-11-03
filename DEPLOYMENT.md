# YUNG's Blog 部署指南

## 📋 前置条件

- [x] Git仓库已初始化
- [x] 代码已提交到本地仓库
- [x] 部署配置文件已创建
- [ ] GitHub仓库已创建
- [ ] Vercel账户已注册

## 🚀 部署步骤

### 1. 创建GitHub仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角的 "+" → "New repository"
3. 填写仓库信息：
   - **Repository name**: `yungs-blog`
   - **Description**: `A minimalist personal blog with Posts, Works, and About sections`
   - **Visibility**: Public（或 Private，根据你的偏好）
   - **不要**勾选 "Add a README file"
4. 点击 "Create repository"

### 2. 推送代码到GitHub

在终端中执行以下命令：

```bash
# 添加远程仓库（替换YOUR_USERNAME为你的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/yungs-blog.git

# 推送代码到GitHub
git push -u origin main
```

### 3. 在Vercel部署项目

1. 访问 [Vercel](https://vercel.com)
2. 使用GitHub账户登录（推荐）或注册新账户
3. 点击 "New Project"
4. 选择 "Import Git Repository"
5. 输入你的GitHub仓库地址：`https://github.com/YOUR_USERNAME/yungs-blog.git`
6. 点击 "Import"

### 4. 配置Vercel项目

Vercel会自动检测你的项目配置：

- **Project Name**: `yungs-blog`（自动检测）
- **Framework Preset**: Other（静态网站）
- **Root Directory**: `./`（自动检测）
- **Build Command**: 不需要（静态网站）
- **Output Directory**: 不需要（静态网站）
- **Install Command**: 不需要（静态网站）

点击 "Deploy" 开始部署。

### 5. 部署完成

部署完成后，你会得到：

- 🌐 **网站URL**: `https://yungs-blog.vercel.app`
- 🔗 **自定义域名设置**（如果需要）
- 📊 **分析和监控**

## 🛠️ 自定义域名设置（可选）

### 在Vercel中设置自定义域名：

1. 在Vercel项目中点击 "Settings"
2. 点击 "Domains"
3. 输入你的域名（如：`blog.yourname.com`）
4. 配置DNS记录（Vercel会提供具体记录）

### DNS配置：

```
Type: CNAME
Name: @ (或你的子域名)
Value: cname.vercel-dns.com
```

## 🔄 自动部署

设置完成后，每次你推送代码到GitHub的main分支，Vercel会自动：

1. 🔍 检测代码变化
2. 📦 构建项目（静态网站，无需构建）
3. 🚀 部署到全球CDN
4. 📧 发送部署通知

## 📱 项目文件结构

```
yungs-blog/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript功能
├── vercel.json         # Vercel配置
├── package.json        # 项目信息
├── .gitignore          # Git忽略文件
├── README.md           # 项目说明
└── DEPLOYMENT.md       # 部署指南
```

## 🎯 关键特性

- ✅ **静态网站**：快速加载，无需服务器
- ✅ **响应式设计**：完美适配所有设备
- ✅ **明暗主题**：自动记住用户偏好
- ✅ **搜索功能**：实时搜索文章内容
- ✅ **SEO优化**：语义化HTML结构
- ✅ **全球CDN**：通过Vercel自动分发

## 🔧 故障排除

### 常见问题：

1. **部署失败**
   - 检查 `vercel.json` 配置是否正确
   - 确认 `index.html` 在根目录

2. **CSS/JS加载失败**
   - 检查文件路径是否正确
   - 确认文件名大小写一致

3. **自定义域名不生效**
   - 检查DNS记录配置
   - 等待DNS传播（可能需要几分钟到几小时）

4. **主题切换不工作**
   - 检查浏览器控制台是否有JavaScript错误
   - 确认 `localStorage` 权限允许

## 📞 支持

如果遇到部署问题：

1. 📖 查看 [Vercel文档](https://vercel.com/docs)
2. 🐛 检查Vercel部署日志
3. 💬 联系Vercel支持

---

**🎉 恭喜！你的YUNG's Blog现在已经可以在线访问了！**