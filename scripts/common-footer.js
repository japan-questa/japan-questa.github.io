import { LitElement, html, css } from 'lit';
import './social-links.js';

customElements.define('common-footer', class extends LitElement {
	static styles = css`
		.twitter-hashtag {
			margin-top: 2em;
		}

		footer > div {
			margin: unset;
			background: #EFEFEF;
			margin-top: 2em;
			padding-top: 2em;
		}

		section {
			background: white;
			padding: 1.3em 0;
		}

		section h2 {
			background: unset;
		}

		section h2 img {
			width: 10rem;
		}

		.to-page-top {
			text-align: right;
			margin-right: var(--page-margin);
		}

		.to-page-top img {
			width: var(--button-icon-size);
		}

		small {
			text-indent: unset !important;
			margin: 1em !important;
		}

		small::before {
			content: unset;
		}
	`;

	static properties = {
		isTopPage: { type: Boolean },
	};

	render()
	{
		/*eslint-disable max-len */
		return html`<link rel="stylesheet" href="/styles/common.css" />
		<footer class="root">
			<nav class="twitter-hashtag">
				<h2>応援ハッシュタグ</h2>
				<a rel="external" href="https://twitter.com/hashtag/%E3%81%98%E3%82%83%E3%81%B1%E3%82%93%E3%81%8F%E3%81%88%E3%81%99%E3%81%9F" target="_blank">#じゃぱんくえすた</a>
			</nav>
			<div class="root">
				<section class="max-page-width root">
					<h2><img src="/images/logo.png" alt="じゃぱんくえすた" /></h2>
					<social-links></social-links>
				</section>
				<h2 class="copyright-heading">著作表示</h2>
				<p><small>© 2022 じゃぱんくえすた</small></p>
				<p class="to-page-top"><a href="#"><img src="/images/icon_totop.png" alt="ページトップへ" /></a></p>
			</div>
		</footer>`;
	}
});
