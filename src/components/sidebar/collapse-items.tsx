import { Accordion, AccordionItem } from '@nextui-org/react';
import { ChevronLeft } from 'lucide-react';

interface Props {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

export const CollapseItems = ({ icon, items, title }: Props) => {
  return (
    <div className='flex gap-4 h-full items-center cursor-pointer rounded-2xl'>
      <Accordion className='px-0'>
        <AccordionItem
          indicator={<ChevronLeft />}
          classNames={{
            indicator: 'data-[open=true]:-rotate-180',
            trigger:
              'py-0 min-h-[44px] hover:bg-default-100 rounded-xl active:scale-[0.98] transition-transform px-3.5',
            title:
              'px-0 flex text-base gap-2 h-full items-center cursor-pointer',
          }}
          aria-label='Accordion 1'
          title={
            <div className='flex flex-row gap-2'>
              <span>{icon}</span>
              <span>{title}</span>
            </div>
          }
        >
          <div className='px-2'>
            {items.map((item, index) => (
              <span
                key={index}
                className='w-full flex pl-10 py-2 text-default-500 hover:text-default-900 transition-colors hover:bg-primary/20 rounded-2xl'
              >
                {item}
              </span>
            ))}
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
