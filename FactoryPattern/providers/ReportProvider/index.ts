import CSVReport from "./implementations/CSVReport";
import PrettyReport from "./implementations/PrettyReport";
import IReport from "./IReportProvider";

export default class ReportFactory {
  constructor() {}

  public factory(type: string): IReport {
    switch (type.toUpperCase()) {
      case "CSV":
        return new CSVReport();
        break;
      case "PRETTY":
        return new PrettyReport();
        break;
      default:
        return new PrettyReport();
        break;
    }
  }
}
