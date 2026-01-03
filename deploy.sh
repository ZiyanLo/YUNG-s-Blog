#!/bin/bash

# YUNG's Blog 快速部署脚本
# 支持部署到 Cloudflare Pages 或 Vercel
# 使用方法：./deploy.sh YOUR_GITHUB_USERNAME [platform]

set -e

if [ $# -eq 0 ]; then
    echo "❌ 请提供您的GitHub用户名"
    echo "使用方法: ./deploy.sh YOUR_GITHUB_USERNAME [platform]"
    echo "示例: ./deploy.sh yourusername cloudflare"
    echo "      ./deploy.sh yourusername vercel"
    exit 1
fi

GITHUB_USERNAME=$1
PLATFORM=${2:-cloudflare}  # 默认使用 Cloudflare
REPO_NAME="yungs-blog"
REPO_URL="https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"

echo "🚀 开始部署 YUNG's Blog..."
echo "📦 GitHub用户名: ${GITHUB_USERNAME}"
echo "☁️  部署平台: ${PLATFORM}"
echo "🔗 仓库地址: ${REPO_URL}"

# 检查Git状态
echo ""
echo "📋 检查Git状态..."
git status

# 添加远程仓库
echo ""
echo "🔗 添加远程仓库..."
git remote add origin ${REPO_URL} 2>/dev/null || git remote set-url origin ${REPO_URL}

# 推送到GitHub
echo ""
echo "⬆️  推送代码到GitHub..."
git push -u origin main

echo ""
echo "✅ 代码已成功推送到GitHub!"
echo ""

# 根据平台显示不同的说明
if [ "$PLATFORM" = "cloudflare" ]; then
    echo "🌐 Cloudflare Pages 部署步骤："
    echo "1. 访问 https://dash.cloudflare.com/"
    echo "2. 进入 'Workers & Pages' → 'Create' → 'Pages'"
    echo "3. 选择 'Connect to Git'"
    echo "4. 授权 GitHub 并选择仓库: ${REPO_NAME}"
    echo "5. 配置构建设置："
    echo "   - 构建命令: (留空，因为是静态网站)"
    echo "   - 构建输出目录: / (根目录)"
    echo "   - 根目录: / (根目录)"
    echo "6. 点击 'Save and Deploy'"
    echo ""
    echo "🎉 部署完成后，每次推送代码到 GitHub，Cloudflare 会自动部署！"
    echo ""
    echo "📱 您的网站地址将是："
    echo "   https://yungs-blog.pages.dev"
    echo "   或您的自定义域名"
elif [ "$PLATFORM" = "vercel" ]; then
    echo "🌐 Vercel 部署步骤："
    echo "1. 访问 https://vercel.com"
    echo "2. 点击 'New Project'"
    echo "3. 导入Git仓库: ${REPO_URL}"
    echo "4. 点击 'Deploy'"
    echo ""
    echo "🎉 部署完成后，每次推送代码到 GitHub，Vercel 会自动部署！"
    echo ""
    echo "📱 您的网站地址将是："
    echo "   https://yungs-blog.vercel.app"
else
    echo "❌ 不支持的平台: ${PLATFORM}"
    echo "支持的平台: cloudflare, vercel"
fi