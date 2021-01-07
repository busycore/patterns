import IReport from "../IReportProvider";

export default class CSVReport implements IReport {
  public export(): string {
    return "csv";
  }
}
