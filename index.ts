function render() {
  this._updateVisible();
  return html`
    ${this._getStyleTagTemplate()}
    <div
      class="kuc-dropdown__label"
      id="${this._GUID}-label"
      ?hidden="${!this.label}"
    >
    </div>
    <button
      class="kuc-dropdown__toggle"
      id="${this._GUID}-toggle"
      aria-haspopup="true"
      aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
      aria-describedby="${this._GUID}-error"
      aria-required=${this.requiredIcon}
      ?disabled="${this.disabled}"
      @click="${this._handleClickDropdownToggle}"
      @blur="${this._handleBlurDropdownToggle}"
      @keydown="${this._handleKeyDownDropdownToggle}"
    >
      <span id="wrong-id-code-span" class="kuc-dropdown__toggle__selected-item-label"
        >${this._getSelectedLabel()}</span
      >
    </button>
    <ul
      class="kuc-dropdown__select-menu"
      role="menu"
      aria-hidden="${!this._selectorVisible}"
      ?hidden="${!this._selectorVisible}"
    >
      ${this.items.map((item, number) => this._getItemTemplate(item, number))}
    </ul>
    <div
      class="kuc-dropdown__error"
      id="wrong-id-code-div-error"
      role="alert"
      ?hidden="${!this.error}"
    >
      ${this.error}
    </div>
  `;
}