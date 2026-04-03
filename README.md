# AI開発セミナー — AIと一緒にアプリを作ってみよう

## セットアップ（所要時間: 1分）

### GitHub Codespaces で開く場合（推奨）
1. このページ上部の **「Code」** ボタン → **「Codespaces」** タブ → **「Create codespace on main」**
2. VS Code がブラウザで開き、自動的に環境がセットアップされます
3. ターミナルで以下を実行:
   ```
   npm run dev
   ```
4. 「ポート 5173 を開きますか？」→ **「ブラウザで開く」**

### ローカル環境の場合
```bash
git clone https://github.com/（リポジトリURL）
cd ai-dev-seminar
npm install
npm run dev
```

## Claude Code の起動
ターミナルで:
```
claude
```
（API Key は環境変数に設定済みです）

---

## 本日の流れ（3時間）

| 時間 | 内容 |
|---|---|
| 0:00 | 導入・環境確認 |
| 0:25 | **実習1**: [ToDoリスト](exercises/exercise1.md)（30分） |
| 1:15 | **実習2**: [社員名簿管理](exercises/exercise2.md)（50分） |
| 2:25 | **実習3**: [自由課題](exercises/exercise3.md)（20分） |
| 2:45 | 振り返り・発表 |

## 困ったときは
- AI の応答がおかしい → 「それは違います。〇〇してください」と具体的に言い直す
- エラーが出た → エラーメッセージをそのまま AI に貼り付ける
- 画面が真っ白 → ターミナルで `npm run dev` が動いているか確認
- 講師に質問 → いつでもどうぞ
