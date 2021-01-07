import ReportFactory from "./providers/ReportProvider/";

const creatorInstance = new ReportFactory();

const report1 = creatorInstance.factory("CSV");
console.log("Reporter 1 : " + report1.export());

const report2 = creatorInstance.factory("PRETTY");
console.log("Reporter 2 : " + report2.export());

const creatorInstance2 = new ReportFactory();

const report3 = creatorInstance2.factory("asdas");
console.log("Reporter 3 : " + report3.export());
