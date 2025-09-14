import { useState } from "react";
import { useCourseStore } from "../store/courseStore";
import type { Course } from "../store/courseStore";

export default function CourseForm() {
  const addCourse = useCourseStore((s) => s.addCourse);

  const [course, setCourse] = useState<Course>({
    id: "",
    nameTH: "",
    nameEN: "",
    credit: 0,
    teacher: "",
    grade: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!course.id || !course.nameTH) return;
    addCourse(course);
    setCourse({
      id: "",
      nameTH: "",
      nameEN: "",
      credit: 0,
      teacher: "",
      grade: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="id" value={course.id} onChange={handleChange} placeholder="รหัสวิชา" />
      <input name="nameTH" value={course.nameTH} onChange={handleChange} placeholder="ชื่อวิชา (ไทย)" />
      <input name="nameEN" value={course.nameEN} onChange={handleChange} placeholder="ชื่อวิชา (อังกฤษ)" />
      <input name="credit" type="number" value={course.credit} onChange={handleChange} placeholder="หน่วยกิต" />
      <input name="teacher" value={course.teacher} onChange={handleChange} placeholder="ชื่ออาจารย์" />
      <input name="grade" value={course.grade} onChange={handleChange} placeholder="เกรด (A-F)" />
      <button type="submit">เพิ่มวิชา</button>
    </form>
  );
}
