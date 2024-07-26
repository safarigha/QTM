import { errorMessages } from "./messagesToast";

export const getErrorMessage = (
  type: "network" | "server" | "form",
  code?: number
): string => {
  if (type === "network") {
    switch (code) {
      case 408:
        return errorMessages.network.timeout;
      case 0:
        return errorMessages.network.offline;
      default:
        return errorMessages.network.offline;
    }
  }

  if (type === "server") {
    switch (code) {
      case 400:
        return `خطا (400) : ${errorMessages.server[400]}`;
      case 401:
        return `خطا (401) : ${errorMessages.server[401]}`;
      case 402:
        return `خطا (402) : ${errorMessages.server[402]}`;
      case 403:
        return `خطا (403) : ${errorMessages.server[403]}`;
      case 404:
        return `خطا (404) : ${errorMessages.server[404]}`;
      case 405:
        return `خطا (405) : ${errorMessages.server[405]}`;
      case 408:
        return `خطا (408) : ${errorMessages.server[408]}`;
      case 409:
        return `خطا (409) : ${errorMessages.server[409]}`;
      case 410:
        return `خطا (410) : ${errorMessages.server[410]}`;
      case 411:
        return `خطا (411) : ${errorMessages.server[411]}`;
      case 412:
        return `خطا (412) : ${errorMessages.server[412]}`;
      case 413:
        return `خطا (413) : ${errorMessages.server[413]}`;
      case 414:
        return `خطا (414) : ${errorMessages.server[414]}`;
      case 415:
        return `خطا (415) : ${errorMessages.server[415]}`;
      case 429:
        return `خطا (429) : ${errorMessages.server[429]}`;
      case 500:
        return `خطا (500) : ${errorMessages.server[500]}`;
      case 501:
        return `خطا (501) : ${errorMessages.server[501]}`;
      case 502:
        return `خطا (502) : ${errorMessages.server[502]}`;
      case 503:
        return `خطا (503) : ${errorMessages.server[503]}`;
      case 504:
        return `خطا (504) : ${errorMessages.server[504]}`;
      default:
        return `خطا (500) : ${errorMessages.server[500]}`;
    }
  }

  if (type === "form") {
    return errorMessages.form.submit;
  }

  return errorMessages.unknown;
};
