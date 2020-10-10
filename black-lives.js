const content = `
  <style>
    :host {
      background: hsl(0, 0%, 4%);
      box-sizing: border-box;
      color: hsl(0, 0%, 98%);
      display: block;
      font-family: sans-serif;
      font-size: 16px;
      line-height: 1.5;
      padding: 32px;
      width: 100%;
    }

    .names {
      font-size: 24px;
      margin-bottom: 16px;
    }

    p {
      margin: 0;
    }

    .red {
      color: hsl(14, 100%, 53%);
    }

    a {
      color: hsl(0, 0%, 86%);
    }

    a:focus,
    a:hover {
      color: hsl(0, 0%, 98%);
      text-decoration: underline;
    }
  </style>

  <p class="names">
    <strong><a href="https://en.m.wikipedia.org/wiki/End_SARS" target="_blank">End SARS NOW!</a></strong> I stand in solidarity with
    <a href="https://www.bbc.com/sport/football/51635733" target="_blank" rel="noreferrer">Kazeem Tiamiyu</a>,
    <a href="https://punchng.com/family-accuses-fct-sars-of-raping-killing-daughter-petitions-ig/" target="_blank" rel="noreferrer">Ifeoma Abugu</a>,
    <a href="https://thenationonlineng.net/the-police-is-your-friend/" target="_blank" rel="noreferrer">Chibuike Anams</a>,
    <a href="https://punchng.com/killer-cop-said-we-should-feel-lucky-tina-didnt-die-instantly-adebayo-eyewitness/" target="_blank" rel="noreferrer">Tina Ezekwe</a>,
    <a href="https://www.vanguardngr.com/2013/05/shocker-pastor-provides-gun-for-our-operations-kidnap-suspects/" target="_blank" rel="noreferrer">Solomon Eze</a>,
    <a href="https://dailypost.ng/2020/08/11/policeman-who-brutalised-fashion-designer-over-n50-bribe-dismissed/" target="_blank" rel="noreferrer">Ayomide Taiwo</a>,
    <a href="https://thecitypulsenews.com/cult-clash-gunmen-behead-one-kill-four-rivers-photo/" target="_blank" rel="noreferrer">Godspower Edoha</a>,
    <a href="https://reliefweb.int/report/nigeria/killing-will-extrajudicial-executions-and-other-unlawful-killings-police-nigeria" target="_blank" rel="noreferrer">Chukwuemeka Matthew Onovo</a>,
    <a href="https://guardian.ng/news/police-shoot-dead-bystander-during-endsars-protest-in-ogbomoso/" target="_blank" rel="noreferrer"> Jimoh Isiaq </a>,
    and countless others who have been victims of <span class="red">SARS</span> and in general <span class="red">police brutality</span>.
  </p>

  <p><strong><a href="https://www.change.org/p/nigerian-police-force-end-sars?recruiter=463398286&utm_source=share_petition&utm_medium=twitter&utm_campaign=psf_combo_share_abi&utm_term=psf_combo_share_abi&recruited_by_id=e6452650-b7a0-11e5-9018-8760a3dc4be6" target="_blank" rel="noreferrer">Go here to find out how <em>you</em> can help.</a></strong></p>

  <p><small><a href="https://github.com/adelowo/i-stand" target="_blank" rel="noreferrer">Embed this on your site.</a></small></p>
`;

class BlackLives extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = content;
  }
}

customElements.define("black-lives", BlackLives);
