import { useState } from "react";
import TagButton from "./TagButton";

interface TagListProps<T extends string> {
  tagList: T[];
  onTagClick: (tag: T) => void;
}

const TagList = <T extends string>({
  tagList,
  onTagClick,
}: TagListProps<T>) => {
  const [selectedTag, setSelectedTag] = useState<string>(tagList[0]);
  return (
    <div
      className='flex gap-x-4'
      onClick={(event) => {
        const eventTarget = event?.target as HTMLButtonElement;
        const targetTag = eventTarget.textContent as T;
        onTagClick(targetTag);
      }}
    >
      {tagList.map((tag) => (
        <TagButton
          isSelected={tag === selectedTag}
          onClick={() => setSelectedTag(tag)}
          key={tag}
        >
          {tag}
        </TagButton>
      ))}
    </div>
  );
};

export default TagList;
