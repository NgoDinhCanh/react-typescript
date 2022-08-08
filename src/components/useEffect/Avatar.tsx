import React, { useEffect, useState } from 'react';

interface avatarProps extends File {
  preview: string;
}

export const Avatar = () => {
  const [avatar, setAvatar] = useState<avatarProps>();

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar?.preview);
    };
  }, [avatar]);
  const handePreviewAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const file = files[0] as avatarProps;
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
    e.target.value = '';
    console.log(123);
  };
  return (
    <div>
      <input type="file" onChange={handePreviewAvatar} />
      {avatar && <img src={avatar.preview} alt="" width="400px" height="100%" />}
    </div>
  );
};
