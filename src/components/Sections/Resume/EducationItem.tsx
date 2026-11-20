import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/outline';
import React, {FC, memo, useState} from 'react';

import {EducationItem} from '../../../data/dataDef';

const EducationItem: FC<{item: EducationItem}> = memo(({item}) => {
  const {degree, date, school, link, specialization, content} = item;
  const [isContentVisible, setContentVisible] = useState(false);

  const hasContent = content !== '' && React.Children.count(content) > 0;

  const toggleContentVisibility = () => {
    setContentVisible(prev => !prev);
  };

  return (
    <div className="flex flex-col pb-8 text-left last:pb-0">
      <h2 className="text-xl font-bold text-blue-600">
        <a className="hover:text-blue-400" href={link} rel="noopener noreferrer" target="_blank">
          {school}
        </a>
      </h2>
      <div className="border-l-2 border-neutral-200 pl-3">
        {/* Mobile: degree → specialization → date, stacked on the left.
            Desktop: degree/specialization on the left, date pushed to the right. */}
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between md:gap-x-4">
          <div className="flex flex-col">
            <span className="text-base font-medium md:text-lg">{degree}</span>
            {specialization && <span className="text-base font-medium md:text-lg">{specialization}</span>}
          </div>
          <span className="shrink-0 text-sm text-neutral-500">{date}</span>
        </div>
      </div>
      {hasContent && (
        <div className="pt-2">
          <button
            aria-expanded={isContentVisible}
            aria-label={isContentVisible ? 'Show less' : 'Show more'}
            className="focus:outline-none"
            onClick={toggleContentVisibility}
            type="button">
            {isContentVisible ? <ChevronUpIcon className="h-6 w-6" /> : <ChevronDownIcon className="h-6 w-6" />}
          </button>
          {isContentVisible && <div className="pt-2">{content}</div>}
        </div>
      )}
    </div>
  );
});

EducationItem.displayName = 'EducationItem';
export default EducationItem;
