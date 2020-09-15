export class FunClaims {
  constructor(
    public date: string,
    public projects: string,
    public modules: string,
    public release: string,
    public assignedTo: string,
    public testPrepPlanned: number,
    public testPrepPlannedTimeTaken: number,
    public testPrepRework: number,
    public testPrepReworkTimeTaken: number,
    public pass?: number,
    public fail?: number,
    public hold?: number,
    public retest?: number,
    public downTime?: number,
    public otherActivities?: string,
    public otherActivitiesTimeTaken?: number,
    public remarks?: string
  ) {}
}
