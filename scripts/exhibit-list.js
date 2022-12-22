import { LitElement, html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

customElements.define('exhibit-list', class ExhibitList extends LitElement {
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
			--gap: 1.5rem;
			gap: var(--gap);
			grid-template-columns: repeat(auto-fit, min(100%, var(--level3-contents-width)));
			width: min(100%, calc(3 * (var(--level3-contents-width) + var(--gap)) - var(--gap)));
			justify-content: center;
		}

		tr {
			display: flex;
			flex-direction: column;
		}

		tr > * {
			overflow: hidden;
		}

		th {
			text-align: unset;
		}

		a {
			color: unset;
		}

		img {
			width: 100%;
			height: 100%;
		}

		.title,
		.owner {
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.image {
			height: calc(var(--level3-contents-width) / 4 * 3);
		}

		.summary {
			font-size: smaller;
			height: calc(3 * 1em * var(--line-height));
		}
	`;

	static properties = {
		category: { type: String },
		exhibitList: { attribute: false },
	};

	static exhibitList;

	constructor()
	{
		super();
		if (ExhibitList.exhibitList) {
			this.exhibitList = ExhibitList.exhibitList;
		} else {
			this.exhibitList = [ ];
			(async () => {
				ExhibitList.exhibitList = (await (await fetch('/exhibit-list/exhibit-list.json')).json())
					.filter(exhibit => exhibit.category === this.category);
				this.exhibitList = ExhibitList.exhibitList;
			})();
		}
	}

	render()
	{
		/*eslint-disable max-len */
		return html`<link rel="stylesheet" href="/styles/common.css" />
		<table>
			<thead>
				<tr>
					<th>サークル名/イベント名</th>
					<th hidden="">イメージ</th>
					<th>代表者名・団体名</th>
					<th>概要</th>
				</tr>
			</thead>
			<tbody>${this.exhibitList.map(exhibit => html`<tr>
				<th class="title" title=${exhibit.title}>
					<a rel=${ifDefined(exhibit.url ? 'external' : '')} target=${ifDefined(exhibit.url ? '_blank' : '')}
						href=${ifDefined(exhibit.url)}>${exhibit.title}</a>
				</th>
				<td class="image" ?hidden=${this.category === 'eventPoster'}>
					<a rel=${ifDefined(exhibit.url ? 'external' : '')} target=${ifDefined(exhibit.url ? '_blank' : '')}
						href=${ifDefined(exhibit.url)}>
						<img src="${ifDefined(exhibit.imageFileExtension
							? `/exhibit-list/images/${exhibit.id}${exhibit.imageFileExtension}`
							: '/images/exhibit-image-placeholder.png')}" /></td>
					</a>
				<td class="owner" title=${exhibit.ownerName}>
					<a rel=${ifDefined(exhibit.ownerURL ? 'external' : '')} target=${ifDefined(exhibit.ownerURL ? '_blank' : '')}
						href=${ifDefined(exhibit.ownerURL)}>${exhibit.ownerName}</a>
				</td>
				<td class="summary" title=${exhibit.summary}>
					${exhibit.summary}
				</td>
			</tr>`)}</tbody>
		</table>`;
	}
});
