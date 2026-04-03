/**
 * AI開発セミナー スターターアプリ
 *
 * このファイルを AI と一緒に書き換えていきます。
 * まずはこのまま `npm run dev` で起動してみましょう。
 */

function App() {
  return (
    <div style={{ maxWidth: 800, margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <h1>AI開発セミナーへようこそ</h1>
      <p>この画面が表示されていれば、環境は正常に動作しています。</p>
      <p>ここから AI と一緒にアプリを作っていきます。</p>

      <div style={{ marginTop: 32, padding: 20, background: '#f0f4ff', borderRadius: 8 }}>
        <h2>実習の進め方</h2>
        <ol style={{ lineHeight: 2 }}>
          <li><strong>ターミナル</strong>で Claude Code を起動します</li>
          <li>AI に指示を出して、このアプリを改造していきます</li>
          <li>ブラウザで結果を確認しながら進めます</li>
        </ol>
      </div>

      <div style={{ marginTop: 24, padding: 20, background: '#fff3e0', borderRadius: 8 }}>
        <h2>実習1: ToDoリスト</h2>
        <p>AI に「ToDoリストを作って」と指示してみましょう。</p>
        <p>うまくできたら、機能を追加する指示を出してみましょう。</p>
      </div>

      <div style={{ marginTop: 24, padding: 20, background: '#e8f5e9', borderRadius: 8 }}>
        <h2>実習2: 社員名簿管理</h2>
        <p>exercises/exercise2.md を見て、業務アプリを設計・実装します。</p>
      </div>
    </div>
  )
}

export default App
