import {FC, memo} from 'react';

import {WorkItem} from '../../../data/dataDef';

const WorkItem: FC<{item: WorkItem}> = memo(({item}) => {
  const {roles, company, link, content} = item;
  return (
    <div className="flex flex-col pb-8 text-left last:pb-0">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold text-blue-600">
          <a className="hover:text-blue-400" href={link} rel="noopener noreferrer" target="_blank">
            {company}
          </a>
        </h2>
        <div className="flex flex-col gap-y-3 border-l-2 border-neutral-200 pl-3 md:gap-y-1">
          {roles.map(({title, date}) => (
            <div
              className="flex flex-col md:flex-row md:items-baseline md:justify-between md:gap-x-4"
              key={`${title}-${date}`}>
              <span className="text-base font-medium md:text-lg">{title}</span>
              <span className="shrink-0 text-sm text-neutral-500">{date}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-left">{content}</div>
    </div>
  );
});

WorkItem.displayName = 'WorkItem';
export default WorkItem;