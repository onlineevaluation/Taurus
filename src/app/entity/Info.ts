export class ExamInfo {
  id: number;
  classId: number;
  pagesId: number;
  startTime: string;
  endTime: string;
  title: string;
}

/**
 * @param index 名次
 * @param pageId 试卷id
 * @param score 分数
 */
export class StudentAndScoreInfo {
  index: number;
  pageId: number;
  score: number;
  studentId: number;
  studentName: string;
  studentNumber: string;
}
