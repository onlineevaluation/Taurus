export class ClassAndPageParam {
  teacherId: number;
  pageId: number;
  classId: number;
}

export class examParam {
  classId: number;

  pageId: number;
}

export class PaperTitleParam {
  courseId: number;
  titleType: Array<number> = [];
  chapterIds: Array<number> = [];
}
/**
 * 包含单张试卷所有信息
 */
export class PaperTitleInfoParam {
  teacherId: number;
  courseId: number;
  paperTitle: string;
  titleIds: Array<number> = [];
  choiceScore: number;
  blankScore: number;
  answerScore: number;
  codeScore: number;
  algorithmScore: number;
  totalScore: number;
}
/**
 * 提交试卷和班级关联信息
 */
export class PageClassParam {
  classIds: Array<number> = [];
  teacherId: number;
  startTime: number;
  endTime: number;
  pageId: number;
  needTime: number;
}
