class PokemonCard extends HTMLElement {
	static get observedAttributes() {
		return ["name", "type", "hp", "color"];
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.render();
	}

	render() {
		const name = this.getAttribute("name");
		const type = this.getAttribute("type");
		const img = this.getAttribute("img");
		const hp = this.getAttribute("hp");
		const color = this.getAttribute("color");

		this.shadowRoot.innerHTML = `
		<style>
			:host {
				display: block;
				background: white;
			}

			.container {
				position: relative;
			}

			img {
				width: 25%;
				height: 25%;
			}
		</style>
		<div class="container">
			<header style="background: ${color}">
				<img src="${img}">
				<p class="name"><strong>Nom : </strong>${name}</p>
				<p class="type"><strong>Type : </strong>${type}</p>
				<p class="hp"><strong>PV : </strong>${hp}</p>
				<pokeball-button></pokeball-button>
			</header>
		</div>`;
	}
}
customElements.define('pokemon-card', PokemonCard);

class PokeballButton extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
		<button>Capturer</button>`;
	}
}
customElements.define("pokeball-button", PokeballButton);
