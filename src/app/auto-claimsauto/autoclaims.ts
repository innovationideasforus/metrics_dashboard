export class AutoClaims {
  constructor(
    public date: string,
    public projects: string,
    public testCaseExecuted: number,
    public testCaseExecutedTimeTaken: number,
    public testCaseFixed: number,
    public testCaseFixedTimeTaken: number,
    public newScriptsCreated: number,
    public newScriptsCreatedTimeTaken: number,
    public defectsRaised: number,
    public downTime: number,
    public otherActivities: string,
    public otherActivitiesTimeTaken: number,
    public remarks: string
  ) {}
}
