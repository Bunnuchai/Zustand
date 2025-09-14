import { useCourseStore } from "../store/courseStore";
import DropButton from "./DropButton";

export default function CourseList() {
  const courses = useCourseStore((s) => s.courses);
  const dropCourse = useCourseStore((s) => s.dropCourse);

  return (
    <div>
      <h2>รายวิชาที่ลงทะเบียน</h2>
      <ul>
        {courses.map((c) => (
          <li key={c.id}>
            {c.id} - {c.nameTH} ({c.credit} หน่วยกิต) [เกรด: {c.grade || "-"}]
            <DropButton onDrop={() => dropCourse(c.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

