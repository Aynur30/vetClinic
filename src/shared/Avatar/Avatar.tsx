import { FC } from "react";
import cl from 'classnames';

interface AvatarProps {
    avatar: string,
    classNameContainer: string,
    classNameImage: string,
}

const Avatar: FC<AvatarProps> = ({ avatar,  classNameContainer, classNameImage}) => {
  return (
    <div className={cl(classNameContainer)}>
      <img className={cl(classNameImage)} src={avatar} alt={'Avatar photo'}/>
    </div>
  );
};

export default Avatar;
