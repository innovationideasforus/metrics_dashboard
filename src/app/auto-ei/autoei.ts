export class AutoEi {
  constructor(
    public date: string,
    public scriptsPrepared: number,
    public scriptsPreparedTimeTaken: number,
    public scriptsExecuted: number,
    public scriptsExecutedTimeTaken: number,
    public defectsRaised: number,
    public downtime: number,
    public otherActivities: string,
    public otherActivitiesTimeTaken: number,
    public remarks: string
  ) {}
}
