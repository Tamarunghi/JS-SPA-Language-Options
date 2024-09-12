import i18next from "i18next";

export function page2() {
    return `
      <div>
        <h1>${i18next.t("page2")}</h1>
        <p>${i18next.t("page2_text")}</p>
      </div>
    `;
  }
  