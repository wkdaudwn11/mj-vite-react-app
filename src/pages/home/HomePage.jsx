import { ChevronDown } from 'lucide-react';

import { useCountStore } from '@/shared/store';
import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Input,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui';

const people = [
  { id: 1, name: '홍길동', email: 'hong@example.com' },
  { id: 2, name: '김철수', email: 'kim@example.com' },
  { id: 3, name: '이영희', email: 'lee@example.com' },
];

const HomePage = () => {
  const { count, setIncrease, setDecrease, reset } = useCountStore();

  return (
    <div className='flex flex-col gap-10 p-4'>
      <h1 className='text-5xl'>HomePage</h1>
      <span className='text-xl font-bold text-custom-primary'>
        text-custom-primary
      </span>
      <p className='text-3xl font-bold text-blue-500 underline'>{count}</p>
      <div className='flex gap-4'>
        <button
          type='button'
          className='cursor-pointer bg-gray-300 px-2 py-1'
          onClick={setIncrease}
        >
          +
        </button>
        <button
          type='button'
          className='cursor-pointer bg-gray-400 px-2 py-1'
          onClick={setDecrease}
        >
          -
        </button>
        <button
          type='button'
          className='cursor-pointer bg-gray-500 px-2 py-1 text-gray-50'
          onClick={reset}
        >
          reset
        </button>
      </div>

      <div className='flex w-96 flex-col items-start gap-2'>
        <Button>Default</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='ghost' size='sm'>
          Ghost Small
        </Button>
        <Button size='lg' className='w-full'>
          Large Full Width
        </Button>

        <Button asChild>
          <a href='/backout-cl-list'>Go to Backout CL List</a>
        </Button>
      </div>

      <div className='mx-auto w-full rounded-md border p-4'>
        <div className='flex items-center py-4'>
          <Input placeholder='Filter emails...' className='max-w-sm' />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' className='ml-auto'>
                Columns <ChevronDown className='ml-2 h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuCheckboxItem className='capitalize' checked>
                Column01
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem className='capitalize' checked>
                Column02
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem className='capitalize' checked>
                Column03
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Table>
          <TableCaption>사용자 목록</TableCaption>
          <TableHeader className='bg-gray-200'>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {people.map(person => (
              <TableRow key={person.id}>
                <TableCell>{person.id}</TableCell>
                <TableCell>{person.name}</TableCell>
                <TableCell>{person.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className='flex items-center justify-end space-x-2 py-4'>
          <div className='flex-1 text-sm text-muted-foreground'>
            0 of 0 row(s) selected.
          </div>
          <div className='space-x-2'>
            <Button variant='outline' size='sm'>
              Previous
            </Button>
            <Button variant='outline' size='sm'>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
