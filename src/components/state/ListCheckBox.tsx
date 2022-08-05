import { Checkbox, Stack } from '@mui/material';
import { useState } from 'react';

const courses = [
  {
    id: 1,
    name: 'HTML,CSS',
  },
  {
    id: 2,
    name: 'Java Script',
  },
  {
    id: 3,
    name: 'Type Script',
  },
  {
    id: 4,
    name: 'Laravel',
  },
];
export const ListCheckBox = () => {
  const [checked, setChecked] = useState<number[]>([]);
  console.log(checked);
  const isChecked = (id: number) => checked.includes(id);
  const handleCheckedChange = (id: number) => {
    setChecked((prev) => {
      if (isChecked(id)) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  return (
    <Stack spacing={1}>
      {courses.map((course) => (
        <div key={course.id}>
          <Checkbox
            color="error"
            onChange={() => handleCheckedChange(course.id)}
            checked={isChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
    </Stack>
  );
};
