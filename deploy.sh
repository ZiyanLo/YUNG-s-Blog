#!/bin/bash

# YUNG's Blog 快速部署脚本
# 使用方法：./deploy.sh YOUR_GITHUB_USERNAME

set -e

if [ $# -eq 0 ]; then
    echo "❌ 请提供您的GitHub用户名"
    echo "使用方法: ./deploy.sh YOUR_GITHUB_USERNAME"
    echo "示例: ./deploy.sh yourusername"
    exit 1
fi

GITHUB_USERNAME=$1
REPO_NAME="yungs-blog"
REPO_URL="https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"

echo "🚀 开始部署 YUNG's Blog..."
echo "📦 GitHub用户名: ${GITHUB_USERNAME}"
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
echo "⬆️ 推送代码到GitHub..."
git push -u origin main

echo ""
echo "✅ 代码已成功推送到GitHub!"
echo ""
echo "🌐 接下来的步骤："
echo "1. 访问 https://vercel.com"
echo "2. 点击 'New Project'"
echo "3. 导入Git仓库: ${REPO_URL}"
echo "4. 点击 'Deploy'"
echo ""
echo "🎉 部署完成后，您会得到一个类似这样的网址："
echo "   https://yungs-blog.vercel.app"