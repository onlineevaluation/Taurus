export class ExamInfo {
  id: number;
  classId: number;
  pageId: number;
  startTime: string;
  endTime: string;
  pageTitle: string;
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

/**
 * 试题属性
 */
export class TitleInfo {
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

export class PaperInfo {
  pageId: number;
  courseName: string;
  difficulty: number;
  paperTitle: string;
  teacherName: string;
  titles: Array<TitleInfo> = [];
  selectScore: number;
  blankScore: number;
  answerScore: number;
  codeScore: number;
  algorithmScore: number;
  totalScores: number;
  createTime: string;
  knowledgeList: Array<string> = [];
}

/**
 * 试卷概况
 */
export class ClassScoreInfo {
  highestScore: number = 0;
  lowestScore: number = 0;
  average: number = 0;
}

export class ErrorInfo {
  title: string;
  titleId: number;
  frequency: Map<string, number> = new Map<string, number>();
}

export class TitleErrorInfo {
  choiceErrorList: Array<ErrorInfo> = [];
  answerErrorWordFrequency: Array<ErrorInfo> = [];
  blankErrorWordFrequency: Array<ErrorInfo> = [];
}
