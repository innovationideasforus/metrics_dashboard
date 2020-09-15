export class FunWeb {
  constructor(
    public date: string,
    public testPrepPlanned: number,
    public testPrepPlannedTimeTaken: number,
    public testCaseExecuted: number,
    public testCaseExecutedTimeTaken?: number,
    public defectRaised?: number,
    public downTime?: number,
    public otherActivities?: string,
    public otherActivitiesTimeTaken?: number,
    public remarks?: string
  ) {}
}
