import i18next from 'i18next';

export function home() {
  return `
 <div>
        <h1>${i18next.t("home")}</h1>
        <p>${i18next.t("home_text")}</p>
      </div>
    `;
}
