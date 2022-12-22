import { LitElement, html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import './internal-links.js';

customElements.define('common-header', class CommonHeader extends LitElement {
	static menuWidth = 420;

	static styles = css`
		header {
			--height: 3.5rem;
			--padding: 0.5rem;
			--page-heading-height: 7rem;

			display: flex;
			justify-content: space-between;
			align-items: center;
			height: var(--height);
			padding: var(--padding);
		}

		header:not(.is-top-page) {
			margin-bottom: var(--page-heading-height);
		}

		hgroup p {
			font-size: 2rem;
			position: absolute;
			top: calc(var(--height) + var(--padding) * 2);
			left: 0;
			right: 0;
			height: var(--page-heading-height);
			color: white;
			background: #EA5D51;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: unset;
		}

		h2,
		.link-heading {
			display: none;
		}

		h1 {
			margin: unset;
		}

		h1 img {
			height: var(--height);
		}

		details {
			width: var(--button-icon-size);
			height: var(--button-icon-size);
		}

		summary {
			list-style: none;
			width: var(--button-icon-size) !important;
			height: var(--button-icon-size);
			text-indent: 100%;
			white-space: nowrap;
			background: url("/images/icon_menu.png") no-repeat center/contain;
			overflow: hidden;
			cursor: pointer;
		}

		details[open] {
			--background: lightgrey;

			position: absolute;
			top: calc(var(--height) + var(--padding) * 2);
			left: max(0px, calc(100vw - ${CommonHeader.menuWidth}px));
			right: 0;
			width: unset;
			height: unset;
			background: var(--background);
		}

		details[open] summary {
			background: #6F6F6F;
			text-indent: unset;
			border-radius: 0.2em;
			position: absolute;
			top: calc(-1 * (var(--height) + var(--padding)));
			right: var(--padding);
		}

		details[open] summary::before {
			content: "×";
			font-size: var(--button-icon-size);
			color: white;
			display: flex;
			width: 100%;
			height: 100%;
			align-items: center;
			justify-content: center;
			font-weight: bold;
		}

		.external-sites h3 {
			font-size: unset;
			background: unset;
			display: none;
		}

		.external-sites ul {
			list-style: none;
			padding: unset;
			font-size: 0.8em;
			line-height: 2;
		}

		.external-sites li::before {
			content: "➜";
			margin-right: 1em;
		}

		.external-sites a {
			--color: black;
			color: var(--color);
		}

		[rel="external"]::after {
			content: "↗";
			display: inline-flex;
			width: 1.1em;
			height: 1.1em;
			margin-left: 0.5em;
			align-items: center;
			justify-content: center;
			font-weight: bold;
			color: var(--background);
			background: var(--color);
			border-radius: 0.2em;
		}
	`;

	static properties = {
		isTopPage: { type: Boolean },
		pageHeading: { type: String },
	};

	constructor()
	{
		super();

		addEventListener('resize', () => {
			if (!this.menu.open) {
				return;
			}

			this.toogleBodyChildren();
		});
	}

	toogleBodyChildren()
	{
		const hidden = innerWidth < CommonHeader.menuWidth && this.menu.open;

		for (const child of document.body.children)
		{
			if (child.matches(this.localName)) {
				continue;
			}

			child.hidden = hidden;
		}
	}

	toggleMenu(event)
	{
		this.menu = event.target;
		this.toogleBodyChildren();
	}

	render()
	{
		/*eslint-disable max-len */
		return html`<link rel="stylesheet" href="/styles/common.css" />
		<header class=${classMap({ 'is-top-page': this.isTopPage })}>
			<nav>
				<hgroup>
					<h1>
						<a href="${ifDefined(this.isTopPage ? null : '')}./">
							<img src="/images/logo-header.png" alt="じゃぱんくえすた" />
						</a>
					</h1>
					${this.pageHeading && html`<p>${this.pageHeading}</p>`}
				</hgroup>
			</nav>
			<h2>ヘッダ</h2>
			<details @toggle="${this.toggleMenu}">
				<summary>menu</summary>
				<div class="root">
					<internal-links></internal-links>
					<nav class="max-page-width external-sites">
						<h3>外部サイトへ飛びます</h3>
						<ul>
							<li><a href="mailto:japanquesta@gmail.com">お問い合わせメール</a></li>
						</ul>
					</nav>
					<nav class="twitter-hashtag">
						<h3>応援ハッシュタグ</h3>
						<a rel="external" href="https://twitter.com/hashtag/%E3%81%98%E3%82%83%E3%81%B1%E3%82%93%E3%81%8F%E3%81%88%E3%81%99%E3%81%9F" target="_blank">#じゃぱんくえすた</a>
					</nav>
					<h3 class="link-heading">リンク</h3>
					<social-links></social-links>
					<h3 class="copyright-heading">著作表示</h3>
					<p><small>© 2022 じゃぱんくえすた</small></p>
				</div>
			</details>
		</header>`;
	}
});
