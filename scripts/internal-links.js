import { LitElement, html, css } from 'lit';

customElements.define('internal-links', class extends LitElement {
	static styles = css`
		:host {
			width: unset !important;
		}

		ul {
			list-style: none;
			padding: unset;
		}

		li {
			margin: 1rem;
		}

		a {
			width: 15rem;
			height: 4rem;
			color: white;
			background: #EA5D51;
			text-decoration: unset;
			font-weight: bold;
			border-radius: 0.5rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	`;

	render()
	{
		return html`<ul>
			<li><a rel="external" href="/">トップページ</a></li>
			<li><a rel="external" href="/exhibit-lists.html">出展一覧</a></li>
			<li><a rel="external" href="/sponsorship.html">協賛</a></li>
			<li><a rel="external" href="/exhibit-avatar.html">アバター出展に関する情報</a></li>
			<li><a rel="external" href="/exhibit-event.html">イベント出展に関する情報</a></li>
		</ul>`;
	}
});
