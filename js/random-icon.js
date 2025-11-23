document.addEventListener("DOMContentLoaded", function () {
  // 获取首页所有文章列表条目
  let articles = document.querySelectorAll(".article-card"); // butterfly 默认文章卡片 class

  articles.forEach(article => {
    // 调用 API 获取随机图片
    fetch("https://www.dmoe.cc/random.php?return=json")
      .then(response => response.json())
      .then(data => {
        if (data && data.acgurl) {
          // 找到文章图标 img 标签，替换 src
          let icon = article.querySelector(".post-entry-img img"); // 文章图标 class
          if (icon) icon.src = data.acgurl;
        }
      })
      .catch(err => console.error("加载随机图片失败:", err));
  });
});
