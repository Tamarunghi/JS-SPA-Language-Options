import i18next from 'i18next';

export function page1() {
    return `
      <div>
        <h1>${i18next.t("page1")}</h1>
        <p>${i18next.t("page1_text")}</p>
      </div>
    `;
  }
  