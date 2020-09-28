export class Button {

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-textarea {
          font-size: 14px;
          color: #333;
          display: inline-block;
          vertical-align: top;
        }

        .kuc-textarea__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #FFFFFF;
          margin-left: 4px;
          line-height: 1;
        }

        .kaneko-jp {
          background-color: #dddddd;
        }
      </style>
    `;
  }
}
