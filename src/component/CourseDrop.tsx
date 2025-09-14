import { useCourseStore } from "../store/courseStore";

export default function CourseDrop() {
  const dropped = useCourseStore((s) => s.dropped);

  return (
    <div>
      <h2>รายวิชาที่ถูกถอน</h2>
      <ul>
        {dropped.map((c) => (
          <li key={c.id}>
            {c.id} - {c.nameTH} ({c.credit} หน่วยกิต)
          </li>
        ))}
      </ul>
    </div>
  );
}

