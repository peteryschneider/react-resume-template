import {FC, memo} from 'react';

import {WorkItem} from '../../../data/dataDef';

const WorkItem: FC<{item: WorkItem}> = memo(({item}) => {
  const {title, date, company, link, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold text-blue-600">
            <a className="hover:text-blue-400" href={link} rel="noopener noreferrer" target="_blank">
                {company}
            </a>
        </h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-lg font-medium italic sm:flex-none">
            {title}
          </span>
          <span>
            •
          </span>
          <span className="flex-1 text-sm sm:flex-none">
            {date}
          </span>
        </div>
      <div className="text-left">
      {content}
    </div>
  );
});

WorkItem.displayName = 'WorkItem';
export default WorkItem;