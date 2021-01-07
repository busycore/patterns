import IReport from "../IReportProvider";

export default class PrettyReport implements IReport {
  public export(): string {
    return "pretty";
  }
}
