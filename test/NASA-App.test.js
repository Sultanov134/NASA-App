import { html, fixture, expect } from '@open-wc/testing';
import "../NASA-App.js";

describe("NASA-App test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <NASA-App
        title="title"
      ></NASA-App>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
