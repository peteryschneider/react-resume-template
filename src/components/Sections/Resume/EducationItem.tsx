import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/outline';
import React, {FC, memo, useState} from 'react';

import {EducationItem} from '../../../data/dataDef';

const EducationItem: FC<{item: EducationItem}> = memo(({item}) => {
  const {degree, date, school, link, specialization, content} = item;
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col">
        <div className="flex items-start">
          <div className="flex flex-col">
            <h2 className="text-l font-bold">
              <a
                className="hover:text-blue-400"
                href={link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {school}
              </a>
            </h2>
            <div className="flex items-center justify-center gap-x-2 md:justify-start">
              <span className="flex-1 text-med font-medium sm:flex-none">
                {degree}
              </span>
              <span>•</span>
              <span className="flex-1 text-sm sm:flex-none">{date}</span>
            </div>
            <div className="flex items-center justify-center gap-x-2 md:justify-start">
              <span className="flex-1 text-med font-medium sm:flex-none">
                {specialization}
              </span>
            </div>
          </div>
        </div>
      </div>
      {React.Children.count(content) > 0 && (
          <div className="pb-4">
            <div className="flex">
              <button
                className="ml-2 mr-4 focus:outline-none"
                onClick={toggleContentVisibility}
              >
                {isContentVisible ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </button>
            </div>
            {isContentVisible && <div>{content}</div>}
          </div>
        )}
    </div>
  );
});

EducationItem.displayName = 'EducationItem';
export default EducationItem;