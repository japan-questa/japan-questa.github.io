import { LitElement, html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

customElements.define('staff-list', class extends LitElement {
	static styles = css`
		table {
			margin: 0 1em;
			display: flex;
			justify-content: center;
		}

		thead {
			display: none;
		}

		tbody {
			display: grid;
			gap: 1rem 0.5rem;
			grid-template-columns: repeat(auto-fit, 18.5em);
			justify-content: center;
			width: min(100%, 100em);
		}

		tr {
			display: flex;
			--icon-size: 5rem;
			height: var(--icon-size);
			flex-flow: column wrap;
			justify-content: center;
			align-content: start;
			line-height: 1;
			gap: 0.2em;
		}

		th {
			text-align: unset;
		}

		.icon img {
			width: var(--icon-size);
			border-radius: 50%;
			overflow: hidden;
		}

		.roles {
			display: contents;
			font-size: smaller;
			font-weight: bold;
		}

		.roles ul {
			display: contents;
			list-style: none;
			margin: unset;
			padding: unset;
		}
	`;

	staffs = [
		{
			icon: 'staff-arutam.png',
			roles: [ '主催' ],
			name: 'アルタム',
			link: 'https://twitter.com/i/user/1137961043550806016',
		},
		{
			icon: 'staff-yuki.png',
			roles: [ 'サポートマネージャー' ],
			name: 'ユーキ',
			link: 'https://twitter.com/i/user/1227634719698776064',
		},
		{
			icon: 'staff-varyu.JPG',
			roles: [ 'プロダクトマネージャー' ],
			name: 'ばーゆ',
			link: 'https://twitter.com/i/user/1227239078321516544',
		},
		{
			icon: 'staff-omega.png',
			roles: [ '制作統括' ],
			name: 'おめが',
			link: 'https://twitter.com/i/user/7217972',
		},
		{
			icon: 'staff-haru.png',
			roles: [ '美術統括' ],
			name: 'ひととせハル',
			link: 'https://twitter.com/i/user/1217004406316552192',
		},
		{
			icon: 'staff-alos.jpg',
			roles: [ '広報統括' ],
			name: 'アロス',
			link: 'https://twitter.com/i/user/1235570315465355265',
		},
		{
			icon: 'staff-pichikyo.png',
			roles: [ 'PR/営業', 'Webページデザイン' ],
			name: 'ぴちきょ',
			link: 'https://twitter.com/i/user/3392741',
		},
		{
			icon: 'staff-yuki.jpg',
			roles: [ 'ワールド統括', 'アバターワールドディレクター' ],
			name: 'yuki-jp',
			link: 'https://twitter.com/i/user/1255830025644863489',
		},
		{
			icon: 'staff-liefde.jpg',
			roles: [ 'エントランスワールドディレクター' ],
			name: 'りーふで',
			link: 'https://twitter.com/i/user/1287701949349900289',
		},
		{
			icon: 'staff-amehuri.png',
			roles: [ 'イベントワールドディレクター' ],
			name: '雨降り（あめふり）',
			link: 'https://twitter.com/i/user/1346392008227622912',
		},
		{
			icon: 'staff-sakk.png',
			roles: [ 'アバターワールドディレクター' ],
			name: 'サックー',
			link: 'https://twitter.com/i/user/1262053170424889347',
		},
		{
			icon: 'staff-gechan.jpg',
			roles: [ 'プロップモデラー' ],
			name: '唯野ゲチャン',
			link: 'https://twitter.com/i/user/1181918359476031488',
		},
		{
			icon: 'staff_Oyasumisan.jpg',
			roles: [ 'プロップモデラー' ],
			name: 'お休みさん',
			link: 'https://twitter.com/i/user/906739332223967232',
		},
		{
			icon: 'staff-leo.png',
			roles: [ 'プロップモデラー' ],
			name: 'レオ',
			link: '',
		},
		{
			icon: 'staff-EstyOctober.jpg',
			roles: [ 'テクニカルアーティスト' ],
			name: 'EstyOctober',
			link: 'https://twitter.com/i/user/1321592357028950016',
		},
		{
			icon: 'staff-namako.png',
			roles: [ 'ギミック制作サポート' ],
			name: 'なまのなまこ',
			link: 'https://twitter.com/i/user/2331617108',
		},
		{
			icon: 'staff-JOE.jpg',
			roles: [ '企業サポート' ],
			name: 'JOEJANOME',
			link: 'https://twitter.com/i/user/995275025132404736',
		},
		{
			icon: 'staff-IKAmeshi.png',
			roles: [ '企業サポート' ],
			name: 'イカめし',
			link: 'https://twitter.com/i/user/818453859097948161',
		},
		{
			icon: 'staff-kukumoto.png',
			roles: [ '企業サポート' ],
			name: 'くくもと',
			link: 'https://twitter.com/i/user/1158427201714262019',
		},
		{
			icon: 'staff-rohi.png',
			roles: [ '企業サポート' ],
			name: 'ろひ',
			link: 'https://twitter.com/i/user/154871283',
		},
		{
			icon: 'staff-siesta.png',
			roles: [ '企業サポート' ],
			name: 'しえすた',
			link: 'https://twitter.com/i/user/775994964777902080',
		},
		{
			icon: 'staff-godou.png',
			roles: [ 'ユーザーサポート統括', '広報' ],
			name: '五堂',
			link: 'https://twitter.com/i/user/1393003765200953347',
		},
		{
			icon: 'staff-ennkaku.png',
			roles: [ 'ユーザーサポート' ],
			name: '円角[ennkaku]',
			link: 'https://twitter.com/i/user/391998152',
		},
		{
			icon: 'staff-Nicomal.png',
			roles: [ 'ユーザーサポート', 'ムービークリエイター' ],
			name: '猫田にこまる',
			link: 'https://twitter.com/i/user/1200679277617766401',
		},
		{
			icon: 'staff-keterlin.jpg',
			roles: [ 'ユーザーサポート' ],
			name: 'けてるりん',
			link: 'https://twitter.com/i/user/1280042406902067202',
		},
		{
			icon: 'staff-neno.png',
			roles: [ 'ロゴデザイナー' ],
			name: 'neno',
			link: 'https://twitter.com/i/user/968794803944046592',
		},
		{
			icon: 'staff-naocci.jpg?20221115',
			roles: [ 'ワールドコンセプトアーティスト', 'イラストレーター' ],
			name: 'なおちー',
			link: 'https://twitter.com/i/user/1141872763138789376',
		},
		{
			icon: 'staff-nako.PNG',
			roles: [ 'キャラクターデザイナー' ],
			name: 'nako',
			link: 'https://twitter.com/i/user/1378567484039589891',
		},
		{
			icon: 'staff-RokuNeko.png',
			roles: [ 'サウンドクリエーター' ],
			name: 'ろくねこ',
			link: 'https://twitter.com/i/user/1369149115045609477',
		},
		{
			icon: 'staff-100.png',
			roles: [ 'Webページ制作 (プログラム)', '入稿・配置ツール制作' ],
			name: '100の人',
			link: 'https://twitter.com/i/user/319757037',
		},
		{
			icon: 'staff-mehori.png',
			roles: [ '翻訳' ],
			name: 'mehori',
			link: 'https://twitter.com/i/user/984931',
		},
		{
			icon: '',
			roles: [ 'コミュニティアドバイザー' ],
			name: 'otsune',
			link: 'https://twitter.com/i/user/3295761',
		},
		{
			icon: 'staff-koyo.png',
			roles: [ 'セールスネゴシエーター' ],
			name: 'こうよう',
			link: 'https://twitter.com/i/user/1216761914065223690',
		},
		{
			icon: 'staff-R.jpg',
			roles: [ 'PRマネージャー' ],
			name: 'アール',
			link: 'https://twitter.com/i/user/1424353275919278080',
		},
		{
			icon: 'staff-kogure.JPG',
			roles: [ 'PRマネージャー' ],
			name: 'コグレマサト',
			link: 'https://twitter.com/i/user/2067291',
		},
		{
			icon: 'staff-Zipy.jpg',
			roles: [ 'アカウンタント' ],
			name: 'Zipy(じぴこ)Nekonikoban',
			link: 'https://twitter.com/i/user/142206193',
		},
		{
			icon: 'staff-takumi.png',
			roles: [ 'クラウドファンディング' ],
			name: '匠＠くだらないもの工房',
			link: 'https://twitter.com/i/user/59361062',
		},
		{
			icon: 'staff-anoko.png',
			roles: [ 'クラウドファンディング', '広報' ],
			name: 'あの子゜',
			link: 'https://twitter.com/i/user/972890197502214144',
		},
		{
			icon: 'staff-yoikonott.png',
			roles: [ 'クラウドファンディング', 'デザイナー' ],
			name: 'ヨイコノtt',
			link: 'https://twitter.com/i/user/876799908417740800',
		},
		{
			icon: 'staff-nina.png',
			roles: [ 'Webページ制作補助', 'ムービークリエイター' ],
			name: '初瀬ニナ',
			link: 'https://twitter.com/i/user/1252041871896965120',
		},
	];

	render()
	{
		return html`<table>
			<thead>
				<tr>
					<th>アイコン</th>
					<th>役職</th>
					<th>名前</th>
				</tr>
			</thead>
			<tbody>${this.staffs.map(staff => html`<tr>
				<td class="icon"><img src="/images/${staff.icon || 'staff-icon-placeholder.png'}" /></td>
				<td class="roles"><ul>${staff.roles.map(role => html`<li>${role}</li>`)}</ul></td>
				<td class="name"><a rel=${ifDefined(staff.link ? 'external' : undefined)}
					target=${ifDefined(staff.link ? '_blank' : undefined)}
					href=${ifDefined(staff.link || undefined)}>${staff.name}</a></td>
			</tr>`)}</tbody>
		</table>`;
	}
});
