export class AutoGios {

    constructor(
      public date: string,
      public testCaseFixed: number,
      public testCaseExecuted: number,
      public downTime: number,
      public defectRaised?: number,
      public timeTaken?: number,
      public otherActivities?: string,
      public remarks?: string
    ) {  }
  
  }