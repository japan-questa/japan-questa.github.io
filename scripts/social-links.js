import { LitElement, html, css } from 'lit';

customElements.define('social-links', class extends LitElement {
	static styles = css`
		ul {
			list-style: none;
			padding: unset;
			display: flex;
			justify-content: center;
		}

		li {
			margin: 1rem;
		}

		img {
			width: 3rem;
		}
	`;

	render()
	{
		return html`<ul>
			<li><a rel="external" href="https://twitter.com/i/user/1555780796824571904" target="_blank">
				<img src="/images/Twitter_social_icons-circle-blue.png" alt="Twitter" />
			</a></li>
		</ul>`;
	}
});
