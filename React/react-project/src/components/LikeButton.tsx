import { Button } from "@/components/ui/button";


type LikeButtonProps = {
  title: string;
};

function LikeButton({ title }: LikeButtonProps) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>{title}</Button>
    </div>
  );
}

export default LikeButton;
