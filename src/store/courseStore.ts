import { create } from "zustand";

export type Course = {
  id: string;
  nameTH: string;
  nameEN: string;
  credit: number;
  teacher: string;
  grade?: string;
};

export const gradeToPoint: Record<string, number> = {
  A: 4.0,
  "B+": 3.5,
  B: 3.0,
  "C+": 2.5,
  C: 2.0,
  "D+": 1.5,
  D: 1.0,
  F: 0.0,
};

type CourseStore = {
  courses: Course[];
  dropped: Course[];
  addCourse: (course: Course) => void;
  dropCourse: (id: string) => void;
  calcGPA: () => string;
};

export const useCourseStore = create<CourseStore>((set, get) => ({
  courses: [],
  dropped: [],

  addCourse: (course) =>
    set((state) => ({ courses: [...state.courses, course] })),

  dropCourse: (id) =>
    set((state) => {
      const course = state.courses.find((c) => c.id === id);
      if (!course) return state;
      return {
        courses: state.courses.filter((c) => c.id !== id),
        dropped: [...state.dropped, course],
      };
    }),

  calcGPA: () => {
    const { courses } = get();
    const graded = courses.filter(
      (c) => c.grade && gradeToPoint[c.grade] !== undefined
    );
    const totalCredits = graded.reduce((sum, c) => sum + c.credit, 0);
    const totalPoints = graded.reduce(
      (sum, c) => sum + gradeToPoint[c.grade!] * c.credit,
      0
    );
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "N/A";
  },
}));

