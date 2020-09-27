export class AutoGios {
  constructor(
    public name:string,
    public date: string,
    public testCaseFixed: number,
    public testCaseExecuted: number,
    public defectRaised?: number,
    public downTime?: number,   
    public otherActivities?: string,
    public timeTaken?: number,
    public remarks?: string
  ) {}
}
