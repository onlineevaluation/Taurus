export class TeacherInfo {
  name: string;
  number: string;
  userId: number;
  /**
   * 教师id
   */
  identity: number;
  classIds: Array<number> = [];
}
