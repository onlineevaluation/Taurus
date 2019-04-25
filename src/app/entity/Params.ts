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
  totalScore:number
}
