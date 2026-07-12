# 真正的设计工具该具备什么能力（Capability Matrix）

依据：waytoagi《AI 不会做设计？先给它一份 DESIGN.md》一文 + Google Labs `design.md` 官方仓库能力清单 + 我实测过的 7 个工具（Refero Styles / designmd.supply / DesignMD.me / Neuform / getdesign.md / design-md-chrome / Google CLI）的真实功能。

结论先行：一个 DESIGN.md 库只是**素材**，一个 DESIGN.md **工具**必须能 ingest（吃进来）、curate（挑得到）、export（吐出去）、validate（管得住）、generate（做得出）、close-loop（长得大）。下面 12 条是真正设计工具的能力全集，HeiGe-Design 逐条实现。

---

## 生态定义的能力（来自文章 + 官方仓库 + 7 工具实测）

| # | 能力 | 生态里谁做了 | HeiGe-Design 如何实现 | 状态 |
|---|---|---|---|---|
| 1 | **多格式导出**：DESIGN.md + Tailwind v4(@theme) + Tailwind v3(json) + CSS Variables + W3C DTCG | Refero 五层资产 / Google CLI `export` | `scripts/export-tokens.mjs` 批量为 50 套各出 5 种格式 + 可直接粘给 agent 的提示词 | 建设中 |
| 2 | **每套详情页 + 一键复制**：预览 / 调色板 / 字体 / 组件 / Do-Don't / 各格式 tab 复制 | Refero style 页 | 详情页生成器，每格式带 copy 按钮 + lint 徽章 | 待建 |
| 3 | **库的浏览与搜索**：按家族 / 颜色 / 情绪 / 关键词 / 明暗 | Refero / getdesign.md | 画廊家族筛选(已有) + 颜色/关键词/明暗搜索 | 部分 |
| 4 | **校验 lint**：结构 + WCAG AA 对比度 + 9 条规则(broken-ref/missing-primary/contrast/orphaned/section-order/unknown-key…) | Google CLI `lint` | `scripts/validate.mjs` 全量跑官方 lint，出报告 + 详情页徽章 | 部分 |
| 5 | **对比 diff**：两份 DESIGN.md 的 token 与文案差异、回归检测 | Google CLI `diff` | `scripts/diff.mjs` 包装官方 diff + 可视对比 | 待建 |
| 6 | **URL→DESIGN.md 提取**：从任意现成网站抽出设计规范 | designmd.supply / DesignMD.me / chrome 扩展（都依赖 Context.dev 付费 API） | `scripts/ingest.mjs`：**自研 playwright 提取**，读 CSSOM 计算样式聚类，合成 HeiGe 草稿设定集，**不依赖任何付费 API** | 待建 |
| 7 | **spec→UI 生成（prompt-to-production）**：DESIGN.md 直接产出可运行页面 | Neuform / 全体 | 旗舰样例 + `scripts/build.mjs` 生成 agent 提示词把任意一套变成整页 | 建设中 |
| 8 | **UI + 演示双产出（融合）**：一份设定集同时驱动网页和幻灯片 | 生态里**没有工具做这个** | 每套 DESIGN.md 同时含 UI 组件 + slide 组件，旗舰同时产 page.html + deck.html | HeiGe 独有 |
| 9 | **可执行的 agent 提示词 + Do-Don't 验收清单** | Refero Agent Prompt Guide | 每套详情页给现成提示词 + Do/Don't 当验收清单 | 待建 |
| 10 | **生成 SKILL.md**：把设计规范变成 agent 可执行工作流 | design-md-chrome | 产出 `SKILL.md`，Claude Code / Codex 可直接调起整套工具 | 待建 |
| 11 | **活的记忆闭环**：生成→对照 Do-Don't 自审→把新组件规则回写 DESIGN.md | 文章强调的闭环 | `write-back-loop.md` 文档 + `build.mjs` 内置自审回写步骤 | 待建 |
| 12 | **统一入口 CLI**：list / show / export / lint / diff / ingest / build | 各工具各自为政 | `bin/heige-design` 一个命令贯穿全部能力 | 待建 |

---

## HeiGe-Design 相对生态的四个差异化（不止追平，要超过）

1. **UI + PPT 融合**：生态里所有工具只产网页 token，HeiGe 一份设定集同时驱动界面和 16:9 演示（能力 8）。这来自它从 HeiGe-UI + HeiGe-PPT 演化而来的出身。
2. **自含式 URL 提取**：designmd.supply / DesignMD.me / chrome 扩展全都依赖 Context.dev 付费 API，上游一变或收费就受制。HeiGe 用 playwright 本地读 CSSOM 自研提取，零外部依赖（能力 6）。
3. **原创无侵权**：awesome-design-md 那 74 套全是 Apple/Stripe 等真实品牌逆向，照搬发布有商标风险。HeiGe 50 套全原创虚构，可商用（对照 reference 的侵权红线）。
4. **反 AI 味 + 生产铁律内建**：每套都过 HeiGe 的反 AI 体检和字体兜底/零孤字/性能三铁律，不是裸 token（对照 anti-slop / production checklist）。

---

## 能力落地的目录形态

```
HeiGe-Design/
  systems/<slug>/
    DESIGN.md            # 设定集（能力 1 源）
    exports/             # 能力 1：五层可执行资产
      tailwind-v4.css    #   Tailwind v4 @theme
      tailwind-v3.json   #   Tailwind v3 config
      variables.css      #   :root CSS 变量
      tokens.dtcg.json   #   W3C Design Tokens
      agent-prompt.md    #   可直接粘给 coding agent 的提示词
    flagship/            # 能力 7+8：page.html + deck.html
    detail.html          # 能力 2+9：详情页
  scripts/
    build-gallery.mjs    # 能力 3：画廊 + 搜索
    export-tokens.mjs    # 能力 1
    validate.mjs         # 能力 4
    diff.mjs             # 能力 5
    ingest.mjs           # 能力 6：URL→DESIGN.md
    build.mjs            # 能力 7/11：生成提示词 + 回写
  bin/heige-design       # 能力 12：统一 CLI
  SKILL.md               # 能力 10：agent 可执行
  references/
    write-back-loop.md   # 能力 11
```
