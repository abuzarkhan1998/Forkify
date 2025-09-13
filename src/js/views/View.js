import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  renderView(data) {
    this._data = data;
    const markup = this._renderMarkup();
    this._clearView();
    // console.log(this._parentContainer);
    this._parentContainer.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinnder() {
    const markup = `<div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>`;
    this._clearView();
    this._parentContainer.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `<div class="error">
                <div>
                  <svg>
                    <use href="${icons}#icon-alert-triangle"></use>
                  </svg>
                </div>
                <p>${message}</p>
              </div>`;
    this._clearView();
    this._parentContainer.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `<div class="recipe">
            <div class="message">
              <div>
                <svg>
                  <use href="${icons}#icon-smile"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div>`;
    this._clearView();
    this._parentContainer.insertAdjacentHTML('afterbegin', markup);
  }

  _clearView() {
    this._parentContainer.innerHTML = '';
  }
}
