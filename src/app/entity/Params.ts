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
