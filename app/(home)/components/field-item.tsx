import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Field } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
interface FieldItemProps {
  field: Field;
}

const FieldItem = ({ field }: FieldItemProps) => {
  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="px-1 py-0">
        <div className="relative w-full h-[159px]">
          <div className="absolute top-3 left-3 z-50">
            <Badge variant="secondary" className="opacity-90 flex gap- items-center top-3 left-3">
              <StarIcon size={12} className="fill-primary text-primary" />
              <span className="text-xs">5,0</span>
            </Badge>
          </div>
          <Image className="rounded-2xl pt-1" width={0} height={0} sizes="100vw" src={field.imageUrl} alt="" fill style={{ objectFit: "cover" }} />
        </div>
        <div className="px-2 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{field.name}</h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{field.address}</p>
          <Button variant="secondary" className="w-full mt-3">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FieldItem;
