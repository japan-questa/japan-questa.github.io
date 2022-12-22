import { LitElement, html, css } from 'lit';

customElements.define('exhibit-common', class extends LitElement {
	static styles = css`
		:host > * {
			width: 100%;
		}
		#schedule + dl {
			width: unset;
		}

		.submit-period + dd del {
			color: gray;
			display: block;
		}
	`;

	render()
	{
		/*eslint-disable max-len */
		return html`<link rel="stylesheet" href="/styles/common.css" />
		<link rel="stylesheet" href="/styles/exhibit.css" />
		<h2 id="schedule">日程</h2>
		<dl>
			<dt>申し込み開始</dt>
				<dd><ins>【アバター出展】<s>2022年8月20日(土) 21:00 〜 規定数に達するまで</s></ins>　満員につき受付終了</dd>
				<dd><ins>【イベント出展 (ポスター)】<s>2022年8月28日(日) 21:00 〜 規定数に達するまで</s></ins>　満員につき受付終了</dd>
				<dd><ins>【イベント出展 (ブース)】<s>2022年8月28日(日) 21:00 〜 規定数に達するまで</s></ins>　満員につき受付終了</dd>
			<dt class="submit-period">入稿期間</dt>
				<dd><del>2022年9月15日(木) 〜 10月8日(土) 23:59</del>
					<ins>2022年9月15日(木) 〜 10月15日(土) 23:59 <strong>締切を延長しました！</strong></ins></dd>
		</dl>

		<h2>入稿規定</h2>
		<h3>アバター出展・イベント出展　共通事項</h3>
		<ul>
			<li><strong>出展者向けDiscordサーバーへ、申し込みフォーム送信後に表示される招待リンクより、必ずご参加ください。</strong></li>
			<li>他のイベントで出展したアバター・イベントを出展しても問題ありません。</li>
			<li>以下の入稿規定は、入稿ツールを利用してチェックできます。 <small>ツールは後日配布します。</small></li>
			<li><strong>下記の規定に沿っている場合でも、容量が大きい、負荷が高い、正常に表示できない等の不都合があった場合、運営スタッフによる調整が行われますので、あらかじめご了承ください。</strong></li>
			<li>入稿規定から外れている場合、運営側で修正または撤去を行う可能性があります。</li>
		</ul>
		<dl>
			<dt>Unityのバージョン</dt>
				<dd>Unity 2019.4.31f1</dd>
			<dt>入稿データ</dt>
				<dd><ul>
					<li>入稿するunitypackageの容量は50MB以内</li>
					<li>入稿ツールによって作成されたフォルダ (フォルダ名は出展ID) へ、入稿するデータをすべて入れる
						<small>以下のようなデータは入れないでください。これらは会場側のプロジェクトへあらかじめインポートされています</small>
						<ul>
							<li>シェーダー</li>
							<li>TextMesh Pro
								<small>使用する場合、TMP Essential Resourcesに含まれないTMP用フォントデータは入稿データに含めてください。</small></li>
							<li>VitDeck-for-JQuesta</li>
							<li>JQPrefabs modified from VketPrefabs</li>
							<li><del>text-template</del></li>
							<li>VRChat SDK</li>
							<li>その他のスクリプト</li>
						</ul></li>
				</ul></dd>
			<dt>シーン</dt>
				<dd><ul>
					<li>UnityのZ軸+方向がブースの正面</li>
				</ul></dd>
		</dl>`;
	}
});
