'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, ArrowLeft, Eye } from 'lucide-react';
import { categories } from '@/lib/data';
import { cn } from '@/lib/utils';

// export function PredictionForm() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState<string>('');
//   const [date, setDate] = useState<Date | undefined>(undefined);
//   const router = useRouter();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Simulate creating a prediction
//     console.log('Creating prediction:', { title, description, category, date });
    
//     // In a real app, you would create the prediction in the database
//     router.push('/feed');
//   };

//   return (
//     <div className="max-w-2xl mx-auto">
//       <div className="flex items-center mb-6">
//         <Button
//           variant="ghost"
//           size="icon"
//           className="mr-2"
//           onClick={() => router.back()}
//         >
//           <ArrowLeft className="h-5 w-5" />
//         </Button>
//         <h1 className="text-2xl font-bold">Post A New Prediction</h1>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="space-y-2">
//           <Label htmlFor="title">Title</Label>
//           <Input
//             id="title"
//             placeholder="Enter a Clear and Specific Prediction..."
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="category">Categories</Label>
//           <Select value={category} onValueChange={setCategory} required>
//             <SelectTrigger>
//               <SelectValue placeholder="Select a category" />
//             </SelectTrigger>
//             <SelectContent>
//               {categories.map((cat) => (
//                 <SelectItem key={cat} value={cat}>
//                   {cat}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="deadline">Deadline</Label>
//           <Popover>
//             <PopoverTrigger asChild>
//               <Button
//                 variant="outline"
//                 className={cn(
//                   'w-full justify-start text-left font-normal',
//                   !date && 'text-muted-foreground'
//                 )}
//               >
//                 <CalendarIcon className="mr-2 h-4 w-4" />
//                 {date ? format(date, 'PPP') : <span>Pick a date</span>}
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-auto p-0">
//               <Calendar
//                 mode="single"
//                 selected={date}
//                 onSelect={setDate}
//                 initialFocus
//                 disabled={(date) => date < new Date()}
//               />
//             </PopoverContent>
//           </Popover>
//           <p className="text-xs text-muted-foreground">
//             *When will the Prediction be Resolved?
//           </p>
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="description">Description</Label>
//           <Textarea
//             id="description"
//             placeholder="Describe Your Prediction in Detail (Include Any Reasoning or Evidence)..."
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             className="min-h-32"
//           />
//         </div>

//         <Button type="submit" className="w-20" disabled={!title || !category || !date || !description}>
//           Post Prediction
//         </Button>
//       </form>
//     </div>
//   );
// }


export function PredictionForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<string>('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate creating a prediction
    console.log('Creating prediction:', { title, description, category, date });
    
    // In a real app, you would create the prediction in the database
    router.push('/feed');
    
  };

  return (
    <div className="max-w-lg mx-auto ">
      <div className="flex items-center mb-6">
        <Button
          variant="ghost"
          size="icon"
          className=""
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h4 className="text-xs font-bold">Back</h4>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
             <h1 className="text-xl font-bold">Post A New Prediction</h1>
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Enter a Clear and Specific Prediction..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
<div className='grid justify-between sm:grid-cols-2 grid-cols-1  gap-3'>
  <div className="space-y-2 ">
          <Label htmlFor="category">Categories</Label>
          <Select value={category} onValueChange={setCategory} required>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2  ">
          <Label htmlFor="deadline">Deadline</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-start text-left font-normal',
                  !date && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, 'PPP') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
          <p className="text-xs text-muted-foreground">
            *When will the Prediction be Resolved?
          </p>
        </div>
</div>
        

        <div className="space-y-2 ">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Describe Your Prediction in Detail (Include Any Reasoning or Evidence)..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="min-h-32"
          />
        </div>

        {/* Aligning the submit button to the right */}
      <div className="flex justify-end cursor-pointer">
  <Button
    type="submit"
    className="bg-black  sm:w-40 w-full rounded-lg hover:bg-black text-white flex items-center space-x-2"
    disabled={!title || !category || !date || !description}
     onClick={() => router.push('/prediction')}
  >
    <Eye className="h-4 w-4" />
    <span className='text-white'>Post Prediction</span>
   
  </Button>
</div>
      </form>
    </div>
  );
}
