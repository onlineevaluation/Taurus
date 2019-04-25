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
/**
 * 学生考试详细信息
 */
export class PageDetailsParam {
  id: number;
  pageId: number;
  score: number;
  pageTitle: string = '暂无数据';
  course: string;
  dotime: string = 'NAN';
  select: Array<StudentAnswerSelect> = [];
  blank: Array<StudentAnswer> = [];
  ans: Array<StudentAnswer> = [];
  algorithm: Array<StudentAnswer> = [];
}

export class StudentAnswer {
  id: number;
  answer: number;
  score: number;
  standardAnswer: string;
  title: string;
}

/**
 * 单选题
 */
export class StudentAnswerSelect extends StudentAnswer {
  sectionA: string;
  sectionB: string;
  sectionC: string;
  sectionD: string;
}

export class StudentProfileInfo {
  name: string;
  studentNumber: string;
  class: string;
  classId: number;
}

export class Title {
  analysis: string;
  answer: string;
  category: string;
  difficulty: string;
  id: number;
  sectionA: string;
  sectionB: string;
  sectionC: string;
  sectionD: string;
  title: string;
}
