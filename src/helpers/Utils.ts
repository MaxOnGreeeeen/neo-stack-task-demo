export enum Errors {
  emptyString = "Пустая строка",
  shortName = "Минимальная длина - 2 символа",
  tooLongName = "Максимальная длина - 15 символов",
}

export class Utils {
  public static validateNameLastNameField(name: string): string {
    if (name.length === 0) {
      return Errors.emptyString;
    }
    if (name.length < 2) {
      return Errors.shortName;
    }

    if (name.length > 15) {
      return Errors.tooLongName;
    }

    return "";
  }
}
