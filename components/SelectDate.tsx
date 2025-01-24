import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar, CalendarProps } from "@/components/ui/calendar";
import { format } from "date-fns";

type SelectDateProps = CalendarProps & {
  date: Date;
  setDate?: (date: Date) => void;
};

const SelectDate = ({ date, setDate, ...field }: SelectDateProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          {...field}
        />
      </PopoverContent>
    </Popover>
  );
};

export default SelectDate;
