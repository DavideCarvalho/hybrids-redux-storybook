import { html } from 'hybrids';

const button = (fn, label) => html`
  <button onclick=${fn}>${label}</button>
`;

export default button;
